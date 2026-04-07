import{o as a,r as h}from"./index-DJaRTJi5.js";import{b as u}from"./index-S5IhvVpE.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],y=a("Check",b);function g(e){const[d,r]=h.useState(void 0);return u(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const f=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const c=o[0];let i,t;if("borderBoxSize"in c){const s=c.borderBoxSize,n=Array.isArray(s)?s[0]:s;i=n.inlineSize,t=n.blockSize}else i=e.offsetWidth,t=e.offsetHeight;r({width:i,height:t})});return f.observe(e,{box:"border-box"}),()=>f.unobserve(e)}else r(void 0)},[e]),d}export{y as C,g as u};
//# sourceMappingURL=index-Npn6PTvj.js.map
