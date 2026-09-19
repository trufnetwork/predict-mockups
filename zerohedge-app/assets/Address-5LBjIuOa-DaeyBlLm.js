import{o as e}from"./rolldown-runtime-C_s2cVnS.js";import{n as t,t as n}from"./react-DnNRnMnJ.js";import{p as r}from"./storage-DWGw0C_e-B4L5r3cS.js";import{c as i}from"./Loader-UAZqxsnw-Bgsd9Zv9.js";import{t as a}from"./check-BaAiAP0o.js";import{t as o}from"./copy-D0pDsR9G.js";import{o as s}from"./ModalFooter-Dgk75taJ-DHnQhzGg.js";var c=t(),l=e(n(),1),u=({address:e,showCopyIcon:t,url:n,className:i})=>{let[u,m]=(0,l.useState)(!1);function h(t){t.stopPropagation(),navigator.clipboard.writeText(e).then((()=>m(!0))).catch(console.error)}return(0,l.useEffect)((()=>{if(u){let e=setTimeout((()=>m(!1)),3e3);return()=>clearTimeout(e)}}),[u]),(0,c.jsxs)(d,n?{children:[(0,c.jsx)(p,{title:e,className:i,href:`${n}/address/${e}`,target:`_blank`,children:r(e)}),t&&(0,c.jsx)(s,{onClick:h,size:`sm`,style:{gap:`0.375rem`},children:(0,c.jsxs)(c.Fragment,u?{children:[`Copied`,(0,c.jsx)(a,{size:16})]}:{children:[`Copy`,(0,c.jsx)(o,{size:16})]})})]}:{children:[(0,c.jsx)(f,{title:e,className:i,children:r(e)}),t&&(0,c.jsx)(s,{onClick:h,size:`sm`,style:{gap:`0.375rem`,fontSize:`14px`},children:(0,c.jsxs)(c.Fragment,u?{children:[`Copied`,(0,c.jsx)(a,{size:14})]}:{children:[`Copy`,(0,c.jsx)(o,{size:14})]})})]})},d=i.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,f=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,p=i.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{u as t};