(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(51)},38:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),i=n.n(c),o=(n(38),n(10)),s=n(11),u=n(14),l=n(12),p=n(13),h=n(17),C=n(18),E=n(24),f=n(9),d=n(6),y=Object.freeze({FETCH_CITY:"FETCH_CITY",FETCH_CITY_SUCCESS:"FETCH_CITY_SUCCESS",FETCH_CITY_FAIL:"FETCH_CITY_FAIL",SEARCH_CITY:"SEARCH_CITY",SEARCH_CITY_SUCCESS:"SEARCH_CITY_SUCCESS",SEARCH_CITY_FAIL:"SEARCH_CITY_FAIL",FETCH_CITY_START:"FETCH_CITY_START",FETCH_CITY_STOP:"FETCH_CITY_STOP",DELETE_SEARCH_ENTITIES:"DELETE_SEARCH_ENTITIES",DELETE_CITY:"DELETE_CITY"}),_=Object.freeze({fetchCity:function(e){return{type:y.FETCH_CITY,payload:e}},fetchCitySuccess:function(e){return{type:y.FETCH_CITY_SUCCESS,payload:e}},fetchCityFail:function(e){return{type:y.FETCH_CITY_FAIL,payload:e,error:!0}},searchCity:function(e){return{type:y.SEARCH_CITY,payload:e}},searchCitySuccess:function(e){return{type:y.SEARCH_CITY_SUCCESS,payload:e}},searchCityFail:function(e){return{type:y.SEARCH_CITY_FAIL,payload:e,error:!0}},fetchCityStart:function(){return{type:y.FETCH_CITY_START}},fetchCityStop:function(){return{type:y.FETCH_CITY_STOP}},deleteSearchEntities:function(){return{type:y.DELETE_SEARCH_ENTITIES}},deleteCity:function(e){return{type:y.DELETE_CITY,payload:e}}}),T=(n(46),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r))))._onDelete=function(){var e=n.props;(0,e.onDelete)(e.id)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.country,a=e.icon,c=e.description,i=e.wind,o=e.temperature;return r.a.createElement("div",{className:"city box effect2"},r.a.createElement("p",{className:"close",onClick:this._onDelete},"x"),r.a.createElement("h3",null,t),r.a.createElement("h4",null,n),r.a.createElement("img",{className:"weather-icon",src:"https://openweathermap.org/img/w/".concat(a,".png"),alt:'"Weather '.concat(t,", ").concat(n,'"')}),r.a.createElement("p",{className:"temperature"},o," \xb0C"),r.a.createElement("p",null,i," m/s"),r.a.createElement("p",null,c))}}]),t}(a.Component)),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r))))._onDelete=function(e){(0,n.props.actions.deleteCity)(e)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.actions.fetchCity)(2643743)}},{key:"render",value:function(){var e=this,t=this.props.cities.cityEntities;return r.a.createElement("div",{className:"cities-wrapper"},t.map(function(t){var n=t.id,a=t.name,c=t.sys,i=t.wind,o=t.main,s=t.weather[0],u=s.icon,l=s.description,p=i.speed,h=o.temp;return r.a.createElement(T,{key:n,id:n,name:a,country:c.country,icon:u,description:l,wind:p,temperature:h,onDelete:e._onDelete})}))}}]),t}(a.Component),m=Object(h.b)(function(e){return{cities:e.cities}},function(e){return{actions:Object(d.b)(Object(f.a)({},_),e)}})(b),S=n(29);n(47);var O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},n._debounce=function(e){var t;return function(n){clearTimeout(t),t=setTimeout(n,e)}}(300),n._handleChange=function(e){var t=n.props.onSearch,a=e.target.value;n._debounce(function(){return t(a)}),n.setState({value:a})},n._handleSearch=function(){(0,n.props.onSearch)(n.state.value)},n._handleKeyPress=function(e){"Enter"===e.key&&n._handleSearch()},n._handleSelectCity=function(e){(0,n.props.onSelect)(e),n.setState({value:""})},n._getSearchItems=function(e){return r.a.createElement("ul",{className:"search-entities"},e.map(function(e){var t=e.id,a=e.name,c=e.sys,i=e.main,o=c.country,s=i.temp;return s=s<0?s:"+".concat(s),r.a.createElement("li",{key:t,onClick:function(){return n._handleSelectCity(t)}},"".concat(a," (").concat(o,") \xb0C ").concat(s))}))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this,t=this.state.value,n=this.props,a=n.entities,c=n.isLoading;return r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{type:"text",className:"search-input",placeholder:"Your city name",ref:function(t){return e.input=t},onKeyPress:this._handleKeyPress,onChange:this._handleChange,value:t}),r.a.createElement(S.a,{icon:c?"spinner":"search",className:"search-icon",onClick:this._onSearch})),a.length?this._getSearchItems(a):null)}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r))))._handleSelectCity=function(e){var t=n.props.actions,a=t.deleteSearchEntities,r=t.fetchCity;console.log("city id: ",e),r(e),a()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.actions.searchCity,t=this.props.cities,n=t.searchEntities,a=t.isLoading;return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"Weather"),r.a.createElement(O,{entities:n,isLoading:a,onSearch:e,onSelect:this._handleSelectCity}))}}]),t}(a.Component),j=Object(h.b)(function(e){return{cities:e.cities}},function(e){return{actions:Object(d.b)(Object(f.a)({},_),e)}})(v),I=n(30),w=n(32),Y=n(31),g={cityEntities:[],searchEntities:[],isLoading:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case y.FETCH_CITY_SUCCESS:return Object(f.a)({},e,{cityEntities:[].concat(Object(Y.a)(e.cityEntities.filter(function(e){return e.id!==n.id})),[n])});case y.SEARCH_CITY_SUCCESS:return Object(f.a)({},e,{searchEntities:n});case y.DELETE_SEARCH_ENTITIES:return Object(f.a)({},e,{searchEntities:[]});case y.FETCH_CITY_START:return Object(f.a)({},e,{isLoading:!0});case y.FETCH_CITY_STOP:return Object(f.a)({},e,{isLoading:!1});case y.DELETE_CITY:return Object(f.a)({},e,{cityEntities:e.cityEntities.filter(function(e){return e.id!==n})});default:return e}},H=Object(d.c)({cities:A}),F=n(8),x=n.n(F),k=n(5),L=x.a.mark(R);function R(e){var t,n,a;return x.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(k.c)(_.fetchCityStart());case 4:return r.next=6,Object(k.b)(fetch,"https://api.openweathermap.org/data/2.5/weather?units=metric&id=".concat(t,"&appid=ecd63065bd25bdde07e45cd2f66852ce"),{method:"GET"});case 6:return n=r.sent,r.next=9,Object(k.b)([n,n.json]);case 9:if(a=r.sent,200===n.status){r.next=12;break}throw new Error("error fetch city");case 12:return r.next=14,Object(k.c)(_.fetchCitySuccess(a));case 14:r.next=20;break;case 16:return r.prev=16,r.t0=r.catch(1),r.next=20,Object(k.c)(_.fetchCityFail(r.t0.message));case 20:return r.prev=20,r.next=23,Object(k.c)(_.fetchCityStop());case 23:return r.finish(20);case 24:case"end":return r.stop()}},L,this,[[1,16,20,24]])}var N=x.a.mark(D);function D(e){var t,n,a,r;return x.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(k.c)(_.fetchCityStart());case 4:return c.next=6,Object(k.b)(fetch,"https://api.openweathermap.org/data/2.5/find?units=metric&q=".concat(t,"&appid=ecd63065bd25bdde07e45cd2f66852ce"),{method:"GET"});case 6:if(200===(n=c.sent).status){c.next=9;break}throw new Error("error search city");case 9:return c.next=11,Object(k.b)([n,n.json]);case 11:return a=c.sent,r=a.list,c.next=15,Object(k.c)(_.searchCitySuccess(r));case 15:c.next=21;break;case 17:return c.prev=17,c.t0=c.catch(1),c.next=21,Object(k.c)(_.searchCityFail(c.t0.message));case 21:return c.prev=21,c.next=24,Object(k.c)(_.fetchCityStop());case 24:return c.finish(21);case 25:case"end":return c.stop()}},N,this,[[1,17,21,25]])}var U=Object.freeze({fetchCityWatcher:x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(y.FETCH_CITY,R);case 2:return e.next=4,Object(k.d)(y.SEARCH_CITY,D);case 4:case"end":return e.stop()}},e,this)})}),P=x.a.mark(W);function W(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([U.fetchCityWatcher()]);case 2:case"end":return e.stop()}},P,this)}window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;var z=d.d,B=(Object(I.createLogger)({duration:!0,collapsed:!0,diff:!0,colors:{title:function(){return"#139BFE"},prevState:function(){return"#1C5FAF"},action:function(){return"#149945"},nextState:function(){return"#A47104"},error:function(){return"#ff0005"}}}),Object(w.a)()),K=[B];var M=Object(d.e)(H,z(d.a.apply(void 0,K)));B.run(W);n(50);C.b.add(E.a),C.b.add(E.b);var G=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:M},r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement("div",{className:"App-body"},r.a.createElement(m,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.2432ce45.chunk.js.map