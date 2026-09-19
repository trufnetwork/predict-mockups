import{o as e}from"./rolldown-runtime-C_s2cVnS.js";import{n as t,t as n}from"./react-DnNRnMnJ.js";import{A as r,D as i,F as a,M as o,P as s,b as c,x as l}from"./esm-jKVibiyc.js";import{D as u}from"./privy-context-Dyl6Kp32--ZEh3QlJ.js";import{c as d}from"./Loader-UAZqxsnw-Bgsd9Zv9.js";import{r as f}from"./useActiveWallet-CraIKE1B-DaNcDeCD.js";import{a as p,u as m}from"./ModalFooter-Dgk75taJ-DHnQhzGg.js";import{t as h}from"./Chip-CZKIKt9K-qZGs3gS0.js";var g=t(),_=e(n(),1),v=({value:e,onChange:t})=>(0,g.jsx)(`select`,{value:e,onChange:t,children:o.map((e=>(0,g.jsxs)(`option`,{value:e.code,children:[e.code,` +`,e.callCode]},e.code)))}),y=(0,_.forwardRef)(((e,t)=>{let n=u(),[o,d]=(0,_.useState)(!1),{accountType:y}=f(),[S,C]=(0,_.useState)(``),[w,T]=(0,_.useState)(e.defaultCountry??n?.intl.defaultCountry??`US`),E=r(S,w),D=c(w),O=s(w),k=a(w),A=!E,[j,M]=(0,_.useState)(!1),N=k.length,P=t=>{let n=t.target.value;T(n),C(``),e.onChange&&e.onChange({rawPhoneNumber:S,qualifiedPhoneNumber:i(S,n),countryCode:n,isValid:r(S,w)})},F=(t,n)=>{try{let a=t.replace(/\D/g,``)===S.replace(/\D/g,``)?t:D.input(t);C(a),e.onChange&&e.onChange({rawPhoneNumber:a,qualifiedPhoneNumber:i(t,n),countryCode:n,isValid:r(t,n)})}catch(e){console.error(`Error processing phone number:`,e)}},I=()=>{M(!0);let t=i(S,w);e.onSubmit({rawPhoneNumber:S,qualifiedPhoneNumber:t,countryCode:w,isValid:r(S,w)}).finally((()=>M(!1)))};return(0,_.useEffect)((()=>{if(e.defaultValue){let t=l(e.defaultValue);D.reset(),P({target:{value:t.countryCode}}),F(t.phone,t.countryCode)}}),[e.defaultValue]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{children:(0,g.jsxs)(x,{$callingCodeLength:N,$stacked:e.stacked,children:[(0,g.jsx)(v,{value:w,onChange:P}),(0,g.jsx)(`input`,{ref:t,id:`phone-number-input`,className:`login-method-button`,type:`tel`,placeholder:O,onFocus:()=>d(!0),onChange:e=>{F(e.target.value,w)},onKeyUp:e=>{e.key===`Enter`&&I()},value:S,autoComplete:`tel`}),y!==`phone`||o||e.hideRecent?e.stacked||e.noIncludeSubmitButton?(0,g.jsx)(`span`,{}):(0,g.jsx)(m,{isSubmitting:j,onClick:I,disabled:A,children:`Submit`}):(0,g.jsx)(h,{color:`gray`,children:`Recent`})]})}),e.stacked&&!e.noIncludeSubmitButton?(0,g.jsx)(p,{loading:j,loadingText:null,onClick:I,disabled:A,children:`Submit`}):null]})})),b=d.div`
  width: 100%;
`,x=d.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${e=>e.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${e=>e.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${e=>e.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${e=>e.$stacked?`16px`:`88px`};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`;export{y as t};