"use strict";(self.webpackChunkfront_end_sveeton_products=self.webpackChunkfront_end_sveeton_products||[]).push([[953],{2953:(n,t,e)=>{e.r(t),e.d(t,{default:()=>B});var r,i,o,d,l,a,s,c=e(9434),x=e(3574),h=e(6911),u=e(168),p=e(2683);p.default.li(r||(r=(0,u.Z)(["\n  display: flex;\n  p {\n    display: block;\n  }\n\n  :nth-child(2) {\n    margin-left: 250px;\n  }\n  :nth-child(3) {\n    margin-left: 250px;\n  }\n\n  :nth-child(4) {\n    margin-left: auto;\n    margin-right: 40px;\n  }\n"])));const g=(0,p.default)(h.I)(i||(i=(0,u.Z)(["\n  width: 100px;\n  height: 100px;\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n"]))),f=p.default.table(o||(o=(0,u.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n"]))),j=p.default.th(d||(d=(0,u.Z)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  text-align: center;\n  background-color: #f2f2f2;\n"]))),m=p.default.td(l||(l=(0,u.Z)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  text-align: center;\n"]))),b=p.default.tr(a||(a=(0,u.Z)(["\n  :nth-child(4) {\n    width: 135px;\n  }\n  :nth-child(3) {\n    width: 180px;\n  }\n"]))),k=p.default.button(s||(s=(0,u.Z)(["\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 20px;\n"])));var v,Z=e(2791),w=e(8165);const y=p.default.button(v||(v=(0,u.Z)(["\n  cursor: pointer;\n\n  margin-left: 5px;\n  margin-right: 5px;\n  background-color: transparent;\n  padding: 0;\n  color: black;\n  :hover {\n    background-color: transparent;\n    color: black;\n  }\n"])));var _=e(184);const C=n=>{let{product:t,functional:e}=n;const{totalPrice:r,totalCount:i,setTotalCount:o,setTotalPrice:d,orderList:l,setOrderList:a}=e,[s,x]=(0,Z.useState)(1),u=(0,c.I0)();return(0,_.jsxs)(b,{children:[(0,_.jsx)(m,{children:t.title}),(0,_.jsx)(m,{children:t.characreristick}),(0,_.jsx)(m,{children:(0,_.jsx)(g,{children:(0,_.jsx)(h.E,{src:t.img,alt:t.description})})}),(0,_.jsxs)(m,{children:[t.price," \u0433\u0440\u043d"]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(y,{onClick:()=>{1!==s&&(x(s-1),d(r-t.price),o(i-1),a(l.map((n=>(t._id===n._id&&(n.amount=s),n)))))},children:"- "}),s,(0,_.jsx)(y,{onClick:()=>{x(s+1),d(Number(r)+Number(t.price)),o(i+1),a(l.map((n=>(t._id===n._id&&(n.amount=s+1),n))))},children:" +"})]}),(0,_.jsx)(m,{children:(0,_.jsx)("button",{onClick:()=>{u((0,w.xy)(t))},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})})]},t._id)};var L=e(175),S=e(5705),E=e(6382),P=e(1243);P.Z.defaults.baseURL="https://sveeton-products.onrender.com";const T=(0,E.hg)("order",(async(n,t)=>{try{return(await P.Z.post("/order",n)).data}catch(e){return console.log("error",e),t.rejectWithValue(e.message)}}));var z,D,I,N,F,M;const O=(0,p.default)(S.l0)(z||(z=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),V=(0,p.default)(S.gN)(D||(D=(0,u.Z)(["\n  width: 100%;\n  height: 40px;\n  background-color: var(--background-color);\n  border-radius: 10px;\n  padding: 5px 10px 5px 25px;\n  border: none;\n  font-size: 22px;\n\n  &:focus {\n    outline: 3px solid #ddd0a4;\n  }\n"]))),q=p.default.h1(I||(I=(0,u.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n"]))),J=p.default.label(N||(N=(0,u.Z)(["\n  margin-bottom: 25px;\n"]))),R=p.default.h2(F||(F=(0,u.Z)(["\n  margin-bottom: 15px;\n  font-size: 20px;\n"]))),U=p.default.p(M||(M=(0,u.Z)(["\n  margin-top: 5px;\n  font-size: 12px;\n  text-align: center;\n"]))),W=n=>{let{toglle:t,orderData:e}=n;const r=(0,c.I0)();return(0,_.jsx)(L.Z,{togleModal:t,children:(0,_.jsx)(S.J9,{initialValues:{name:"",adress:"",phone:""},onSubmit:n=>{r(T({userData:n,orderData:e}))},children:(0,_.jsxs)(O,{children:[(0,_.jsx)(q,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0430\u043d\u043d\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,_.jsxs)(J,{children:[(0,_.jsx)(R,{children:"\u0412\u0430\u0448\u0435 \u0456\u043c\u044f"}),(0,_.jsx)(V,{type:"text",name:"name"})]}),(0,_.jsxs)(J,{children:[(0,_.jsx)(R,{children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,_.jsx)(V,{type:"text",name:"adress"}),(0,_.jsx)(U,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e, \u0441\u043b\u0443\u0436\u0431\u0443 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u0430 \u043d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u044f"})]}),(0,_.jsxs)(J,{children:[(0,_.jsx)(R,{children:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,_.jsx)(V,{type:"text",name:"phone"})]}),(0,_.jsx)("button",{type:"submit",children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})]})})})},A=()=>{const n=(0,c.v9)(x.w),[t,e]=(0,Z.useState)(n.map((n=>({...n,amount:1})))),[r,i]=(0,Z.useState)(!1),[o,d]=(0,Z.useState)((()=>{let t=0;return n.map((n=>t+=Number(n.price))),t})),[l,a]=(0,Z.useState)(n.length),s={orderList:t,totalCount:l,totalPrice:o,setOrderList:e,setTotalCount:a,setTotalPrice:d},h=()=>{i(!r)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)("thead",{children:(0,_.jsxs)(b,{children:[(0,_.jsx)(j,{children:"\u041d\u0430\u0437\u0432\u0430"}),(0,_.jsx)(j,{children:"\u041e\u043f\u0438\u0441"}),(0,_.jsx)(j,{children:"\u0424\u043e\u0442\u043e"}),(0,_.jsx)(j,{children:"\u0426\u0456\u043d\u0430"}),(0,_.jsx)(j,{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"})]})}),(0,_.jsxs)("tbody",{children:[n.map((n=>(0,_.jsx)(C,{product:n,functional:s},n._id))),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{colSpan:"3"}),(0,_.jsxs)(m,{children:[o," \u0433\u0440\u043d"]}),(0,_.jsx)(m,{children:l})]})]})]}),(0,_.jsx)(k,{onClick:h,children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"}),r?(0,_.jsx)(W,{toglle:h,orderData:{orderList:t,totalPrice:o}}):null]})},B=()=>(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(A,{})})},6911:(n,t,e)=>{e.d(t,{E:()=>a,I:()=>l});var r,i,o=e(168),d=e(2683);const l=d.default.div(r||(r=(0,o.Z)(["\n  width: 350px;\n  height: 350px;\n  overflow: hidden;\n"]))),a=d.default.img(i||(i=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n"])))},175:(n,t,e)=>{e.d(t,{Z:()=>h});var r,i,o=e(2791),d=e(4164),l=e(168),a=e(2683);const s=a.default.div(r||(r=(0,l.Z)(["\n  background-color: rgba(255, 255, 255, 1);\n  max-height: 90%;\n  padding: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow: auto;\n  border-radius: 14px;\n"]))),c=a.default.div(i||(i=(0,l.Z)(["\n  z-index: 1200;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background-color: rgba(18, 20, 23, 0.5);\n  justify-content: center;\n  align-items: center;\n"])));var x=e(184);const h=n=>{let{togleModal:t,children:e}=n;const r=document.querySelector("#modal-root");(0,o.useEffect)((()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})));const i=n=>{"Escape"===n.code&&t()};return(0,d.createPortal)((0,x.jsx)(c,{onClick:n=>{n.currentTarget===n.target&&t(n)},children:(0,x.jsx)(s,{children:e})}),r)}},3574:(n,t,e)=>{e.d(t,{w:()=>r});const r=n=>n.basket.basketList}}]);
//# sourceMappingURL=953.28fe6dbd.chunk.js.map