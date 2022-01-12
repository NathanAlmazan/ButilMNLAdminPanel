"use strict";(self.webpackChunkbutil_admin=self.webpackChunkbutil_admin||[]).push([[126],{3576:function(e,t,n){var r=n(1413),s=n(2791),a=n(4575),i=n(9658),c=n(184),o=s.forwardRef((function(e,t){return(0,c.jsx)(i.Z,(0,r.Z)({elevation:6,ref:t,variant:"filled"},e))}));t.Z=function(e){var t=e.openSnackbar,n=e.success,r=e.message,s=e.setOpenSnackbar,i=function(e,t){"clickaway"!==t&&s(!1)};return(0,c.jsx)(a.Z,{open:t,autoHideDuration:6e3,onClose:i,children:(0,c.jsx)(o,{onClose:i,severity:n?"success":"error",sx:{width:"100%"},children:r})})}},2568:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(5671),s=n(3144),a=function(){function e(t){(0,r.Z)(this,e),this.orderObject=void 0,this.orderObject=t}return(0,s.Z)(e,[{key:"getOrder",value:function(){return this.orderObject}},{key:"setAssigned",value:function(e){this.orderObject.assigned=e}},{key:"setDelivered",value:function(e){this.orderObject.delivered=e}}]),e}();function i(e){var t=e.data(),n=[];t.contents.forEach((function(e){n.push({price:e.price,productId:e.productId,quantity:e.quantity})}));var r={orderId:e.id,contents:n,customer:{contact:t.customer.contact,userName:t.customer.userName,address:t.customer.address,email:t.customer.email,gender:t.customer.gender,latitude:0,longitude:0,uid:t.customer.uid},amountDue:t.amountDue,assigned:t.assigned,delivered:t.delivered,orderDate:t.orderDate.toDate(),paid:t.paid,paymentType:t.paymentType,paymentProof:t.paymentProof};return new a(r)}},776:function(e,t,n){n.d(t,{$:function(){return i}});var r=n(5671),s=n(3144),a=function(){function e(t){(0,r.Z)(this,e),this.riderObject=void 0,this.riderObject=t}return(0,s.Z)(e,[{key:"getRider",value:function(){return this.riderObject}},{key:"setAccount",value:function(e){this.riderObject.account=e}}]),e}();function i(e){var t=e.data(),n={riderId:e.id,active:t.active,assignedDeliver:t.assignedDeliver};return new a(n)}t.Z=a},4993:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(5671),s=n(3144),a=function(){function e(t){(0,r.Z)(this,e),this.userObject=void 0,this.userObject=t}return(0,s.Z)(e,[{key:"getUser",value:function(){return this.userObject}}]),e}();function i(e){var t=e.data(),n={userId:e.id,contact:t.contact,firstName:t.firstName,lastName:t.lastName,gender:t.gender};return new a(n)}},3126:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(1413),s=n(5861),a=n(885),i=n(7757),c=n.n(i),o=n(2791),u=n(6907),d=n(6445),l=n(8530),h=n(890),f=n(4518),v=n(6871),Z=n(376),m=n(9062),g=n(4993),p=n(776),x=n(2568),j=n(3967),b=n(7621),y=n(9585),k=n(8096),w=n(4925),S=n(9321),O=n(5022),I=n(4721),C=n(9281),D=n(9836),W=n(6890),P=n(5855),B=n(3994),R=n(3382),T=n(5395),z=n(3400),A=n(4515),N=n(8986),E=n(184),U=[{id:"all",name:"All"},{id:"male",name:"Male"},{id:"female",name:"Female"}];function H(e){var t=e.users,n=e.demoteToUser,s=(0,o.useState)(0),i=(0,a.Z)(s,2),c=i[0],u=i[1],d=(0,o.useState)(5),f=(0,a.Z)(d,2),v=f[0],Z=f[1],m=(0,o.useState)({status:null}),g=(0,a.Z)(m,2),p=g[0],x=g[1],H=(0,o.useState)([]),F=(0,a.Z)(H,2),J=F[0],L=F[1],M=(0,o.useState)([]),q=(0,a.Z)(M,2),V=q[0],Q=q[1],$=(0,j.Z)();(0,o.useEffect)((function(){switch(p.status){case"male":var e=t.filter((function(e){return"Male"===e.account.gender}));L((function(t){return e}));break;case"female":var n=t.filter((function(e){return"Female"===e.account.gender}));L((function(e){return n}));break;default:L((function(e){return t}))}}),[t,p]),(0,o.useEffect)((function(){var e=function(e,t,n){return e.slice(t*n,t*n+n)}(J,c,v);Q((function(t){return e}))}),[c,v,J]);return(0,E.jsxs)(b.Z,{children:[(0,E.jsx)(y.Z,{action:(0,E.jsx)(l.Z,{width:150,children:(0,E.jsxs)(k.Z,{fullWidth:!0,variant:"outlined",children:[(0,E.jsx)(w.Z,{children:"Status"}),(0,E.jsx)(S.Z,{value:p.status||"all",onChange:function(e){var t=null;"all"!==e.target.value&&(t=e.target.value),x((function(e){return(0,r.Z)((0,r.Z)({},e),{},{status:t})}))},label:"Status",autoWidth:!0,children:U.map((function(e){return(0,E.jsx)(O.Z,{value:e.id,children:e.name},e.id)}))})]})}),title:"Rider List"}),(0,E.jsx)(I.Z,{}),(0,E.jsx)(C.Z,{children:(0,E.jsxs)(D.Z,{children:[(0,E.jsx)(W.Z,{children:(0,E.jsxs)(P.Z,{children:[(0,E.jsx)(B.Z,{children:"Rider ID"}),(0,E.jsx)(B.Z,{children:"Name"}),(0,E.jsx)(B.Z,{children:"Gender"}),(0,E.jsx)(B.Z,{children:"Contact"}),(0,E.jsx)(B.Z,{children:"Queue"}),(0,E.jsx)(B.Z,{align:"right",children:"Actions"})]})}),(0,E.jsx)(R.Z,{children:V.map((function(e){return(0,E.jsxs)(P.Z,{hover:!0,children:[(0,E.jsx)(B.Z,{children:(0,E.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.account.userId})}),(0,E.jsx)(B.Z,{children:(0,E.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.account.firstName+" "+e.account.lastName})}),(0,E.jsx)(B.Z,{children:(0,E.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.account.gender})}),(0,E.jsx)(B.Z,{children:(0,E.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.account.contact})}),(0,E.jsx)(B.Z,{children:(0,E.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.assignedDeliver.length})}),(0,E.jsx)(B.Z,{align:"right",children:(0,E.jsx)(T.Z,{title:"Asign Order",arrow:!0,children:(0,E.jsx)(z.Z,{sx:{"&:hover":{background:$.colors.error.lighter},color:$.palette.error.main},color:"inherit",size:"small",onClick:function(t){return n(e.account.userId)},children:(0,E.jsx)(N.Z,{fontSize:"small"})})})})]},e.account.userId)}))})]})}),(0,E.jsx)(l.Z,{p:2,children:(0,E.jsx)(A.Z,{component:"div",count:J.length,onPageChange:function(e,t){u(t)},onRowsPerPageChange:function(e){Z(parseInt(e.target.value))},page:c,rowsPerPage:v,rowsPerPageOptions:[5,10,25,30]})})]})}var F=n(3576),J=n(5299);var L=function(){var e=(0,v.UO)().orderId,t=(0,Z.h)().database,n=(0,v.s0)(),i=(0,o.useState)([]),j=(0,a.Z)(i,2),b=j[0],y=j[1],k=(0,o.useState)({openSnackbar:!1,success:!0,message:""}),w=(0,a.Z)(k,2),S=w[0],O=w[1],I=(0,o.useState)(null),C=(0,a.Z)(I,2),D=C[0],W=C[1];function P(s){(0,m.r7)((0,m.JU)(t,"delivery",s),{assignedDeliver:(0,m.vr)(D)}).then((function(s){O((0,r.Z)((0,r.Z)({},S),{},{openSnackbar:!0,success:!0,message:"Assigned order successfully!"})),(0,m.r7)((0,m.JU)(t,"orders",e),{assigned:!0}).then((function(e){n("/dashboards/orders")})).catch((function(e){O((0,r.Z)((0,r.Z)({},S),{},{openSnackbar:!0,success:!1,message:"Failed to assign user."})),n("/dashboards/orders")}))})).catch((function(e){O((0,r.Z)((0,r.Z)({},S),{},{openSnackbar:!0,success:!1,message:"Failed to assign user."})),n("/dashboards/orders")}))}return(0,o.useEffect)((function(){function r(){return(r=(0,s.Z)(c().mark((function r(){var s,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.QT)((0,m.JU)(t,"orders",e));case 2:(s=r.sent).exists()?(a=(0,x.a)(s),W((function(e){return a.getOrder()}))):n("/404");case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[t,e,n]),(0,o.useEffect)((function(){function e(){return(e=(0,s.Z)(c().mark((function e(){var n,r,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],r=[],e.next=4,(0,m.PL)((0,m.hJ)(t,"accounts"));case 4:return s=e.sent,e.next=7,(0,m.PL)((0,m.hJ)(t,"delivery"));case 7:e.sent.forEach((function(e){var t=(0,p.$)(e);n.push(t.getRider())})),s.forEach((function(e){var t=(0,g.B)(e);n.forEach((function(e){var n=t.getUser();if(e.riderId===n.userId){var s=new p.Z(e);s.setAccount(n),r.push(s.getRider())}}))})),y((function(e){return r}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u.q,{children:(0,E.jsx)("title",{children:"Riders"})}),(0,E.jsxs)(d.Z,{children:[(0,E.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:5,marginBottom:3},children:[(0,E.jsx)(h.Z,{variant:"h1",color:"primary",children:"Choose Rider"}),(0,E.jsx)(f.Z,{variant:"contained",startIcon:(0,E.jsx)(J.Z,{}),onClick:function(e){return n("/dashboards/orders")},children:"Back"})]}),(0,E.jsx)(H,{users:b,demoteToUser:function(e){return P(e)}})]}),(0,E.jsx)(F.Z,{openSnackbar:S.openSnackbar,success:S.success,message:S.message,setOpenSnackbar:function(e){return O((0,r.Z)((0,r.Z)({},S),{},{openSnackbar:e}))}})]})}},5299:function(e,t,n){var r=n(5318);t.Z=void 0;var s=r(n(5649)),a=n(184),i=(0,s.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackTwoTone");t.Z=i},8986:function(e,t,n){var r=n(5318);t.Z=void 0;var s=r(n(5649)),a=n(184),i=(0,s.default)([(0,a.jsx)("path",{d:"M5 5v14h14V5H5zm11 9h-4v3l-5-5 5-5v3h4v4z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"m12 7-5 5 5 5v-3h4v-4h-4zm7-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64S3 4.72 3 5v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"},"1")],"AssignmentReturnTwoTone");t.Z=i}}]);
//# sourceMappingURL=126.e96a0238.chunk.js.map