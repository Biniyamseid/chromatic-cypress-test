import{u as f}from"./cUfzpFyX.js";import{G as a,H as p}from"./Dp5ZG7rL.js";const y="$s";function c(...t){const r=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(r);const[n,e]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(e!==void 0&&typeof e!="function")throw new Error("[nuxt] [useState] init must be a function: "+e);const i=y+n,s=f(),u=a(s.payload.state,i);if(u.value===void 0&&e){const o=e();if(p(o))return s.payload.state[i]=o,o;u.value=o}return u}const x=()=>c("user",()=>null);export{x as u};