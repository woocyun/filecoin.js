(window.webpackJsonpFilecoinJs=window.webpackJsonpFilecoinJs||[]).push([[2],{222:function(n,t,r){"use strict";r.r(t);var e=r(223);r.d(t,"getVersion",(function(){return e.U})),r.d(t,"keyRetrieveFromDevice",(function(){return e.Y})),r.d(t,"showKeyOnDevice",(function(){return e.bb})),r.d(t,"transactionSignRawWithDevice",(function(){return e.ib})),r.d(t,"transactionSignWithDevice",(function(){return e.jb})),r.d(t,"appInfo",(function(){return e.O})),r.d(t,"deviceInfo",(function(){return e.S})),r.d(t,"generateMnemonic",(function(){return e.T})),r.d(t,"keyDerive",(function(){return e.V})),r.d(t,"keyDeriveFromSeed",(function(){return e.W})),r.d(t,"keyRecover",(function(){return e.X})),r.d(t,"transactionSerialize",(function(){return e.db})),r.d(t,"transactionSerializeRaw",(function(){return e.eb})),r.d(t,"transactionParse",(function(){return e.cb})),r.d(t,"transactionSign",(function(){return e.fb})),r.d(t,"transactionSignLotus",(function(){return e.gb})),r.d(t,"transactionSignRaw",(function(){return e.hb})),r.d(t,"verifySignature",(function(){return e.kb})),r.d(t,"createMultisig",(function(){return e.R})),r.d(t,"proposeMultisig",(function(){return e.Z})),r.d(t,"approveMultisig",(function(){return e.P})),r.d(t,"cancelMultisig",(function(){return e.Q})),r.d(t,"serializeParams",(function(){return e.ab})),r.d(t,"ExtendedKey",(function(){return e.a})),r.d(t,"__wbindgen_string_new",(function(){return e.M})),r.d(t,"__wbindgen_object_drop_ref",(function(){return e.J})),r.d(t,"__wbg_from_97df795a364445c8",(function(){return e.g})),r.d(t,"__wbg_exchange_6c195caeaf4d0a08",(function(){return e.f})),r.d(t,"__wbindgen_json_parse",(function(){return e.G})),r.d(t,"__wbindgen_json_serialize",(function(){return e.H})),r.d(t,"__wbindgen_is_object",(function(){return e.E})),r.d(t,"__wbg_new_59cb74e423758ede",(function(){return e.p})),r.d(t,"__wbg_stack_558ba5917b466edd",(function(){return e.y})),r.d(t,"__wbg_error_4bb6c2a97407129a",(function(){return e.e})),r.d(t,"__wbindgen_cb_drop",(function(){return e.B})),r.d(t,"__wbg_new_d333a6e567133fdb",(function(){return e.q})),r.d(t,"__wbg_call_122c1a957507a0d7",(function(){return e.c})),r.d(t,"__wbg_new_17a08b876c4dedc9",(function(){return e.n})),r.d(t,"__wbg_new_3f7019af886f0c9c",(function(){return e.o})),r.d(t,"__wbg_reject_b23c1ebe8eda5570",(function(){return e.s})),r.d(t,"__wbg_resolve_57cbe6ab0b3b60a7",(function(){return e.u})),r.d(t,"__wbg_then_45c887a50a229274",(function(){return e.z})),r.d(t,"__wbg_then_9d18941da21f7104",(function(){return e.A})),r.d(t,"__wbindgen_is_undefined",(function(){return e.F})),r.d(t,"__wbg_buffer_44855aefa83ea48c",(function(){return e.b})),r.d(t,"__wbg_new_04793d2c09ba060f",(function(){return e.m})),r.d(t,"__wbg_set_fdaef5653b2c1408",(function(){return e.x})),r.d(t,"__wbg_length_3acae3a5337e0257",(function(){return e.l})),r.d(t,"__wbg_get_38f68ddea9e54820",(function(){return e.j})),r.d(t,"__wbg_has_de5b24b960cc5e8e",(function(){return e.k})),r.d(t,"__wbg_set_ede434d91072bd5f",(function(){return e.w})),r.d(t,"__wbg_getRandomValues_f5e14ab7ac8e995d",(function(){return e.i})),r.d(t,"__wbg_randomFillSync_d5bd2d655fdf256a",(function(){return e.r})),r.d(t,"__wbg_self_1b7a39e3a92c949c",(function(){return e.v})),r.d(t,"__wbg_require_604837428532a733",(function(){return e.t})),r.d(t,"__wbg_crypto_968f1772287e2df0",(function(){return e.d})),r.d(t,"__wbg_getRandomValues_a3d34b4fee3c2869",(function(){return e.h})),r.d(t,"__wbindgen_string_get",(function(){return e.L})),r.d(t,"__wbindgen_debug_string",(function(){return e.D})),r.d(t,"__wbindgen_throw",(function(){return e.N})),r.d(t,"__wbindgen_rethrow",(function(){return e.K})),r.d(t,"__wbindgen_memory",(function(){return e.I})),r.d(t,"__wbindgen_closure_wrapper601",(function(){return e.C}))},223:function(n,t,r){"use strict";(function(n,e){r.d(t,"U",(function(){return m})),r.d(t,"Y",(function(){return j})),r.d(t,"bb",(function(){return S})),r.d(t,"ib",(function(){return x})),r.d(t,"jb",(function(){return k})),r.d(t,"O",(function(){return O})),r.d(t,"S",(function(){return R})),r.d(t,"T",(function(){return D})),r.d(t,"V",(function(){return P})),r.d(t,"W",(function(){return A})),r.d(t,"X",(function(){return E})),r.d(t,"db",(function(){return F})),r.d(t,"eb",(function(){return J})),r.d(t,"cb",(function(){return M})),r.d(t,"fb",(function(){return I})),r.d(t,"gb",(function(){return T})),r.d(t,"hb",(function(){return V})),r.d(t,"kb",(function(){return q})),r.d(t,"R",(function(){return B})),r.d(t,"Z",(function(){return K})),r.d(t,"P",(function(){return U})),r.d(t,"Q",(function(){return C})),r.d(t,"ab",(function(){return L})),r.d(t,"a",(function(){return G})),r.d(t,"M",(function(){return H})),r.d(t,"J",(function(){return Q})),r.d(t,"g",(function(){return X})),r.d(t,"f",(function(){return Y})),r.d(t,"G",(function(){return Z})),r.d(t,"H",(function(){return nn})),r.d(t,"E",(function(){return tn})),r.d(t,"p",(function(){return rn})),r.d(t,"y",(function(){return en})),r.d(t,"e",(function(){return un})),r.d(t,"B",(function(){return cn})),r.d(t,"q",(function(){return on})),r.d(t,"c",(function(){return fn})),r.d(t,"n",(function(){return dn})),r.d(t,"o",(function(){return an})),r.d(t,"s",(function(){return _n})),r.d(t,"u",(function(){return ln})),r.d(t,"z",(function(){return bn})),r.d(t,"A",(function(){return sn})),r.d(t,"F",(function(){return gn})),r.d(t,"b",(function(){return wn})),r.d(t,"m",(function(){return yn})),r.d(t,"x",(function(){return pn})),r.d(t,"l",(function(){return hn})),r.d(t,"j",(function(){return vn})),r.d(t,"k",(function(){return mn})),r.d(t,"w",(function(){return jn})),r.d(t,"i",(function(){return Sn})),r.d(t,"r",(function(){return xn})),r.d(t,"v",(function(){return kn})),r.d(t,"t",(function(){return On})),r.d(t,"d",(function(){return Rn})),r.d(t,"h",(function(){return zn})),r.d(t,"L",(function(){return Dn})),r.d(t,"D",(function(){return Pn})),r.d(t,"N",(function(){return An})),r.d(t,"K",(function(){return En})),r.d(t,"I",(function(){return Fn})),r.d(t,"C",(function(){return Jn}));var u=r(224);let i=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let c=null;function o(){return null!==c&&c.buffer===u.z.buffer||(c=new Uint8Array(u.z.buffer)),c}function f(n,t){return i.decode(o().subarray(n,n+t))}const d=new Array(32).fill(void 0);d.push(void 0,null,!0,!1);let a=d.length;function _(n){a===d.length&&d.push(d.length+1);const t=a;return a=d[t],d[t]=n,t}function l(n){return d[n]}function b(n){const t=l(n);return function(n){n<36||(d[n]=a,a=n)}(n),t}let s=0;let g=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const w="function"==typeof g.encodeInto?function(n,t){return g.encodeInto(n,t)}:function(n,t){const r=g.encode(n);return t.set(r),{read:n.length,written:r.length}};function y(n,t,r){if(void 0===r){const r=g.encode(n),e=t(r.length);return o().subarray(e,e+r.length).set(r),s=r.length,e}let e=n.length,u=t(e);const i=o();let c=0;for(;c<e;c++){const t=n.charCodeAt(c);if(t>127)break;i[u+c]=t}if(c!==e){0!==c&&(n=n.slice(c)),u=r(u,e,e=c+3*n.length);const t=o().subarray(u+c,u+e);c+=w(n,t).written}return s=c,u}let p=null;function h(){return null!==p&&p.buffer===u.z.buffer||(p=new Int32Array(u.z.buffer)),p}function v(n,t,r){u.g(n,t,_(r))}function m(n){return b(u.u(_(n)))}function j(n,t){var r=y(n,u.e,u.f),e=s;return b(u.y(r,e,_(t)))}function S(n,t){var r=y(n,u.e,u.f),e=s;return b(u.C(r,e,_(t)))}function x(n,t,r){var e=function(n,t){const r=t(1*n.length);return o().set(n,r/1),s=n.length,r}(n,u.e),i=s,c=y(t,u.e,u.f),f=s;return b(u.J(e,i,c,f,_(r)))}function k(n,t,r){var e=y(t,u.e,u.f),i=s;return b(u.K(_(n),e,i,_(r)))}function O(n){return b(u.h(_(n)))}function R(n){return b(u.l(_(n)))}function z(n,t){return o().subarray(n/1,n/1+t)}function D(){try{u.t(8);var n=h()[2],t=h()[3];return f(n,t)}finally{u.d(n,t)}}function P(n,t,r){var e=y(n,u.e,u.f),i=s,c=y(t,u.e,u.f),o=s,f=y(r,u.e,u.f),d=s,a=u.v(e,i,c,o,f,d);return G.__wrap(a)}function A(n,t){var r=y(t,u.e,u.f),e=s,i=u.w(_(n),r,e);return G.__wrap(i)}function E(n,t){var r=u.x(_(n),t);return G.__wrap(r)}function F(n){try{u.E(8,_(n));var t=h()[2],r=h()[3];return f(t,r)}finally{u.d(t,r)}}function J(n){u.F(8,_(n));var t=h()[2],r=h()[3],e=z(t,r).slice();return u.d(t,1*r),e}function M(n,t){return b(u.D(_(n),t))}function I(n,t){return b(u.G(_(n),_(t)))}function T(n,t){try{u.H(8,_(n),_(t));var r=h()[2],e=h()[3];return f(r,e)}finally{u.d(r,e)}}function V(n,t){return b(u.I(_(n),_(t)))}function q(n,t){return 0!==u.L(_(n),_(t))}let N=null;function $(n,t){const r=t(4*n.length),e=(null!==N&&N.buffer===u.z.buffer||(N=new Uint32Array(u.z.buffer)),N);for(let t=0;t<n.length;t++)e[r/4+t]=_(n[t]);return s=n.length,r}function B(n,t,r,e,i){var c=y(n,u.e,u.f),o=s,f=$(t,u.e),d=s,a=y(r,u.e,u.f),_=s;return b(u.k(c,o,f,d,a,_,e,i))}function K(n,t,r,e,i){var c=y(n,u.e,u.f),o=s,f=y(t,u.e,u.f),d=s,a=y(r,u.e,u.f),_=s,l=y(e,u.e,u.f),g=s;return b(u.A(c,o,f,d,a,_,l,g,i))}function U(n,t,r,e,i,c,o){var f=y(n,u.e,u.f),d=s,a=y(r,u.e,u.f),_=s,l=y(e,u.e,u.f),g=s,w=y(i,u.e,u.f),p=s,h=y(c,u.e,u.f),v=s;return b(u.i(f,d,t,a,_,l,g,w,p,h,v,o))}function C(n,t,r,e,i,c,o){var f=y(n,u.e,u.f),d=s,a=y(r,u.e,u.f),_=s,l=y(e,u.e,u.f),g=s,w=y(i,u.e,u.f),p=s,h=y(c,u.e,u.f),v=s;return b(u.j(f,d,t,a,_,l,g,w,p,h,v,o))}function L(n){u.B(8,_(n));var t=h()[2],r=h()[3],e=z(t,r).slice();return u.d(t,1*r),e}function W(n){return function(){try{return n.apply(this,arguments)}catch(n){u.b(_(n))}}}class G{static __wrap(n){const t=Object.create(G.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,u.a(n)}get public_raw(){u.s(8,this.ptr);var n=h()[2],t=h()[3],r=z(n,t).slice();return u.d(n,1*t),r}get private_raw(){u.p(8,this.ptr);var n=h()[2],t=h()[3],r=z(n,t).slice();return u.d(n,1*t),r}get public_hexstring(){try{u.r(8,this.ptr);var n=h()[2],t=h()[3];return f(n,t)}finally{u.d(n,t)}}get private_hexstring(){try{u.o(8,this.ptr);var n=h()[2],t=h()[3];return f(n,t)}finally{u.d(n,t)}}get public_base64(){try{u.q(8,this.ptr);var n=h()[2],t=h()[3];return f(n,t)}finally{u.d(n,t)}}get private_base64(){try{u.n(8,this.ptr);var n=h()[2],t=h()[3];return f(n,t)}finally{u.d(n,t)}}get address(){try{u.m(8,this.ptr);var n=h()[2],t=h()[3];return f(n,t)}finally{u.d(n,t)}}}const H=function(n,t){return _(f(n,t))},Q=function(n){b(n)},X=function(n,t){return _(new e(z(n,t)))},Y=function(n,t){return _(l(n).exchange(b(t)))},Z=function(n,t){return _(JSON.parse(f(n,t)))},nn=function(n,t){const r=l(t);var e=y(JSON.stringify(void 0===r?null:r),u.e,u.f),i=s;h()[n/4+1]=i,h()[n/4+0]=e},tn=function(n){const t=l(n);return"object"==typeof t&&null!==t},rn=function(){return _(new Error)},en=function(n,t){var r=y(l(t).stack,u.e,u.f),e=s;h()[n/4+1]=e,h()[n/4+0]=r},un=function(n,t){try{console.error(f(n,t))}finally{u.d(n,t)}},cn=function(n){const t=b(n).original;if(1==t.cnt--)return t.a=0,!0;return!1},on=function(n,t){return _(new Error(f(n,t)))},fn=W((function(n,t,r){return _(l(n).call(l(t),l(r)))})),dn=function(){return _(new Object)},an=function(n,t){try{var r={a:n,b:t},e=new Promise((n,t)=>{const e=r.a;r.a=0;try{return function(n,t,r,e){u.M(n,t,_(r),_(e))}(e,r.b,n,t)}finally{r.a=e}});return _(e)}finally{r.a=r.b=0}},_n=function(n){return _(Promise.reject(l(n)))},ln=function(n){return _(Promise.resolve(l(n)))},bn=function(n,t){return _(l(n).then(l(t)))},sn=function(n,t,r){return _(l(n).then(l(t),l(r)))},gn=function(n){return void 0===l(n)},wn=function(n){return _(l(n).buffer)},yn=function(n){return _(new Uint8Array(l(n)))},pn=function(n,t,r){l(n).set(l(t),r>>>0)},hn=function(n){return l(n).length},vn=W((function(n,t){return _(Reflect.get(l(n),l(t)))})),mn=W((function(n,t){return Reflect.has(l(n),l(t))})),jn=W((function(n,t,r){return Reflect.set(l(n),l(t),l(r))})),Sn=function(n,t,r){l(n).getRandomValues(z(t,r))},xn=function(n,t,r){l(n).randomFillSync(z(t,r))},kn=W((function(){return _(self.self)})),On=function(n,t){return _(r(226)(f(n,t)))},Rn=function(n){return _(l(n).crypto)},zn=function(n){return _(l(n).getRandomValues)},Dn=function(n,t){const r=l(t);var e="string"==typeof r?r:void 0,i=null==e?0:y(e,u.e,u.f),c=s;h()[n/4+1]=c,h()[n/4+0]=i},Pn=function(n,t){var r=y(function n(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return""+t;if("string"==r)return`"${t}"`;if("symbol"==r){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==r){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const r=t.length;let e="[";r>0&&(e+=n(t[0]));for(let u=1;u<r;u++)e+=", "+n(t[u]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let u;if(!(e.length>1))return toString.call(t);if(u=e[1],"Object"==u)try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:u}(l(t)),u.e,u.f),e=s;h()[n/4+1]=e,h()[n/4+0]=r},An=function(n,t){throw new Error(f(n,t))},En=function(n){throw b(n)},Fn=function(){return _(u.z)},Jn=function(n,t,r){return _(function(n,t,r,e){const i={a:n,b:t,cnt:1},c=(...n)=>{i.cnt++;const t=i.a;i.a=0;try{return e(t,i.b,...n)}finally{0==--i.cnt?u.c.get(r)(t,i.b):i.a=t}};return c.original=i,c}(n,t,159,v))}}).call(this,r(225)(n),r(0).Buffer)},224:function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(223);e.N()},225:function(n,t){n.exports=function(n){if(!n.webpackPolyfill){var t=Object.create(n);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}}]);
//# sourceMappingURL=2.js.map