(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(56)},38:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),c=(n(38),n(2)),l=n(3),s=n(5),m=n(4),u=n(6),d=n(11),p=n(57),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={name:"",path:""};switch(this.props.path.pathname){case"/intro":e.name="Home",e.path="/";break;case"/":e.name="About Me",e.path="/intro"}return r.a.createElement("ul",{className:"control"},r.a.createElement("li",null,r.a.createElement(p.a,{to:"/demos",onClick:this.onDemoClick,className:"orange"},"Demos")),r.a.createElement("li",null,r.a.createElement(p.a,{to:e.path,className:"btn control-btn"},e.name)),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/projects",onClick:this.onProjectClick},"Projects")))}}]),t}(a.Component),f=n(10),b=n(12);function v(){var e=Object(d.a)(['\n  background: #fff;\n  position: relative;\n  height: 80px;\n  width: 80px;\n  border-radius: 20px;\n  color: #000;\n  font-size: 80px;\n  padding-bottom: 5px;\n  text-align: center;\n  font-weight: bold;\n  margin: auto;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  animation: '," 0.5s ease infinite;\n"]);return v=function(){return e},e}function E(){var e=Object(d.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: #000;\n  display: flex;\n  z-index: 1000;\n  position: relative;\n"]);return E=function(){return e},e}function g(){var e=Object(d.a)(["\n  \n  50% {opacity:0; }\n  "]);return g=function(){return e},e}var k=Object(b.b)(g()),y=b.a.div(E()),j=b.a.div(v(),k),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement(j,null,"X"))}}]),t}(a.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={loaded:!1},e.videoRef=r.a.createRef(),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.videoRef.addEventListener("loadedmetadata",function(){console.log(e.videoRef.readyState),e.setState({loaded:!0})})}},{key:"render",value:function(){var e=this,t=this.props.video;return r.a.createElement("div",{className:"video-overlay"},this.state.loaded?null:r.a.createElement(O,null),r.a.createElement("video",{ref:function(t){return e.videoRef=t},className:"fullscreen-video",src:t,autoPlay:!0,loop:!0,type:"video/mp4",muted:!0}))}}]),t}(a.Component);function x(){var e=Object(d.a)(["\n  background: green;\n  margin-bottom: 5px;\n  padding-left: 1px;\n  width:","0%\n  list-style: none;\n  border-right: 2px solid white;\n  animation: "," 2.5s;\n"]);return x=function(){return e},e}function N(){var e=Object(d.a)(["\n  display: box;\n"]);return N=function(){return e},e}function C(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n  text-align: left;\n"]);return C=function(){return e},e}function A(){var e=Object(d.a)(["\n  \n  from {width:0%; }\n  to {width:","0%; }\n  "]);return A=function(){return e},e}var S=Object(b.b)(A(),function(e){return e.number}),L=b.a.div(C()),M=b.a.div(N()),P=b.a.li(x(),function(e){return e.number},S),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L,{className:"skills info-item"},r.a.createElement(M,{className:"field"},r.a.createElement("h3",null,"Front-End"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement(P,{number:"8"},"React"),r.a.createElement(P,{number:"6"},"Angular"),r.a.createElement(P,{number:"8"},"Bootstrap"),r.a.createElement(P,{number:"8"},"JQuery"),r.a.createElement(P,{number:"9"},"HTML"),r.a.createElement(P,{number:"9"},"CSS"))),r.a.createElement(M,{className:"field"},r.a.createElement("h3",null,"Back-End"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement(P,{number:"9"},"NodeJS"),r.a.createElement(P,{number:"8"},"ExpressJS"),r.a.createElement(P,{number:"9"},"PHP"),r.a.createElement(P,{number:"10"},"MySQL"),r.a.createElement(P,{number:"8"},"MongoDB"))),r.a.createElement(M,{className:"field"},r.a.createElement("h3",null,"Other"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement(P,{number:"10"},"JAVA"),r.a.createElement(P,{number:"9"},"C++"),r.a.createElement(P,{number:"6"}," Swift"),r.a.createElement(P,{number:"10"},"Git"))))}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={content:0},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-me info-item"},r.a.createElement("p",null,"I am an extreme fast-learner who is able to work under pressure to deliver desired results within allocated time frame. Highly skilled in software problems diagnosis and effective solutions development. Able to communicate proficiently, and comfortable working in diversified environments. While thriving in challenging environments, I bring an exceptional set of skills guided by strong work ethics."))}}]),t}(a.Component);function B(){var e=Object(d.a)(["\n  text-align: center;\n  margin: 0 auto;\n  position: absolute;\n  height: 200px;\n  left: 0;\n  right: 0;\n  overflow-y: scroll;\n\n  @media only screen and (min-height: 768px) {\n    height: 300px;\n    overflow-y: hidden;\n  }\n"]);return B=function(){return e},e}function V(){var e=Object(d.a)(["\n  position: relative;\n  margin: 0 auto;\n"]);return V=function(){return e},e}var J=b.a.div(V()),R=b.a.div(B()),X=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={name:"SKILLS",content:0,components:[{name:"SKILLS",load:r.a.createElement(T,null)},{name:"ABOUT ME",load:r.a.createElement(I,null)}],video:"assets/videos/video.mp4"},n.switchView=function(){var e=n.state.content;n.setState({content:0===e?1:0,name:0===n.state.content?"SKILLS":"ABOUT ME"})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section about"},r.a.createElement(w,{video:this.state.video}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item"},r.a.createElement("h1",null,"About Me"),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://github.com/huangcrab",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"about-icon fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/xie-huang-a2b3baa2/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"about-icon fab fa-linkedin"})),r.a.createElement("a",{href:"mailto:seanhuang129@gmail.com"},r.a.createElement("i",{className:"about-icon fa fa-envelope"}))),r.a.createElement(J,{className:"info-section"},r.a.createElement(f.TransitionGroup,null,r.a.createElement(f.CSSTransition,{key:this.state.content,timeout:1e3,classNames:"fade"},r.a.createElement(R,null,this.state.components[this.state.content].load)))),r.a.createElement("div",{className:"btn info-btn",onClick:this.switchView.bind(this)},this.state.components[this.state.content].name))),r.a.createElement(h,{path:this.props.location}))}}]),t}(a.Component),z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={video:"assets/videos/video.mp4"},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section landing"},r.a.createElement(w,{video:this.state.video}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item main"},r.a.createElement("img",{src:"assets/x_blue.png",alt:"X"}),r.a.createElement("h1",{className:"gradient1"},'Welcome to "Lazy Paradise"'),r.a.createElement("p",null,r.a.createElement("span",null,"Work Hard, Think Hard, So you can be lazy")),r.a.createElement("p",null,'"Laziness" can be a key of future development, the "Laziness" here does not mean the quality of being unwilling to work or use energy, the "Laziness" here simply means being',r.a.createElement("strong",null," creative "),"to facilitate people\u2019s life!"))),r.a.createElement(h,{path:this.props.location}))}}]),t}(a.Component),D=n(30),_=n.n(D),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.index,a=e.direction;return r.a.createElement(f.TransitionGroup,{className:"item-container",childFactory:function(e){return r.a.cloneElement(e,{classNames:a})}},r.a.createElement(f.CSSTransition,{key:n,timeout:500,classNames:a},r.a.createElement("div",{className:"display-item item"},r.a.createElement("h1",null,r.a.createElement("span",null,t[n].name)),r.a.createElement("h3",null,"Demo ",n+1," / ",t.length),r.a.createElement("div",{className:"icon-group"},t[n].tech.map(function(e){return r.a.createElement("img",{key:_()(),alt:e,title:e,src:"assets/logos/".concat(e.toLowerCase(),".png")})})),r.a.createElement("br",null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("a",{className:"",target:"_blank",rel:"noopener noreferrer",href:t[n].link},r.a.createElement("img",{className:"scaled-gif",alt:"media",src:"assets/gifs/"+t[n].media}))))))}}]),t}(a.Component),G=n(16),U=r.a.createContext(),W=function(e,t){switch(t.type){case"NEXT_ITEM":return Object(G.a)({},e,{index:e.index>=t.payload-1?0:e.index+1,direction:"right"});case"PREV_ITEM":return Object(G.a)({},e,{index:0===e.index?t.payload-1:e.index-1,direction:"left"});case"CLEAR_INDEX":return Object(G.a)({},e,{index:0,direction:""});default:return e}},F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={demos:[{id:1,name:"Authentication App",media:"mean.gif",link:"https://warm-island-73436.herokuapp.com/",tech:["Angular","MongoDB","NodeJs","Bootstrap","Heroku","MLab"]},{id:2,name:"Connector App",media:"mern.gif",link:"https://limitless-beach-24902.herokuapp.com/",tech:["React","MongoDB","NodeJs","Bootstrap","Heroku","MLab"]},{id:3,name:"Client Panel App",media:"angular.gif",link:"https://clientpanel-3bd53.firebaseapp.com/",tech:["Angular","Firebase","Bootstrap"]}],projects:[{id:1,name:"XMLtoVisio Converter - JAVA",date:"June 2017",description:"Xml to Visio Converter is a desktop application that generates thousands of Microsoft Visio files\n        from XML\n        file in less than a minutes, it traverse the xml file and translate it into Visio XML syntax,\n        outputs\n        them into .vsdx file, it\u2019s able to create all the predefined shapes, links, and also hyper links\n        into\n        Visio files. It turns months of documentation work into a piece of cake."},{id:2,name:"LCWheel.com",link:"https://lcwheel.com",date:"Sept 2017",description:"A single page website for a Chinese immigration company, it uses multiple JavaScript libraries and\n        Bootstrap,\n        Animate.css to create some scrolling effects and animations. It has a contact form communicated\n        with\n        the firebase."},{id:3,name:"PokePixel - IOS",date:"Aug 2016",description:"PokePixel is a multi-page IOS app that calculates the IV and evolve value of a Pok\xe9mon from Pokemon\n        GO, it\n        takes the user input value outputs the perfect percentage of a Pok\xe9mon, so the player knows which\n        Pok\xe9mon\n        they should keep and invest on. It presents a collectionView of all the Pok\xe9mon\u2019s, user can search\n        the\n        Pok\xe9mon by input the name or the id of the Pokemon."},{id:4,name:"XML Analyzer - JAVA",date:"Aug 2016",description:"XML Analyzer is a desktop application traverse the XML file generated from IBM Process Designer.\n        Make the\n        debug in IBM Process Designer at least 100 times faster, it can locate logic and syntax errors in\n        thousands\n        of processes in couple minutes, it also outputs the error logs with all the details of all the\n        processes\n        in the file."},{id:5,name:"URL Converter - JAVA",date:"Jan 2016",description:"URL Converter is a simple desktop application that encode and decodes a base64 coded website\n        link, the\n        application also can built links by specifying a list of fields and values. It saves the personal\n        favorite\n        links, so user can quickly load the previous made link by one click and launch it into web browser."},{id:6,name:"TeleCom ColorCode Calculator - Android",date:"March 2015",description:"An single view Android app calculates the telecommunication color code, automatically translate the\n        line\n        number to a color code(tip side color and ring side color) of the cable at the moment of typing,\n        and\n        vise versa. Help telecom technicians in the field to making their work more efficient and more\n        accurate."}],index:0,direction:"",dispatch:function(e){n.setState(function(t){return W(t,e)})}},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(U.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),K=U.Consumer,q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onNextClick=function(e,t){e({type:"NEXT_ITEM",payload:t})},n.onPrevClick=function(e,t){e({type:"PREV_ITEM",payload:t})},n.onExitClick=function(e){e({type:"CLEAR_INDEX"})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(K,null,function(t){var n=t.dispatch,a=e.props,i=a.name,o=a.length;return r.a.createElement("ul",{className:"control"},r.a.createElement("li",null,r.a.createElement("div",{className:"btn",onClick:e.onPrevClick.bind(e,n,o)},"Prev ",i)),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/",onClick:e.onExitClick.bind(e,n)},"X")),r.a.createElement("li",null,r.a.createElement("div",{className:"btn",onClick:e.onNextClick.bind(e,n,o)},"Next ",i)))})}}]),t}(a.Component),Q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={video:"assets/videos/demo.mp4"},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(K,null,function(t){var n=t.demos,a=t.index,i=t.direction;return r.a.createElement("section",{className:"section demos"},r.a.createElement(w,{video:e.state.video}),r.a.createElement(H,{items:n,index:a,direction:i}),r.a.createElement(q,{name:"Demo",length:n.length}))})}}]),t}(a.Component),$=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.index,a=e.direction;return r.a.createElement(f.TransitionGroup,{className:"item-container",childFactory:function(e){return r.a.cloneElement(e,{classNames:a})}},r.a.createElement(f.CSSTransition,{key:n,timeout:500,classNames:a},r.a.createElement("div",{className:"item"},r.a.createElement("h1",null,n+1," / ",t.length,r.a.createElement("br",null),r.a.createElement("span",null,t[n].link?r.a.createElement("a",{href:t[n].link,target:"_blank",rel:"noopener noreferrer"},t[n].name):t[n].name)),r.a.createElement("h3",null,t[n].date),r.a.createElement("p",null,t[n].description))))}}]),t}(a.Component),Y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={video:"assets/videos/project.mp4"},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(K,null,function(t){var n=t.projects,a=t.index,i=t.direction;return r.a.createElement("section",{className:"section projects"},r.a.createElement(w,{video:e.state.video}),r.a.createElement($,{items:n,index:a,direction:i,transRef:e.transition}),r.a.createElement(q,{length:n.length,name:"Project"}))})}}]),t}(a.Component),Z=n(58),ee=n(60),te=n(59),ne=n(20),ae=n.n(ne),re=(n(53),function(e){function t(){var e;Object(c.a)(this,t),e=Object(s.a)(this,Object(m.a)(t).call(this));return console.log("%c\u26a1Developed By%clazyparadise.com\u26a1","background-color:orange; border:1px solid black; font-size:10px; font-weight: bold;padding:3px 5px;color:black","background-color:black; border:1px solid black; font-size:10px; font-weight: bold;padding:3px 5px;color:orange"),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return ae.a.initialize("UA-108749177-1"),ae.a.pageview(window.location.pathname+window.location.search),r.a.createElement(F,null,r.a.createElement(Z.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ee.a,{render:function(e){var t=e.location;return r.a.createElement(f.TransitionGroup,{childFactory:function(e){return r.a.cloneElement(e,{classNames:"fade"})}},r.a.createElement(f.CSSTransition,{key:t.key,timeout:1e3,classNames:"fade"},r.a.createElement(te.a,{location:t},r.a.createElement(ee.a,{exact:!0,path:"/",component:z}),r.a.createElement(ee.a,{exact:!0,path:"/intro",component:X}),r.a.createElement(ee.a,{exact:!0,path:"/demos",component:Q}),r.a.createElement(ee.a,{exact:!0,path:"/projects",component:Y}))))}}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.7dd00683.chunk.js.map