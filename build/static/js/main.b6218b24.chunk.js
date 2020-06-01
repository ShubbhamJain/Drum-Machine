(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(7),r=t.n(o),i=t(2),c=t(3),d=t(5),m=t(4),p=(t(13),t(1)),l=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).playAudio=n.playAudio.bind(Object(p.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.handleKeyPress),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){if(this.props.power&&e.key.toUpperCase().charCodeAt()===this.props.keyname.charCodeAt()){this.audio.pause(),this.audio.currentTime=0;var a=this.audio.play();void 0!==a&&a.catch((function(){})),this.props.onDisplay(this.props.soundname),this.audio.volume=this.props.volume}}},{key:"playAudio",value:function(e){if(this.props.power){this.audio.pause(),this.audio.currentTime=0;var a=this.audio.play();void 0!==a&&a.catch((function(){})),this.props.onDisplay(this.props.soundname),this.audio.volume=this.props.volume}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.playAudio},s.a.createElement("h2",null,this.props.keyname),s.a.createElement("audio",{className:"clip",type:"audio/mp3",preload:"none",id:this.props.keyname,src:this.props.src,ref:function(a){return e.audio=a}}))}}]),t}(s.a.Component),u=[{id:1,keycode:81,soundname:"Heater 1",keyname:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:2,keycode:87,soundname:"Heater 2",keyname:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:3,keycode:69,soundname:"Heater 3",keyname:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:4,keycode:65,soundname:"Heater 4",keyname:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{id:5,keycode:83,soundname:"Clap",keyname:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:6,keycode:68,soundname:"Open HH",keyname:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:7,keycode:90,soundname:"Kick n Hat",keyname:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{id:8,keycode:88,soundname:"Kick",keyname:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:9,keycode:67,soundname:"Closed HH",keyname:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={display:"Let's play drums",sliderVol:.25,power:!0},n.onDisplay=n.onDisplay.bind(Object(p.a)(n)),n.powerFn=n.powerFn.bind(Object(p.a)(n)),n.changeVol=n.changeVol.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"onDisplay",value:function(e){this.setState({display:e})}},{key:"powerFn",value:function(){this.setState({power:!this.state.power,display:""}),!1===this.state.power?this.setState({display:"Power ON"}):this.setState({display:"Power OFF"})}},{key:"changeVol",value:function(e){this.state.power&&this.setState({sliderVol:e.target.value,display:"Volume : "+Math.round(100*e.target.value)})}},{key:"render",value:function(){var e=this,a=u.map((function(a){return s.a.createElement(l,{id:a.id,keyname:a.keyname,src:a.src,key:a.id,keycode:a.keycode,soundname:a.soundname,onDisplay:e.onDisplay,power:e.state.power,volume:e.state.sliderVol})}));return s.a.createElement("div",{id:"drum-machine"},s.a.createElement("h1",null,"Drum Machine"),s.a.createElement("span",{id:"display"},this.state.display),s.a.createElement("div",{id:"controls"},s.a.createElement("div",{onClick:this.powerFn,className:"powerArea"},s.a.createElement("div",{className:"control"},"Power")),s.a.createElement("div",{className:"slider"},s.a.createElement("input",{type:"range",min:"0",max:"1",id:"volSlider",className:"vol",step:"0.01",value:this.state.sliderVol,onChange:this.changeVol}))),s.a.createElement("div",{id:"drum-pad"},a))}}]),t}(s.a.Component),y=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h,null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b6218b24.chunk.js.map