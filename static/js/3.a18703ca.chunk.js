(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[3],{289:function(n,e,t){n.exports={dialogs:"Dialogs_dialogs___FYBH",active:"Dialogs_active__3U01P",dialogsItems:"Dialogs_dialogsItems__2olaJ",messages:"Dialogs_messages__2uxeN",writeMessageArea:"Dialogs_writeMessageArea__ZF4Ex",message:"Dialogs_message__31BUG"}},291:function(n,e,t){"use strict";t.r(e);var r=t(126),i=t(0),a=t(3),s=t(1),o=t.n(s),c=t(2);function u(){var n=Object(a.a)(["\n        filter:brightness(90%);\n        :hover{\n            filter:brightness(90%);\n        }\n    "]);return u=function(){return n},n}function d(){var n=Object(a.a)(["\n    display:flex;\n    background-color:",";\n    transition: 0.3s;\n    padding:30px;\n    :hover{\n        transition: 0.7s;\n        filter:brightness(120%);\n    }\n    @media ","{\n        padding:2px;\n        flex-grow:1;\n        margin-bottom:5px;\n    } \n    \n    ","\n    \n    \n    \n    \n\n"]);return d=function(){return n},n}var l=c.d.div(d(),(function(n){return n.theme.colorPalettes.second.body}),(function(n){return n.theme.media.phone}),(function(n){return n.isFirst&&Object(c.c)(u())})),f=function(n){var e=!1;return"Dmitry"===n.name&&(e=!0),Object(i.jsx)(l,{isFirst:e,children:n.name})},b=t(289),m=t.n(b);function g(){var n=Object(a.a)(["\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    border: 2px solid ",";\n    border-radius: ",";\n    margin: 7px 0px;\n    align-self:center;\n    width:90%;\n    padding:5px;\n    background-color:white;\n"]);return g=function(){return n},n}var j=c.d.div(g(),(function(n){return n.theme.colorPalettes.second.other}),(function(n){return n.theme.borderRadius||"0px"})),h=function(n){return Object(i.jsx)(j,{className:m.a.message,children:n.message})},x=t(127),p=t(28),O=t(128),v=t(41),w=t(37),_=t(17);function y(){var n=Object(a.a)(["\n    flex: 0 0 80%;\n"]);return y=function(){return n},n}function k(){var n=Object(a.a)(["\n    align-self:center;\n    \n"]);return k=function(){return n},n}function D(){var n=Object(a.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content:space-evenly;\n    margin:10px 0px;\n"]);return D=function(){return n},n}function P(){var n=Object(a.a)(["\n    display: flex;\n    flex-direction:column;\n    flex-grow:1;\n    overflow-y:scroll;\n    height:100px;\n    \n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background-color: ","; \n        border-radius: ",";\n        width:5px;\n        height:5px;\n    }\n      \n"]);return P=function(){return n},n}function S(){var n=Object(a.a)(["\n    display: flex;\n    flex-direction:column;\n    flex:0 0 70%;\n    \n    @media ","{\n        flex:1 0 100%;\n    } \n   \n    \n"]);return S=function(){return n},n}function A(){var n=Object(a.a)(["\n    display: flex;\n    flex-direction:column;\n    flex:0 0 30%;\n    @media ","{\n        flex:0 0 100%;\n        flex-direction:row;\n        flex-wrap:wrap;\n    } \n   \n"]);return A=function(){return n},n}function E(){var n=Object(a.a)(["\n    display: flex;\n    width:100%;\n    height:100%;\n    flex:1 0 100%;\n    justify-content: space-between;\n    @media ","{\n        flex-direction:column;\n    } \n"]);return E=function(){return n},n}var F=c.d.div(E(),(function(n){return n.theme.media.phone})),M=c.d.div(A(),(function(n){return n.theme.media.phone})),I=c.d.div(S(),(function(n){return n.theme.media.phone})),J=c.d.div(P(),(function(n){return n.theme.colorPalettes.second.other}),(function(n){return n.theme.borderRadius||"0px"})),R=Object(v.a)("textarea","100%",!1),B=c.d.form(D()),K=Object(c.d)(_.a)(k()),N=c.d.div(y()),U=Object(O.a)({form:"message",onSubmitSuccess:function(n,e){e(Object(p.a)("message"))}})((function(n){return Object(i.jsxs)(B,{onSubmit:n.handleSubmit,children:[Object(i.jsx)(N,{children:Object(i.jsx)(x.a,{placeholder:"Enter message",name:"message",component:R,validate:[w.a],onKeyPress:function(e){"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),e.target.value&&n.handleSubmit(n.values))}})}),Object(i.jsx)(K,{type:"submit",value:"Send"})]})})),C=function(n){var e=n.dialogs,t=n.messages,r=n.addMessage,a=e.map((function(n){return Object(i.jsx)(f,{id:n.id,name:n.name},n.id)})),o=t.map((function(n){return Object(i.jsx)(h,{id:n.id,message:n.message},n.id)})),c=Object(s.useRef)(null);return Object(s.useEffect)((function(){c.current.scrollIntoView({behavior:"auto"})}),[t]),Object(i.jsxs)(F,{children:[Object(i.jsx)(M,{children:a}),Object(i.jsxs)(I,{children:[Object(i.jsxs)(J,{children:[o,Object(i.jsx)("div",{ref:c})]}),Object(i.jsx)(U,{onSubmit:function(n){r(n.message)},messages:t})]})]})},G=t(14),H=t(9),V=t(5),Y=t(32),Z=t(33),q=t(35),z=t(34),L=t(13),Q=function(n){return{isAuth:n.auth.isAuth}},T=function(n){var e=function(e){Object(q.a)(r,e);var t=Object(z.a)(r);function r(){return Object(Y.a)(this,r),t.apply(this,arguments)}return Object(Z.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(i.jsx)(n,Object(V.a)({},this.props)):Object(i.jsx)(L.a,{to:"/login"})}}]),r}(o.a.Component);return Object(G.b)(Q)(e)},W={addMessage:r.a};e.default=Object(H.d)(T,Object(G.b)((function(n){return{dialogs:n.dialogsPage.dialogs,messages:n.dialogsPage.messages}}),W))(C)}}]);
//# sourceMappingURL=3.a18703ca.chunk.js.map