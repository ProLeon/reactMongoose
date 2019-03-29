(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(55),i=a(57),s=a(56),u=a(15),m=a(16),v=a(17),d=a(20),h=a(18),f=a(21);a(28);var p=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},E=a(5),g=a.n(E),b={getSavedMovies:function(){return g.a.get("/api/movies")},getMovie:function(e){return g.a.get("/api/movies/"+e)},deleteMovie:function(e){return g.a.delete("/api/movies/"+e)},saveMovie:function(e){return g.a.post("/api/movies",e)},search:function(e){return g.a.get("https://www.omdbapi.com/?t="+e+"&apikey=trilogy")}};function M(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function y(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(48);function I(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function S(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function N(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function j(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}function k(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={savedMovies:[],foundMovie:!1,searchInput:"",title:"",year:"",actors:"",movieImg:""},a.loadMovies=function(){b.getSavedMovies().then(function(e){return a.setState({savedMovies:e.data})}).catch(function(e){return console.log(e)})},a.deleteMovie=function(e){b.deleteMovie(e).then(function(e){return a.loadMovie()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),""!==a.state.searchInput&&b.search(a.state.searchInput).then(function(e){console.log(e),a.setState({title:e.data.Title,actors:e.data.Actors,year:e.data.Year,movieImg:e.data.Poster,foundMovie:!0})}).catch(function(e){return console.log(e)})},a.saveButton=function(e){e.preventDefault(),console.log("saving")},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.loadMovies()}},{key:"render",value:function(){var e=this;return r.a.createElement(M,{fluid:!0},r.a.createElement(y,null,r.a.createElement(w,{size:"md-6"},r.a.createElement("h2",null,"Search Movies"),r.a.createElement("form",null,r.a.createElement(N,{value:this.state.searchInput,onChange:this.handleInputChange,name:"searchInput",placeholder:"Search Movie"}),r.a.createElement(j,{onClick:this.handleFormSubmit},"Search"))),r.a.createElement(w,{size:"md-6 sm-12"},r.a.createElement("h2",null,"Saved movies to watch"),this.state.savedMovies.length?r.a.createElement(I,null,this.state.savedMovies.map(function(t){return r.a.createElement(S,{key:t._id},r.a.createElement("p",null,r.a.createElement("strong",null,t.title),r.a.createElement("img",{style:{width:"50px",height:"50px"},src:t.movieImg})),r.a.createElement(p,{onClick:function(){return e.deleteMovie(t._id)}}))})):r.a.createElement("h3",null,"No movies saved"))),r.a.createElement(y,null,r.a.createElement(w,{size:"md-12"},r.a.createElement("h1",{name:"title"},this.state.title),r.a.createElement("p",{name:"year"},this.state.year),r.a.createElement("p",{name:"actors"},this.state.actors),r.a.createElement("img",{src:this.state.movieImg}),this.state.foundMovie?r.a.createElement(k,{onClick:function(){return b.saveMovie({title:e.state.title,actors:e.state.actors,year:e.state.year,movieImg:e.state.movieImg})}},"Save"):r.a.createElement("p",null))))}}]),t}(n.Component);var C=function(){return r.a.createElement("header",{style:{backgroundColor:"black",color:"white",textAlign:"center"}},r.a.createElement("p",null,"Movie Search React App"))};var x=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:O}),r.a.createElement(s.a,{exact:!0,path:"/movies",component:O}))))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.01d842f1.chunk.js.map