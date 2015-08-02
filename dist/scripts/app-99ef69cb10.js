/******/!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),r=i(o),a=n(2),s=i(a),l=n(3),c=i(l),u=n(4),p=i(u),v=n(5),f=i(v),d=n(6),m=i(d),g=n(7),h=i(g),y=n(8),b=i(y),k=n(9),S=i(k),w=n(10),_=i(w),j=n(11),P=i(j),$=n(12),M=i($),x=n(13),T=i(x),B=n(14),C=i(B),A=n(15),O=i(A),I=n(16),L=i(I),E=n(17),U=i(E),N=n(18),D=i(N),q=n(19),Q=i(q),R=n(20),F=i(R),H=n(21),V=i(H),G=n(22),z=i(G),W=n(23),Y=i(W);angular.module("volumio",["frapontillo.bootstrap-switch","ui.knob","ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ui.bootstrap"]).config(r["default"]).config(s["default"]).run(c["default"]).service("socketService",h["default"]).service("playerService",p["default"]).service("browseService",m["default"]).service("playQueueService",f["default"]).service("loggerService",b["default"]).service("mockService",S["default"]).directive("playerButtons",function(){return new _["default"]}).directive("volumeManager",function(){return new P["default"]}).directive("trackManager",function(){return new M["default"]}).directive("playerStatus",function(){return new T["default"]}).directive("playerLogger",function(){return new C["default"]}).directive("sideMenu",function(){return new O["default"]}).controller("VolumioController",L["default"]).controller("HeaderController",U["default"]).controller("FooterController",D["default"]).controller("SettingsController",Q["default"]).controller("PluginController",F["default"]).controller("BrowseController",V["default"]).controller("PlaybackController",z["default"]).controller("PlaylistController",Y["default"])},function(e,t){"use strict";function n(e){"ngInject";e.debugEnabled(!0)}Object.defineProperty(t,"__esModule",{value:!0}),n.$inject=["$logProvider"],t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){"ngInject";e.state("volumio",{url:"/",views:{header:{templateUrl:"app/header/header.html",controller:"HeaderController",controllerAs:"header"},footer:{templateUrl:"app/footer/footer.html",controller:"FooterController",controllerAs:"footer"}},resolve:{socketResolver:["$http","$window","socketService",function(e,t,n){var i="http://"+t.location.hostname+":3000/api/host";return e.get(i).then(function(e){t.socket=io(e.data.host+":3000"),n.host=e.data.host+":3000"},function(){t.socket=io("http://192.168.192.14:3000"),n.host="http://192.168.192.14:3000"})}]}}).state("volumio.browse",{url:"browse",views:{"content@":{templateUrl:"app/browse/browse.html",controller:"BrowseController",controllerAs:"browse"}}}).state("volumio.playlist",{url:"playlist",views:{"content@":{templateUrl:"app/playlist/playlist.html",controller:"PlaylistController",controllerAs:"playlist"}}}).state("volumio.playback",{url:"playback",views:{"content@":{templateUrl:"app/playback/playback.html",controller:"PlaybackController",controllerAs:"playback"}}}).state("volumio.components",{url:"components",views:{"content@":{templateUrl:"app/settings/components.html",controller:"SettingsController",controllerAs:"settings"}}}).state("volumio.plugin",{url:"plugin/:pluginName",views:{"content@":{templateUrl:"app/plugin/plugin.html",controller:"PluginController",controllerAs:"plugin"}}}),t.otherwise("/playlist")}Object.defineProperty(t,"__esModule",{value:!0}),n.$inject=["$stateProvider","$urlRouterProvider"],t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t,n,i,o){"ngInject"}Object.defineProperty(t,"__esModule",{value:!0}),n.$inject=["$log","$window","socketService","$timeout","$http"],t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i,o){"ngInject";var r=this;n(this,e),this.$log=i,this.socketService=o,this.state=null,this._volume=80,this._volumeStep=10,this._shuffle=!1,this._repeatTrack=!1,this._repeatAlbum=!1,this.init(),t.$on("socket:init",function(){r.init()})}return e.$inject=["$rootScope","$log","socketService"],i(e,[{key:"play",value:function(){console.log("play"),this.socketService.emit("volumioPlay")}},{key:"pause",value:function(){this.socketService.emit("volumioPause")}},{key:"stop",value:function(){this.socketService.emit("volumioStop")}},{key:"previus",value:function(){this.socketService.emit("volumioPrevious")}},{key:"next",value:function(){this.socketService.emit("volumioNext")}},{key:"shuffle",value:function(){this._shuffle=!this._shuffle}},{key:"repeatTrack",value:function(){this._repeatTrack=!this._repeatTrack}},{key:"repeatAlbum",value:function(){this._repeatAlbum=!this._repeatAlbum}},{key:"rebuildSpopLibrary",value:function(){this.socketService.emit("spopUpdateTracklist")}},{key:"rebuildLibrary",value:function(){this.socketService.emit("volumioRebuildLibrary")}},{key:"volumeUp",value:function(){this.volume+=this._volumeStep}},{key:"volumeDown",value:function(){this.volume-=this._volumeStep}},{key:"toggleMute",value:function(){this.socketService.emit("volume","mute")}},{key:"init",value:function(){this.registerListner(),this.initService()}},{key:"registerListner",value:function(){var e=this;this.socketService.on("volumioPushState",function(t){e.state=t})}},{key:"initService",value:function(){this.socketService.emit("volumioGetState")}},{key:"currentTrack",get:function(){return this._currentTrack},set:function(e){this._currentTrack=e}},{key:"volume",get:function(){return this.state?parseInt(this.state.volume):0},set:function(e){0>e?e=0:e>100&&(e=100),this.socketService.emit("volume",e)}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i,o){"ngInject";var r=this;n(this,e),this.$log=i,this._queue=null,this.socketService=o,this.init(),t.$on("socket:init",function(){r.init()})}return e.$inject=["$rootScope","$log","socketService"],i(e,[{key:"add",value:function(){}},{key:"remove",value:function(e){this.socketService.emit("volumioRemoveQueueItem",e)}},{key:"clearAll",value:function(){}},{key:"isFirst",value:function(){}},{key:"isLast",value:function(){}},{key:"init",value:function(){this.registerListner(),this.initService()}},{key:"registerListner",value:function(){var e=this;this.socketService.on("volumioPushQueue",function(t){console.log(t),e._queue=t})}},{key:"initService",value:function(){this.socketService.emit("volumioGetQueue")}},{key:"queue",get:function(){return this._queue}},{key:"lenght",get:function(){return this._queue.lenght}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i,o,r){"ngInject";var a=this;n(this,e),this.$log=i,this.socketService=o,this._listBy="track",this._filters=r.get("getBrowseFilters"),this._sources=r.get("getBrowseSources"),this._list=r.get("getBrowseList"),this.init(),t.$on("socket:init",function(){a.init()})}return e.$inject=["$rootScope","$log","socketService","mockService"],i(e,[{key:"fetchLibrary",value:function(e){console.log(e),this.socketService.emit("volumioBrowseLibrary",{uid:e,sortby:"",datapath:[],entries:0,index:0})}},{key:"init",value:function(){this.registerListner(),this.initService()}},{key:"registerListner",value:function(){var e=this;this.socketService.on("pushBrowseFilters",function(t){e._filters=t}),this.socketService.on("pushBrowseSources",function(t){e._sources=t}),this.socketService.on("pushBrowseList",function(t){e._list=t}),this.socketService.on("volumioPushBrowseData",function(e){console.log(e)})}},{key:"initService",value:function(){this.socketService.emit("getBrowseFilters"),this.socketService.emit("getBrowseSources"),this.socketService.emit("getBrowseList",{uri:"uri"}),this.socketService.emit("volumioBrowseLibrary",{uid:"index:root",sortby:"",datapath:[],entries:0,index:0})}},{key:"filters",get:function(){return this._filters},set:function(e){this._filters=e}},{key:"sources",get:function(){return this._sources},set:function(e){this._source=e}},{key:"list",get:function(){return this._list},set:function(e){this._list=e}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i,o){"ngInject";n(this,e),this.$rootScope=t,this.$http=i,this.$window=o,this._host=null}return e.$inject=["$rootScope","$http","$window"],i(e,[{key:"changeHost",value:function(e){this.host=e,this.$window.socket.disconnect(),this.$window.socket=void 0,delete this.$window.socket,this.$rootScope.$emit("socket:init")}},{key:"on",value:function(e,t){var n=this;socket.on(e,function(e){n.$rootScope.$apply(function(){t&&t(e)})})}},{key:"emit",value:function(e,t,n){var i=this;socket.emit(e,t,function(e){i.$rootScope.$apply(function(){n&&n(e)})})}},{key:"host",set:function(e){this._host=e,console.info("The socket host is:",this._host)},get:function(){return this._host}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i,o){"ngInject";var r=this;n(this,e),this.$log=i,this._log=null,this.socketService=o,this.init(),t.$on("socket:init",function(){r.init()})}return e.$inject=["$rootScope","$log","socketService"],i(e,[{key:"pushLog",value:function(e){this.log="<br/>"+e+this.log}},{key:"clear",value:function(){this.log=""}},{key:"init",value:function(){this.registerListner(),this.initService()}},{key:"registerListner",value:function(){var e=this;this.socketService.on("printConsoleMessage",function(t){e.pushLog(t)})}},{key:"initService",value:function(){}},{key:"log",get:function(){return this._log},set:function(e){this._log=e}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){"ngInject";n(this,e),this.init()}return i(e,[{key:"get",value:function(e){if(this._mock[e])return this._mock[e];throw"No mock data present"}},{key:"init",value:function(){this._mock={getBrowseFilters:[{name:"Genres by Name",index:"index:Genres by Name"},{name:"Artists by Name",index:"index:Artists by Name"},{name:"Albums by Name",index:"index:Albums by Name"},{name:"Albums by Artist",index:"index:Albums by Artist"},{name:"Tracks by Name",index:"index:Tracks by Name"}],getBrowseSources:[{name:"USB",uri:"usb"},{name:"NAS",uri:"nas"},{name:"Web Radio",uri:"web-radio"},{name:"Spotify",uri:"spotify"}],getBrowseList:{pagination:{currentPage:1,totItems:20,itemsPerPage:10,totPages:2},list:[{track:"track a",artist:"artist a",uri:"uri"},{track:"track b",artist:"artist b",uri:"uri"},{track:"track c",artist:"artist c",uri:"uri"}]},getMenuItems:[{id:"home",name:"Home",type:"static",state:"volumio.playback"},{id:"components",name:"Components",type:"static",state:"volumio.components"},{id:"network",name:"Network",type:"dynamic"},{id:"settings",name:"Settings",type:"dynamic"}],getSettings:{page:{label:"Settings"},sections:[{id:"section_player_name",element:"section",label:"Player name",plugin:"settings/playback_conf",onSave:"savePlayerName",saveButton:{label:"salva",values:["playerName"]},content:[{id:"playerName",element:"input",type:"text",label:"Player Name",attributes:{placeholder:"call me with a fancy name"},value:"volumio"}]},{id:"section_services_management",element:"section",label:"Services management",description:"Enable or disable certain Volumio functionalities",plugin:"/settings/playback_conf",onSave:"saveServicesManagement",saveButton:{label:"salva",values:["airplay","upnp","upnp_dlna_indexing","dlna_library"]},content:[{id:"airplay",element:"switch",label:"Airplay",value:"true"},{id:"upnp",element:"switch",label:"UPNP Control",value:"true"},{id:"upnp_dlna_indexing",element:"switch",label:"UPNP/DLNA Indexing",value:"true"},{dlna_library:"dlna_library",element:"switch",label:"DLNA Library Server",value:"true"}]},{id:"section_streaming_services",element:"section",label:"Streaming services",description:"Enable or disable Spotify Streaming services",plugin:"/settings/playback_conf",onSave:"saveStreamingServices",saveButton:{label:"salva",values:["spotify_service","spotify_username","spotify_password","prefer_high_quality"]},content:[{id:"spotify_service",element:"switch",label:"Spotify Service",value:"true"},{id:"spotify_username",element:"input",attributes:[{placeholder:"Type your spotify username"},{maxLen:"5"}],label:"Username",value:"",visibleif:"spotify_service:true"},{id:"spotify_password",element:"input",type:"password",label:"Password",value:"dusdhsudhsu",visibleif:"spotify_service:true"},{id:"prefer_high_quality",element:"switch",label:"Prefer high quality music",value:"true",visibleif:"spotify_service:true"}]},{id:"section_sound_quality",type:"section",label:"Sound quality tweaks",description:"These profiles??.",plugin:"/settings/playback_conf",onSave:"saveSoundQuality",saveButton:{label:"salva",values:["kernel_profile"]},content:[{id:"kernel_profile",element:"select",label:"Kernel profile",value:"1",options:[{1:"Default"},{2:"Less Jitter"},{3:"Jitter"},{4:"Focus"}]}]},{id:"section_updates",type:"section",label:"System updates",content:[{id:"update",element:"button",label:"System updates",description:"You can check?...",plugin:"/settings/playback_conf",onClick:"systemUpdate"}]}]}}}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function r(){"ngInject";n(this,r);var e={restrict:"E",templateUrl:"app/components/player-buttons/player-buttons.html",scope:!1,controller:o,controllerAs:"playerButtons",bindToController:!0};return e},o=function a(e){"ngInject";n(this,a),this.playerService=e};o.$inject=["playerService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function r(){"ngInject";n(this,r);var e={restrict:"E",templateUrl:"app/components/volume-manager/volume-manager.html",scope:!1,controller:o,controllerAs:"volumeManager",bindToController:!0};return e},o=function a(e){"ngInject";n(this,a),this.playerService=e,this.knobData=45,this.knobOptions={}};o.$inject=["playerService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function r(){"ngInject";n(this,r);var e={restrict:"E",templateUrl:"app/components/track-manager/track-manager.html",scope:!1,controller:o,controllerAs:"trackManager",bindToController:!0};return e},o=function a(e){"ngInject";n(this,a),this.playerService=e};o.$inject=["playerService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function r(){"ngInject";n(this,r);var e={restrict:"E",templateUrl:"app/components/player-status/player-status.html",scope:!1,controller:o,controllerAs:"playerStatus",bindToController:!0};return e},o=function a(e){"ngInject";n(this,a),this.playerService=e};o.$inject=["playerService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function r(){"ngInject";n(this,r);var e={restrict:"E",templateUrl:"app/components/player-logger/player-logger.html",scope:!1,controller:o,controllerAs:"playerLogger",bindToController:!0};return e},o=function a(e){"ngInject";n(this,a),this.loggerService=e};o.$inject=["loggerService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function a(){"ngInject";n(this,a);var e={restrict:"E",templateUrl:"app/components/side-menu/side-menu.html",scope:!1,controller:r,controllerAs:"sideMenu",bindToController:!0};return e},r=function(){function e(t,i,o,r){"ngInject";var a=this;n(this,e),this.socketService=i,this.$state=r,this.visible=!1,this.menuItems=o.get("getMenuItems"),this.init(),t.$on("socket:init",function(){a.init()})}return e.$inject=["$rootScope","socketService","mockService","$state"],i(e,[{key:"toggleMenu",value:function(){this.visible=!this.visible}},{key:"itemClick",value:function(e){this.toggleMenu(),"static"===e.type&&this.$state.go(e.state)}},{key:"init",value:function(){this.registerListner(),this.initService()}},{key:"registerListner",value:function(){this.socketService.on("pushMenuItems",function(e){})}},{key:"initService",value:function(){this.socketService.emit("getMenuItems")}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(e){"ngInject";n(this,o),this.socketService=e,console.log("im Volumio controller")};i.$inject=["socketService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(){"ngInject";n(this,o)};t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(){"ngInject";n(this,o)};t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(e,t,i,r){"ngInject";n(this,o),this.socketService=t,this.loggerService=i,console.log(e),this.pluginObj=r.get("getSettings")};i.$inject=["$stateParams","socketService","loggerService","mockService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(e,t,i,r){"ngInject";n(this,o),this.socketService=t,this.loggerService=i,this.pluginObj=r.get("getSettings")};i.$inject=["$stateParams","socketService","loggerService","mockService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(e){"ngInject";n(this,o),this.browseService=e};i.$inject=["browseService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(e){"ngInject";n(this,o),this.playerService=e};i.$inject=["playerService"],t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){"ngInject";n(this,e),this.playQueueService=t}return e.$inject=["playQueueService"],i(e,[{key:"remove",value:function(e){this.playQueueService.remove(e)}}]),e}();t["default"]=o,e.exports=t["default"]}]),angular.module("volumio").run(["$templateCache",function(e){e.put("app/browse/browse.html",'<div id="browse"><div id="browseButtons"><button ng-repeat="filter in browse.browseService.filters" ng-class="{selected: browseService.listBy === \'artist\'}" ng-click="browse.browseService.fetchLibrary(filter.index)">{{filter.name}}</button></div><div id="browseSources"><button ng-repeat="source in browse.browseService.sources">{{source.name}}</button></div><div id="browseList">{{browse.browseService.list}}</div></div>'),e.put("app/footer/footer.html",'<div class="footerBtn"><button id="browseBtn" ui-sref="volumio.browse">Browse</button></div><div class="footerBtn"><button id="playbackBtn" ui-sref="volumio.playback">Playback</button></div><div class="footerBtn"><button id="playlistBtn" ui-sref="volumio.playlist">Playlist</button></div>'),e.put("app/header/header.html",'<div id="logo">Volumio</div><div id="playerButtons"><player-buttons></player-buttons></div><div id="sideMenu"><side-menu></side-menu></div>'),e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/playback/playback.html",'<div id="playbackPanel"><div class="col-sm-12"><player-status></player-status></div><div id="leftPanel"><track-manager></track-manager></div><div id="rightPanel"><volume-manager></volume-manager></div><div class="col-sm-12"><player-logger></player-logger></div></div>'),e.put("app/plugin/plugin.html",'<h2>{{plugin.pluginObj.page.label}}</h2><div class="row"><div class="col-sm-8 offset-col-sm-2"><div class="panel panel-default" ng-repeat="section in plugin.pluginObj.sections"><div class="panel-heading"><h3 class="panel-title">{{section.label}}</h3></div><div class="panel-body"><h4 ng-if="section.description">{{section.description}}</h4><div ng-if="section.content"><form class="form-horizontal"><div ng-repeat="item in section.content" class="form-group"><label for="{{item.id}}" class="col-sm-3 control-label">{{item.label}}</label><div ng-switch="item.element" class="col-sm-9"><input ng-switch-when="input" type="{{item.type}}" id="{{item.id}}" attributes="{{item.attributes}}" ng-model="item.value"> <input ng-switch-when="switch" bs-switch="" ng-model="item.value" type="checkbox" switch-size="medium" switch-animate="false" switch-on-text="On" switch-off-text="Off" ng-true-value="\'true\'" ng-false-value="\'false\'"> <button ng-switch-when="button" type="button" name="{{item.id}}" attributes="{{item.attributes}}" ng-click="saveButton(item)">{{item.label}}</button><div ng-switch-default="" class="">Wops i can\'t display this item!</div></div></div><div ng-if="section.saveButton" class="form-group"><div class="col-sm-offset-3 col-sm-9"><button type="button" name="button" ng-click="saveSection(section)">{{section.saveButton.label}}</button></div></div></form></div></div></div></div></div>'),e.put("app/playlist/playlist.html",'<table class="table table-hover table-condensed"><tr><th>Track</th><th>Album</th><th>Artist</th><th></th></tr><tr ng-repeat="track in playlist.playQueueService.queue"><td>{{track.name}}</td><td><span ng-repeat="artist in track.artists">{{artist.name}}</span></td><td><span ng-repeat="album in track.albums">{{album.name}}</span></td><td><button ng-click="playlist.remove($index)">Remove</button></td></tr></table>'),e.put("app/settings/components.html",'<div class="container"><h3>Host</h3><input type="text" name="name" value="" ng-model="settings.socketService.host" style="width:350px;"> <button ng-click="settings.socketService.changeHost(settings.socketService.host)" type="button" name="button">Change Host</button><hr><h3>Player status</h3><player-status></player-status><hr><h3>Player buttons</h3><player-buttons></player-buttons><hr><h3>Volume manager</h3><volume-manager></volume-manager><hr><h3>Track manager</h3><track-manager></track-manager><h3>Playlist</h3>TODO<br><h3>Logger</h3><player-logger></player-logger></div>'),e.put("app/settings/plugin.html","plugin {{plugin.pluginObj}}"),e.put("app/volumio/player.html","player"),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),e.put("app/components/player-buttons/player-buttons.html",'<div id="playerButtonsDirective"><button ng-if="playerButtons.playerService.state.status !== \'play\'" ng-click="playerButtons.playerService.play()">Play</button> <button ng-if="playerButtons.playerService.state.status === \'play\'" ng-click="playerButtons.playerService.pause()">Pause</button> <button ng-click="playerButtons.playerService.stop()">Stop</button> <button ng-click="playerButtons.playerService.prev()">Prev</button> <button ng-click="playerButtons.playerService.next()">Next</button> &nbsp; | &nbsp; <button ng-click="playerButtons.playerService.rebuildSpopLibrary()">Spop</button> <button ng-click="playerButtons.playerService.rebuildLibrary()">Rebuild</button></div>'),e.put("app/components/player-logger/player-logger.html",'<div id="playerLogger"><button ng-click="playerLogger.loggerService.clear()">Clear console</button><div id="log" ng-bind-html="playerLogger.loggerService.log"></div></div>'),e.put("app/components/player-status/player-status.html",'<div id="playerStatus" class="col-sm-12"><span ng-repeat="(key, val) in playerStatus.playerService.state"><strong>{{key}}:</strong> {{val}}</span></div>'),e.put("app/components/side-menu/side-menu.html",'<button id="menuBtn" ng-click="sideMenu.toggleMenu()">Menu</button><div id="menuList" class="btn-group-vertical" role="group" ng-if="sideMenu.visible"><button ng-repeat="item in sideMenu.menuItems" type="button" name="button" ng-click="sideMenu.itemClick(item)">{{item.name}}</button></div>'),e.put("app/components/track-manager/track-manager.html",'<div id="trackManager"><div>slider</div><div><strong>repeatTrack</strong>: {{trackManager.playerService.repeatTrack}} <strong>repeatAlbum</strong>: {{trackManager.playerService.repeatAlbum}} <strong>shuffle</strong>: {{trackManager.playerService.shuffle}}</div><div id="trackButtonBar"><button ng-click="trackManager.playerService.shuffle()">Shuffle</button> <button ng-click="trackManager.playerService.repeatTrack()">Repeat track</button> <button ng-click="trackManager.playerService.repeatAlbum()">Repeat album</button></div></div>'),e.put("app/components/volume-manager/volume-manager.html",'<div id="volumeManager"><div><knob knob-data="volumeManager.playerService.volume" knob-options="volumeManager.knobOptions"></knob></div><div><strong>volume</strong> : {{volumeManager.playerService.volume}}</div><div id="volumeButtonBar"><button ng-click="volumeManager.playerService.volumeUp()">VolumeUp</button> <button ng-click="volumeManager.playerService.volumeDown()">VolumeDown</button> <button ng-click="volumeManager.playerService.toggleMute()"><span ng-if="volumeManager.playerService.state.mute">Unmute</span> <span ng-if="!volumeManager.playerService.state.mute">Mute</span></button><br><input type="text" ng-model="volumeManager.playerService.volume"></div></div>')}]);