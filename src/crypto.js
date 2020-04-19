import nacl from "tweetnacl";

let env = /^\s*-----BEGIN OPENSSH PRIVATE KEY-----\s([^-]*)-----END OPENSSH PRIVATE KEY-----\s*$/ism;

class Str {
    constructor(b) { this.buffer = b; this.offset = 0; }
    readCString() {
        let len = this.buffer.indexOf('\0', this.offset) - this.offset;
        let s = this.buffer.slice(this.offset, len);
        this.offset += len + 1;
        return s.toString('utf8');
    }
    readBuffer() {
        let len = this.readInt();
        let s = this.buffer.slice(this.offset, this.offset + len);
        this.offset += len;
        return s;
    }
    readString() {
        return this.readBuffer().toString('utf8');
    }
    readInt() {
        let r = this.buffer.readUInt32BE(this.offset);
        this.offset += 4;
        return r;
    }
    end() {
        return this.offset >= this.buffer.length;
    }
    rest() {
        return this.buffer.slice(this.offset);
    }
}


export function deriveKey(str) {
    let h = Buffer.from(nacl.hash(Buffer.from(str, "utf8")));
    let o = nacl.sign.keyPair.fromSeed(h.slice(0, 32));
    let type = 'hash';
    console.log(str);
    try {
        let m = str.match(env);
        if (m) str = m[1];

        let s = Buffer.from(str, "base64");
        if (s.length === 64) {
            h = s;
            o = nacl.sign.keyPair.fromSecretKey(s);
            type = 'raw';
        } else if ( s.length === 250 ) {

            let buf = new Str(s);
            let magic = buf.readCString();
            console.log("S", magic);

            var cipher = buf.readString();
            var kdf = buf.readString();
            console.log("Ciper", cipher, kdf);
            var opts = buf.readString();

            var keys = buf.readInt();
            console.log("Nkeys", keys);

            var pub = buf.readBuffer();
            var priv = buf.readBuffer();
            if (!buf.end()) throw new Error();
            let pubs = new Str(pub);
            let header = pubs.readString();
            let pppp = pubs.readBuffer();
            console.log("Public", header, pppp.length);

            console.log("Private", priv.toString("utf8"), priv.length);


            let pks = new Str(priv);
            let k1 = pks.readInt();
            let k2 = pks.readInt();
            console.log("L", k1, k2);
            pks.readBuffer();
            let a = pks.readBuffer();
            let b = pks.readBuffer();
            o = nacl.sign.keyPair.fromSecretKey(b);
            type = 'openssl';
        }

    } catch (e) { console.error(e) }

    return {
        public: Buffer.from(o.publicKey),
        secret: Buffer.from(o.secretKey),
        type: type,
    };


}

export function isolateKey(str) {
    if (/^ssh-ed25519 /.test(str)) {
        str = str.split(' ')[1];
        console.log("L", Buffer.from(str, 'base64').slice(19).toString('base64'));
        return Buffer.from(str, 'base64').slice(19).toString('base64');
    }
    return str;
}