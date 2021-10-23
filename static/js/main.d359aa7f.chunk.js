(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(1),s=n.n(c),o=n(42),l=n.n(o),d=n(19),u=n(5),j=n(11),p=n.n(j),b=n(13),h=n(14),g=n(15),x=n(17),O=n(16),m=n(4),v=n(3),f=n(12),_=n(0),y=v.c.div(r||(r=Object(m.a)(["\n    :not(:last-child){\n        margin-bottom:50px;\n    }\n"]))),w=v.c.span(a||(a=Object(m.a)(["\n    font-size:14px;\n    font-weight:600;\n    margin-bottom:25px;\n"]))),k=v.c.div(i||(i=Object(m.a)(["\n    margin-top:25px;\n    display:grid;\n    grid-template-columns:repeat(auto-fill,125px);\n    gap:25px;\n"]))),S=function(e){var t=e.title,n=e.children;return Object(_.jsxs)(y,{children:[Object(_.jsx)(w,{children:t}),Object(_.jsx)(k,{children:n})]})};S.defaultProps={children:""};var R,M,T,z,U,P,I,F,C,D=S,N=n(20),B=n(48),A=v.c.div(R||(R=Object(m.a)(["\n    height:100vh;\n    width:100vw;\n    display:flex;\n    justify-content:center;\n    font-size:28pt;\n"]))),V=function(){return Object(_.jsx)(A,{children:Object(_.jsx)(N.a,{icon:B.a,pulse:!0,size:"5x"})})},q=v.c.div(M||(M=Object(m.a)(["\n    width:100vw;\n    display:flex;\n    justify-content:center;\n"]))),J=v.c.span(T||(T=Object(m.a)(["\n    color:",";\n    font-weight:600;\n"])),(function(e){return e.color})),L=function(e){var t=e.text,n=e.color;return Object(_.jsx)(q,{children:Object(_.jsx)(J,{color:n,children:t})})},E=n.p+"static/media/error.d44fb64d.jpg",H=v.c.div(z||(z=Object(m.a)(["\n    font-size:12px;\n"]))),G=v.c.div(U||(U=Object(m.a)(["\n    background-image:url(",");\n    height:180px;\n    background-size:cover;\n    border-radius:4px;\n    background-position:center center;\n    transition:opacity .2s linear;\n"])),(function(e){return e.bgUrl})),K=v.c.span(P||(P=Object(m.a)(["\n    position:absolute;\n    bottom:5px;\n    right:5px;\n    opacity:0;\n    transition:opacity .2s linear;\n"]))),Q=v.c.div(I||(I=Object(m.a)(["\n    margin-bottom:5px;\n    position:relative;\n    &:hover{\n        ","{\n            opacity:0.3;\n        }\n        ","{\n            opacity:1;\n        }\n    }\n"])),G,K),W=v.c.span(F||(F=Object(m.a)(["\n    display:block;\n    margin-bottom:3px;\n"]))),X=v.c.span(C||(C=Object(m.a)(["\n    font-size:10px;\n    color:rgba(255,255,255,0.5);\n"]))),Y=function(e){var t=e.id,n=e.imageUrl,r=e.title,a=e.rating,i=e.year,c=e.isMovie,s=void 0!==c&&c;return Object(_.jsx)(d.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(_.jsxs)(H,{children:[Object(_.jsxs)(Q,{children:[Object(_.jsx)(G,{bgUrl:n?"https://image.tmdb.org/t/p/w300".concat(n):"".concat(E)}),Object(_.jsxs)(K,{children:[Object(_.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",a,"/10"]})]}),Object(_.jsx)(W,{children:r.length>18?"".concat(r.substring(0,15),"..."):r}),Object(_.jsx)(X,{children:i})]})})};Y.defaultProps={imageUrl:"",rating:NaN,year:"0000",isMovie:!1};var Z,$=Y,ee=v.c.div(Z||(Z=Object(m.a)(["\n  padding:20px;\n"]))),te=function(e){var t=e.nowPlaying,n=e.popular,r=e.upcoming,a=e.loading,i=e.error;return a?Object(_.jsx)(V,{}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f.a,{children:Object(_.jsx)("title",{children:"Movies | React Movie App"})}),Object(_.jsxs)(ee,{children:[r&&r.length>0&&Object(_.jsx)(D,{title:"Upcoming movies",children:r.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),t&&t.length>0&&Object(_.jsx)(D,{title:"Now Playing",children:t.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(_.jsx)(D,{title:"popular movie",children:n.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),i&&Object(_.jsx)(L,{color:"#e74c3c",text:i})]})]})};te.defaultProps={nowPlaying:[],popular:[],upcoming:[],error:""};var ne,re=te,ae=n(50),ie=n.n(ae).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"32a085710e51fc083d936408e4910167",language:"en-US"}}),ce=function(){return ie.get("movie/now_playing")},se=function(){return ie.get("movie/upcoming")},oe=function(){return ie.get("movie/popular")},le=function(e){return ie.get("movie/".concat(e),{params:{append_to_response:"videos,external_ids"}})},de=function(e){return ie.get("search/movie",{params:{query:encodeURIComponent(e)}})},ue=function(){return ie.get("tv/top_rated")},je=function(){return ie.get("tv/popular")},pe=function(){return ie.get("tv/airing_today")},be=function(e){return ie.get("tv/".concat(e),{params:{append_to_response:"videos"}})},he=function(e){return ie.get("search/tv",{params:{query:encodeURIComponent(e)}})},ge=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},r}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,r,a,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce();case 3:return t=e.sent,n=t.data.results,e.next=7,se();case 7:return r=e.sent,a=r.data.results,e.next=11,oe();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't get movies info"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(_.jsx)(re,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(s.a.Component),xe=ge,Oe=v.c.div(ne||(ne=Object(m.a)(["\n  padding:0px 10px;\n"]))),me=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return a?Object(_.jsx)(V,{}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f.a,{children:Object(_.jsx)("title",{children:"TV show | React Movie App"})}),Object(_.jsxs)(Oe,{children:[t&&t.length>0&&Object(_.jsx)(D,{title:"Top Rated Shows",children:t.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(_.jsx)(D,{title:"Popular Shows",children:n.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(_.jsx)(D,{title:"Shows Airing Today",children:r.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),i&&Object(_.jsx)(L,{color:"#e74c3c",text:i})]})]})};me.defaultProps={topRated:[],popular:[],airingToday:[],error:""};var ve,fe,_e,ye=me,we=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},r}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,r,a,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue();case 3:return t=e.sent,n=t.data.results,e.next=7,je();case 7:return r=e.sent,a=r.data.results,e.next=11,pe();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(_.jsx)(ye,{topRated:t,popular:n,airingToday:r,loading:a,error:i})}}]),n}(s.a.Component),ke=we,Se=n(28),Re=v.c.div(ve||(ve=Object(m.a)(["\n  padding:0px 20px;\n"]))),Me=v.c.form(fe||(fe=Object(m.a)(["\n  margin-bottom:50px;\n  width:100%;\n"]))),Te=v.c.input(_e||(_e=Object(m.a)(["\n  all:unset;\n  font-size:28px;\n  width:100%;\n"]))),ze=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.handleSubmit,c=e.error,s=e.updateTerm;return Object(_.jsxs)(Re,{children:[Object(_.jsx)(f.a,{children:Object(_.jsx)("title",{children:"Search | React Movie App"})}),Object(_.jsx)(Me,{onSubmit:i,children:Object(_.jsx)(Te,{placeholder:"Search Movies or TV Shows...",value:r,onChange:s})}),a?Object(_.jsx)(V,{}):Object(_.jsxs)(_.Fragment,{children:[t&&t.length>0&&Object(_.jsx)(D,{title:"Movie Results",children:t.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(_.jsx)(D,{title:"TV Results",children:n.map((function(e){return Object(_.jsx)($,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),c&&Object(_.jsx)(L,{color:"#e74c3c",text:c}),n&&t&&0===n.length&&0===t.length&&Object(_.jsx)(L,{text:"Nothing Found",color:"#95a5a6"})]})]})};ze.defaultProps={movieResults:[],tvResults:[],searchTerm:"",error:""};var Ue,Pe,Ie,Fe,Ce,De,Ne,Be=ze,Ae=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).updateTerm=function(e){var t=e.target.value;r.setState({searchTerm:t})},r.searchByTerm=Object(b.a)(p.a.mark((function e(){var t,n,a,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state.searchTerm,e.prev=1,r.setState({loading:!0}),e.next=5,de(t);case 5:return n=e.sent,a=n.data.results,e.next=9,he(t);case 9:i=e.sent,c=i.data.results,r.setState({movieResults:a,tvResults:c}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),r.setState({error:"Can't find result"});case 17:return e.prev=17,r.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])}))),r.state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},r.handleSubmit=r.handleSubmit.bind(Object(Se.a)(r)),r}return Object(g.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.searchTerm&&this.searchByTerm()}},{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(_.jsx)(Be,{movieResults:t,tvResults:n,searchTerm:r,loading:a,error:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(s.a.Component),Ve=v.c.header(Ue||(Ue=Object(m.a)(["\n  color:white;\n  position:fixed;\n  top:0;\n  left:0;\n  height:50px;\n  display:flex;\n  align-items:center;\n  padding: 8px 10px;\n  background-color:rgba(20,20,20,0.8);\n  width:100vw;\n  z-index:10;\n  box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);\n  font-size:12pt;\n"]))),qe=v.c.ul(Pe||(Pe=Object(m.a)(["\n  display:flex;\n"]))),Je=v.c.li(Ie||(Ie=Object(m.a)(["\n  width:50px;\n  height:50px;\n  &:not(:last-child){\n    margin-right:10px;\n  };\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  border-bottom: 3px solid ",";\n  transition:border-bottom .5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Le=Object(v.c)(d.b)(Fe||(Fe=Object(m.a)(["\n"]))),Ee=Object(u.f)((function(e){var t=e.location.pathname;return Object(_.jsx)(Ve,{children:Object(_.jsxs)(qe,{children:[Object(_.jsx)(Je,{current:"/"===t,children:Object(_.jsx)(Le,{to:"/",children:"Movies"})}),Object(_.jsx)(Je,{current:"/tv"===t,children:Object(_.jsx)(Le,{to:"/tv",children:"TV"})}),Object(_.jsx)(Je,{current:"/search"===t,children:Object(_.jsx)(Le,{to:"/search",children:"Search"})})]})})})),He=v.c.div(Ce||(Ce=Object(m.a)(["\n    background-color: #f1c40f;\n    color:#2c3e50;\n    display:inline-flex;\n    justify-content:center;\n    align-items:center;\n    width:max-content;\n    padding:10px;\n    border-radius:9999px;\n    ","\n"])),(function(e){return e.disabled&&Object(v.b)(De||(De=Object(m.a)(["\n        background-color:#2c3e50;\n        color:#bdc3c7;\n    "])))})),Ge=function(e){var t=e.externalID.imdb_id;return t?Object(_.jsx)("a",{href:"https://www.imdb.com/title/".concat(t),children:Object(_.jsx)(He,{children:"IMDB"})}):Object(_.jsx)(He,{disabled:!0,children:"IMDB"})},Ke=n(29),Qe=v.c.span(Ne||(Ne=Object(m.a)(["\n  margin:0 10px;\n"]))),We=function(e){var t=e.link;return null===t?null:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("a",{href:"https://twitter.com/".concat(t),children:Object(_.jsx)(N.a,{icon:Ke.c,size:"2x"})}),Object(_.jsx)(Qe,{children:"\xb7"})]})},Xe=function(e){var t=e.link;return null===t?null:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("a",{href:"https://facebook.com/".concat(t),children:Object(_.jsx)(N.a,{icon:Ke.a,size:"2x"})}),Object(_.jsx)(Qe,{children:"\xb7"})]})},Ye=function(e){var t=e.link;return null===t?null:Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("a",{href:"https://instagram.com/".concat(t),children:Object(_.jsx)(N.a,{icon:Ke.b,size:"2x"})})})};We.defaultProps={link:""},Xe.defaultProps={link:""},Ye.defaultProps={link:""};var Ze,$e,et,tt,nt,rt,at,it,ct,st,ot=function(e){var t=e.externalID,n=t.twitter_id,r=t.facebook_id,a=t.instagram_id;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(We,{link:n}),Object(_.jsx)(Xe,{link:r}),Object(_.jsx)(Ye,{link:a})]})},lt=v.c.div(Ze||(Ze=Object(m.a)(["\n  height: calc(100vh - 50px);\n  width:100%;\n  position:relative;\n  padding:50px;\n"]))),dt=v.c.div($e||($e=Object(m.a)(["\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(",") ;\n  background-position:center center;\n  background-size : cover;\n  filter:blur(3px);\n  z-index:0;\n\n"])),(function(e){return e.bgImage})),ut=v.c.div(et||(et=Object(m.a)(["\n  display:flex;\n  width:100%;\n  height:100%;\n  position:relative;\n  z-index:1;\n  @media screen and (max-width:1024px){\n    //flex-direction:column;\n  }\n"]))),jt=v.c.div(tt||(tt=Object(m.a)(["\n  width:30%;\n  background-image:url(",");\n  background-position:center center;\n  background-size:cover;\n  height:100%;\n  border-radius:5px;\n  @media screen and (max-width:1024px){\n    width:100%;\n    background-size:contain;\n    background-repeat:no-repeat;\n  }\n"])),(function(e){return e.bgImage})),pt=v.c.div(nt||(nt=Object(m.a)(["\n  width:70%;\n  margin-left:10px;\n"]))),bt=v.c.h3(rt||(rt=Object(m.a)(["\n  font-size:30pt;\n  margin-bottom:10px;\n"]))),ht=v.c.div(at||(at=Object(m.a)(["\n  margin:20px 0 ;\n"]))),gt=v.c.span(it||(it=Object(m.a)([""]))),xt=v.c.span(ct||(ct=Object(m.a)(["\n  margin:0 10px;\n"]))),Ot=v.c.p(st||(st=Object(m.a)(["\n  font-size:12px;\n  opacity:0.7;\n  line-height:1.5;\n  width:50%;\n"]))),mt=function(e){var t=e.result,n=e.loading,r=e.error;return n?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(V,{}),Object(_.jsx)(f.a,{children:Object(_.jsx)("title",{children:"Loading..."})})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f.a,{children:Object(_.jsxs)("title",{children:[t.original_title||t.original_name," | React Movie App"]})}),Object(_.jsxs)(lt,{children:[Object(_.jsx)(dt,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(_.jsxs)(ut,{children:[Object(_.jsx)(jt,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):"".concat(E)}),Object(_.jsxs)(pt,{children:[Object(_.jsx)(bt,{children:t.original_title||t.original_name}),Object(_.jsxs)(ht,{children:[Object(_.jsx)(gt,{children:t.release_date||t.first_air_date}),Object(_.jsx)(xt,{children:"\xb7"}),Object(_.jsx)(gt,{children:"".concat(t.runtime||t.episode_run_time&&t.episode_run_time[0]||"?"," min")}),Object(_.jsx)(xt,{children:"\xb7"}),Object(_.jsx)(gt,{children:t.genres&&t.genres.length>1?t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})):"no genres info"}),Object(_.jsx)(xt,{children:"\xb7"}),Object(_.jsx)(Ge,{externalID:t.external_ids})]}),Object(_.jsx)(ht,{children:Object(_.jsx)(ot,{externalID:t.external_ids})}),Object(_.jsx)(Ot,{children:t.overview})]})]}),r&&Object(_.jsx)(L,{color:"#e74c3c",text:r})]})]})};mt.defaultProps={result:{},error:""};var vt,ft=mt,_t=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var r;Object(h.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,r,a,i,c,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n,10),Number.isNaN(i)&&r("/"),e.prev=4,!a){e.next=12;break}return e.next=8,le(i);case 8:s=e.sent,c=s.data,e.next=16;break;case 12:return e.next=14,be(i);case 14:o=e.sent,c=o.data;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),this.setState({error:"Can't find anything"});case 21:return e.prev=21,this.setState({loading:!1,result:c}),e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[4,18,21,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(_.jsx)(ft,{result:t,error:n,loading:r})}}]),n}(s.a.Component),yt=_t,wt=function(){return Object(_.jsx)(d.a,{children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Ee,{}),Object(_.jsxs)(u.c,{children:[Object(_.jsx)(u.a,{path:"/",exact:!0,component:xe}),Object(_.jsx)(u.a,{path:"/tv",component:ke}),Object(_.jsx)(u.a,{path:"/search",component:Ae}),Object(_.jsx)(u.a,{path:"/movie/:id",component:yt}),Object(_.jsx)(u.a,{path:"/show/:id",component:yt}),Object(_.jsx)(u.a,{path:"*",component:function(){return Object(_.jsx)("h1",{children:"404"})}})]})]})})},kt=n(51),St=Object(v.a)(vt||(vt=Object(m.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:14px;\n        background-color:rgba(20,20,20,1);\n        color:white;\n        padding-top:50px;\n    }\n"])),kt.a);var Rt=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(wt,{}),Object(_.jsx)(St,{})]})};l.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(Rt,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.d359aa7f.chunk.js.map