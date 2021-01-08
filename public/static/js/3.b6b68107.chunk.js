(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[3],{102:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),l=a(8),i=a(7),o=a(0),c=a.n(o),u=a(3),d=a(16),s=a(53),p=a(97),m=a.n(p),h=a(33),v=function(e){return c.a.createElement("div",{className:m.a.CheckoutSummary},c.a.createElement("h2",null,"We hope your burger tastes well!"),c.a.createElement("div",{style:{width:"100%",margin:"auto"}},c.a.createElement(s.a,{ingredients:e.ingredients})),c.a.createElement(h.a,{type:"Danger",clicked:e.checkoutCancelled},"CANCEL"),c.a.createElement(h.a,{type:"Success",clicked:e.checkoutContinued},"CONTINUE"))},g=a(24),f=a(98),C=a.n(f),b=a(19),y=a(34),E=a(95),k=a(42),j=a(17),I=a(4),O=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={formIsValid:!1,orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",valid:!1,validation:{required:!0},touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",valid:!1,validation:{required:!0},touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Postal Code"},value:"",valid:!1,validation:{required:!0,minLength:4,maxLength:6},touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",valid:!1,validation:{required:!0},touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Address"},value:"",valid:!1,validation:{required:!0},touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest",selected:!0},{value:"cheapest",displayValue:"Cheapest",selected:!1}]},value:"fastest",valid:!0,validation:{}}}},e.inputChangeHandler=function(t,a){var n=Object(I.b)(e.state.orderForm[a],{value:t.target.value,valid:Object(I.a)(t.target.value,e.state.orderForm[a].validation),touched:!0}),r=Object(I.b)(e.state.orderForm,Object(g.a)({},a,n)),l=!0;for(var i in r)l=r[i].valid&&l;e.setState({orderForm:r,formIsValid:l})},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ings,price:e.props.price.toFixed(2),orderData:a,userId:e.props.userId};e.props.onPurchaseBurger(r,e.props.token)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=c.a.createElement("form",null,t.map((function(t){return c.a.createElement(E.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangeHandler(a,t.id)}})})),c.a.createElement(h.a,{disabled:!this.state.formIsValid,type:"Success",clicked:this.orderHandler},"ORDER"));return this.props.loading&&(n=c.a.createElement(y.a,null)),c.a.createElement("div",{className:C.a.ContactData},c.a.createElement("h4",null,"Enter your contact details"),n)}}]),a}(o.Component),_=Object(d.b)((function(e){return{ings:e.bgrBldr.ingredients,price:e.bgrBldr.totalPrice,loading:e.order.loading,error:e.order.error,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onPurchaseBurger:function(t,a){return e(j.g(t,a))}}}))(Object(k.a)(O,b.a)),N=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.push("/checkout/contact-details")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=c.a.createElement(u.a,{to:"/"});if(this.props.ingredients){var t=this.props.purchased?c.a.createElement(u.a,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(v,{ingredients:this.props.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),c.a.createElement(u.b,{path:this.props.match.path+"/contact-details",component:_}))}return e}}]),a}(o.Component);t.default=Object(d.b)((function(e){return{ingredients:e.bgrBldr.ingredients,purchased:e.order.purchased}}))(N)},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(96),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)}},96:function(e,t,a){e.exports={Input:"Input_Input__36Cot",Label:"Input_Label__2FNn6",InputElement:"Input_InputElement__3q0LN",Invalid:"Input_Invalid__27vn7"}},97:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__24Y8g"}},98:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__3uj1Z",Input:"ContactData_Input__qivNO"}}}]);
//# sourceMappingURL=3.b6b68107.chunk.js.map