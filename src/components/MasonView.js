import React from "react";
import {generate, attachComments} from "escodegen";
import {parse} from "esprima";
import {Typography} from "../material";
import Highlight from "react-highlight.js";

function encode(target, name, ctx) {
    if (typeof target === "undefined") {
        return {type: 'Identifier', value: 'undefined'};
    }
    if (target.$ref) {
        if (ctx.locations[target.$ref]) return ctx.locations[target.$ref];
        ctx.locations[target.$ref] = name;
        return encode(ctx.references[target.$ref], name, ctx);
    }
    let exp = { type: "Literal", value: JSON.stringify(target) };
    if (typeof target.$v === "string" && target.$v.indexOf("\n") !== -1) {
        exp = {
            "type": "TemplateLiteral",
            "quasis": [
                {
                    "type": "TemplateElement",
                    "value": {
                        "raw": target.$v.replace(/[`\\]/g, (s) => '\\' + s),
                        "cooked": target.$v
                    },
                    "tail": true
                }
            ],
            "expressions": []
        };
    }
    else if (typeof target.$v !== "undefined") {
        exp = {
            type: "Literal", value: target.$v
        };
    }
    else if (target.$t === "object") {
        let props = []
        for ( let k in target.prop ) {
            //console.log(target.prop[k]);
            let v = encode(target.prop[k].v, {
                type: 'MemberExpression',
                object: name,
                computed: true,
                property: {type: "Literal", value: k}
            }, ctx);
            props.push({
                type: 'Property',
                computed: false,
                key: /^[a-zA-Z0-9]*$/.test(k) ? {type: 'Identifier', name: k} : {type: 'Literal', value: k},
                value: v
            });
        }
        if ( target.proto.$s === '%ArrayPrototype%' ) {
            exp = {type: 'ArrayExpression', elements: props.filter(p => p.key.value !== "length").map(p => p.value) };
        } else {
            exp = {type: 'ObjectExpression', properties: props};
        }
    }
    else if (target.$t === "function") {
        let f;
        if ( target.src ) {
            f = parse(target.src.trim(), {tokens: true, comment: true, range: true});
            attachComments(f, f.comments, f.tokens);
        } else {
            f = parse(`() => { "builtin magic" }`);
        }
        if ( f.body[0].expression ) exp = f.body[0].expression;
        else exp = f.body[0];
    }

    if (name && name.type === "Identifier") {
        let left = name;
        if (exp.type === "FunctionDeclaration" ) {
            ctx.code.push(exp);
        } else {
            ctx.code.push({
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: left,
                    right: exp
                }
            });
        }
    }
    return exp;
}

export default function MasonView({data}) {
    let ctx = React.useMemo(() => {
        if (!data || !data.root) return;
        //console.log(data);
        let ctx = {
            references: data.references,
            code: [],
            locations: {
                [data.root.$ref]: {type: 'Identifier', name: 'global'}
            }
        };
        let go = ctx.references[data.root.$ref];
        for ( let k in go.prop ) {
            if (go.prop[k].v.$s) continue;
            let r = encode(go.prop[k].v, { type: 'Identifier', name: k }, ctx);
            if (k === 'proposals' || k === "banner" || k === 'global') {
                ctx.code.pop();
            }
        }
        return ctx;
    }, [JSON.stringify(data)]);
    if (!ctx) return <></>;
    return (<Typography variant="body2">
    <Highlight language="javascript">{generate({
        type: 'Program',
        body: ctx.code
    }, { comment: true })}</Highlight></Typography>);
}