(this.webpackJsonptranslate=this.webpackJsonptranslate||[]).push([[0],{146:function(e,t,a){e.exports=a(331)},167:function(e,t,a){},170:function(e,t,a){},175:function(e,t,a){},252:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),i=a.n(r),s=a(57),c=a(9),o=a(47),h=a(48),u=a(55),d=a(50),m=a(49),p=a(52),f=a.n(p),v=(a(167),a(337)),E=a(341),g=a(340),w=a(342),b=a(339),y=a(338),k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).handleResize=function(e){n.setState({width:e.target.innerWidth,height:e.target.innerHeight})};var l=decodeURIComponent(n.props.location.search);return l=l.substr(1,l.length),n.state={width:window.innerWidth,height:window.innerHeight,file:l,origin:"",translation:""},n.translate=n.translate.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.handleResize.bind(this)),this.state.file&&f.a.get("http://101.200.153.106:3389/translate",{params:{file:this.state.file}}).then((function(t){"string"===typeof t.data?alert(t.data):e.setState({origin:t.data.trans_result[0].src,translation:t.data.trans_result[0].dst})})).catch((function(e){console.log(e)}))}},{key:"handleTextareaChange",value:function(e){this.setState({origin:e.target.value,translation:""})}},{key:"translate",value:function(){var e=this;0!==this.state.origin.length&&f.a.get("http://101.200.153.106:3389/translate",{params:{origin:this.state.origin}}).then((function(t){if("string"===typeof t.data)alert(t.data);else{for(var a=t.data.trans_result,n="",l=0;l<a.length;l++)n+=a[l].dst+"\n";e.setState({translation:n})}})).catch((function(e){console.log(e)}))}},{key:"handelClick",value:function(){this.translate()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"fatherBox",style:{height:this.state.height,width:this.state.width,backgroundColor:"rgb(255,255,255)"}},l.a.createElement("div",{className:"head"},l.a.createElement("span",null,l.a.createElement(v.a,null)),l.a.createElement("div",{className:"head-title"},l.a.createElement("span",null,"R"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"c"),l.a.createElement("span",null,"t"),l.a.createElement("span",null,"Translate")),l.a.createElement("span",null,l.a.createElement(E.a,null))),l.a.createElement("div",{className:"extensions"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.a,null)),l.a.createElement("span",null,"Text")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(w.a,null)),l.a.createElement("span",null,"File")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(b.a,null)),l.a.createElement("span",null,"IOS")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(y.a,null)),l.a.createElement("span",null,"Android")),l.a.createElement("div",null,l.a.createElement("span",null,"Click to download App"))),l.a.createElement("div",{className:"translate"},l.a.createElement("div",{className:"translate-options"},l.a.createElement("span",{style:{width:this.state.width/2-20}},"Original Text"),l.a.createElement("span",{style:{width:this.state.width/2-20}},"Translation Text")),l.a.createElement("div",{className:"translate-body"},l.a.createElement("textarea",{style:{width:this.state.width/2-20},className:"translateInput",onChange:function(t){return e.handleTextareaChange(t)},value:this.state.origin}),l.a.createElement("textarea",{style:{width:this.state.width/2-21},className:"translateResult",readOnly:!0,value:this.state.translation}))),l.a.createElement("div",{className:"submit"},l.a.createElement("button",{className:"translateBtn",onClick:function(){return e.handelClick()}},"translate")))}}]),a}(l.a.Component),C=(a(170),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={width:window.innerWidth,height:window.innerHeight},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.handelResize()}))}},{key:"handelResize",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return l.a.createElement("div",{className:"home",style:{width:.99*this.state.width,height:.99*this.state.height}},l.a.createElement("ul",{className:"apps"},l.a.createElement("li",null,l.a.createElement(s.b,{to:{pathname:"/translate"}},l.a.createElement("span",null,"Translate"))),l.a.createElement("li",null,l.a.createElement(s.b,{to:{pathname:"/markdown"}},l.a.createElement("span",null,"Markdown"))),l.a.createElement("li",null,l.a.createElement(s.b,{to:{pathname:"/invoice"}},l.a.createElement("span",null,"Invoice")))))}}]),a}(l.a.Component)),O=(a(175),a(131)),j=a.n(O),R=a(132),x=a.n(R),N=(a(230),a(335)),T=a(95),S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var l=decodeURIComponent(n.props.location.search);return l=l.substr(1,l.length),n.state={mdParser:new x.a,file:l,value:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.file&&f.a.get("http://101.200.153.106:3389/markdown",{params:{file:this.state.file}}).then((function(t){e.setState({value:t.data})})).catch((function(e){console.log(e)}))}},{key:"handleEditorChange",value:function(e){this.setState({value:e.text})}},{key:"handleClick",value:function(){f.a.post("http://101.200.153.106:3389/markdown",{params:{file:this.state.file,data:this.state.value}}).catch((function(e){N.b.error(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{style:{height:400}},l.a.createElement(j.a,{style:{width:"100%",height:"100%"},value:this.state.value,renderHTML:function(t){return e.state.mdParser.render(t)},onChange:function(t){return e.handleEditorChange(t)}})),l.a.createElement("div",{style:{marginTop:20,textAlign:"center"}},l.a.createElement(T.a,{type:"primary",htmlType:"submit",onClick:function(){return e.handleClick()}},"Submit")))}}]),a}(l.a.Component),I=(a(252),a(253),a(333)),z=a(334),H=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).handleResize=function(e){n.setState({width:e.target.innerWidth,height:e.target.innerHeight})};var r=decodeURIComponent(n.props.location.search);return r=r.substr(1,r.length),n.state={width:window.innerWidth,height:window.innerHeight,file:r,ocrResult:""},n.formRef=l.a.createRef(),n.generateForm=n.generateForm.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.handleResize.bind(this)),f.a.get("http://101.200.153.106:3389/ocr",{params:{fileName:this.state.file,ocrType:"receipt"}}).then((function(t){console.log(t.status);for(var a="",n=0;n<t.data.trans_result.length;n++)a+=t.data.trans_result[n].dst+"\n";e.generateForm(a)})).catch((function(e){console.log(e)}))}},{key:"generateForm",value:function(e){for(var t={},a=e.split("\n"),n=0;n<a.length-1;n++){var r=a[n].split(":");t[r[0]]=r[1]}var i=[];for(var s in t)i.push(s);var c=i.map((function(e){return l.a.createElement(I.a.Item,{key:e,name:e,label:e,rules:[{}]},l.a.createElement(z.a,null))}));this.setState({formItems:c}),this.formRef.current.setFieldsValue(t),N.b.success("autofill complete.")}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:this.state.height,width:this.state.width,backgroundColor:"rgb(255,255,255)"}},l.a.createElement("div",null),l.a.createElement("div",{style:{width:.6*this.state.width,margin:"50px auto",border:"1px solid red",paddingRight:10}},l.a.createElement(I.a,{ref:this.formRef,labelCol:{span:10}},this.state.formItems)))}}]),a}(l.a.Component);var F=function(){return l.a.createElement(s.a,null,l.a.createElement(c.a,{exact:!0,path:"/",component:C}),l.a.createElement(c.a,{path:"/translate",component:k}),l.a.createElement(c.a,{path:"/markdown",component:S}),l.a.createElement(c.a,{path:"/invoice",component:H}))};i.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.3e3f20a4.chunk.js.map