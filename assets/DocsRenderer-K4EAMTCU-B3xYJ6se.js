function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-DOutobPl.js","./index-BuV6Nq-7.js","./index-Cipard1B.js","./iframe-C48w0iEE.js","./index-D6puyI63.js","./index-B_J8iUie.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as d}from"./iframe-C48w0iEE.js";import{r as h,R as o,d as a,C as E,A as R,H as x,D as y}from"./index-Cipard1B.js";import"../sb-preview/runtime.js";import"./index-D6puyI63.js";import"./index-B_J8iUie.js";import"./index-DrFu-skq.js";var c={},u=h;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},e))})},v=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},f={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},O=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t==null?void 0:t.components},m=y;return new Promise((i,p)=>{d(()=>import("./index-DOutobPl.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:l})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(m,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{v(e)}}};export{O as DocsRenderer,f as defaultComponents};
