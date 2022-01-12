"use strict";(self.webpackChunkbutil_admin=self.webpackChunkbutil_admin||[]).push([[24],{9267:function(n,t,r){r.d(t,{H:function(){return a}});var e=r(5671),i=r(3144),o=function(){function n(t){(0,e.Z)(this,n),this.product=void 0,this.product=t}return(0,i.Z)(n,[{key:"getProduct",value:function(){return this.product}},{key:"setImage",value:function(n){this.product.image=n}}]),n}();function a(n){var t=n.data(),r={productId:n.id,categoryId:t.categoryId,content:t.content,description:t.description,image:t.image,name:t.name,price:t.price,promo:t.promo,stocks:t.stocks,storageLife:t.storageLife,type:t.type};return new o(r)}t.Z=o},8024:function(n,t,r){r.r(t),r.d(t,{default:function(){return X}});var e=r(5861),i=r(885),o=r(7757),a=r.n(o),c=r(2791),s=r(6907),d=r(6445),u=r(1889),m=r(8530),p=r(890),l=r(4518),f=r(6871),g=r(376),v=r(9062),x=r(9267),h=r(2419),Z=r(7621),w=r(3366),S=r(7462),b=(r(2007),r(8182)),M=r(9468),C=r(33),W=r(1894),k=r(1920),j=r(6309);function y(n){return(0,k.Z)("MuiCardActions",n)}(0,j.Z)("MuiCardActions",["root","spacing"]);var R=r(184),N=["disableSpacing","className"],P=(0,C.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,t){var r=n.ownerState;return[t.root,!r.disableSpacing&&t.spacing]}})((function(n){var t=n.ownerState;return(0,S.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),G=c.forwardRef((function(n,t){var r=(0,W.Z)({props:n,name:"MuiCardActions"}),e=r.disableSpacing,i=void 0!==e&&e,o=r.className,a=(0,w.Z)(r,N),c=(0,S.Z)({},r,{disableSpacing:i}),s=function(n){var t=n.classes,r={root:["root",!n.disableSpacing&&"spacing"]};return(0,M.Z)(r,y,t)}(c);return(0,R.jsx)(P,(0,S.Z)({className:(0,b.Z)(s.root,o),ownerState:c,ref:t},a))}));function z(n){return(0,k.Z)("MuiCardContent",n)}(0,j.Z)("MuiCardContent",["root"]);var I=["className","component"],L=(0,C.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),B=c.forwardRef((function(n,t){var r=(0,W.Z)({props:n,name:"MuiCardContent"}),e=r.className,i=r.component,o=void 0===i?"div":i,a=(0,w.Z)(r,I),c=(0,S.Z)({},r,{component:o}),s=function(n){var t=n.classes;return(0,M.Z)({root:["root"]},z,t)}(c);return(0,R.jsx)(L,(0,S.Z)({as:o,className:(0,b.Z)(s.root,e),ownerState:c,ref:t},a))}));function A(n){return(0,k.Z)("MuiCardMedia",n)}(0,j.Z)("MuiCardMedia",["root","media","img"]);var O=["children","className","component","image","src","style"],F=(0,C.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(n,t){var r=n.ownerState,e=r.isMediaComponent,i=r.isImageComponent;return[t.root,e&&t.media,i&&t.img]}})((function(n){var t=n.ownerState;return(0,S.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),H=["video","audio","picture","iframe","img"],T=["picture","img"],E=c.forwardRef((function(n,t){var r=(0,W.Z)({props:n,name:"MuiCardMedia"}),e=r.children,i=r.className,o=r.component,a=void 0===o?"div":o,c=r.image,s=r.src,d=r.style,u=(0,w.Z)(r,O),m=-1!==H.indexOf(a),p=!m&&c?(0,S.Z)({backgroundImage:'url("'.concat(c,'")')},d):d,l=(0,S.Z)({},r,{component:a,isMediaComponent:m,isImageComponent:-1!==T.indexOf(a)}),f=function(n){var t=n.classes,r={root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]};return(0,M.Z)(r,A,t)}(l);return(0,R.jsx)(F,(0,S.Z)({className:(0,b.Z)(f.root,i),as:a,role:!m&&c?"image":void 0,ref:t,style:p,ownerState:l,src:m?c||s:void 0},u,{children:e}))}));var V=function(n){var t=n.product,r=c.useState(!1),e=(0,i.Z)(r,2),o=e[0],a=e[1],s=(0,f.s0)();return(0,R.jsxs)(Z.Z,{sx:{maxWidth:345},children:[(0,R.jsx)(E,{component:"img",alt:"green iguana",height:"200",image:t.image}),(0,R.jsxs)(B,{children:[(0,R.jsx)(p.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t.name}),t.description.length>90?(0,R.jsxs)(p.Z,{variant:"body2",color:"text.secondary",children:[o?t.description:t.description.slice(0,100)+" ...",(0,R.jsx)("strong",{onClick:function(n){return a(!o)},style:{cursor:"pointer"},children:o?" Show less":" Show more"})]}):(0,R.jsx)(p.Z,{variant:"body2",color:"text.secondary",children:t.description})]}),(0,R.jsx)(G,{children:(0,R.jsx)(l.Z,{size:"small",onClick:function(n){return s("/dashboards/products/edit/"+t.productId)},children:"View"})})]})};var X=function(){var n=(0,g.h)().database,t=c.useState([]),r=(0,i.Z)(t,2),o=r[0],Z=r[1],w=(0,f.s0)();return c.useEffect((function(){function t(){return(t=(0,e.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,(0,v.PL)((0,v.hJ)(n,"products"));case 3:t.sent.forEach((function(n){var t=(0,x.H)(n);r.push(t.getProduct())})),Z((function(n){return r}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(s.q,{children:(0,R.jsx)("title",{children:"Products"})}),(0,R.jsxs)(d.Z,{sx:{mb:5},children:[(0,R.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:5,marginBottom:3},children:[(0,R.jsx)(p.Z,{variant:"h1",color:"primary",children:"Products"}),(0,R.jsx)(l.Z,{variant:"contained",startIcon:(0,R.jsx)(h.Z,{}),onClick:function(n){return w("/dashboards/products/create")},children:"Add Product"})]}),(0,R.jsx)(u.ZP,{container:!0,spacing:2,children:o.map((function(n,t){return(0,R.jsx)(u.ZP,{item:!0,sm:12,md:3,children:(0,R.jsx)(V,{product:n})},t)}))})]})]})}},2419:function(n,t,r){var e=r(5318);t.Z=void 0;var i=e(r(5649)),o=r(184),a=(0,i.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=a},7621:function(n,t,r){r.d(t,{Z:function(){return v}});var e=r(7462),i=r(3366),o=r(2791),a=(r(2007),r(8182)),c=r(9468),s=r(33),d=r(1894),u=r(703),m=r(1920);function p(n){return(0,m.Z)("MuiCard",n)}(0,r(6309).Z)("MuiCard",["root"]);var l=r(184),f=["className","raised"],g=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,t){return t.root}})((function(){return{overflow:"hidden"}})),v=o.forwardRef((function(n,t){var r=(0,d.Z)({props:n,name:"MuiCard"}),o=r.className,s=r.raised,u=void 0!==s&&s,m=(0,i.Z)(r,f),v=(0,e.Z)({},r,{raised:u}),x=function(n){var t=n.classes;return(0,c.Z)({root:["root"]},p,t)}(v);return(0,l.jsx)(g,(0,e.Z)({className:(0,a.Z)(x.root,o),elevation:u?8:void 0,ref:t,ownerState:v},m))}))},6445:function(n,t,r){r.d(t,{Z:function(){return x}});var e=r(4942),i=r(3366),o=r(7462),a=r(2791),c=(r(2007),r(8182)),s=r(9468),d=r(1894),u=r(33),m=r(1920);function p(n){return(0,m.Z)("MuiContainer",n)}(0,r(6309).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var l=r(4036),f=r(184),g=["className","component","disableGutters","fixed","maxWidth"],v=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,t){var r=n.ownerState;return[t.root,t["maxWidth".concat((0,l.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(n){var t=n.theme,r=n.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,e.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(n){var t=n.theme;return n.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(n,r){var e=t.breakpoints.values[r];return 0!==e&&(n[t.breakpoints.up(r)]={maxWidth:"".concat(e).concat(t.breakpoints.unit)}),n}),{})}),(function(n){var t=n.theme,r=n.ownerState;return(0,o.Z)({},"xs"===r.maxWidth&&(0,e.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,e.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),x=a.forwardRef((function(n,t){var r=(0,d.Z)({props:n,name:"MuiContainer"}),e=r.className,a=r.component,u=void 0===a?"div":a,m=r.disableGutters,x=void 0!==m&&m,h=r.fixed,Z=void 0!==h&&h,w=r.maxWidth,S=void 0===w?"lg":w,b=(0,i.Z)(r,g),M=(0,o.Z)({},r,{component:u,disableGutters:x,fixed:Z,maxWidth:S}),C=function(n){var t=n.classes,r=n.fixed,e=n.disableGutters,i=n.maxWidth,o={root:["root",i&&"maxWidth".concat((0,l.Z)(String(i))),r&&"fixed",e&&"disableGutters"]};return(0,s.Z)(o,p,t)}(M);return(0,f.jsx)(v,(0,o.Z)({as:u,ownerState:M,className:(0,c.Z)(C.root,e),ref:t},b))}))},1889:function(n,t,r){r.d(t,{ZP:function(){return M}});var e=r(4942),i=r(3366),o=r(7462),a=r(2791),c=(r(2007),r(8182)),s=r(9247),d=r(3872),u=r(9468),m=r(33),p=r(1894);var l=a.createContext(),f=r(2982),g=r(1920);function v(n){return(0,g.Z)("MuiGrid",n)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=(0,r(6309).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,f.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,f.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,f.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,f.Z)(x.map((function(n){return"grid-xs-".concat(n)}))),(0,f.Z)(x.map((function(n){return"grid-sm-".concat(n)}))),(0,f.Z)(x.map((function(n){return"grid-md-".concat(n)}))),(0,f.Z)(x.map((function(n){return"grid-lg-".concat(n)}))),(0,f.Z)(x.map((function(n){return"grid-xl-".concat(n)}))))),Z=r(184),w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(n){var t=parseFloat(n);return"".concat(t).concat(String(n).replace(String(t),"")||"px")}var b=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,t){var r=n.ownerState,e=r.container,i=r.direction,o=r.item,a=r.lg,c=r.md,s=r.sm,d=r.spacing,u=r.wrap,m=r.xl,p=r.xs,l=r.zeroMinWidth;return[t.root,e&&t.container,o&&t.item,l&&t.zeroMinWidth,e&&0!==d&&t["spacing-xs-".concat(String(d))],"row"!==i&&t["direction-xs-".concat(String(i))],"wrap"!==u&&t["wrap-xs-".concat(String(u))],!1!==p&&t["grid-xs-".concat(String(p))],!1!==s&&t["grid-sm-".concat(String(s))],!1!==c&&t["grid-md-".concat(String(c))],!1!==a&&t["grid-lg-".concat(String(a))],!1!==m&&t["grid-xl-".concat(String(m))]]}})((function(n){var t=n.ownerState;return(0,o.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"nowrap"===t.wrap&&{flexWrap:"nowrap"},"reverse"===t.wrap&&{flexWrap:"wrap-reverse"})}),(function(n){var t=n.theme,r=n.ownerState;return(0,s.k9)({theme:t},r.direction,(function(n){var t={flexDirection:n};return 0===n.indexOf("column")&&(t["& > .".concat(h.item)]={maxWidth:"none"}),t}))}),(function(n){var t=n.theme,r=n.ownerState,i=r.container,o=r.rowSpacing,a={};return i&&0!==o&&(a=(0,s.k9)({theme:t},o,(function(n){var r=t.spacing(n);return"0px"!==r?(0,e.Z)({marginTop:"-".concat(S(r))},"& > .".concat(h.item),{paddingTop:S(r)}):{}}))),a}),(function(n){var t=n.theme,r=n.ownerState,i=r.container,o=r.columnSpacing,a={};return i&&0!==o&&(a=(0,s.k9)({theme:t},o,(function(n){var r=t.spacing(n);return"0px"!==r?(0,e.Z)({width:"calc(100% + ".concat(S(r),")"),marginLeft:"-".concat(S(r))},"& > .".concat(h.item),{paddingLeft:S(r)}):{}}))),a}),(function(n){var t=n.theme,r=n.ownerState;return t.breakpoints.keys.reduce((function(n,e){return function(n,t,r,e){var i=e[r];if(i){var a={};if(!0===i)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:e.columns,base:t.breakpoints.values}),d="".concat(Math.round(i/c[r]*1e8)/1e6,"%"),u={};if(e.container&&e.item&&0!==e.columnSpacing){var m=t.spacing(e.columnSpacing);if("0px"!==m){var p="calc(".concat(d," + ").concat(S(m),")");u={flexBasis:p,maxWidth:p}}}a=(0,o.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}0===t.breakpoints.values[r]?Object.assign(n,a):n[t.breakpoints.up(r)]=a}}(n,t,e,r),n}),{})})),M=a.forwardRef((function(n,t){var r,e=(0,p.Z)({props:n,name:"MuiGrid"}),s=(0,d.Z)(e),m=s.className,f=s.columns,g=void 0===f?12:f,x=s.columnSpacing,h=s.component,S=void 0===h?"div":h,M=s.container,C=void 0!==M&&M,W=s.direction,k=void 0===W?"row":W,j=s.item,y=void 0!==j&&j,R=s.lg,N=void 0!==R&&R,P=s.md,G=void 0!==P&&P,z=s.rowSpacing,I=s.sm,L=void 0!==I&&I,B=s.spacing,A=void 0===B?0:B,O=s.wrap,F=void 0===O?"wrap":O,H=s.xl,T=void 0!==H&&H,E=s.xs,V=void 0!==E&&E,X=s.zeroMinWidth,_=void 0!==X&&X,q=(0,i.Z)(s,w),D=z||A,J=x||A,$=a.useContext(l)||g,K=(0,o.Z)({},s,{columns:$,container:C,direction:k,item:y,lg:N,md:G,sm:L,rowSpacing:D,columnSpacing:J,wrap:F,xl:T,xs:V,zeroMinWidth:_}),Q=function(n){var t=n.classes,r=n.container,e=n.direction,i=n.item,o=n.lg,a=n.md,c=n.sm,s=n.spacing,d=n.wrap,m=n.xl,p=n.xs,l={root:["root",r&&"container",i&&"item",n.zeroMinWidth&&"zeroMinWidth",r&&0!==s&&"spacing-xs-".concat(String(s)),"row"!==e&&"direction-xs-".concat(String(e)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==p&&"grid-xs-".concat(String(p)),!1!==c&&"grid-sm-".concat(String(c)),!1!==a&&"grid-md-".concat(String(a)),!1!==o&&"grid-lg-".concat(String(o)),!1!==m&&"grid-xl-".concat(String(m))]};return(0,u.Z)(l,v,t)}(K);return r=(0,Z.jsx)(b,(0,o.Z)({ownerState:K,className:(0,c.Z)(Q.root,m),as:S,ref:t},q)),12!==$?(0,Z.jsx)(l.Provider,{value:$,children:r}):r}))}}]);
//# sourceMappingURL=24.ee432919.chunk.js.map