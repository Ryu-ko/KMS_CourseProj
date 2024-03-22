(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Карта_Установки__atlas_1", frames: [[0,794,328,475],[0,0,1840,792]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["Карта_Установки__atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Фото = function() {
	this.initialize(ss["Карта_Установки__atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.поршеньЗагрРычага = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("поршеньзагрРыч");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AuRicIbyhLIA+HPI89gyg");
	this.shape.setTransform(92.7,23.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("AueC2IANlSIbyhLIA+HPg");
	this.shape_1.setTransform(92.7,23.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,187.4,48.4);


(lib.крючок = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("спусковойКрючок");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AVuuVMgr1AH1IBkH0IAvAdQA5AvAvBWQBMCNBZB8QB7CpBkBDQAjAYA4A2QAxAwAiASQBrA6D1hAQE0hPCjg/QC2hHAjg+QAgg3AZk8IATkxIgmksIDVkHILXijg");
	this.shape.setTransform(141.55,91.8412);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("ApaN7QgigSgxgwQg4g2gjgYQhkhDh7ipQhYh8hNiNQgvhWg5gvIgvgdIhkn0MAr1gH1IAaB9IrXCjIjVEHIAlEsIgSExQgZE8ggA3QgkA+i1BHQijA/k0BPQiAAhhbAAQhSAAgzgbg");
	this.shape_1.setTransform(141.55,91.8412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,285.1,185.7);


(lib.защелкаЗР = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("защелказаглрРыч");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("ABqjhIi6AAIgZHDICVgNg");
	this.shape.setTransform(10.625,22.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("AhQjhIC6AAIg+G2IiVAMg");
	this.shape_1.setTransform(10.625,22.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.3,47.1);


(lib.Ствол = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("ствол");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("EA+GgMXMh4yAAUIkjCMIAyTbIEPBkIDxBQIZsiWID7p4MBXGgATQAlh7ASifQAjk/hki1gEgrfACCIq0g8IBQGlIKqAKg");
	this.shape.setTransform(404.7883,79.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("Eg6OALIIkPhkIgyzbIEjiMMB4ygAUQBkC1gjE/QgSCfglB7MhXGAATIj7J4I5sCWgEg1DAHrIKqAKIhGlzIq0g8g");
	this.shape_1.setTransform(404.7883,79.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,811.6,160.5);


(lib.Рукоять = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("рукоять");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Растровоеизображение1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328,475);


(lib.Прицел = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("переднПрицел");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(202,0,180,0.486)").s().p("AhjAtIBaiBIBtCpg");
	this.shape.setTransform(10.025,8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,17.1);


(lib.Курок = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("курок");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AqdukIC8DhICWEUIBYB9IC8gMIEGiKIEThLIEtgNIk5EUIktAZIjtC8IhkC7IgyEHIgZFeIAMCKIi8AyIg+l3IAMk6IBYiWIi8jHIgmlTIANjUIhYhxIhkhYg");
	this.shape.setTransform(78.275,93.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("AnhIuIAMk6IBYiWIi8jHIgmlTIANjUIhYhxIhkhYIBxhLIC8DhICWEUIBYB9IC8gMIEGiKIEThLIEtgNIk5EUIktAZIjtC8IhkC7IgyEHIgZFeIAMCKIi8Ayg");
	this.shape_1.setTransform(78.275,93.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,158.6,188.7);


(lib.КлинСтвола = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("клинСтвола");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AkAheIHkgQIAhDNIoJAQg");
	this.shape.setTransform(26.075,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("AkAheIHkgQIAhDMIoJARg");
	this.shape_1.setTransform(26.075,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,54.2,24.2);


(lib.ЗагрРычаг = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("загрузРычаг");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("EAotgKRMhPDAAyIgZGRIiwCwICwKjIEHANIC8k6Qg4hBAPhNQAgiZFog2QFog3HWgWQDqgLCjAAIfshkIQ2g/g");
	this.shape.setTransform(265.575,65.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("EgmvAKFIiwqjICwiwIAZmRMBPDgAyIAzGRIw2A/I/sBkQijAAjqALQnWAWloA3QloA2ggCZQgPBNA4BBIi8E6g");
	this.shape_1.setTransform(265.575,65.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,533.2,133.6);


(lib.Барабан = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("барабан");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AsBu5IavAyIAAb4I9CBJIgZ6vg");
	this.shape.setTransform(94.15,95.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(202,0,180,0.486)").s().p("Autr1ICsjEIauAxIAAb5I9BBJg");
	this.shape_1.setTransform(94.15,95.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,190.3,192.7);


// stage content:
(lib.Карта_Установки_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// пикча
	this.instance = new lib.Фото();
	this.instance.setTransform(0,0,0.7989,0.9091);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

	// кнопки
	this.instance_1 = new lib.Прицел();
	this.instance_1.setTransform(1406.75,51.6,1,1,0,0,0,10,8.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Прицел(), 3);

	this.instance_2 = new lib.Ствол();
	this.instance_2.setTransform(1045.5,142.35,1,1,0,0,0,404.8,79.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Ствол(), 3);

	this.instance_3 = new lib.КлинСтвола();
	this.instance_3.setTransform(714.4,165);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.КлинСтвола(), 3);

	this.instance_4 = new lib.ЗагрРычаг();
	this.instance_4.setTransform(1129.85,213.6,1,1,0,0,0,265.6,65.8);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.ЗагрРычаг(), 3);

	this.instance_5 = new lib.защелкаЗР();
	this.instance_5.setTransform(1406,165.4,1,1,0,0,0,10.6,22.6);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.защелкаЗР(), 3);

	this.instance_6 = new lib.поршеньЗагрРычага();
	this.instance_6.setTransform(777.8,239.9,1,1,0,0,0,92.7,23.2);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.поршеньЗагрРычага(), 3);

	this.instance_7 = new lib.крючок();
	this.instance_7.setTransform(492.35,400.05,1,1,0,0,0,141.6,91.9);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.крючок(), 3);

	this.instance_8 = new lib.Рукоять();
	this.instance_8.setTransform(186,454.5,1,1,0,0,0,164,237.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.Рукоять(), 3);

	this.instance_9 = new lib.Курок();
	this.instance_9.setTransform(309.45,30.05);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Курок(), 3);

	this.instance_10 = new lib.Барабан();
	this.instance_10.setTransform(539.25,173.7,1,1,0,0,0,94.2,95.4);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.Барабан(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(39));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(735,360,735,360);
// library properties:
lib.properties = {
	id: 'CD02AA9C9C06434FB86FB93D0349EA5E',
	width: 1470,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Карта_Установки__atlas_1.png?1711121341272", id:"Карта_Установки__atlas_1"},
		{src:"sounds/барабан_.mp3?1711121341421", id:"барабан"},
		{src:"sounds/загрузРычаг_.mp3?1711121341421", id:"загрузРычаг"},
		{src:"sounds/защелказаглрРыч_.mp3?1711121341421", id:"защелказаглрРыч"},
		{src:"sounds/клинСтвола_.mp3?1711121341421", id:"клинСтвола"},
		{src:"sounds/курок_.mp3?1711121341421", id:"курок"},
		{src:"sounds/переднПрицел_.mp3?1711121341421", id:"переднПрицел"},
		{src:"sounds/поршеньзагрРыч_.mp3?1711121341421", id:"поршеньзагрРыч"},
		{src:"sounds/рукоять_.mp3?1711121341421", id:"рукоять"},
		{src:"sounds/спусковойКрючок_.mp3?1711121341421", id:"спусковойКрючок"},
		{src:"sounds/ствол_.mp3?1711121341421", id:"ствол"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CD02AA9C9C06434FB86FB93D0349EA5E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;