import nacl from "tweetnacl";

export function deriveKey(str) {
    let h = Buffer.from(nacl.hash(Buffer.from(str, "utf8")));
    let o = nacl.sign.keyPair.fromSeed(h.slice(0, 32));
}