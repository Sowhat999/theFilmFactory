(this["webpackJsonpthe-film-factory"]=this["webpackJsonpthe-film-factory"]||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){e.exports=a(73)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),i=a.n(l),c=(a(39),a(2)),s=a(3),o=a(5),m=a(4),u=(a(40),a(41),a(42),a(43),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"The Film Factory"))}}]),a}(n.Component)),h=a(14),p=a.n(h),f=a(17),g=a(32),E=a(11),d=a.n(E),b=a(7),v=a(33),F=(a(27),function(e){var t=e.updateHasErrorState;return r.a.createElement("div",{className:"errorMessage"},r.a.createElement("p",null,"Something went wrong,"),r.a.createElement("p",null,"please try again."),r.a.createElement("button",{type:"button",onClick:t},r.a.createElement(b.a,{icon:v.a})))}),y=function(){return r.a.createElement("div",{className:"loadingPage"},r.a.createElement("p",null,"Searching database..."))},k=(a(65),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value;n.setState({userTextInput:t})},n.handleSubmit=function(e){n.setState({foreignFilms:[]}),e.preventDefault(),d()({url:"https://api.themoviedb.org/3/search/movie",params:{api_key:"7e436244a51ab62563e1dbbb6bb31f24",query:n.state.userTextInput,language:"en-US",include_adult:!1}}).then((function(e){var t=[];e.data.results.forEach((function(e){t.push(e)}));var a=t.filter((function(e){return e.original_language="en"})).filter((function(e){return e.poster_path})).slice(0,10);n.setState({englishFilms:a})})).catch((function(e){e&&!n.state.englishFilms.length&&n.setState({hasError:!0})}))},n.onEnglishFilmClick=function(){var e=Object(g.a)(p.a.mark((function e(t){var a,r,l,i,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({isLoading:!0}),a=t.currentTarget.value,r=Object(f.a)(n.state.englishFilms),l=r.find((function(e){return e.id===parseInt(a)})),n.props.updateEnglishFilmState(l),i=[],c=1e3,s=1;case 8:if(!(s<=c&&i.length<20)){e.next=14;break}return e.next=11,d()({url:"https://api.themoviedb.org/3/movie/".concat(a,"/similar"),params:{api_key:"7e436244a51ab62563e1dbbb6bb31f24",page:s}}).then((function(e){c=e.data.total_pages,e.data.results.forEach((function(e){"en"!==e.original_language&&e.poster_path&&!i.some((function(t){return t.id===e.id}))&&i.length<20&&i.push(e)}))})).catch((function(e){e&&!n.state.foreignFilms.length&&n.setState({hasError:!0})}));case 11:s++,e.next=8;break;case 14:n.setState({foreignFilms:i,isLoading:!1});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onForeignFilmClick=function(e){var t=e.currentTarget.value,a=Object(f.a)(n.state.foreignFilms).find((function(e){return e.id===parseInt(t)}));n.props.updateForeignFilmState(a)},n.updateHasErrorState=function(){n.setState({hasError:!1})},n.state={userTextInput:"",englishFilms:[],foreignFilms:[],isLoading:"",hasError:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.userTextInput,onChange:this.handleChange,placeholder:"Enter Movie"}),r.a.createElement("input",{type:"submit",value:"Search"})),r.a.createElement("section",{className:"englishFilms"},r.a.createElement("h2",null,'Results for "',this.state.userTextInput,'"'),r.a.createElement("ul",{className:"gridContainer"},this.state.englishFilms.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("button",{type:"button",value:t.id,onClick:e.onEnglishFilmClick},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.original_title})))})))),this.state.isLoading?r.a.createElement(y,null):r.a.createElement("section",{className:"foreignFilms"},r.a.createElement("h2",null,"Foreign film recommendations based on your English film selection:"),r.a.createElement("ul",{className:"gridContainer"},this.state.foreignFilms.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("button",{type:"button",value:t.id,onClick:e.onForeignFilmClick},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.original_title})))})))),this.state.hasError?r.a.createElement(F,{updateHasErrorState:this.updateHasErrorState}):null)}}]),a}(n.Component)),S=(a(66),a(16)),j=a.n(S);a(67);j.a.initializeApp({apiKey:"AIzaSyCfGmCQDVUrS-k2pZRPTEJtikizGn3PSRs",authDomain:"thefilmfactory-1e3dd.firebaseapp.com",databaseURL:"https://thefilmfactory-1e3dd.firebaseio.com",projectId:"thefilmfactory-1e3dd",storageBucket:"thefilmfactory-1e3dd.appspot.com",messagingSenderId:"892695161812",appId:"1:892695161812:web:34c97f278acddb7cec4441"});var O=j.a,w=(a(69),a(70),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.pair,t=e.englishFilm,a=e.foreignFilm;return r.a.createElement("section",{className:"wrapper"},r.a.createElement("ul",{className:"pair"},r.a.createElement("li",{className:"film-flex"},r.a.createElement("div",{className:"pair-info"},r.a.createElement("h3",null,t.title),r.a.createElement("p",{className:"date"},t.release_date.slice(0,4)),r.a.createElement("p",null,r.a.createElement("i",{class:"fas fa-star"})," ",t.vote_average,"/10"),r.a.createElement("p",null,t.overview)),r.a.createElement("div",{className:"pair-poster"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"Movie poster for ".concat(t.title)}))),r.a.createElement("li",{className:"film-flex"},r.a.createElement("div",{className:"pair-info"},r.a.createElement("h3",null,a.title),r.a.createElement("p",{className:"date"},a.release_date.slice(0,4)),r.a.createElement("p",null,r.a.createElement("i",{class:"fas fa-star"})," ",a.vote_average,"/10"),r.a.createElement("p",null,a.overview)),r.a.createElement("div",{className:"pair-poster"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(a.poster_path),alt:"Movie poster for ".concat(a.title)})))))}}]),a}(n.Component)),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).savePair=function(){O.database().ref().push({englishFilm:e.props.englishFilm,foreignFilm:e.props.foreignFilm})},e}return Object(s.a)(a,[{key:"render",value:function(){var e={englishFilm:this.props.englishFilm,foreignFilm:this.props.foreignFilm};return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Film Pairing"),r.a.createElement("p",null,"If you liked that film, you might like this one..."),r.a.createElement(w,{pair:e}),r.a.createElement("button",{onClick:this.savePair},"Save Pair"))}}]),a}(n.Component),_=(a(71),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={filmPairs:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push({pair:n[r],id:r});a.reverse();e.setState({filmPairs:a})}))}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Movies To Watch"),r.a.createElement("ul",null,this.state.filmPairs.map((function(e){return r.a.createElement(w,{pair:e.pair,key:e.id})}))))}}]),a}(n.Component)),N=a(8),T=(a(72),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("section",{className:"attributions"},r.a.createElement("p",null,"All films provided by ",r.a.createElement("a",{href:"https://www.themoviedb.org/documentation/api"},"The Movie DB API")),r.a.createElement("p",null,"All icons provided by ",r.a.createElement("a",{href:"https://fontawesome.com/license"},"Font Awesome"))),r.a.createElement("section",{className:"team-info"},r.a.createElement("p",null,"Made with ",r.a.createElement("span",{"aria-label":"love"},"\u2665")," by The Film Four"),r.a.createElement("ul",{className:"team-members"},r.a.createElement("ul",{className:"team-member"},r.a.createElement("li",null,"Cheriele"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/csmordido",title:"Click to access Cheriele's Github page",target:"_blank"},r.a.createElement(b.a,{icon:N.a})))),r.a.createElement("ul",null,r.a.createElement("li",null,"Melissa"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/mel-ahls",title:"Click to access Melissa's Github page",target:"_blank"},r.a.createElement(b.a,{icon:N.a})))),r.a.createElement("ul",null,r.a.createElement("li",null,"Robert"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/rduhig",title:"Click to access Robert's Github page",target:"_blank"},r.a.createElement(b.a,{icon:N.a})))),r.a.createElement("ul",null,r.a.createElement("li",null,"Taylor"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/QuercusTaliare",title:"Click to access Taylor's Github page",target:"_blank"},r.a.createElement(b.a,{icon:N.a})))))))}}]),a}(n.Component)),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).updateEnglishFilmState=function(t){e.setState({englishFilm:t})},e.updateForeignFilmState=function(t){e.setState({foreignFilm:t})},e.state={englishFilm:{},foreignFilm:{}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement(k,{updateEnglishFilmState:this.updateEnglishFilmState,updateForeignFilmState:this.updateForeignFilmState}),0!==Object.keys(this.state.englishFilm).length&&0!==Object.keys(this.state.foreignFilm).length?r.a.createElement(C,{englishFilm:this.state.englishFilm,foreignFilm:this.state.foreignFilm}):null,r.a.createElement(_,null)),r.a.createElement(T,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.643e21d3.chunk.js.map