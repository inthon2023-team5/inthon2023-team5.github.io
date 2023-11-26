"use strict";(self.webpackChunkAGORA=self.webpackChunkAGORA||[]).push([[465],{2118:function(e,o,a){var t=a(5318);o.Z=void 0;var c=t(a(5649)),l=a(184),n=(0,c.default)((0,l.jsx)("path",{d:"M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-4 1.8-1 .6-1-.6V3h2v9.23z"}),"MilitaryTech");o.Z=n},1918:function(e,o,a){a.d(o,{Z:function(){return x}});var t=a(4942),c=a(3366),l=a(7462),n=a(2791),r=a(8182),i=a(4419),d=a(2065),s=a(9201),p=a(184),u=(0,s.Z)((0,p.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=a(2071),Z=a(4036),b=a(3701),v=a(1402),g=a(6934),f=a(1217);function h(e){return(0,f.Z)("MuiChip",e)}var y=(0,a(5878).Z)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),C=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],k=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState,c=a.color,l=a.clickable,n=a.onDelete,r=a.size,i=a.variant;return[(0,t.Z)({},"& .".concat(y.avatar),o.avatar),(0,t.Z)({},"& .".concat(y.avatar),o["avatar".concat((0,Z.Z)(r))]),(0,t.Z)({},"& .".concat(y.avatar),o["avatarColor".concat((0,Z.Z)(c))]),(0,t.Z)({},"& .".concat(y.icon),o.icon),(0,t.Z)({},"& .".concat(y.icon),o["icon".concat((0,Z.Z)(r))]),(0,t.Z)({},"& .".concat(y.icon),o["iconColor".concat((0,Z.Z)(c))]),(0,t.Z)({},"& .".concat(y.deleteIcon),o.deleteIcon),(0,t.Z)({},"& .".concat(y.deleteIcon),o["deleteIcon".concat((0,Z.Z)(r))]),(0,t.Z)({},"& .".concat(y.deleteIcon),o["deleteIconColor".concat((0,Z.Z)(c))]),(0,t.Z)({},"& .".concat(y.deleteIcon),o["deleteIconOutlinedColor".concat((0,Z.Z)(c))]),o.root,o["size".concat((0,Z.Z)(r))],o["color".concat((0,Z.Z)(c))],l&&o.clickable,l&&"default"!==c&&o["clickableColor".concat((0,Z.Z)(c),")")],n&&o.deletable,n&&"default"!==c&&o["deletableColor".concat((0,Z.Z)(c))],o[i],"outlined"===i&&o["outlined".concat((0,Z.Z)(c))]]}})((function(e){var o,a=e.theme,c=e.ownerState,n=(0,d.Fq)(a.palette.text.primary,.26);return(0,l.Z)((o={maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,t.Z)(o,"&.".concat(y.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),(0,t.Z)(o,"& .".concat(y.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),(0,t.Z)(o,"& .".concat(y.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),(0,t.Z)(o,"& .".concat(y.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),(0,t.Z)(o,"& .".concat(y.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),(0,t.Z)(o,"& .".concat(y.icon),(0,l.Z)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===c.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==c.color&&{color:"inherit"})),(0,t.Z)(o,"& .".concat(y.deleteIcon),(0,l.Z)({WebkitTapHighlightColor:"transparent",color:n,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,d.Fq)(n,.4)}},"small"===c.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==c.color&&{color:(0,d.Fq)(a.palette[c.color].contrastText,.7),"&:hover, &:active":{color:a.palette[c.color].contrastText}})),o),"small"===c.size&&{height:24},"default"!==c.color&&{backgroundColor:a.palette[c.color].main,color:a.palette[c.color].contrastText},c.onDelete&&(0,t.Z)({},"&.".concat(y.focusVisible),{backgroundColor:(0,d.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),c.onDelete&&"default"!==c.color&&(0,t.Z)({},"&.".concat(y.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var o,a=e.theme,c=e.ownerState;return(0,l.Z)({},c.clickable&&(o={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:(0,d.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},(0,t.Z)(o,"&.".concat(y.focusVisible),{backgroundColor:(0,d.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),(0,t.Z)(o,"&:active",{boxShadow:a.shadows[1]}),o),c.clickable&&"default"!==c.color&&(0,t.Z)({},"&:hover, &.".concat(y.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var o,a,c=e.theme,n=e.ownerState;return(0,l.Z)({},"outlined"===n.variant&&(o={backgroundColor:"transparent",border:"1px solid ".concat("light"===c.palette.mode?c.palette.grey[400]:c.palette.grey[700])},(0,t.Z)(o,"&.".concat(y.clickable,":hover"),{backgroundColor:c.palette.action.hover}),(0,t.Z)(o,"&.".concat(y.focusVisible),{backgroundColor:c.palette.action.focus}),(0,t.Z)(o,"& .".concat(y.avatar),{marginLeft:4}),(0,t.Z)(o,"& .".concat(y.avatarSmall),{marginLeft:2}),(0,t.Z)(o,"& .".concat(y.icon),{marginLeft:4}),(0,t.Z)(o,"& .".concat(y.iconSmall),{marginLeft:2}),(0,t.Z)(o,"& .".concat(y.deleteIcon),{marginRight:5}),(0,t.Z)(o,"& .".concat(y.deleteIconSmall),{marginRight:3}),o),"outlined"===n.variant&&"default"!==n.color&&(a={color:c.palette[n.color].main,border:"1px solid ".concat((0,d.Fq)(c.palette[n.color].main,.7))},(0,t.Z)(a,"&.".concat(y.clickable,":hover"),{backgroundColor:(0,d.Fq)(c.palette[n.color].main,c.palette.action.hoverOpacity)}),(0,t.Z)(a,"&.".concat(y.focusVisible),{backgroundColor:(0,d.Fq)(c.palette[n.color].main,c.palette.action.focusOpacity)}),(0,t.Z)(a,"& .".concat(y.deleteIcon),{color:(0,d.Fq)(c.palette[n.color].main,.7),"&:hover, &:active":{color:c.palette[n.color].main}}),a))})),S=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,o){var a=e.ownerState.size;return[o.label,o["label".concat((0,Z.Z)(a))]]}})((function(e){var o=e.ownerState;return(0,l.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===o.size&&{paddingLeft:8,paddingRight:8})}));function I(e){return"Backspace"===e.key||"Delete"===e.key}var x=n.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiChip"}),t=a.avatar,d=a.className,s=a.clickable,g=a.color,f=void 0===g?"default":g,y=a.component,x=a.deleteIcon,w=a.disabled,z=void 0!==w&&w,R=a.icon,O=a.label,L=a.onClick,V=a.onDelete,D=a.onKeyDown,M=a.onKeyUp,T=a.size,F=void 0===T?"medium":T,N=a.variant,P=void 0===N?"filled":N,q=(0,c.Z)(a,C),E=n.useRef(null),j=(0,m.Z)(E,o),K=function(e){e.stopPropagation(),V&&V(e)},A=!(!1===s||!L)||s,H="small"===F,U=A||V?b.Z:y||"div",W=(0,l.Z)({},a,{component:U,disabled:z,size:F,color:f,onDelete:!!V,clickable:A,variant:P}),G=function(e){var o=e.classes,a=e.disabled,t=e.size,c=e.color,l=e.onDelete,n=e.clickable,r=e.variant,d={root:["root",r,a&&"disabled","size".concat((0,Z.Z)(t)),"color".concat((0,Z.Z)(c)),n&&"clickable",n&&"clickableColor".concat((0,Z.Z)(c)),l&&"deletable",l&&"deletableColor".concat((0,Z.Z)(c)),"".concat(r).concat((0,Z.Z)(c))],label:["label","label".concat((0,Z.Z)(t))],avatar:["avatar","avatar".concat((0,Z.Z)(t)),"avatarColor".concat((0,Z.Z)(c))],icon:["icon","icon".concat((0,Z.Z)(t)),"iconColor".concat((0,Z.Z)(c))],deleteIcon:["deleteIcon","deleteIcon".concat((0,Z.Z)(t)),"deleteIconColor".concat((0,Z.Z)(c)),"deleteIconOutlinedColor".concat((0,Z.Z)(c))]};return(0,i.Z)(d,h,o)}(W),B=U===b.Z?(0,l.Z)({component:y||"div",focusVisibleClassName:G.focusVisible},V&&{disableRipple:!0}):{},J=null;if(V){var Q=(0,r.Z)("default"!==f&&("outlined"===P?G["deleteIconOutlinedColor".concat((0,Z.Z)(f))]:G["deleteIconColor".concat((0,Z.Z)(f))]),H&&G.deleteIconSmall);J=x&&n.isValidElement(x)?n.cloneElement(x,{className:(0,r.Z)(x.props.className,G.deleteIcon,Q),onClick:K}):(0,p.jsx)(u,{className:(0,r.Z)(G.deleteIcon,Q),onClick:K})}var X=null;t&&n.isValidElement(t)&&(X=n.cloneElement(t,{className:(0,r.Z)(G.avatar,t.props.className)}));var Y=null;return R&&n.isValidElement(R)&&(Y=n.cloneElement(R,{className:(0,r.Z)(G.icon,R.props.className)})),(0,p.jsxs)(k,(0,l.Z)({as:U,className:(0,r.Z)(G.root,d),disabled:!(!A||!z)||void 0,onClick:L,onKeyDown:function(e){e.currentTarget===e.target&&I(e)&&e.preventDefault(),D&&D(e)},onKeyUp:function(e){e.currentTarget===e.target&&(V&&I(e)?V(e):"Escape"===e.key&&E.current&&E.current.blur()),M&&M(e)},ref:j,ownerState:W},B,q,{children:[X||Y,(0,p.jsx)(S,{className:(0,r.Z)(G.label),ownerState:W,children:O}),J]}))}))}}]);
//# sourceMappingURL=465.5cc91831.chunk.js.map