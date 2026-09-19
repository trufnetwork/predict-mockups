import{o as e}from"./rolldown-runtime-C_s2cVnS.js";import{n as t,t as n}from"./react-DnNRnMnJ.js";import"./eventemitter3-Cb6HtjHl.js";import{D as r}from"./privy-context-Dyl6Kp32--ZEh3QlJ.js";import{c as i}from"./Loader-UAZqxsnw-Bgsd9Zv9.js";import{n as a}from"./modal-context-CHccLywy-mgQQ1NV6.js";import{l as o,x as s}from"./use-deposit-address-CyCh8k3d-B2gRotJn.js";import{n as c,t as l}from"./landmark-D4xYLtmG.js";import{t as u}from"./wallet-CfExKw94.js";import{t as d}from"./index-CWARkn2w-C99-Hi9R.js";import{n as f,t as p}from"./GooglePay-B53WnudL-uzChGxd2.js";import{n as m,r as h,t as g}from"./isPaymentRequestAvailable-Bq1cemEn-CLh4FXwB.js";import{r as _}from"./styles-DVyDvTdj-BtFX1wxL.js";import{c as v,l as y,p as b}from"./styles-D-SJ-QmO-DUdral2t.js";var x=t(),S=e(n(),1),C={component:()=>{let e=s(),{onUserCloseViaDialogOrKeybindRef:t}=a(),n=r(),i=(0,S.useRef)(!1),C=g(m),O=g(h),[k,A]=(0,S.useState)(!1),j=C?`APPLE_PAY`:!1===C&&O?`GOOGLE_PAY`:null,M=!0===C||!1===C&&O!==void 0,N=!e?.startFiat||M||k;(0,S.useEffect)((()=>{let e=window.setTimeout((()=>A(!0)),2e3);return()=>window.clearTimeout(e)}),[]),(0,S.useEffect)((()=>{e&&(i.current=!1)}),[e]);let P=(0,S.useRef)(null);(0,S.useEffect)((()=>{e&&!e.error&&N&&P.current!==e&&(P.current=e,e.recordRowsViewed?.({walletPay:e.startFiat?j:void 0,walletPayTimedOut:e.startFiat?!M:void 0}))}),[N,e,j,M]);let F=(0,S.useCallback)((async()=>{!i.current&&e&&(i.current=!0,o(),await e.onCancel())}),[e]);if((0,S.useEffect)((()=>(t.current=F,()=>{t.current===F&&(t.current=null)})),[F,t]),!e)return null;if(e.error)return(0,x.jsx)(v,{title:`Unable to add funds`,subtitle:e.error,showClose:!0,onClose:F,primaryCta:{label:`Close`,onClick:F}});let I=async t=>{i.current||(i.current=!0,await e.startFiat?.(t))};return(0,x.jsx)(v,{title:`Pay with`,subtitle:`Debit cards typically have higher success rates than credit cards, even with Apple Pay or Google Pay.`,showClose:!0,onClose:F,children:N?(0,x.jsxs)(_,{style:{marginTop:`1rem`},$colorScheme:n.appearance.palette.colorScheme,children:[e.startFiat&&(0,x.jsxs)(y,{onClick:()=>I(`CREDIT_DEBIT_CARD`),children:[(0,x.jsx)(T,{children:(0,x.jsx)(c,{})}),(0,x.jsxs)(E,{children:[(0,x.jsx)(b,{children:`Debit or credit card`}),(0,x.jsx)(D,{children:`Less than 10 minutes`})]})]}),e.startFiat&&j===`APPLE_PAY`&&(0,x.jsxs)(y,{onClick:()=>I(`APPLE_PAY`),children:[(0,x.jsx)(T,{children:(0,x.jsx)(f,{width:18,height:18})}),(0,x.jsxs)(E,{children:[(0,x.jsx)(b,{children:`Apple Pay`}),(0,x.jsx)(D,{children:`Less than 10 minutes`})]})]}),e.startFiat&&j===`GOOGLE_PAY`&&(0,x.jsxs)(y,{onClick:()=>I(`GOOGLE_PAY`),children:[(0,x.jsx)(T,{children:(0,x.jsx)(p,{width:18,height:18})}),(0,x.jsxs)(E,{children:[(0,x.jsx)(b,{children:`Google Pay`}),(0,x.jsx)(D,{children:`Less than 10 minutes`})]})]}),e.startFiat&&(0,x.jsxs)(y,{onClick:()=>I(`BANK`),children:[(0,x.jsx)(T,{children:(0,x.jsx)(l,{})}),(0,x.jsxs)(E,{children:[(0,x.jsx)(b,{children:`Bank account`}),(0,x.jsx)(D,{children:`1–2 days`})]})]}),e.startCrypto&&(0,x.jsxs)(y,{onClick:async()=>{i.current||(i.current=!0,await e.startCrypto?.())},children:[(0,x.jsx)(T,{children:(0,x.jsx)(u,{})}),(0,x.jsxs)(E,{children:[(0,x.jsx)(b,{children:`Crypto wallet or exchange`}),(0,x.jsx)(D,{children:`Instant`})]})]})]}):(0,x.jsx)(w,{children:(0,x.jsx)(d,{size:`50px`})})})}},w=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-height: 8rem;
`,T=i.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-icon-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,E=i.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,D=i.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{C as AddFundsSelectionScreen,C as default};