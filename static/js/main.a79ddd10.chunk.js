(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(37),o=n(3),c="ADD-MESSAGE",i={dialogs:[{id:1,name:"Dima"},{id:2,name:"Lolez"},{id:3,name:"Victor"},{id:4,name:"Precol"}],messages:[{id:1,message:"Hi!"},{id:2,message:"Who are you?"},{id:3,message:"You wanna go somewhere?"}]},a=function(e){return{type:c,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:t.newMessageBody}])});default:return e}}},140:function(e,t,n){e.exports={item:"Post_item__2WTmf"}},177:function(e,t,n){},178:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEntireTree",(function(){return cn}));var r=n(0),o=n(17),c=n(1),i=n.n(c),a=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))},s=n(65),u=n.n(s),l=n(31),d=n(32),f=n(34),j=n(33),p=n(14),b=n(15);function h(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    a{\n        color: white;\n        text-decoration: none;\n        &:hover{\n            color: darkred;\n        }\n    }\n    padding: 10px;\n"]);return h=function(){return e},e}function O(){var e=Object(o.a)(["\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    flex: 0 0 20%;\n    max-width: 20%;\n    background: pink;\n    @media ","{\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n"]);return O=function(){return e},e}var g=b.c.div(O(),(function(e){return e.theme.media.phone})),m=b.c.nav(h()),x=function(){return Object(r.jsx)(g,{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(p.b,{to:"/profile",children:"Profile"}),Object(r.jsx)(p.b,{to:"/dialogs",children:"Messages"}),Object(r.jsx)(p.b,{to:"/news",children:"News"}),Object(r.jsx)(p.b,{to:"/music",children:"Music"}),Object(r.jsx)(p.b,{to:"/settings",children:"Settings"}),Object(r.jsx)(p.b,{to:"/users",children:"Users"})]})})},v=(n(177),function(){return Object(r.jsx)("div",{children:"News"})}),w=(n(178),function(){return Object(r.jsx)("div",{children:"Music"})}),P=function(){return Object(r.jsx)("div",{children:"Settings"})},y=n(11),S=n(3),_=n(12),C=n(10),k=n.n(C),E=n(16),U=n(37),I=n(136).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7e127611-be10-4a25-97f0-44bab15fc4c4"}}),T={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return I.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return I.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return I.delete("follow/".concat(e)).then((function(e){return e.data}))}},A=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},F="FOLLOW",M="UNFOLLOW",N="SET_USERS",L="SET_CURRENT_PAGE",z="SET_TOTAL_USER_COUNT",D="TOGGLE_FETCHING",R="TOGGLE_FOLLOWING_PROGRESS",B={users:[],totalUsersCount:0,pageSize:100,currentPage:1,isFetching:!0,followingInProgress:[]},G=function(e){return{type:F,userId:e}},W=function(e){return{type:M,userId:e}},J=function(e){return{type:N,users:e}},H=function(e){return{type:L,currentPage:e}},q=function(e){return{type:z,totalUsersCount:e}},V=function(e){return{type:D,isFetching:e}},X=function(e,t){return{type:R,isFetching:e,userId:t}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(S.a)(Object(S.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!0})});case M:return Object(S.a)(Object(S.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!1})});case N:return Object(S.a)(Object(S.a)({},e),{},{users:Object(U.a)(t.users)});case L:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case z:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.totalUsersCount});case D:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case R:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(U.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Q=n.p+"static/media/loader.fd8746b8.svg",K=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:Q,alt:"loader"})})},Z=n(92),$=n.n(Z),ee=n.p+"static/media/userAsset.73a0bc1f.png",te=function(e){return Object(r.jsxs)("div",{className:$.a.user,children:[Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"/profile/".concat(e.user.id),children:Object(r.jsx)("img",{src:null===e.user.photos.small?ee:e.user.photos.small,className:$.a.avatar,alt:"user"})})}),Object(r.jsx)("div",{children:e.user.followed?Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})}),Object(r.jsx)("div",{children:e.user.name}),Object(r.jsx)("div",{children:e.user.status})]})},ne=n(56),re=n(93),oe=n.n(re),ce=n(137),ie=n.n(ce),ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,i=e.onPageChanged,a=e.portionSize,s=Math.ceil(t/n),u=[],l=1;l<=s;l++)u.push(l);var d=Math.ceil(s/a),f=Object(c.useState)(1),j=Object(ne.a)(f,2),p=j[0],b=j[1],h=(p-1)*a+1,O=p*a;return Object(r.jsxs)("div",{children:[p>1&&Object(r.jsx)("button",{onClick:function(){return b((function(e){return--e}))},children:"Prev"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:ie()(o===e&&oe.a.selectedPage,oe.a.pageNumber),onClick:function(){i(e)},children:" ".concat(e," ")},e)})),p<d&&Object(r.jsx)("button",{onClick:function(){return b((function(e){return++e}))},children:"Next"})]})},se=function(e){var t=e.users.map((function(t){return Object(r.jsx)(te,{user:t,follow:e.follow,unfollow:e.unfollow,followingInProgress:e.followingInProgress},t.id)}));return Object(r.jsxs)("div",{children:[e.isFetching?Object(r.jsx)(K,{}):null,Object(r.jsx)(ae,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:20}),t]})},ue=n(8),le=n(138),de=Object(le.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),fe=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},be=function(e){return e.usersPage.isFetching},he=function(e){return e.usersPage.followingInProgress},Oe=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(r.jsx)(se,Object(S.a)({onPageChanged:this.onPageChanged},this.props))}}]),n}(i.a.Component),ge={follow:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0,e)),t.next=3,T.follow(e);case 3:0===t.sent.resultCode&&n(G(e)),n(X(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0,e)),t.next=3,T.unfollow(e);case 3:0===t.sent.resultCode&&n(W(e)),n(X(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:J,setCurrentPage:H,setTotalUserCount:q,toggleFetching:V,requestUsers:function(e,t){return function(){var n=Object(E.a)(k.a.mark((function n(r){var o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(H(e)),r(V(!0)),n.next=4,T.getUsers(e,t);case 4:o=n.sent,r(V(!1)),r(J(o.items)),r(q(o.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},me=Object(ue.d)(Object(_.b)((function(e){return{users:de(e),pageSize:fe(e),totalUsersCount:je(e),currentPage:pe(e),isFetching:be(e),followingInProgress:he(e)}}),ge))(Oe),xe=n(70),ve=n.n(xe),we=function(e){var t=Object(c.useState)(!1),n=Object(ne.a)(t,2),o=n[0],i=n[1],a=Object(c.useState)(e.status),s=Object(ne.a)(a,2),u=s[0],l=s[1];Object(c.useEffect)((function(){l(e.status)}),[e.status]);return Object(r.jsxs)("div",{children:[!o&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){e.isOwner&&i(!0)},children:e.status||"----"})}),o&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){i(!1),e.updateUserStatus(u)},autoFocus:!0,value:u})})]})},Pe=n(129),ye=n(130),Se=n(40),_e=n(42),Ce=n.n(_e),ke=Object(Se.a)("input"),Ee=Object(Se.a)("textarea"),Ue=Object(ye.a)({form:"profileEditForm"})((function(e){var t=e.profile,n=e.isOwner,o=e.handleSubmit,c=e.error;return Object(r.jsxs)("form",{onSubmit:o,children:[n&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Save"})}),c&&Object(r.jsx)("div",{className:Ce.a.formSummaryError,children:c}),Object(r.jsxs)("div",{children:["Full name:",Object(r.jsx)(Pe.a,{placeholder:"full name",name:"fullName",component:ke,validate:[]})]}),Object(r.jsxs)("div",{children:["About me:",Object(r.jsx)(Pe.a,{placeholder:"about me",name:"aboutMe",component:Ee,validate:[]})]}),Object(r.jsxs)("div",{children:["Looking for a job:",Object(r.jsx)(Pe.a,{name:"lookingForAJob",component:"input",validate:[],type:"checkbox"})]}),Object(r.jsxs)("div",{children:["Work preferences: ",Object(r.jsx)(Pe.a,{placeholder:"work preferences",name:"lookingForAJobDescription",component:Ee,validate:[]})]}),Object(r.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(r.jsxs)("div",{children:[e,": ",Object(r.jsx)(Pe.a,{placeholder:e,name:"contacts.".concat(e),component:ke,validate:[]})]},e)}))]})]})})),Ie=function(e){var t=e.profile,n=e.toggleEditMode,o=e.isOwner;return Object(r.jsxs)("div",{children:[o&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:n,children:"Edit"})}),Object(r.jsxs)("div",{children:["Full name: ",t.fullName]}),Object(r.jsxs)("div",{children:["About me: ",t.aboutMe]}),Object(r.jsxs)("div",{children:["Looking for a job: ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(r.jsxs)("div",{children:["Work preferences: ",t.lookingForAJobDescription]}),Object(r.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(r.jsx)(Te,{contactType:e,contactInfo:t.contacts[e]},e)}))]})]})},Te=function(e){var t=e.contactType,n=e.contactInfo;return Object(r.jsxs)("div",{className:ve.a.contact,children:[t,": ",n]})},Ae=function(e){var t=e.profile,n=e.savePhoto,o=e.isOwner,c=e.status,i=e.updateUserStatus,a=e.editMode,s=e.toggleEditMode,u=e.saveProfile;if(!t)return Object(r.jsx)(K,{});return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:ve.a.descriptionBlock,children:[Object(r.jsx)("img",{src:t.photos.large?t.photos.large:ee,className:ve.a.profilePhoto,alt:"avatar"}),o&&Object(r.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}}),Object(r.jsx)(we,{status:c,updateUserStatus:i,isOwner:o}),!a&&Object(r.jsx)(Ie,{profile:t,toggleEditMode:s,isOwner:o}),a&&Object(r.jsx)(Ue,{initialValues:t,onSubmit:function(e){u(e)},profile:t,isOwner:o})]})})},Fe=n(67),Me={getProfile:function(e){return I.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return I.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return I.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),I.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return I.put("profile",e).then((function(e){return e.data}))}},Ne=n(30),Le="ADD-POST",ze="SET_USER_PROFILE",De="SET_STATUS",Re="DELETE_POST",Be="SAVE_PHOTO_SUCCESS",Ge="TOGGLE_EDIT_MODE",We="SAVE_PROFILE_SUCCESS",Je={posts:[{id:1,message:"hey, nibba",likesCount:228},{id:2,message:"get the fuck out",likesCount:9},{id:3,message:"It is my first post",likesCount:3}],profile:null,status:"default status",editMode:!1},He=function(e){return{type:We,profile:e}},qe=function(e){return{type:De,status:e}},Ve=function(e){return{type:Be,photos:e}},Xe=function(){return{type:Ge}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le:return Object(S.a)(Object(S.a)({},e),{},{posts:[].concat(Object(U.a)(e.posts),[{id:5,message:t.newPostText,likesCount:0}])});case Re:return Object(S.a)(Object(S.a)({},e),{},{posts:Object(U.a)(e.posts.filter((function(e){return e.id!==t.postId})))});case ze:return Object(S.a)(Object(S.a)({},e),{},{profile:t.profile});case De:return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case Be:return Object(S.a)(Object(S.a)({},e),{},{profile:Object(S.a)(Object(S.a)({},e.profile),{},{photos:t.photos})});case Ge:return Object(S.a)(Object(S.a)({},e),{},{editMode:!e.editMode});case We:return Object(S.a)(Object(S.a)({},e),{},{profile:t.profile});default:return e}},Qe=n(96),Ke=n.n(Qe),Ze=n(140),$e=n.n(Ze),et=function(e){return Object(r.jsxs)("div",{className:$e.a.item,children:[Object(r.jsx)("img",{src:"https://w7.pngwing.com/pngs/642/857/png-transparent-internet-meme-redemption-white-sticker-meme.png"}),e.message,Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:["like ",e.likeCount]})})]})},tt=n(36),nt=Object(tt.a)(10),rt=Object(Se.a)("textarea"),ot=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(Pe.a,{placeholder:"Enter post",name:"newPostText",component:rt,validate:[tt.b,nt]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})};ot=Object(ye.a)({form:"AddNewPostForm"})(ot);var ct=function(e){var t=e.posts.map((function(e){return Object(r.jsx)(et,{message:e.message,likeCount:e.likesCount},e.id)}));return Object(r.jsxs)("div",{className:Ke.a.postsBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(ot,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(r.jsx)("div",{className:Ke.a.posts,children:t})]})},it=Object(_.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:function(e){return{type:Le,newPostText:e}}})(ct),at=i.a.memo((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Ae,Object(S.a)({},e)),Object(r.jsx)(it,{})]})})),st=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"refreshProfile",value:function(){var e=this.props,t=e.match,n=e.authorizedUserId,r=e.history,o=e.getProfile,c=e.setUserStatus,i=t.params.userId;i||(i=n)||r.push("/login"),o(i),c(i)}},{key:"render",value:function(){return Object(r.jsx)(at,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,editMode:this.props.editMode,toggleEditMode:this.props.toggleEditMode})}}]),n}(i.a.Component),ut=Object(ue.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.id,editMode:e.profilePage.editMode}}),{getProfile:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Me.getProfile(e);case 2:r=t.sent,n({type:ze,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserStatus:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Me.getStatus(e);case 2:r=t.sent,n(qe(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Me.updateStatus(e);case 3:0===t.sent.resultCode&&n(qe(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Error with status");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Me.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(Ve(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleEditMode:Xe,saveProfile:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){var r,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Me.saveProfile(e);case 2:0===(r=t.sent).resultCode?(n(He(e)),n(Xe())):(o=r.messages[0].slice(r.messages[0].indexOf(">")+1,r.messages[0].indexOf(")")).toLocaleLowerCase(),n(Object(Ne.a)("profileEditForm",{contacts:Object(Fe.a)({},o,r.messages[0])})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),y.g)(st);function lt(){var e=Object(o.a)(["\n    width: ",";\n    img{\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n"]);return lt=function(){return e},e}function dt(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: "," 0;\n"]);return dt=function(){return e},e}var ft=b.c.header(dt(),(function(e){return e.paddingTopBottom||"5px"})),jt=b.c.div(lt(),(function(e){return e.width||"20px"})),pt=function(e){var t=e.isAuth,n=e.logout,o=e.login;return Object(r.jsxs)(ft,{paddingTopBottom:"10px",children:[Object(r.jsx)(jt,{width:"30px",children:Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/9a/3b/90/9a3b902ff415e1a95368f1bf2b9ecca8.png",alt:"logo"})}),Object(r.jsxs)("div",{children:[t&&Object(r.jsxs)("div",{children:[o," - ",Object(r.jsx)("button",{onClick:n,children:"Logout"})]}),!t&&Object(r.jsx)(p.b,{to:"/login",children:"Login"})]})]})},bt={authMe:function(){return I.get("auth/me").then((function(e){return e.data}))},login:function(e){return I.post("auth/login",e).then((function(e){return e.data}))},logout:function(){return I.delete("auth/login").then((function(e){return e.data}))}},ht={getCaptchaUrl:function(){return I.get("security/get-captcha-url").then((function(e){return e.data}))}},Ot="SET_USER_AUTH_DATA",gt="SET_CAPTCHA_URL_SUCCESS",mt="DELETE_USER_AUTH_DATA",xt={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},vt=function(e){return{type:Ot,data:e}},wt=function(e){return{type:gt,data:e}},Pt=function(){return function(){var e=Object(E.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,bt.authMe();case 2:0===(n=e.sent).resultCode&&t(vt(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},yt=function(){return function(){var e=Object(E.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ht.getCaptchaUrl();case 2:n=e.sent,t(wt(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ot:return Object(S.a)(Object(S.a)(Object(S.a)({},e),t.data),{},{isAuth:!0});case gt:return Object(S.a)(Object(S.a)({},e),{},{captchaUrl:t.data});case mt:return Object(S.a)(Object(S.a)({},e),{},{id:null,login:null,email:null,isAuth:!1});default:return e}},_t=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)(pt,Object(S.a)({},this.props))}}]),n}(i.a.Component),Ct=Object(_.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(E.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,bt.logout();case 2:0===e.sent.resultCode&&t({type:mt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(_t),kt=Object(Se.a)("input"),Et=Object(tt.a)(20),Ut=Object(ye.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(Pe.a,{placeholder:"Email",name:"email",component:kt,validate:[tt.b,Et]})}),Object(r.jsx)("div",{children:Object(r.jsx)(Pe.a,{placeholder:"Password",name:"password",component:kt,type:"password",validate:[tt.b,Et]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Pe.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),e.captchaUrl&&Object(r.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),e.captchaUrl&&Object(r.jsx)("div",{children:Object(r.jsx)(Pe.a,{placeholder:"Captcha",name:"captcha",component:kt,validate:[tt.b]})}),e.error&&Object(r.jsx)("div",{className:Ce.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),It=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,bt.login(e);case 2:0===(r=t.sent).resultCode?n(Pt()):(10===r.resultCode&&n(yt()),n(Object(Ne.a)("login",{_error:r.messages.length>0?r.messages[0]:"Some error"})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){if(e.isAuth)return Object(r.jsx)(y.a,{to:"/Profile"});return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Ut,{onSubmit:function(t){e.login(t)},captchaUrl:e.captchaUrl})]})})),Tt="INITIALIZING_SUCCESS",At={isInitialized:!1},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Tt:return Object(S.a)(Object(S.a)({},e),{},{isInitialized:!0});default:return e}},Mt=n(128),Nt=n(131),Lt=n(141),zt=Object(ue.c)({profilePage:Ye,dialogsPage:Mt.b,usersPage:Y,auth:St,form:Nt.a,app:Ft}),Dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,Rt=Object(ue.e)(zt,Dt(Object(ue.a)(Lt.a))),Bt=Rt;window.__store__=Rt;var Gt=function(e){return function(t){return Object(r.jsx)(i.a.Suspense,{fallback:Object(r.jsx)(K,{}),children:Object(r.jsx)(e,Object(S.a)({},t))})}};function Wt(){var e=Object(o.a)(["\n    height: 15vh;\n    justify-content: center; \n"]);return Wt=function(){return e},e}var Jt=b.c.footer(Wt()),Ht=function(){return Object(r.jsx)(Jt,{children:"Footer"})};function qt(){var e=Object(o.a)(["\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    flex: 0 0 80%;\n    max-width: 80%;\n    background: lemonchiffon;\n    @media ","{\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n"]);return qt=function(){return e},e}function Vt(){var e=Object(o.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    flex-grow: 1; \n"]);return Vt=function(){return e},e}function Xt(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    width:100%;\n    max-width:1200px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-left:auto;\n    margin-right:auto;\n    background-color: aliceblue;\n    min-height: 100vh;\n"]);return Xt=function(){return e},e}var Yt=b.c.div(Xt()),Qt=b.c.div(Vt()),Kt=b.c.div(qt(),(function(e){return e.theme.media.phone})),Zt=i.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),$t=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).catchAllUnhandledErrors=function(e,t){alert("Some error occured")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.isInitialized?Object(r.jsxs)(Yt,{children:[Object(r.jsx)(Ct,{}),Object(r.jsxs)(Qt,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(Kt,{children:Object(r.jsxs)(y.d,{children:[Object(r.jsx)(y.b,{path:"/dialogs",render:Gt(Zt)}),Object(r.jsx)(y.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(ut,{})}}),Object(r.jsx)(y.b,{path:"/news",render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(y.b,{path:"/music",render:function(){return Object(r.jsx)(w,{})}}),Object(r.jsx)(y.b,{path:"/settings",render:function(){return Object(r.jsx)(P,{})}}),Object(r.jsx)(y.b,{path:"/users",render:function(){return Object(r.jsx)(me,{})}}),Object(r.jsx)(y.b,{path:"/login",render:function(){return Object(r.jsx)(It,{})}}),Object(r.jsx)(y.a,{exact:!0,from:"/",to:"/profile"}),Object(r.jsx)(y.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}),Object(r.jsx)(Ht,{})]}):Object(r.jsx)(K,{})}}]),n}(i.a.Component),en=Object(ue.d)(Object(_.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initialize:function(){return function(e){var t=e(Pt());Promise.all([t]).then((function(){e({type:Tt})}))}}}))($t),tn=function(){return Object(r.jsx)(p.a,{children:Object(r.jsx)(_.a,{store:Bt,children:Object(r.jsx)(en,{})})})};function nn(){var e=Object(o.a)(['\n        *,\n        *::before,\n        *::after {\n            box-sizing: border-box;\n        }\n        html {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n        body {\n            margin: 0;\n            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n            font-size: 1rem;\n            font-weight: 400;\n            line-height: 1.5;\n            color: #212529;\n            text-align: left;\n            background-color: #fff;\n        }\n']);return nn=function(){return e},e}var rn=Object(b.b)(nn()),on={media:{phone:"(max-width: 900px)"}},cn=function(){u.a.render(Object(r.jsxs)(b.a,{theme:on,children:[Object(r.jsx)(rn,{}),Object(r.jsx)(tn,{})]}),document.getElementById("root"))};cn(),Bt.subscribe(cn),a()},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r=function(e){if(!e)return"Field is required"},o=function(e){return function(t){if(!(t.length<=e))return"Max length is ".concat(e)}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(3),c=n(142),i=(n(1),n(42)),a=n.n(i),s=function(e){return function(t){var n=t.input,i=t.meta,s=Object(c.a)(t,["input","meta"]),u=i.touched&&i.error;return Object(r.jsxs)("div",{className:a.a.formControl+" "+(u?a.a.error:""),children:[Object(r.jsx)("div",{children:Object(r.jsx)(e,Object(o.a)(Object(o.a)({},n),s))}),u&&Object(r.jsxs)("span",{children:[" ",i.error," "]})]})}}},42:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2YQaU",error:"FormsControls_error__3g4FW",formSummaryError:"FormsControls_formSummaryError__PAkJW"}},70:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__18SIW",profilePhoto:"ProfileInfo_profilePhoto__1Wkiq",contact:"ProfileInfo_contact__2kQUH"}},92:function(e,t,n){e.exports={avatar:"User_avatar__2LoF5",user:"User_user__1f7S8"}},93:function(e,t,n){e.exports={pageNumber:"Pagination_pageNumber__3nXTM",selectedPage:"Pagination_selectedPage__38Dd4"}},96:function(e,t,n){e.exports={item:"MyPosts_item__3_JxA",postsBlock:"MyPosts_postsBlock__jJmdn",posts:"MyPosts_posts__owaNI"}}},[[294,1,2]]]);
//# sourceMappingURL=main.a79ddd10.chunk.js.map