(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"B2A04_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["B2A04_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1705,3811);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.手繪筆1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0948,0.0948);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手繪筆1, new cjs.Rectangle(0,0,161.6,361.3), null);


// stage content:
(lib.B2A04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手1
	this.instance = new lib.手繪筆1();
	this.instance.setTransform(277.95,544.1,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).wait(1).to({x:292.15,y:556.1},0).to({_off:true},1).wait(19));

	// 圖層_13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_109 = new cjs.Graphics().p("AgXCCQgrgIgdgeQgdgegGgrQgGgrATglQAOgZAYgTQAYgSAdgGQAagFAbAGQAcAGAWAPQAWAQAOAYQAPAYADAbQAGAogWAnQgVAnglASQgaAMgeAAQgLAAgNgCg");
	var mask_graphics_110 = new cjs.Graphics().p("AgGDQQgrgIgdgdQgdgdgHgsQgGgpARgkIgIgHQgdgdgGgsQgGgsATgkQAOgaAYgSQAYgSAdgGQAbgFAaAFQAcAGAWAQQAWAQAOAYQAPAYADAbQAFAlgRAkQAPANALASQAPAYADAbQAGApgVAnQgVAmglASQgbAOgdAAQgMAAgMgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_graphics_109,x:308.6248,y:286.0412}).wait(1).to({graphics:mask_graphics_110,x:310.2258,y:293.8641}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// lady10
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({_off:true},2).wait(19));

	// 手1
	this.instance_2 = new lib.手繪筆1();
	this.instance_2.setTransform(141.3,510.15,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({_off:false},0).to({_off:true},1).wait(21));

	// 圖層_12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_108 = new cjs.Graphics().p("AgWCDQgrgIgdgeQgdgdgHgsQgGgrATgkQANgbAYgSQAYgTAdgGQAbgFAbAFQAcAGAWAQQAWAQAPAYQAOAYAEAcQAFAogVAmQgVAnglASQgbANgdAAQgMAAgMgCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(108).to({graphics:mask_1_graphics_108,x:169.3492,y:262.1478}).wait(22));

	// lady09
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(108).to({_off:false},0).to({_off:true},3).wait(19));

	// 手1
	this.instance_3 = new lib.手繪筆1();
	this.instance_3.setTransform(202.9,526.25,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).wait(1).to({x:214.4},0).wait(1).to({x:222.4},0).wait(1).to({x:233.6,y:525.45},0).to({_off:true},1).wait(22));

	// 圖層_11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_104 = new cjs.Graphics().p("AgWCCQgrgHgdgeQgdgegHgrQgGgrATglQAOgaAYgTQAYgSAdgGQAagGAbAGQAcAGAWAQQAWAQAPAYQAOAYAEAbQAFAogVAnQgVAnglASQgbANgdAAQgMAAgMgDg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AAdCdQgqgIgdgeIgLgNIgWgCQgrgHgdgeQgdgegGgqQgHgsATglQAOgaAYgTQAZgSAcgGQAbgGAcAGQAaAGAXAQQAQALAMAQQANAAANADQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgVAmglASQgbANgdAAQgNAAgMgCg");
	var mask_2_graphics_106 = new cjs.Graphics().p("ABECsQgjgIgZgWQgMAAgOgDQgrgIgdgdIgLgNIgVgCQgrgIgdgeQgdgdgHgrQgGgsATglQAOgaAYgSQAYgTAdgGQAbgFAbAGQAcAFAWAQQAQAMALAQQANAAAOADQAbAFAXAQIAKAJIADAAQAwgBAnAgQAoAgAIAtQAJAsgWAqQgWAqgpATQgZALgbAAQgRAAgRgEg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AgUCsQgjgIgZgWQgNAAgOgDQgrgIgdgdIgLgNIgVgCQgrgIgdgeQgdgdgHgrQgGgsATglQAOgaAYgSQAYgTAdgGQAbgFAbAGQAcAFAWAQQAQAMAMAQQANAAAOADQAbAFAXAQIAJAJIADAAQAegBAaAMQAKgdAVgXQAYgZAjgLQAjgKAhAIQAsAKAeAnQAdAngBAtQgBAvghAmQghAngvAIQglAGgjgRQgEAKgEAJQgWAqgpATQgZALgbAAQgQAAgRgEg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_2_graphics_104,x:221.4492,y:278.8538}).wait(1).to({graphics:mask_2_graphics_105,x:226.6982,y:281.4788}).wait(1).to({graphics:mask_2_graphics_106,x:231.4356,y:283.2139}).wait(1).to({graphics:mask_2_graphics_107,x:240.3438,y:283.2139}).wait(23));

	// 下嘴唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAiQgWgXgpgfIgsglQgJgJACgHIBJAKQAYAAA7ARQBEAUANACQAYAEAsgEIA8gFIA5AJQAEADgHAIIgWAVIgkAmQgdAYggAAQiRAAgpgog");
	this.shape_1.setTransform(243.3659,275.15);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(104).to({_off:false},0).to({_off:true},7).wait(19));

	// 手1
	this.instance_4 = new lib.手繪筆1();
	this.instance_4.setTransform(200.5,512.2,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).wait(1).to({x:211.9},0).wait(1).to({x:220.8,y:511.4},0).wait(1).to({x:232.8,y:517.85},0).to({_off:true},1).wait(26));

	// 圖層_10 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_100 = new cjs.Graphics().p("AgWCDQgrgIgdgeQgdgegHgrQgHgrATglQAOgaAYgSQAYgTAdgGQAbgGAbAGQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFApgVAmQgVAnglASQgbANgeAAQgLAAgMgCg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AhQCUQgrgIgdgeQgdgegGgrQgHgrATglQANgaAZgSQAYgTAdgGQAZgFAaAEIAKgIQAXgTAdgGQAbgGAcAGQAcAGAWAQQAXAQAOAYQAPAZADAbQAFApgVAmQgVAngmARQglASgrgHIgBAAQgOAOgTAJQgZANgeAAQgMAAgNgCg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AiECUQgrgIgdgeQgdgegGgrQgHgrATglQANgaAZgSQAYgTAdgGQAZgFAaAEIAKgIQAYgTAdgGQAagGAcAGQASAEAPAHIAQgEQAbgGAcAGQAbAFAXAQQAWAQAPAYQAOAZAEAbQAFAogVAnQgVAmglASQglASgsgHQgTgEgRgIQggAMgjgGIAAAAQgPAOgTAJQgaANgeAAQgMAAgNgCg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AC+CrQgrgIgdgdQgZgagIgkQgKAIgMAFQglASgrgHQgTgDgRgIQggALgkgGIAAAAQgPAOgTAJQglASgsgHQgrgIgdgeQgdgegGgrQgHgrATglQANgaAZgSQAYgTAdgGQAZgFAaAEIAKgIQAYgTAdgGQAbgGAcAGQASAEAPAIIAQgFQAagGAcAGQAbAFAXAQQAWAQAPAYQAKASAFATQAXgRAcgGQAbgGAcAGQAcAGAWAQQAWAQAPAYQAOAYAEAbQAFApgVAmQgWAnglASQgaANgdAAQgMAAgNgDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_3_graphics_100,x:218.0378,y:263.6707}).wait(1).to({graphics:mask_3_graphics_101,x:223.7779,y:261.9767}).wait(1).to({graphics:mask_3_graphics_102,x:228.9628,y:261.9767}).wait(1).to({graphics:mask_3_graphics_103,x:239.3538,y:264.3538}).wait(27));

	// 上嘴唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ACbA9QgwgwgMAAQgmAFgVAAQgKgBgRgFQgPgFgLAAQgNAAg3ALIg1AKIhIgLIgBADQAAgHAIgCQAxgVAlgUQBKgnAkAAQAGAAASAIQAUAIAKAAQADgBAXgHQARgHARAIQAaAKAiAmQAmAqAHAog");
	this.shape_2.setTransform(243.35,265.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(100).to({_off:false},0).to({_off:true},11).wait(19));

	// 手1
	this.instance_5 = new lib.手繪筆1();
	this.instance_5.setTransform(257.3,601.7,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92).to({_off:false},0).wait(1).to({x:237.3,y:614.5},0).wait(1).to({x:220.5,y:624.1},0).wait(1).to({x:201.3,y:633.7},0).wait(1).to({x:182.9,y:638.5},0).wait(1).to({x:162.9,y:646.5},0).wait(1).to({x:144.5,y:648.1},0).wait(1).to({x:124.5,y:647.3},0).to({_off:true},1).wait(30));

	// 圖層_9 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_92 = new cjs.Graphics().p("AgWCCQgrgIgdgdQgdgegHgrQgGgrATglQANgaAYgSQAYgTAdgGQAbgFAbAFQAbAGAXAQQAWAQAOAYQAPAYAEAbQAFAogVAnQgVAnglASQgbAMgdAAQgMAAgMgCg");
	var mask_4_graphics_93 = new cjs.Graphics().p("Ah+CiQgrgIgdgeQgdgegHgrQgGgsATgkQANgaAZgTQAYgSAdgGQAbgGAbAGQAcAGAWAPIAFAEIAIgSQANgbAXgSQAYgSAdgGQAbgGAcAGQAbAGAXAPQAWAQAOAYQAPAYAEAcQAFApgVAlQgVAnglASQgmASgrgHQgigHgZgTQgEAKgFAKQgUAngmATQgbANgdAAQgMAAgNgCg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AjVDLQgsgHgdgeQgdgdgHgsQgGgsASglQAOgZAYgSQAYgTAdgGQAagGAcAGQAMACALAEQADgKAGgKQANgaAZgTQAYgSAdgGQAbgGAaAGQAcAGAWAPIAFAEIAIgSQANgbAYgSQAYgSAdgGQAbgGAcAGQAbAGAXAPQAWAQAOAYQAPAYAEAcQAFApgVAmQgVAmglASQgmASgrgHQgigHgZgTQgEAKgFAKQgVAngmATQglASgrgHQgOgDgNgFQgEALgFALQgVAngmATQgaAMgdAAQgNAAgMgCg");
	var mask_4_graphics_95 = new cjs.Graphics().p("Ak3ENQgrgIgdgdQgdgegGgrQgHgsATglQAOgaAYgTQAYgSAdgGQAbgGAcAGQASAEAQAIQgFgoASgiQANgaAYgSQAZgTAcgGQAbgGAcAGQAMACALAEQADgKAFgKQAOgaAXgTQAZgSAdgGQAagGAcAGQAbAGAXAPIAEAEIAIgSQAOgbAYgSQAYgSAdgGQAagGAcAGQAcAGAWAPQAWAQAPAYQAPAYADAcQAGApgWAmQgVAnglASQglASgsgHQgigHgZgTQgEAKgFAKQgVAmglATQgmASgrgHQgPgDgMgFQgEALgGALQgVAngkATQglASgsgIQgVgEgSgIQAFAngVAmQgVAnglASQgaAMgeAAQgMAAgNgCg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AmSEyQgrgIgdgdQgdgegHgsQgHgrATglQAOgbAYgSQAYgTAdgGQAbgFAcAFQARAEAOAHIAHgPQANgaAZgSQAYgSAdgGQAbgGAbAGQATAEAPAIQgEgpARgiQAOgaAYgSQAYgTAdgGQAagGAbAGQAMACALAEQADgKAGgKQANgaAZgTQAYgSAdgGQAbgGAbAGQAcAGAWAPIAFAEIAIgSQANgbAYgSQAYgSAdgGQAbgGAcAGQAbAGAXAPQAWAQAOAYQAPAYAEAcQAFApgVAmQgVAnglASQgmASgrgHQgigHgZgTQgEAKgFAKQgVAngmASQglASgsgHQgOgDgNgFQgEALgFALQgVAngmATQglASgqgIQgVgEgSgIQAEAngUAmQgVAnglASQgmASgrgIQgTgDgRgIIgIASQgVAnglASQgbAMgdAAQgNAAgMgCg");
	var mask_4_graphics_97 = new cjs.Graphics().p("An+FSQgrgIgdgdQgdgegHgrQgHgsATglQAOgaAYgSQAYgTAdgGQAbgGAcAGQAbAGAXAPIAKAJQAEgNAGgNQAOgaAYgTQAYgSAdgGQAbgGAcAGQARADAOAIIAHgPQANgaAZgSQAYgTAdgGQAbgFAbAGQATADAPAJQgEgpARgiQAOgaAXgTQAYgSAdgGQAagGAcAFQAMADALAEQADgLAGgKQANgaAZgSQAYgTAdgGQAbgFAbAFQAcAGAWAQIAFADIAIgSQANgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAYQAPAYAEAbQAFApgVAnQgVAnglASQgmASgrgIQgigGgZgUQgEALgFAKQgVAngmASQglATgsgIQgOgCgNgFQgEALgFAKQgVAngmASQglASgrgHQgVgEgSgIQAEAngUAmQgVAmgkASQgmASgrgHQgTgEgRgHIgIASQgVAmglASQgmASgrgHQgmgHgbgYQgFAOgHAOQgVAnglASQgbAMgdAAQgNAAgMgCg");
	var mask_4_graphics_98 = new cjs.Graphics().p("ApOFuQgrgJgdgdQgdgegHgsQgGgrATglQANgaAZgTQAYgSAdgGQAbgGAcAHQAJABAJAEQANgUAUgQQAYgSAdgGQAbgGAcAGQAbAFAXAQIAKAIQAEgNAGgMQAOgaAYgTQAYgSAdgGQAbgFAcAFQAQAEAPAHIAHgPQANgaAZgTQAYgSAdgGQAbgGAaAGQASAEAQAIQgEgoARgjQAOgaAYgSQAYgSAdgGQAagHAcAGQAMACALAFQADgLAGgKQANgaAZgTQAYgSAdgGQAbgGAbAGQAcAGAWAQIAFADIAIgSQANgaAYgTQAYgSAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAXQAPAZAEAbQAFApgVAnQgVAnglARQgmATgrgIQgigGgZgUQgEAKgFALQgVAmgmATQglASgsgHQgOgDgNgFQgEAMgFALQgVAmgmASQglASgrgHQgWgEgRgJQAEAogUAmQgVAmglASQgmASgqgIQgTgDgRgIIgIASQgVAnglASQgmASgrgIQgmgHgbgYQgFAPgHAOQgVAnglARQgmATgrgIQgNgCgLgEQgVAigjARQgaAMgdAAQgNAAgMgCg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AnbFuQgrgJgdgdQgMgNgJgQQgVAnglARQgmASgrgHQgrgIgdgfQgdgdgGgsQgGgrATglQANgaAYgSQAYgSAdgGQAbgGAcAGQAbAFAXAQQAWAQAOAZIACADQANgYAXgSQAYgSAdgGQAbgGAcAHQAKABAJAEQANgUATgQQAYgSAdgGQAbgGAcAGQAcAFAWAQIALAIQADgNAHgMQANgaAZgTQAYgSAdgGQAbgFAcAFQAQAEAPAHIAGgPQANgaAYgTQAYgSAdgGQAbgGAcAGQASAEAQAIQgEgoARgjQANgaAYgSQAZgSAcgGQAbgHAcAGQAMACALAFQADgLAFgKQAOgaAYgTQAZgSAdgGQAagGAcAGQAbAGAXAQIAFADIAHgSQAOgaAYgTQAYgSAdgGQAagFAcAFQAcAGAWAQQAWAQAPAXQAPAZADAbQAGApgWAnQgVAnglARQglATgsgIQgigGgZgUQgDAKgGALQgVAmglATQgmASgrgHQgOgDgNgFQgEAMgGALQgVAmglASQglASgsgHQgVgEgRgJQAEAogVAmQgVAmglASQglASgsgIQgTgDgQgIIgIASQgWAngkASQglASgsgIQgmgHgbgYQgEAPgIAOQgVAnglARQglATgsgIQgMgCgMgEQgUAigjARQgaAMgdAAQgNAAgNgCg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(92).to({graphics:mask_4_graphics_92,x:299.8982,y:356.3228}).wait(1).to({graphics:mask_4_graphics_93,x:289.4982,y:359.4707}).wait(1).to({graphics:mask_4_graphics_94,x:280.6965,y:363.5978}).wait(1).to({graphics:mask_4_graphics_95,x:271.0482,y:370.1978}).wait(1).to({graphics:mask_4_graphics_96,x:261.8868,y:373.8978}).wait(1).to({graphics:mask_4_graphics_97,x:251.0868,y:377.1228}).wait(1).to({graphics:mask_4_graphics_98,x:243.0982,y:379.85}).wait(1).to({graphics:mask_4_graphics_99,x:231.5232,y:379.85}).wait(31));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(92).to({_off:false},0).to({_off:true},19).wait(19));

	// 手1
	this.instance_7 = new lib.手繪筆1();
	this.instance_7.setTransform(246.9,563.35,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).wait(1).to({x:254.9,y:582.7},0).wait(1).to({x:269.3,y:591.5},0).wait(1).to({x:292.15},0).wait(1).to({x:318.7,y:582.7},0).wait(1).to({x:336.3},0).wait(1).to({x:358.85,y:593.1},0).wait(1).to({x:375.6,y:609.95},0).wait(1).to({x:385.6,y:626.75},0).wait(1).to({x:389.6,y:641.15},0).to({_off:true},1).wait(38));

	// 圖層_8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_82 = new cjs.Graphics().p("AgXCCQgrgIgdgdQgdgegGgrQgGgrATglQANgaAYgSQAYgSAdgHQAbgFAbAFQAbAGAWAQQAXAQAOAYQAPAYADAcQAGAogWAmQgVAnglASQgaAMgeAAQgLAAgNgCg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AgTDzQgrgIgegeQgdgegGgrQgGgsATglQAOgaAYgSIAGgFQgQgIgNgNQgdgdgGgsQgGgrATglQANgaAYgSQAYgTAdgGQAbgGAbAGQAbAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgQAdgZARIAKAGQAXAQAOAZQAPAYADAbQAGApgWAnQgVAnglASQgbAMgdAAQgLAAgNgCg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AAkEyQgqgHgdgdQgdgegGgrIgCgRIgDAAQgrgJgegdQgdgegGgsQgGgsATgjQAOgaAYgTIAGgEQgQgJgNgNQgdgegGgrQgGgsATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAbAGAVAQQAXAQAOAYQAPAYADAcQAGApgWAmQgQAdgZASIAKAGQAXARAOAYQAPAXADAbIABANIAGABQAcAGAWARQAXAPAOAYQAPAZADAcQAGAogWAnQgVAnglARQgaANgdAAQgNAAgNgDg");
	var mask_5_graphics_85 = new cjs.Graphics().p("ACUFbQgrgIgdgeQgdgdgHgsIAAgEQgPAPgUAJQgkASgsgIQgrgHgdgeQgdgdgGgsIgCgQIgDgBQgrgIgegeQgdgegGgsQgGgqATglQAOgaAYgTIAGgEQgQgJgNgNQgdgdgGgsQgGgsATglQANgZAYgTQAYgSAdgGQAbgGAcAGQAbAGAWAPQAXARAOAXQAPAZADAbQAGApgWAmQgQAegZARIAKAHQAXAQAOAYQAPAYADAbIABANIAGABQAbAGAWAQQAXAPAOAZQAPAZADAbIABABIALgKQAYgSAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAYQAPAZADAbQAFApgVAmQgVAnglASQgaAMgeAAQgMAAgNgCg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AAUFbQgqgIgdgeQgdgdgHgsIAAgEQgPAPgUAJQglASgsgIQgrgHgdgeQgdgdgGgsIgCgQIgDgBQgrgIgegeQgdgegGgsQgGgqATglQAOgaAYgTIAGgEQgQgJgNgNQgdgdgGgsQgGgsATglQANgZAYgTQAYgSAdgGQAbgGAcAGQAbAGAWAPQAXARAOAXQAPAZADAbQAGApgWAmQgQAegZARIAKAHQAXAQAOAYQAPAYADAbIABANIAGABQAcAGAWAQQAXAPAOAZQAPAZADAbIABABIALgKQAYgSAcgGQAbgFAcAFQAbAGAXAQQAWAQAOAYQAHALAEAMQADgVAKgTQAOgbAYgSQAYgTAdgGQAbgFAcAFQAbAGAWAPQAXARAOAYQAPAYADAbQAGApgVAnQgVAngmASQglASgsgHQgrgJgdgdQgUgVgJgbQgEAWgMAVQgVAnglASQgaAMgeAAQgMAAgNgCg");
	var mask_5_graphics_87 = new cjs.Graphics().p("AhGFbQgrgIgdgeQgdgdgHgsIAAgEQgPAPgUAJQglASgsgIQgrgHgdgeQgdgdgGgsIgCgQIgDgBQgrgIgegeQgdgegGgsQgGgqATglQAOgaAYgTIAGgEQgQgJgNgNQgdgdgGgsQgGgsATglQANgZAYgTQAYgSAdgGQAbgGAcAGQAbAGAWAPQAXARAOAXQAPAZADAbQAGApgWAmQgQAegZARIAKAHQAXAQAOAYQAPAYADAbIABANIAGABQAcAGAWAQQAXAPAOAZQAPAZADAbIABABIALgKQAYgSAdgGQAbgFAcAFQAaAGAXAQQAWAQAOAYQAHALAEAMQADgVAKgTQAOgbAYgSQAYgTAdgGQAbgFAcAFQAWAFASALQAOgXAWgRQAYgRAdgGQAagFAcAGQAbAGAWAQQAWAQAPAZQAOAYADAaQAFApgVAnQgWAnglASQgmARgrgIQgYgEgUgMQgUAkgkARQglASgsgHQgrgJgdgdQgUgVgJgbQgEAWgMAVQgVAnglASQgZAMgeAAQgMAAgNgCg");
	var mask_5_graphics_88 = new cjs.Graphics().p("AizFbQgrgIgdgeQgdgdgHgsIAAgEQgPAPgUAJQglASgsgIQgrgHgdgeQgdgdgGgsIgCgQIgDgBQgrgIgegeQgdgegGgsQgGgqATglQAOgaAYgTIAGgEQgQgJgNgNQgdgdgGgsQgGgsATglQANgZAYgTQAYgSAdgGQAbgGAcAGQAbAGAWAPQAXARAOAXQAPAZADAbQAGApgWAmQgQAegZARIAKAHQAXAQAOAYQAPAYADAbIABANIAGABQAcAGAWAQQAXAPAOAZQAPAZADAbIABABIALgKQAYgSAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAYQAHALAEAMQADgVAKgTQAOgbAXgSQAYgTAdgGQAbgFAcAFQAWAFASALQAOgXAWgRQAYgRAdgGQAagFAcAGQAbAGAWAQQAWAQAPAZIAFAJQAIgIAJgIQAYgSAdgGQAbgGAcAFQAcAHAWAQQAXAPAOAZQAPAZADAbQAFAqgVAmQgVAmgmASQglARgrgHQgrgIgdgeQgQgPgJgUQgRATgYAMQgmARgrgIQgYgEgUgMQgUAkgkARQglASgsgHQgrgJgdgdQgTgVgJgbQgEAWgMAVQgVAnglASQgaAMgeAAQgMAAgNgCg");
	var mask_5_graphics_89 = new cjs.Graphics().p("AJDF/QgrgHgdgeQgdgegGgsQgCgKAAgKIgQAJQgmASgrgIQgrgIgdgdQgQgQgJgUQgRAUgYALQglARgsgIQgYgEgTgLQgVAjgjARQgmASgqgHQgrgIgdgeQgVgUgJgcQgEAWgLAWQgWAmglASQglASgsgIQgrgIgdgdQgdgegGgrIgBgFQgPAPgTAJQgmASgrgIQgrgHgdgeQgdgdgHgsIgBgQIgEgBQgrgIgdgeQgdgegGgqQgGgsATglQANgaAZgSIAGgEQgQgJgNgOQgdgdgGgsQgHgrATglQAOgaAYgSQAYgTAdgGQAagGAcAGQAcAGAWAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgQAdgaASIALAGQAWAQAPAZQAOAYAEAbIABANIAGABQAbAGAXAQQAWAPAPAYQAOAZAEAbIAAABIALgJQAYgTAdgGQAbgFAcAFQAcAGAWAQQAWAQAPAYQAGAMAFAMQACgWALgTQANgbAZgSQAYgTAdgGQAagFAbAFQAWAFASALQAOgXAWgQQAYgRAdgGQAbgFAbAGQAcAGAWAPQAWAQAOAZIAFAKQAIgJAKgHQAYgTAcgGQAcgGAbAGQAcAGAXAQQAWAQAPAYQAOAZAEAbIABASQAUgOAZgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgVAnQgVAngmASQgaANgdAAQgNAAgNgDg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AKFHFQgsgIgdgdQgdgegGgrQgCgOAAgMQgKgBgLgCQgrgHgdgeQgdgegGgsQgCgKAAgKIgQAJQgmASgrgIQgrgIgdgdQgQgQgJgUQgRAUgYALQglARgsgIQgYgEgTgLQgVAjgiARQgmASgrgHQgrgIgdgeQgVgUgJgcQgEAWgLAWQgWAmglASQglASgsgIQgrgIgdgdQgdgegGgrIgBgFQgPAPgTAJQgmASgrgIQgrgHgdgeQgdgdgHgsIgBgQIgEgBQgrgIgdgdQgdgegGgrQgGgsATglQANgaAZgSIAGgEQgQgJgNgOQgdgdgGgsQgHgrATglQAOgaAYgSQAYgTAdgGQAagGAcAGQAcAGAWAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgQAdgaASIALAGQAWAQAPAZQAOAYAEAbIABANIAGABQAbAGAXAQQAWAQAPAYQAOAZAEAaIAAABIALgJQAYgSAdgGQAbgFAcAFQAcAGAWAPQAWAQAPAYQAGAMAFAMQACgWALgTQANgaAZgSQAYgTAdgGQAagFAcAFQAWAFASALQANgXAWgQQAYgSAdgGQAbgFAbAGQAcAGAWAQQAWAQAOAZIAFAKQAIgJAKgHQAYgTAcgGQAcgGAbAGQAcAGAXAQQAWAQAPAXQAOAZAEAbIABASQAUgPAZgFQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQACALgBAMQAMAAAMACQAcAGAWAQQAXAQAOAYQAPAYADAbQAGAqgVAmQgVAngmASQgaANgdAAQgNAAgMgCg");
	var mask_5_graphics_91 = new cjs.Graphics().p("AK8InQgrgIgdgeQgdgegGgsQgHgsAUgkIABgCIgTgCQgrgHgdgeQgdgdgHgsQgCgNABgNQgLgBgKgBQgrgIgdgeQgdgegHgrQgBgLAAgKIgRAKQglARgrgHQgrgIgdgeQgQgQgJgUQgRAUgYALQgmASgrgIQgYgFgTgLQgUAjgkASQglASgsgIQgrgIgdgdQgUgVgJgcQgEAWgMAWQgVAnglASQgmARgrgHQgrgIgdgeQgdgdgHgsIAAgFQgPAPgUAKQglARgsgHQgrgIgdgdQgdgdgGgrIgCgRIgDAAQgrgIgegeQgdgegGgsQgGgrATglQAOgaAYgTIAGgEQgQgJgNgNQgdgegGgrQgGgsATglQANgaAYgSQAYgSAdgHQAbgFAcAFQAbAGAWAQQAXAQAOAYQAPAYADAcQAGApgWAmQgQAdgZASIAKAHQAXAQAOAYQAPAYADAbIABAOIAGABQAcAGAWAQQAXAPAOAZQAPAYADAcIABABIALgKQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAHALAEAMQADgVAKgUQAOgaAYgTQAYgSAdgGQAbgGAcAGQAWAEASALQAOgXAWgQQAXgSAdgFQAagFAcAGQAbAGAWAQQAWAQAPAYIAFAKQAIgJAJgHQAYgSAdgGQAbgGAcAFQAcAGAWAQQAXAQAOAZQAPAYADAcIABARQAVgOAYgFQAbgGAcAFQAbAGAXAQQAWAQAPAXQAOAYAEAbQABAMAAALQAMAAAMADQAbAGAXAPQAWAQAPAZQAOAYAEAbQAFApgVAmQAMABAMACQAbAGAXAQQAWAQAOAYQAPAYADAcQAGApgWAnQgVAmglASQgbANgdAAQgMAAgNgCg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_5_graphics_82,x:275.9232,y:304.1728}).wait(1).to({graphics:mask_5_graphics_83,x:276.3232,y:315.4478}).wait(1).to({graphics:mask_5_graphics_84,x:281.9232,y:321.8}).wait(1).to({graphics:mask_5_graphics_85,x:293.1152,y:325.85}).wait(1).to({graphics:mask_5_graphics_86,x:305.9242,y:325.85}).wait(1).to({graphics:mask_5_graphics_87,x:315.0143,y:325.85}).wait(1).to({graphics:mask_5_graphics_88,x:325.9143,y:325.85}).wait(1).to({graphics:mask_5_graphics_89,x:336.1992,y:329.5083}).wait(1).to({graphics:mask_5_graphics_90,x:342.6992,y:336.4228}).wait(1).to({graphics:mask_5_graphics_91,x:348.3232,y:346.1978}).wait(39));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({_off:false},0).to({_off:true},29).wait(19));

	// 手1
	this.instance_9 = new lib.手繪筆1();
	this.instance_9.setTransform(255.7,521.75,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).wait(1).to({x:246.9,y:540.15},0).wait(1).to({x:225.3,y:551.35},0).wait(1).to({x:206.45,y:559.35},0).wait(1).to({x:184.5,y:547.35},0).wait(1).to({x:170.1,y:533.75},0).wait(1).to({x:157.3,y:517.75},0).wait(1).to({x:149.3,y:492.95},0).to({_off:true},1).wait(48));

	// 圖層_7 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_74 = new cjs.Graphics().p("AgWCDQgrgIgdgeQgdgdgHgsQgGgqASglQAOgaAYgTQAYgSAdgHQAbgFAbAFQAbAGAXAQQAWAQAPAYQAOAYAEAcQAFAogVAnQgVAmglASQgbANgdAAQgMAAgMgCg");
	var mask_6_graphics_75 = new cjs.Graphics().p("AhDDkQgrgIgdgeQgdgegGgrQgGgrATglQANgaAYgSQAYgSAdgGQgLgVgEgYQgGgrASglQAOgaAYgTQAYgSAcgHQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAcQAFApgVAnQgVAlglASQgPAHgPADQAMAWADAaQAGApgWAnQgVAmglASQgZANgeAAQgMAAgNgCg");
	var mask_6_graphics_76 = new cjs.Graphics().p("AiKE+QgrgIgdgdQgdgegHgrQgGgsASglQAOgbAYgSQAZgTAdgGQAXgFAZAEQgGgOgCgQQgGgqATglQANgaAYgTQAYgSAcgGQgKgUgEgZQgGgrASglQANgaAYgTQAYgSAdgHQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAcQAFApgVAnQgVAmglASQgPAHgPAEQAMAWADAZQAGAogWAnQgVAmglASQgkASgqgHQAHARACARQAGApgWAnQgUAnglASQgbAMgdAAQgMAAgNgCg");
	var mask_6_graphics_77 = new cjs.Graphics().p("AjrF6QgrgIgdgdQgdgegGgrQgGgsATglQANgaAYgSQAYgSAdgHQAbgFAbAFQASAEAPAIQgBgiAPgdQANgaAZgTQAYgSAdgFQAYgFAXAEQgEgPgCgQQgHgrASglQANgaAZgSQAYgTAcgGQgLgUgDgYQgHgsATglQANgaAZgSQAYgTAcgGQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAbQAGAqgVAmQgVAngmASQgOAHgQADQANAWADAZQAFApgVAmQgVAnglASQgkARgqgGQAHAQACASQAFApgVAmQgVAngmASQglASgqgHQgUgEgQgIQAAAhgRAfQgVAngmASQgaAMgeAAQgMAAgNgCg");
	var mask_6_graphics_78 = new cjs.Graphics().p("AhuF6QgrgIgdgdQgbgbgHgmIgEAHQgVAnglASQglASgsgIQgrgIgdgdQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAagGAcAGQAcAGAWAQQAXAPAOAZQALASAFAUIABgDQAOgaAYgSQAYgSAcgHQAbgFAcAFQARAEAQAIQgBgiAOgdQAOgaAXgTQAZgSAdgFQAXgFAZAEQgGgPgCgQQgGgrATglQANgaAYgSQAYgTAdgGQgLgUgEgYQgGgsASglQAOgaAYgSQAYgTAdgGQAbgGAcAGQAbAGAXAPQAWAQAPAZQAOAYAEAbQAFAqgVAmQgVAnglASQgPAHgPADQAMAWADAZQAGApgWAmQgVAnglASQgkARgqgGQAHAQACASQAGApgWAmQgVAnglASQglASgsgHQgTgEgRgIQAAAhgRAfQgVAngkASQgbAMgdAAQgMAAgNgCg");
	var mask_6_graphics_79 = new cjs.Graphics().p("AgWF6QgrgIgdgdQgbgbgHgmIgEAHQgVAnglASQglASgsgIQgrgIgdgdQgYgZgIgiQghANgmgGQgsgIgdgeQgdgegGgrQgHgsATglQAOgaAZgSQAYgTAdgGQAagEAcAFQAcAFAWAQQAWAQAOAYQAKAQAFASQAJgEALgCQAagGAcAGQAcAGAWAQQAXAPAOAZQALASAFAUIABgDQAOgaAYgSQAYgSAcgHQAbgFAbAFQARAEAQAIQgBgiAOgdQAOgaAYgTQAZgSAdgFQAXgFAZAEQgGgPgCgQQgGgrATglQANgaAYgSQAYgTAdgGQgLgUgEgYQgGgsASglQAOgaAYgSQAYgTAdgGQAbgGAcAGQAbAGAXAPQAWAQAPAZQAOAYAEAbQAFAqgVAmQgVAnglASQgPAHgPADQAMAWADAZQAGApgWAmQgVAnglASQgkARgqgGQAHAQACASQAGApgWAmQgVAnglASQglASgsgHQgTgEgRgIQAAAhgRAfQgVAnglASQgbAMgdAAQgLAAgNgCg");
	var mask_6_graphics_80 = new cjs.Graphics().p("AApF6QgqgIgdgdQgbgbgHgmIgEAHQgVAnglASQglASgsgIQgrgIgdgdQgYgZgIgiQgiANglgGQgsgIgdgeQgdgegGgrQgFgiAKgdQgNAAgNgCQgrgIgdgeQgdgdgGgrQgGgrATglQANgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAWAQQAXAQAOAYQAPAYADAcQAEAegLAdQAPgBAQADQAcAFAWAQQAWAQAOAYQAKAQAFASQAJgEALgCQAagGAcAGQAcAGAWAQQAXAPAOAZQALASAFAUIABgDQAOgaAYgSQAXgSAcgHQAbgFAcAFQARAEAPAIQgBgiAPgdQAOgaAYgTQAZgSAdgFQAXgFAZAEQgGgPgCgQQgGgrATglQANgaAYgSQAYgTAdgGQgLgUgEgYQgGgsASglQAOgaAYgSQAYgTAdgGQAbgGAcAGQAbAGAXAPQAWAQAPAZQAOAYAEAbQAFAqgVAmQgVAnglASQgPAHgPADQAMAWADAZQAGApgWAmQgVAnglASQgkARgqgGQAHAQACASQAGApgWAmQgVAnglASQglASgsgHQgUgEgQgIQAAAhgRAfQgVAnglASQgbAMgdAAQgNAAgMgCg");
	var mask_6_graphics_81 = new cjs.Graphics().p("ABZGOQgrgIgdgeQgagagHgnIgEAIQgVAmglASQglASgsgHQgrgIgdgeQgYgYgIgiQgiANglgHQgsgIgdgdQgdgegGgsQgFghAKgdQgNAAgNgDQgrgIgdgdQgdgegGgqQgGgsATglQANgaAYgSIAJgGQgXAEgZgEQgrgIgdgeQgdgegGgrQgGgsATglQANgaAZgSQAYgTAcgGQAbgFAcAGQAcAFAWAQQAWAQAPAZQAOAYAEAbQAFApgVAnQgRAfgbARQAYgEAbAFQAbAGAWAPQAXAQAOAZQAPAYADAbQAEAfgLAbQAPAAAQADQAcAGAWAQQAWAQAOAYQAKAQAFASQAJgEALgCQAagGAcAFQAcAGAWAQQAXAQAOAYQALATAFAUIABgDQANgaAYgSQAYgTAcgGQAbgGAcAGQARAEAPAHQgBghAPgdQAOgbAYgSQAZgTAdgGQAXgEAZADQgGgOgCgPQgGgrATglQANgaAYgTQAYgSAdgGQgLgUgEgZQgGgrASglQAOgaAYgTQAYgSAdgHQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAcQAFApgVAnQgVAmglASQgPAHgPAEQAMAWADAZQAGApgWAmQgVAmglASQgkASgqgHQAHARACARQAGApgWAnQgVAnglASQglASgsgIQgUgDgQgIQAAAhgRAfQgVAmglASQgbANgdAAQgNAAgMgCg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_6_graphics_74,x:290.2976,y:262.5978}).wait(1).to({graphics:mask_6_graphics_75,x:285.8992,y:272.2978}).wait(1).to({graphics:mask_6_graphics_76,x:278.6976,y:281.3728}).wait(1).to({graphics:mask_6_graphics_77,x:269.1242,y:287.3478}).wait(1).to({graphics:mask_6_graphics_78,x:256.6742,y:287.3478}).wait(1).to({graphics:mask_6_graphics_79,x:247.8742,y:287.3478}).wait(1).to({graphics:mask_6_graphics_80,x:241.4992,y:287.3478}).wait(1).to({graphics:mask_6_graphics_81,x:236.6992,y:285.3538}).wait(30).to({graphics:null,x:0,y:0}).wait(19));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74).to({_off:false},0).to({_off:true},37).wait(19));

	// 手1
	this.instance_11 = new lib.手繪筆1();
	this.instance_11.setTransform(154.9,536.05,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65).to({_off:false},0).wait(1).to({y:558.45},0).wait(1).to({y:583.25},0).wait(1).to({y:608.35},0).wait(1).to({x:142.9,y:627.55},0).wait(1).to({x:123.7,y:637.95},0).wait(1).to({x:102.1,y:648.1},0).wait(1).to({x:80.15,y:658.5},0).wait(1).to({x:67.35,y:676.1},0).to({_off:true},1).wait(56));

	// 圖層_6 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_65 = new cjs.Graphics().p("AgWCCQgrgHgdgdQgdgegHgrQgHgqATglQANgbAZgTQAYgSAdgHQAbgFAbAFQAbAGAXAQQAWAQAPAYQAOAYAEAcQAFAogVAmQgVAnglASQgaAMgeAAQgLAAgNgCg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AAIDqQgqgIgdgdQgdgegGgrQgHgsATglQAGgLAIgKQgfgJgXgWQgdgegHgrQgHgrATglQANgbAZgTQAYgSAdgHQAbgFAcAFQAaAGAXAQQAWAQAPAYQAOAYAEAcQAFApgVAmQgGAKgGAIQAUAHARAMQAXAPAOAYQAOAYAEAcQAFApgVAnQgVAmgmASQgaANgdAAQgNAAgNgDg");
	var mask_7_graphics_67 = new cjs.Graphics().p("AAMFiQgqgIgdgdQgdgegGgrQgHgsATglQAOgaAYgTQAKgHAKgFQgYgKgTgTQgdgegGgrQgHgrATglQAGgLAIgKQgfgJgXgXQgdgegHgrQgHgrATglQANgbAZgTQAYgSAdgHQAbgFAcAFQAaAGAXAQQAWAQAPAYQAOAYAEAcQAFApgVAmQgGAKgGAIQAUAHARAMQAXAQAOAYQAOAYAEAcQAFAogVAnQgUAkgjATQANAFALAIQAXAQAOAZQAOAYAEAbQAFApgWAnQgVAmglASQgaAMgdABQgNAAgNgDg");
	var mask_7_graphics_68 = new cjs.Graphics().p("AAQHZQgqgIgdgdQgdgegGgrQgHgsATglQAOgaAYgSQAJgHAJgFQgXgKgSgSQgdgegHgrQgGgsATglQANgaAZgSQAKgHAKgFQgYgKgTgTQgdgegHgrQgGgsATglQAGgLAIgKQgfgJgXgXQgdgegHgrQgHgrASglQAOgbAYgTQAYgSAdgHQAbgFAcAFQAbAGAWAQQAXAQAOAYQAPAYADAcQAFApgVAmQgFAKgGAIQAUAHARAMQAWAQAPAYQAOAYADAcQAGApgWAnQgTAkgkATQANAFAMAIQAWAPAPAZQAOAYADAbQAFApgVAnQgTAjghASQALAFALAIQAWAQAPAYQAOAYAEAcQAFApgWAnQgVAmglASQgaAMgdAAQgNAAgNgCg");
	var mask_7_graphics_69 = new cjs.Graphics().p("AgWJRQgrgIgdgdQgdgegHgrQgHgsATglQAOgaAYgSQAWgRAagHQgMgIgLgKQgdgegGgrQgHgsATglQAOgaAYgSQAJgHAJgFQgXgKgSgSQgdgegHgrQgGgrATglQANgaAZgTQAKgHAKgFQgYgKgTgTQgdgegHgrQgGgsATglQAGgLAIgKQgfgJgXgXQgdgegHgrQgHgrASglQAOgbAYgTQAYgSAdgHQAbgFAcAFQAbAGAWAQQAXAQAOAYQAPAYADAcQAFApgVAmQgFAKgGAIQAUAHARAMQAWAQAPAYQAOAYADAcQAGApgWAnQgTAkgkATQANAFAMAIQAWAQAPAZQAOAYADAbQAFAogVAnQgTAjghASQALAFALAIQAWAQAPAYQAOAYAEAcQAFApgWAnQgVAmglASQgMAFgMAEIAEACQAWAQAPAZQAOAYAEAbQAFAqgVAmQgVAngmASQgaAMgdAAQgLAAgNgCg");
	var mask_7_graphics_70 = new cjs.Graphics().p("Ah7KjQgrgIgdgdQgdgegGgrQgHgsATglQANgaAZgTQAYgSAdgGQAbgGAcAGIAGABIgDgPQgHgrATglQANgaAYgTQAVgRAagHQgMgHgKgLQgcgdgHgsQgGgrATglQANgaAXgTQAJgHAJgFQgXgKgRgRQgdgdgGgsQgHgrATglQAOgbAXgSQAKgIAKgFQgYgKgSgTQgdgdgGgsQgHgrATglQAGgMAIgKQgfgJgXgXQgdgdgHgrQgHgsATglQANgaAZgTQAYgTAdgGQAagGAcAGQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFAqgVAmQgGAJgGAJQAUAGARAMQAXAQAOAZQAOAYAEAbQAFApgVAnQgUAlgjASQANAFALAJQAXAQAOAYQAOAYAEAcQAFApgWAmQgTAighASQAMAGAKAHQAXAQAOAZQAPAYADAbQAFAqgVAmQgVAngmARQgMAGgMADIAEADQAXAQAOAYQAOAYAEAcQAFApgVAnQgVAmglASQglASgsgHIgKgDIAEAUQAGApgWAmQgUAnglASQgaAMgeAAQgMAAgNgCg");
	var mask_7_graphics_71 = new cjs.Graphics().p("AjrLbQgrgIgdgeQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAGQAcAGAWAQQAIAGAHAHQgFgqASgkQANgaAZgTQAYgSAdgGQAagGAcAGIAGABIgDgPQgHgrATglQANgaAYgTQAWgRAagGQgMgIgKgLQgdgdgHgsQgGgrATglQANgZAYgTQAJgGAJgGQgXgKgSgSQgdgdgGgsQgHgrATglQAOgbAYgSQAKgHAKgGQgYgKgTgTQgdgdgGgsQgHgrATglQAGgMAIgJQgfgKgXgXQgdgdgHgrQgGgsASglQANgaAZgTQAYgTAdgGQAbgGAcAGQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFAqgVAmQgGAJgGAJQAUAGARAMQAXAQAOAZQAOAYAEAbQAFApgVAnQgUAlgjASQANAGALAIQAXAQAOAYQAOAYAEAcQAFApgWAmQgTAjghATQAMAFAKAHQAXAQAOAYQAPAYADAbQAFAqgVAmQgVAngmARQgMAGgMADIAEADQAXAQAOAYQAOAYAEAcQAFApgVAnQgVAmglASQglASgsgHIgKgDIAEAUQAGApgWAmQgVAnglASQglASgrgIQgpgHgcgbQAFApgVAmQgVAngmASQgaAMgdAAQgMAAgNgCg");
	var mask_7_graphics_72 = new cjs.Graphics().p("AlUMZQgrgIgdgeQgdgdgHgsQgGgsATgkQANgaAYgTQAYgSAdgHQAbgFAcAFQAcAGAWAQIADACQgGgqASgkQAOgaAYgTQAYgSAdgGQAbgGAcAGQAcAGAWAQQAIAGAHAHQgFgqASgjQAMgbAZgSQAYgTAdgGQAbgFAcAFIAGACIgDgPQgHgsATglQANgaAYgSQAWgRAagHQgMgIgKgKQgdgegHgrQgGgsATgkQANgaAYgSQAJgHAJgFQgXgKgSgSQgdgegGgrQgHgsATglQAOgaAYgTQAKgHAKgFQgYgLgTgSQgdgegGgrQgHgsATglQAGgLAIgKQgfgJgXgXQgdgegHgrQgHgrATglQANgbAZgTQAYgSAdgHQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAcQAFApgVAmQgFAKgHAIQAUAGARANQAXAQAOAYQAOAYAEAcQAFApgVAnQgUAkgjASQANAGALAIQAXAQAOAZQAOAYAEAbQAFApgWAnQgTAjghASQAMAFAKAIQAXAQAOAYQAPAYADAbQAFApgVAnQgVAmgmASQgLAFgNADIAEADQAXAQAOAZQAOAYAEAbQAFAqgVAmQgVAnglASQglASgsgIIgJgCIADATQAGApgWAnQgVAmglASQglASgsgHQgogIgdgbQAFApgVAnQgUAmgmASQglASgrgIQgfgGgYgRQAFApgVAnQgVAmglASQgbANgdAAQgMAAgNgCg");
	var mask_7_graphics_73 = new cjs.Graphics().p("AmwNrQgrgIgdgdQgdgegHgrQgGgsATglQANgbAZgSQAYgTAdgGQAbgFAbAFQASAEAPAHQgFgMgCgNQgGgsATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAcAGAWAQIADACQgGgrASgkQAOgaAYgSQAYgTAdgGQAbgFAbAGQAcAGAWAQQAIAFAHAIQgFgqASgkQANgaAZgTQAYgSAdgGQAbgGAcAGIAGABIgDgPQgHgrATglQANgaAYgTQAWgRAagHQgMgHgKgLQgdgdgHgrQgGgrATglQANgaAYgTQAJgHAJgFQgXgKgSgSQgdgdgGgsQgHgrATglQAOgbAYgSQAKgIAKgFQgYgKgTgTQgdgdgGgsQgHgrATglQAGgMAIgKQgfgJgXgXQgdgdgHgrQgHgsATglQANgaAZgTQAYgTAdgGQAbgGAcAGQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFAqgVAmQgFAJgHAJQAUAGARAMQAXAQAOAZQAOAYAEAbQAFApgVAnQgUAlgjASQANAFALAJQAXAQAOAYQAOAYAEAcQAFApgWAmQgTAjghASQAMAGAKAHQAXAQAOAZQAPAYADAbQAFAqgVAlQgVAngmARQgLAGgNADIAEADQAXAQAOAYQAOAYAEAcQAFApgVAnQgVAmglASQglASgsgHIgJgDIADAUQAGApgWAmQgVAnglASQglASgsgIQgogIgdgaQAFApgVAmQgVAngmASQglARgqgHQgfgGgYgSQAFAqgVAmQgVAnglASQgmASgrgIQgTgDgRgIQAFAOACAPQAGApgVAnQgVAmgmATQgaAMgeAAQgMAAgNgCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_7_graphics_65,x:179.077,y:278.7728}).wait(1).to({graphics:mask_7_graphics_66,x:182.2849,y:289.175}).wait(1).to({graphics:mask_7_graphics_67,x:182.6761,y:301.175}).wait(1).to({graphics:mask_7_graphics_68,x:183.1011,y:313.0728}).wait(1).to({graphics:mask_7_graphics_69,x:183.1011,y:325.0728}).wait(1).to({graphics:mask_7_graphics_70,x:177.0877,y:333.2478}).wait(1).to({graphics:mask_7_graphics_71,x:165.8893,y:338.825}).wait(1).to({graphics:mask_7_graphics_72,x:155.3643,y:344.9978}).wait(1).to({graphics:mask_7_graphics_73,x:146.1643,y:353.2478}).wait(38).to({graphics:null,x:0,y:0}).wait(19));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65).to({_off:false},0).to({_off:true},46).wait(19));

	// 手1
	this.instance_13 = new lib.手繪筆1();
	this.instance_13.setTransform(134.1,408.05,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).wait(1).to({x:115.15,y:415.8},0).wait(1).to({x:89.2,y:423.8},0).wait(1).to({x:76.25,y:447},0).wait(1).to({y:467.8},0).wait(1).to({x:94.65,y:500.6},0).wait(1).to({y:518.2},0).wait(1).to({y:529.4},0).wait(1).to({y:551.8},0).wait(1).to({x:108.25,y:567},0).wait(1).to({y:585.4},0).wait(1).to({y:608.35},0).wait(1).to({x:123.45,y:621.95},0).wait(1).to({x:135.45,y:633.95},0).to({_off:true},1).wait(65));

	// 圖層_5 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_51 = new cjs.Graphics().p("AgXCCQgrgIgdgeQgdgdgGgsQgGgqATglQANgaAZgSQAYgTAdgGQAagFAbAFQAcAGAWAQQAWAQAPAZQAOAYADAbQAFAogVAnQgVAmglASQgaAMgdABQgMAAgNgDg");
	var mask_8_graphics_52 = new cjs.Graphics().p("AiLCPQgrgIgdgeQgdgegGgsQgGgrATgkQAOgaAYgTQAYgSAdgGQAbgFAbAFQAcAGAWAQQATAOANATIAFgKQANgaAYgTQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbQAFAogVAmQgVAngmASQglARgrgHQgsgIgcgeQgIgIgHgKIgGAOQgUAngmASQgaAMgdAAQgNAAgNgCg");
	var mask_8_graphics_53 = new cjs.Graphics().p("Aj+CuQgrgIgdgdQgdgegHgrQgGgrASgkQAOgaAYgTQAYgSAdgHQAbgGAcAGQAbAGAXAQQANAJALANQADgUAKgTQANgaAZgSQAYgSAcgGQAbgGAbAGQAcAGAWAQQATANANAUIAFgLQANgaAZgSQAYgTAdgGQAagFAcAFQAcAGAWAQQAWAQAPAZQAOAYADAbQAFApgVAmQgVAmglASQgmASgrgIQgrgIgdgeQgIgIgGgJIgHANQgVAnglASQgmASgqgIQgrgIgdgeIgFgFQgEAUgLATQgWAnglASQgaAMgdAAQgMAAgNgCg");
	var mask_8_graphics_54 = new cjs.Graphics().p("AlOEIQgsgIgdgdQgdgegGgrQgHgsATglQAOgaAYgTQAYgSAdgGQAbgFAcAFIAMADQgHgOgCgSQgHgrATglQANgaAYgTQAYgSAdgHQAbgGAcAGQAcAGAWAQQAOAJAKANQAEgUAJgTQAOgaAXgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQATANAOAUIAEgLQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAZQAPAYADAbQAFApgVAnQgVAmgmASQglARgrgHQgsgIgcgeQgIgIgGgJIgHANQgVAngmARQglASgsgIQgrgIgcgdIgFgFQgEAUgLASQgVAnglASQglASgsgIIgQgEQAIASADATQAFApgVAnQgVAngmASQgaAMgdAAQgMAAgNgCg");
	var mask_8_graphics_55 = new cjs.Graphics().p("Al6FqQgrgIgdgeQgdgdgHgsQgGgrATglQANgaAZgTQAXgSAdgGQgMgVgDgZQgHgsATgkQAOgaAYgSQAYgTAdgGQAbgFAcAFIAMADQgHgPgCgSQgHgrATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAcAFAWAQQANAKALAMQADgUAJgSQAOgbAYgSQAYgSAdgGQAbgFAbAFQAcAGAWAQQATANANAUIAFgKQAOgaAYgTQAYgSAdgHQAbgFAcAFQAbAGAXARQAWAQAOAYQAPAYADAcQAFAogVAnQgVAngmASQglARgrgIQgsgHgcgeQgIgJgHgJIgGANQgVAngmATQglARgsgHQgrgJgdgdIgFgGQgEAUgLATQgUAnglASQglASgsgHIgQgFQAIARADAUQAFApgVAmQgVAngmASQgOAHgPADQANAYADAaQAFApgVAmQgVAngmASQgaAMgdAAQgMAAgNgCg");
	var mask_8_graphics_56 = new cjs.Graphics().p("AlJIvQgrgIgegeQgdgdgGgrQgHgsATglIAFgJQgRgKgNgOQgdgdgGgsQgHgrATglQANgZAWgSIgMgLQgdgdgHgsQgGgrATgkQANgaAZgTQAXgSAdgHQgMgUgDgZQgHgsATglQAOgaAYgTQAYgSAdgGQAbgGAcAGIAMADQgHgQgCgRQgHgrATglQANgaAYgTQAYgSAdgHQAbgGAcAGQAcAGAWAQQANAJALANQADgVAJgSQAOgaAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQATANANAUIAFgLQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAZQAPAYADAbQAFApgVAnQgVAmgmASQglASgrgIQgsgIgcgeQgIgIgHgJIgGANQgVAngmASQglASgsgIQgrgIgdgeIgFgGQgEAVgLATQgUAnglASQglASgsgIIgQgEQAIASADATQAFApgVAnQgVAngmASQgOAGgPAEQANAXADAaQAFApgVAmQgNAYgUAQQATAPANAWQAOAYADAbQAFAqgVAmIgDAFIANAIQAWAQAOAYQAPAZADAbQAGApgVAnQgVAmgmASQgaANgdAAQgNAAgMgCg");
	var mask_8_graphics_57 = new cjs.Graphics().p("Ai5JnQgrgIgegeQgdgdgGgsIAAAAQgSABgSgDQgrgIgegdQgdgdgGgsQgHgrATglIAFgKQgRgJgNgOQgdgegGgrQgHgsATglQANgYAWgSIgMgLQgdgegHgqQgGgsATglQANgaAZgSQAXgSAdgHQgMgVgDgZQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFIAMAEQgHgQgCgSQgHgrATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAcAFAWAQQANAKALAMQADgUAJgSQAOgaAYgTQAYgSAdgGQAbgFAbAFQAcAGAWAQQATAOANATIAFgKQAOgaAYgTQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbQAFApgVAmQgVAngmASQglARgrgHQgsgIgcgeQgIgIgHgKIgGAOQgVAngmASQglARgsgHQgrgIgdgeIgFgGQgEAUgLAUQgUAmglASQglASgsgHIgQgEQAIARADAUQAFApgVAnQgVAmgmASQgOAHgPADQANAYADAaQAFAogVAnQgNAYgUAQQATAPANAVQAOAYADAcQAFApgVAnIgDAFIANAHQAWAQAOAZQAOAXAEAZQATgCAUAEQAcAGAWAQQAXAQAOAYQAPAYADAbQAGAqgVAmQgVAngmASQgaANgdAAQgNAAgMgCg");
	var mask_8_graphics_58 = new cjs.Graphics().p("AhjK/QgrgIgdgdQgdgegGgrQgFglANghQgjgKgZgZQgdgdgGgsIAAAAQgSACgSgEQgrgIgegdQgdgdgGgsQgHgrATglIAFgKQgRgJgNgOQgdgegGgrQgHgsATglQANgYAWgRIgMgLQgdgegHgrQgGgsATglQANgaAZgSQAXgSAdgHQgMgUgDgaQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFIAMAEQgHgQgCgSQgHgrATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAcAFAWAQQANAKALAMQADgUAJgSQAOgaAYgTQAYgSAdgGQAbgFAbAFQAcAGAWAQQATAOANATIAFgKQAOgaAYgTQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbQAFApgVAmQgVAngmASQglARgrgHQgsgIgcgeQgIgIgHgKIgGAOQgVAngmASQglARgsgHQgrgIgdgeIgFgGQgEAUgLAUQgUAmglASQglASgsgHIgQgEQAIASADATQAFApgVAnQgVAmgmASQgOAHgPADQANAYADAaQAFApgVAnQgNAYgUAQQATAOANAVQAOAYADAcQAFApgVAnIgDAFIANAHQAWAQAOAZQAOAXAEAZQATgCAUAEQAcAGAWAQQAXAQAOAYQAPAYADAbQAFAjgOAgQAXAHASANQAWAQAPAZQAOAYADAbQAGApgWAnQgVAmgkASQgaANgdAAQgNAAgNgDg");
	var mask_8_graphics_59 = new cjs.Graphics().p("Aj6MOQgrgIgdgdQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAYgFAZAEIgBgHQgFglANghQgjgJgZgZQgdgegGgrIAAgBQgSACgSgDQgrgIgegeQgdgdgGgrQgHgsATglIAFgJQgRgKgNgOQgdgdgGgsQgHgqATglQANgZAWgSIgMgLQgdgdgHgsQgGgrATglQANgaAZgTQAXgSAdgHQgMgUgDgZQgHgsATglQAOgaAYgTQAYgSAdgGQAbgGAcAGIAMADQgHgQgCgRQgHgrATglQANgaAYgTQAYgSAdgHQAbgGAcAGQAcAGAWAQQANAJALANQADgUAJgTQAOgaAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQATANANAUIAFgLQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAZQAPAYADAbQAFApgVAnQgVAmgmASQglASgrgIQgsgIgcgeQgIgIgHgJIgGANQgVAngmASQglASgsgIQgrgIgdgeIgFgFQgEAUgLATQgUAnglASQglASgsgIIgQgEQAIASADATQAFApgVAnQgVAngmASQgOAHgPADQANAXADAbQAFApgVAmQgNAYgUAQQATAPANAWQAOAYADAaQAFAqgVAmIgDAFIANAIQAWAQAOAYQAOAXAEAZQATgBAUAEQAcAFAWAQQAXAQAOAYQAPAYADAcQAFAigOAhQAXAGASAOQAWAQAPAYQAOAYADAbQAGApgWAnQgVAngkASQgkARgqgHIACALQAFApgWAnQgVAmglASQgaAMgdABQgNAAgNgDg");
	var mask_8_graphics_60 = new cjs.Graphics().p("AiZNmQgrgIgdgdQgdgegHgrQgFgkALgeQgogJgbgbQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAYgFAZAEIgBgHQgFglANghQgjgJgZgZQgdgegGgrIAAgBQgSACgSgDQgrgIgegeQgdgdgGgrQgHgsATglIAFgJQgRgKgNgOQgdgcgGgsQgHgrATglQANgZAWgSIgMgLQgdgdgHgsQgGgrATglQANgaAZgTQAXgSAdgHQgMgUgDgZQgHgsATglQAOgaAYgTQAYgSAdgGQAbgGAcAGIAMADQgHgQgCgRQgHgrATglQANgaAYgTQAYgSAdgHQAbgGAcAGQAcAGAWAQQANAJALANQADgVAJgSQAOgaAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQATANANAUIAFgLQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAZQAPAYADAbQAFApgVAnQgVAmgmASQglASgrgIQgsgIgcgeQgIgIgHgJIgGANQgVAngmASQglASgsgIQgrgIgdgeIgFgGQgEAVgLATQgUAnglASQglASgsgIIgQgEQAIASADATQAFApgVAnQgVAngmASQgOAGgPAEQANAXADAbQAFApgVAmQgNAYgUAQQATAPANAWQAOAYADAbQAFAqgVAmIgDAEIANAIQAWAQAOAYQAOAXAEAZQATgBAUAEQAcAFAWAQQAXAQAOAYQAPAYADAcQAFAigOAhQAXAGASAOQAWAQAPAYQAOAYADAbQAGApgWAnQgVAngkASQgkARgqgHIACALQADAfgLAdQAbAGAWAQQAWAQAPAZQAOAYADAbQAFAqgUAmQgVAmgmASQgaANgdAAQgMAAgNgCg");
	var mask_8_graphics_61 = new cjs.Graphics().p("AgCOuQgrgIgdgeQgdgegGgrQgCgRABgPQgVACgWgDQgrgIgdgdQgdgegHgrQgFgkALgeQgogJgbgbQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAYgFAZAEIgBgHQgFglANghQgjgJgZgZQgdgegGgrIAAgBQgSACgSgDQgrgIgegeQgdgdgGgrQgHgsATgkIAFgJQgRgKgNgOQgdgdgGgsQgHgrATglQANgZAWgSIgMgLQgdgdgHgsQgGgrATglQANgaAZgTQAXgSAdgHQgMgUgDgZQgHgsATglQAOgaAYgTQAYgSAdgGQAbgGAcAGIAMADQgHgQgCgRQgHgrATglQANgaAYgTQAYgSAdgHQAbgGAcAGQAcAGAWAQQANAJALANQADgVAJgSQAOgaAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQATANANAUIAFgLQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAXAQQAWAQAOAZQAPAYADAbQAFApgVAnQgVAmgmASQglASgrgIQgsgIgcgeQgIgIgHgJIgGANQgVAngmASQglASgsgIQgrgIgdgeIgFgGQgEAVgLATQgUAnglASQglASgsgIIgQgEQAIASADATQAFApgVAnQgVAngmASQgOAGgPAEQANAXADAbQAFApgVAmQgNAYgUAQQATAPANAWQAOAYADAbQAFAqgVAmIgDAFIANAIQAWAQAOAYQAOAWAEAZQATgBAUAEQAcAFAWAQQAXAQAOAYQAPAYADAcQAFAigOAhQAXAGASAOQAWAQAPAYQAOAYADAbQAGApgWAnQgVAngkASQgkARgqgHIACALQADAfgLAdQAbAGAWAQQAWAQAPAZQAOAYADAbQABAOgBAOQAXgDAYAFQAcAGAWAQQAXAQAOAYQAOAYAEAcQAFApgVAnQgVAmgmASQgaANgeAAQgMAAgMgCg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AhCQ0QgsgHgdgeQgdgdgHgrQgHgsATglQAOgaAYgTQAYgSAdgHQAbgFAbAFQAbAGAWAQQAXAPAOAZQAPAYAEAbQAFApgVAnQgVAmglATQgZAMgdAAQgNAAgMgCgAgCMnQgrgIgdgeQgdgdgGgsQgCgQABgQQgVADgWgEQgrgHgdgeQgdgdgHgsQgFgjALgeQgogJgbgcQgdgdgGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAYgGAZAFIgBgHQgFgmANggQgjgKgZgZQgdgdgGgsIAAAAQgSABgSgDQgrgIgegdQgdgcgGgsQgHgrATglIAFgKQgRgJgNgOQgdgegGgrQgHgsATglQANgYAWgSIgMgLQgdgegHgrQgGgsATglQANgaAZgSQAXgTAdgGQgMgVgDgZQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFIAMADQgHgPgCgSQgHgrATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAcAFAWAQQANAKALAMQADgUAJgSQAOgaAYgTQAYgSAdgGQAbgFAbAFQAcAGAWAQQATANANAUIAFgKQAOgaAYgTQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbQAFApgVAmQgVAngmASQglARgrgHQgsgIgcgeQgIgJgHgJIgGAOQgVAngmASQglARgsgHQgrgIgdgeIgFgGQgEAUgLAUQgUAmglASQglASgsgHIgQgEQAIARADAUQAFApgVAnQgVAmgmASQgOAHgPADQANAYADAaQAFApgVAnQgNAYgUAQQATAPANAVQAOAYADAcQAFApgVAnIgDAEIANAIQAWAQAOAZQAOAXAEAZQATgCAUAEQAcAGAWAQQAXAQAOAYQAPAYADAaQAFAjgOAgQAXAGASAOQAWAQAPAZQAOAYADAbQAGApgWAnQgVAmgkASQgkARgqgGIACALQADAegLAeQAbAGAWAQQAWAQAPAYQAOAYADAcQABAOgBAOQAXgEAYAFQAcAGAWAQQAXAQAOAZQAOAYAEAbQAFApgVAnQgVAngmASQgaAMgeAAQgMAAgMgCg");
	var mask_8_graphics_63 = new cjs.Graphics().p("AAFSGQgqgHgdgeQgdgegGgrQgFghAJgeQgYgKgSgSQgdgdgHgrQgHgsATglQAOgaAYgTQAYgSAdgHQAbgFAbAFQAbAGAWAQQAXAPAOAZQAPAYAEAbQAEAegLAdQAOAFAMAJQAWAPAPAZQAOAYAEAcQAFApgVAmQgVAngmASQgaAMgeAAQgMAAgNgCgAgCLVQgrgIgdgeQgdgdgGgsQgCgQABgQQgVADgWgEQgrgHgdgeQgdgdgHgsQgFgjALgeQgogJgbgcQgdgdgGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAYgGAZAFIgBgHQgFgmANggQgjgKgZgZQgdgdgGgrIAAAAQgSABgSgDQgrgIgegdQgdgdgGgsQgHgrATglIAFgKQgRgJgNgOQgdgegGgrQgHgsATglQANgYAWgSIgMgLQgdgegHgrQgGgsATglQANgaAZgSQAXgTAdgGQgMgVgDgZQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFIAMADQgHgPgCgSQgHgrATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAcAFAWAQQANAKALAMQADgUAJgSQAOgaAYgTQAYgSAdgGQAbgFAbAFQAcAGAWAQQATANANAUIAFgKQAOgaAYgTQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbQAFApgVAmQgVAngmASQglARgrgHQgsgIgcgeQgIgJgHgJIgGAOQgVAngmASQglARgsgHQgrgIgdgeIgFgGQgEAUgLAUQgUAmglASQglASgsgHIgQgEQAIARADAUQAFApgVAnQgVAmgmASQgOAHgPADQANAYADAaQAFApgVAnQgNAYgUAQQATAPANAVQAOAYADAcQAFApgVAnIgDAEIANAIQAWAQAOAZQAOAXAEAZQATgCAUAEQAcAGAWAQQAXAQAOAYQAPAYADAbQAFAjgOAgQAXAGASANQAWAQAPAZQAOAYADAbQAGApgWAnQgVAmgkASQgkARgqgGIACALQADAegLAeQAbAGAWAQQAWAQAPAYQAOAYADAcQABAOgBAOQAXgEAYAFQAcAGAWAQQAXAQAOAZQAOAYAEAbQAFApgVAnQgVAngmASQgaAMgeAAQgMAAgMgCg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AC9TTQgrgIgdgeQgdgegGgrQgEgbAFgZQgkARgqgIQgqgHgdgeQgdgegGgrQgFghAJgdQgYgKgSgTQgdgdgHgrQgHgsATglQAOgaAYgTQAYgSAdgHQAbgFAbAFQAbAGAWAQQAXAPAOAZQAPAYAEAbQAEAegLAdQAOAFAMAJQAWAPAPAZQAOAYAEAcQADAZgHAYQANgGAPgDQAbgGAbAGQAcAGAWAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgVAmgmASQgaANgdAAQgNAAgMgCgAgCKIQgrgIgdgeQgdgdgGgsQgCgQABgQQgVADgWgEQgrgHgdgeQgdgdgHgsQgFgjALgeQgogJgbgcQgdgdgGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAYgGAZAFIgBgHQgFgmANgfQgjgKgZgZQgdgdgGgsIAAAAQgSABgSgDQgrgIgegdQgdgdgGgsQgHgrATglIAFgKQgRgJgNgOQgdgegGgrQgHgsATglQANgYAWgSIgMgLQgdgegHgrQgGgsATglQANgaAZgSQAXgSAdgHQgMgVgDgZQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFIAMAEQgHgQgCgSQgHgrATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAcAFAWAQQANAKALAMQADgUAJgSQAOgaAYgTQAYgSAdgGQAbgFAbAFQAcAGAWAQQATAOANATIAFgKQAOgaAYgTQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbQAFApgVAmQgVAngmASQglARgrgHQgsgIgcgeQgIgIgHgKIgGAOQgVAngmASQglARgsgHQgrgIgdgeIgFgGQgEAUgLAUQgUAmglASQglASgsgHIgQgEQAIARADAUQAFApgVAnQgVAmgmASQgOAHgPADQANAYADAaQAFApgVAnQgNAYgUAQQATAPANAVQAOAYADAcQAFApgVAnIgDAFIANAHQAWAQAOAZQAOAXAEAZQATgCAUAEQAcAGAWAQQAXAQAOAYQAPAYADAbQAFAjgOAgQAXAHASANQAWAQAPAZQAOAYADAaQAGApgWAnQgVAmgkASQgkASgqgHIACALQADAfgLAdQAbAGAWAQQAWAQAPAYQAOAYADAcQABAOgBAOQAXgDAYAEQAcAGAWAQQAXAQAOAZQAOAYAEAbQAFApgVAnQgVAngmASQgaAMgeAAQgMAAgMgCg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_8_graphics_51,x:178.2652,y:163.475}).wait(1).to({graphics:mask_8_graphics_52,x:166.6418,y:164.725}).wait(1).to({graphics:mask_8_graphics_53,x:155.0636,y:167.8728}).wait(1).to({graphics:mask_8_graphics_54,x:147.0152,y:176.8728}).wait(1).to({graphics:mask_8_graphics_55,x:142.6402,y:186.65}).wait(1).to({graphics:mask_8_graphics_56,x:142.6402,y:206.2978}).wait(1).to({graphics:mask_8_graphics_57,x:142.6402,y:211.9228}).wait(1).to({graphics:mask_8_graphics_58,x:142.6402,y:220.8106}).wait(1).to({graphics:mask_8_graphics_59,x:142.6402,y:228.675}).wait(1).to({graphics:mask_8_graphics_60,x:142.6402,y:237.3978}).wait(1).to({graphics:mask_8_graphics_61,x:142.6402,y:244.5978}).wait(1).to({graphics:mask_8_graphics_62,x:142.6402,y:258.0478}).wait(1).to({graphics:mask_8_graphics_63,x:142.6402,y:266.2478}).wait(1).to({graphics:mask_8_graphics_64,x:142.6402,y:273.9228}).wait(47).to({graphics:null,x:0,y:0}).wait(19));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(51).to({_off:false},0).to({_off:true},60).wait(19));

	// 手1
	this.instance_15 = new lib.手繪筆1();
	this.instance_15.setTransform(170.1,415.75,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40).to({_off:false},0).wait(1).to({x:162.1,y:437.35},0).wait(1).to({x:148.5,y:454.95},0).wait(1).to({x:126.9,y:462.15},0).wait(1).to({x:105.3,y:470.95},0).wait(1).to({y:492.55},0).wait(1).to({x:120.5,y:509.35},0).wait(1).to({x:139.7,y:526.15},0).wait(1).to({x:130.9,y:547.75},0).wait(1).to({x:138.9,y:570.95},0).wait(1).to({x:129.3,y:595.75},0).to({_off:true},1).wait(79));

	// 圖層_4 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_40 = new cjs.Graphics().p("AgWCDQgsgIgdgeQgdgegGgrQgGgrATglQANgaAYgSQAYgTAdgGQAbgFAbAFQAcAGAWAQQAWAQAPAYQAOAYAEAcQAFAogVAnQgVAmgmASQgaANgdAAQgMAAgMgCg");
	var mask_9_graphics_41 = new cjs.Graphics().p("AgnD2QgrgIgdgeQgcgegHgrQgGgsATglQAOgaAYgSQAPgLARgGQgJgHgHgIQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAagFAbAFQAcAGAWAQQAXAQAOAYQAPAYADAcQAGApgWAnQgVAmglARIgKAFQAWAQANAXQAPAZADAbQAFApgVAmQgVAngmASQgaAMgcAAQgMAAgOgCg");
	var mask_9_graphics_42 = new cjs.Graphics().p("AhXFWQgrgHgdgeQgcgegHgrQgGgsATglQAOgaAYgSQAYgTAdgGIAFgBQgJgTgEgYQgGgqATglQAOgaAYgTQAPgLARgHQgJgGgHgIQgdgegGgrQgHgsATglQAOgbAYgRQAXgTAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAcQAGApgWAnQgVAmglASIgKAEQAWAQANAYQAPAYADAaQAFApgVAnQgVAmgmATQgRAIgTADQAMAWADAYQAFAogVAnQgVAnglASQgaAMgdAAQgNAAgNgDg");
	var mask_9_graphics_43 = new cjs.Graphics().p("Ai2GWQgrgIgdgdQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAbgGAbAGQASADAPAIQgDgmARgfQAOgaAYgTQAYgSAcgGIAFgBQgKgTgCgXQgGgsASgkQAOgaAYgTQAPgMARgGQgJgHgHgHQgdgegGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgVAnglASIgKAEQAVAQAOAYQAPAYADAbQAFApgVAmQgVAmgmASQgRAIgTADQAMAWADAYQAFApgVAnQgVAmgmASQglASgsgIQgSgEgQgHQACAkgTAjQgVAnglASQgbAMgdAAQgMAAgNgCg");
	var mask_9_graphics_44 = new cjs.Graphics().p("AkmG6QgrgIgdgdQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAWAQQAJAGAHAIQADgVAKgSQAOgaAYgSQAYgTAdgGQAbgGAbAGQASADAOAIQgDgmARgfQAOgaAYgTQAYgRAdgGIAFgBQgKgUgDgXQgGgsATgkQAOgaAYgTQAPgMARgGQgJgHgHgHQgdgegGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgVAnglASIgKAEQAVAQAOAYQAPAYADAbQAFApgVAnQgVAlgmASQgRAIgTADQAMAWADAYQAFApgVAnQgVAmgmASQglASgsgIQgTgEgQgHQACAkgTAjQgVAnglASQgkASgsgIQgqgIgcgcQgEAVgLAUQgVAnglASQgbAMgdAAQgMAAgNgCg");
	var mask_9_graphics_45 = new cjs.Graphics().p("AluIMQgrgIgdgeQgdgegHgrQgGgsATglQANgaAZgTQAYgSAdgGQAVgFAWADIgCgLQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAWAQQAJAHAIAHQADgUAJgTQAOgaAYgSQAYgTAdgGQAagGAbAGQASAEAPAHQgCglAQgfQAOgaAYgTQAYgSAdgGIAGgBQgKgUgEgXQgGgsATgkQAOgaAYgTQAPgLASgHQgJgGgIgIQgdgegGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgVAnglASIgKAEQAWAQANAYQAPAYADAbQAFApgVAnQgVAmgmASQgRAJgSACQALAWADAXQAFApgVAnQgVAmgmASQglASgsgIQgTgDgQgIQADAlgUAiQgVAnglASQglASgsgIQgogHgdgcQgEAUgLAUQgVAnglASQgiAQgngFIADAQQAFApgVAmQgVAnglASQgbANgdAAQgMAAgNgCg");
	var mask_9_graphics_46 = new cjs.Graphics().p("AkmJvQgrgIgdgdQgdgegHgrQgGgsATglIAHgMQghgKgXgYQgdgdgHgsQgGgrATglQANgbAZgSQAYgTAdgGQAVgEAWADIgCgMQgHgrATglQAOgaAYgTQAYgSAdgGQAbgFAcAFQAbAGAWAQQAJAGAIAIQADgVAJgRQAOgaAYgTQAYgSAdgHQAagFAbAFQASAEAPAIQgCgmAQggQAOgaAYgSQAYgTAdgGIAGgBQgKgTgEgXQgGgsATglQAOgaAYgSQAPgMASgGQgJgHgIgIQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAbAFQAcAGAWAQQAXAQAOAYQAPAYADAcQAGApgWAnQgVAmglASIgKAFQAWAPANAYQAPAZADAbQAFApgVAmQgVAngmASQgRAIgSADQALAWADAYQAFApgVAmQgVAmgmASQglARgsgHQgTgEgQgHQADAkgUAjQgVAmglASQglASgsgHQgogIgdgcQgEAVgLAUQgVAmglASQgiARgngFIADAPQAFApgVAnIgFAJQAVAGARANQAXAQAOAYQAPAYADAcQAFApgVAmQgVAnglASQgbAMgdAAQgMAAgNgCg");
	var mask_9_graphics_47 = new cjs.Graphics().p("Ah/LNQgrgIgdgeQgdgdgGgsQgGgsATgkIACgEQgjAPgogHQgrgIgdgeQgdgdgHgsQgGgrATglIAHgMQghgKgXgYQgdgegHgrQgGgsATglQANgaAZgTQAYgSAdgGQAVgFAWADIgCgLQgHgsATgkQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAWAQQAJAGAIAIQADgUAJgTQAOgaAYgSQAYgTAdgGQAagGAbAGQASADAPAIQgCglAQggQAOgaAYgTQAYgSAdgGIAGgBQgKgUgEgXQgGgsATgkQAOgaAYgTQAPgMASgGQgJgGgIgIQgdgegGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgVAnglASIgKAEQAWAQANAYQAPAYADAbQAFApgVAnQgVAmgmASQgRAIgSADQALAWADAYQAFApgVAnQgVAmgmASQglASgsgIQgTgDgQgIQADAkgUAiQgVAnglASQglASgsgIQgogIgdgcQgEAVgLAUQgVAnglASQgiAQgngFIADAQQAFApgVAmIgFAJQAVAGARANQAXAQAOAZQAPAYADAbQAFApgVAnIgBACQAMgGANgCQAbgGAcAGQAcAGAWAQQAWAQAOAYQAOAYAEAcQAFApgWAnQgUAmglASQgaAMgdAAQgNAAgNgCg");
	var mask_9_graphics_48 = new cjs.Graphics().p("AgnMVQgrgIgdgdQgdgegGgrQgDgVADgSQgfgKgWgXQgdgdgGgsQgGgsATgkIACgEQgjAOgogGQgrgIgdgeQgdgdgHgsQgGgrATglIAHgMQghgKgXgYQgdgegHgrQgGgsATglQANgaAZgTQAYgSAdgFQAVgFAWADIgCgLQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAWAQQAJAGAIAIQADgVAJgSQAOgaAYgSQAYgTAdgGQAagGAbAGQASADAPAIQgCgmAQgfQAOgaAYgTQAYgSAdgGIAGgBQgKgUgEgXQgGgsATgkQAOgaAYgTQAPgMASgGQgJgHgIgHQgdgegGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgVAnglASIgKAEQAWAQANAYQAPAYADAbQAFApgVAnQgVAmgmASQgRAIgSADQALAWADAYQAFApgVAnQgVAmgmASQglASgsgIQgTgEgQgHQADAkgUAjQgVAnglARQglASgsgIQgogIgdgbQgEAUgLAUQgVAnglASQgiAQgngFIADAQQAFApgVAmIgFAJQAVAGARANQAXAQAOAZQAPAYADAbQAFApgVAnIgBACQAMgGANgCQAbgGAcAGQAcAGAWAQQAWAQAOAYQAOAYAEAcQACARgDASQASAGAPALQAWAQAPAYQAPAYADAbQAGApgVAnQgVAngmASQgaAMgdAAQgMAAgNgCg");
	var mask_9_graphics_49 = new cjs.Graphics().p("Ag2OTQgrgIgdgeQgdgegGgrQgHgsATglQAOgaAYgSQAVgRAZgGQgagKgUgUQgdgegGgrQgDgUADgTQgfgKgWgXQgdgdgGgsQgGgsATgkIACgEQgjAPgogHQgrgIgdgeQgdgdgHgsQgGgrATglIAHgMQghgKgXgYQgdgegHgrQgGgrATglQANgaAZgTQAYgSAdgGQAVgFAWADIgCgLQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAcAFQAbAGAWAQQAJAHAIAHQADgUAJgTQAOgaAYgSQAYgTAdgGQAagGAbAGQASAEAPAHQgCglAQggQAOgaAYgTQAYgSAdgGIAGgBQgKgUgEgXQgGgsATgkQAOgaAYgTQAPgLASgHQgJgGgIgIQgdgegGgsQgHgrATglQAOgbAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgVAnglASIgKAEQAWAQANAYQAPAYADAbQAFApgVAnQgVAmgmASQgRAJgSACQALAWADAYQAFApgVAnQgVAmgmASQglASgsgIQgTgDgQgIQADAlgUAiQgVAnglASQglASgsgIQgogHgdgcQgEAUgLAUQgVAnglASQgiAQgngFIADAQQAFAogVAmIgFAJQAVAGARANQAXAQAOAZQAPAYADAbQAFApgVAnIgBACQAMgGANgCQAbgGAcAGQAcAGAWAQQAWAQAOAYQAOAYAEAcQACASgDARQASAGAPALQAWAQAPAYQAPAYADAbQAGApgVAnQgVAngmASQgLAFgLADQAOAGANAJQAWAQAOAYQAPAZADAbQAGApgWAnQgVAmglASQgaANgdAAQgMAAgNgCg");
	var mask_9_graphics_50 = new cjs.Graphics().p("AgvQTQgrgIgdgeQgdgdgGgsQgGgsATgkQAOgaAYgTQAUgPAYgHQgogJgbgcQgdgdgGgsQgHgrATglQAOgbAYgSQAVgQAZgHQgagKgUgUQgdgdgGgsQgDgUADgSQgfgLgWgWQgdgegGgrQgGgsATglIACgDQgjAOgogHQgrgIgdgdQgdgegHgrQgGgsATglIAHgMQghgJgXgYQgdgdgHgsQgGgrATglQANgbAZgSQAYgTAdgGQAVgEAWADIgCgMQgHgrATglQAOgaAYgTQAYgSAdgGQAbgGAcAGQAbAGAWAQQAJAGAIAIQADgVAJgSQAOgaAYgTQAYgSAdgHQAagFAbAFQASAEAPAIQgCgmAQggQAOgaAYgSQAYgTAdgGIAGgBQgKgTgEgXQgGgsATglQAOgaAYgSQAPgMASgGQgJgHgIgIQgdgegGgrQgHgsATglQAOgaAYgSQAYgTAdgGQAbgFAbAFQAcAGAWAQQAXAQAOAYQAPAYADAcQAGApgWAnQgVAmglASIgKAFQAWAPANAYQAPAZADAbQAFApgVAmQgVAngmASQgRAIgSADQALAWADAYQAFApgVAmQgVAngmASQglARgsgHQgTgEgQgIQADAlgUAjQgVAmglASQglASgsgHQgogIgdgcQgEAVgLAUQgVAmglASQgiARgngFIADAPQAFApgVAnIgFAJQAVAGARANQAXAQAOAXQAPAYADAcQAFApgVAmIgBACQAMgFANgDQAbgFAcAFQAcAGAWAQQAWAQAOAZQAOAYAEAbQACASgDARQASAHAPALQAWAQAPAXQAPAYADAcQAGApgVAmQgVAngmASQgLAGgLADQAOAFANAJQAWAQAOAZQAPAYADAbQAGApgWAnQgVAnglASQgKAFgLADQAbAGAVAPQAWAQAPAYQAOAYAEAcQAFApgVAnQgVAmgmASQgaAMgcAAQgNAAgNgCg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_9_graphics_40,x:200.5982,y:157.0478}).wait(1).to({graphics:mask_9_graphics_41,x:199.034,y:168.6106}).wait(1).to({graphics:mask_9_graphics_42,x:194.234,y:178.25}).wait(1).to({graphics:mask_9_graphics_43,x:184.6482,y:184.5978}).wait(1).to({graphics:mask_9_graphics_44,x:173.4482,y:188.1978}).wait(1).to({graphics:mask_9_graphics_45,x:166.2232,y:196.3728}).wait(1).to({graphics:mask_9_graphics_46,x:166.2232,y:206.3228}).wait(1).to({graphics:mask_9_graphics_47,x:166.2232,y:215.6856}).wait(1).to({graphics:mask_9_graphics_48,x:166.2232,y:222.8978}).wait(1).to({graphics:mask_9_graphics_49,x:166.2232,y:235.4728}).wait(1).to({graphics:mask_9_graphics_50,x:166.2232,y:248.325}).wait(80));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40).to({_off:false},0).to({_off:true},71).wait(19));

	// 手1
	this.instance_17 = new lib.手繪筆1();
	this.instance_17.setTransform(180.5,346.15,1.4252,1.4252,0,0,0,80.8,180.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(26).to({_off:false},0).wait(1).to({x:198.9,y:334.85},0).wait(1).to({x:219.2,y:324.45},0).wait(1).to({x:241.6,y:331.65},0).wait(1).to({x:260.8,y:341.25},0).wait(1).to({x:284,y:350.05},0).wait(1).to({x:296,y:369.25},0).wait(1).to({x:302.75,y:394.85},0).wait(1).to({y:417.25},0).wait(1).to({x:293.95,y:438.85},0).wait(1).to({x:280.35,y:456.45},0).wait(1).to({x:259.55,y:441.25},0).wait(1).to({x:237.15,y:428.45},0).wait(1).to({x:223.55,y:417.25},0).to({_off:true},1).wait(90));

	// 圖層_3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_26 = new cjs.Graphics().p("AgWCCQgrgHgdgeQgdgdgHgsQgGgqASglQANgaAZgTQAYgTAdgGQAagGAbAGQAcAFAWAQQAXAQAOAZQAPAYAEAbQAFAogVAnQgVAmglATQgbANgdAAQgLAAgNgDg");
	var mask_10_graphics_27 = new cjs.Graphics().p("Ah+DAQgsgHgdgeQgdgdgGgsQgHgrATglQANgZAYgTQAYgTAdgGQAbgGAcAGQAbAFAXAQIAAAAQgFgpASgiQAOgaAXgTQAYgSAdgHQAbgFAcAGQAcAFAWAQQAWAQAPAZQAOAYAEAbQAFAqgWAlQgVAnglASQglARgsgHQgdgGgXgQQAEAogUAmQgUAmgmATQgaAMgdAAQgMAAgNgCg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AjdDmQgsgHgdgeQgdgdgGgsQgHgrATglQANgaAYgSQAYgTAdgGQAbgGAcAGQAbAFAXAQIAAAAQgFgpASgiQAOgaAYgTQAYgSAdgHQAagFAcAGQAUAEARAJQADgLAFgKQAOgaAYgTQAZgSAdgGQAbgFAbAGQAcAGAWAQQAWAQAPAYQAOAYADAcQAFApgVAmQgWAmglARQglASgrgIQgXgEgSgKQgEAMgHAMQgVAnglASQglARgrgHQgegGgXgQQAFAogUAmQgVAmgmATQgaAMgdAAQgNAAgMgCg");
	var mask_10_graphics_29 = new cjs.Graphics().p("Ak6D8QgrgIgdgdQgdgegHgrQgGgsASglQANgaAZgTQAYgRAdgGQAagGAcAFQAcAGAWAPIABAAQgFgoASgjQANgaAZgSQAYgTAdgGQAbgGAbAGQAUAEARAKQADgLAGgKQAMgbAZgSQAYgTAdgFQAbgGAcAGQAXAFAUANQANgVAUgQQAZgSAcgGQAbgGAcAGQAbAGAXAPQAWAQAPAYQAOAYAEAcQAFApgVAnQgVAmglASQglASgsgIQgcgFgVgNQgWAigiARQgmARgrgHQgWgEgTgKQgEAMgGAMQgVAmglASQglASgrgIQgegFgXgQQAEAogUAlQgVAnglASQgbANgdAAQgMAAgNgCg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AmeD8QgsgIgdgdQgdgegGgrQgHgsATglQANgaAYgTQAYgRAdgGQAbgGAcAFQAbAGAXAPIAAAAQgFgoASgjQAOgaAYgSQAYgTAdgGQAbgGAcAGQAUAEARAKQADgLAFgKQAOgbAYgSQAZgTAdgFQAagGAbAGQAYAFAUANQANgVAUgQQAYgSAdgGQAagGAcAGQAcAGAWAPQAXAQAOAYIADAFIADgDQAZgTAdgGQAagFAcAFQAcAGAWAQQAXAQAOAZQAOAYAEAbQAFApgVAnQgVAmgmARQglASgsgHQgrgIgdgeQgMgMgJgPQgLAJgPAHQglASgrgIQgcgFgWgNQgVAigjARQglARgqgHQgWgEgTgKQgEAMgHAMQgVAmglASQglASgsgIQgdgFgXgQQAEAogUAlQgVAngmASQgaANgdAAQgMAAgNgCg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AoRD8QgsgIgdgdQgdgegGgrQgHgsATglQANgaAYgTQAYgRAdgGQAbgGAcAFQAbAGAXAPIAAAAQgFgoASgjQAOgaAYgSQAYgTAdgGQAbgGAcAGQAUAEARAKQADgLAFgKQAOgbAYgSQAZgTAdgFQAbgGAbAGQAYAFAUANQAMgVAVgQQAXgSAdgGQAagGAcAGQAcAGAWAPQAXAQAOAYIADAFIADgDQAZgTAdgGQAagFAcAFQAcAGAWAQQAXAQAOAZQAOAYAEAbIABARQAHgIAKgHQAYgSAcgHQAbgFAcAFQAbAGAXAQQAWAPAPAZQAOAYAEAbQAFAogVAnQgVAnglASQgmASgrgIQgrgIgdgdQgdgegGgrIgCgVQgRATgYALQglASgsgHQgrgIgdgeQgMgMgJgPQgMAJgOAHQglASgrgIQgcgFgWgNQgUAigjARQglARgrgHQgWgEgTgKQgEAMgHAMQgVAmglASQglASgsgIQgdgFgXgQQAEAogUAlQgVAngmASQgaANgdAAQgMAAgNgCg");
	var mask_10_graphics_32 = new cjs.Graphics().p("AI1EOQgrgIgegeQgdgdgGgsQgDgUACgUQgZAGgcgFQgrgIgdgdQgdgegGgrIgCgUQgRASgYALQglASgsgHQgrgIgdgdQgMgNgJgPQgLAJgPAHQglATgqgIQgcgFgWgOQgVAigjARQglARgrgHQgWgEgTgKQgEAMgHAMQgVAmglASQglASgsgIQgdgFgXgQQAEAogUAlQgVAngmASQglASgrgHQgsgIgdgdQgdgegGgrQgHgsATglQANgaAYgSQAYgSAdgGQAbgGAcAFQAbAGAXAQIAAAAQgFgpASgjQAOgaAYgSQAYgTAdgGQAbgGAcAGQAUAEARAKQADgLAFgKQAOgbAYgSQAZgTAdgFQAbgGAbAGQAYAFAUANQANgVAUgQQAYgSAdgGQAagGAbAGQAcAGAWAPQAXAQAOAYIADAFIADgDQAZgTAdgGQAagFAcAFQAcAGAWAQQAXAQAOAZQAOAYAEAbIABARQAIgIAJgHQAYgSAcgHQAbgFAcAFQAbAGAXAQQAWAPAPAZQAOAYAEAbQACATgDARIADgBQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAZAEAbQAFApgVAnQgVAmgmASQgaANgdAAQgMAAgNgCg");
	var mask_10_graphics_33 = new cjs.Graphics().p("AJ1F7QgrgIgdgdQgdgegHgrQgGgsATglQAHgPALgMQgYAFgbgFQgrgIgdgdQgdgegHgrQgDgVADgTQgaAFgcgEQgrgIgdgdQgdgdgGgsIgCgVQgRATgXAMQgmASgrgIQgrgIgdgdQgNgOgIgPQgMAKgNAHQglASgsgHQgcgGgVgNQgWAjgiAQQgmASgrgIQgWgEgTgKQgEAMgGAMQgVAngmASQglAQgrgHQgegFgXgQQAEAngUAmQgVAmglATQglASgsgIQgrgHgdgeQgdgdgHgsQgGgqASglQANgaAZgTQAYgTAdgGQAagGAcAGQAcAFAWAQIABAAQgFgpASgiQANgaAZgTQAYgSAdgHQAbgFAbAGQAUADARAKQADgLAGgKQANgaAZgTQAYgSAdgGQAbgFAcAGQAXAFAUAMQANgVAUgPQAZgTAcgGQAbgFAcAFQAbAGAWAQQAWAQAPAYIACAEIAEgDQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbIABARQAIgJAJgHQAYgSAdgGQAbgGAbAGQAcAFAWAQQAXAQAOAYQAOAYAEAcQADASgDASIACAAQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAaQAFAqgVAmQgHANgJALIAAAAQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgUAngmASQgaANgeAAQgMAAgNgCg");
	var mask_10_graphics_34 = new cjs.Graphics().p("AJ8HuQgrgIgdgdQgdgegGgsQgGgrATglQANgbAYgSIAIgFQgWgKgQgRQgdgegHgrQgGgsATglQAHgPALgMQgYAFgbgFQgrgIgdgdQgdgdgHgrQgDgVADgTQgaAGgcgFQgrgIgdgeQgdgdgGgsIgCgVQgRAUgXALQgmASgrgIQgrgIgdgdQgNgNgIgQQgLAKgOAHQglASgsgHQgcgFgVgOQgWAjgiAQQgmASgrgIQgWgEgTgKQgEAMgGAMQgVAngmASQglARgrgHQgegGgXgPQAEAngUAmQgVAmglATQglARgsgIQgrgHgdgdQgdgdgHgsQgGgrASglQANgaAZgTQAYgTAdgGQAagGAcAGQAcAFAWAQIABABQgFgqASgiQANgaAZgTQAYgSAdgHQAbgFAbAGQAUAEARAJQADgLAGgKQANgaAZgTQAYgSAdgGQAbgFAcAGQAXAFAUAMQANgVAUgPQAZgTAcgGQAbgFAcAFQAbAGAWAQQAWAQAPAYIACAEIAEgDQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbIABARQAIgJAJgHQAYgSAdgGQAbgGAbAGQAcAFAWAQQAXAQAOAYQAOAYAEAcQADASgDASIACAAQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAbQAFAqgVAmQgHAOgJAJIAAAAQAbgEAcAEQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgQAfgbASQAKAEAKAHQAXAQAOAZQAOAYAEAcQAFApgVAmQgVAngmASQgaAMgeAAQgMAAgNgCg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AJEJfQgrgIgdgeQgdgegGgrQgGgrATglQANgbAYgSQAVgQAYgGIgEgEQgdgegGgsQgGgrATglQANgbAYgSIAIgGQgWgJgQgRQgdgegHgrQgGgrATglQAHgPALgMQgYAFgbgFQgrgIgdgdQgdgegHgrQgDgVADgTQgaAFgcgEQgrgIgdgeQgdgdgGgsIgCgVQgRATgXAMQgmASgrgIQgrgIgdgdQgNgOgIgPQgLAKgOAHQglASgsgHQgcgGgVgNQgWAjgiAQQgmASgrgIQgWgEgTgKQgEAMgGAMQgVAngmASQglARgrgHQgegGgXgQQAEAogUAmQgVAmglATQglASgsgIQgrgHgdgeQgdgdgHgsQgGgrASglQANgaAZgTQAYgTAdgGQAagGAcAGQAcAFAWAQIABAAQgFgpASgiQANgaAZgTQAYgSAdgHQAbgFAbAGQAUADARAKQADgLAGgKQANgaAZgTQAYgSAdgGQAbgFAcAGQAXAFAUAMQANgVAUgPQAZgTAcgGQAbgFAcAFQAbAGAWAQQAWAQAPAYIACAEIAEgDQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbIABARQAIgJAJgHQAYgSAdgGQAbgGAbAGQAcAFAWAQQAXAQAOAYQAOAYAEAcQADASgDASIACAAQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAbQAFAqgVAmQgHANgJALIAAAAQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAaQAFApgVAnQgQAegbASQAKAFAKAHQAXAQAOAZQAOAYAEAcQAFApgVAmQgVAngmASQgLAFgMADQANAMAKARQAPAYADAbQAGApgWAnQgVAmglASQgaANgeAAQgMAAgNgCg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AIMLSQgrgIgdgdQgdgegGgrQgGgrATglQANgbAYgSQAXgSAdgGIgLgKQgdgegGgrQgGgrATglQANgbAYgSQAVgQAYgGIgEgEQgdgegGgsQgGgrATglQANgbAYgSIAIgFQgWgKgQgQQgdgegHgrQgGgsATglQAHgPALgMQgYAFgbgFQgrgIgdgdQgdgegHgrQgDgVADgTQgaAGgcgFQgrgIgdgeQgdgdgGgsIgCgVQgRAUgXALQgmASgrgIQgrgIgdgdQgNgNgIgQQgLAKgOAHQglASgsgHQgcgFgVgOQgWAjgiAQQgmASgrgIQgWgEgTgKQgEAMgGAMQgVAngmASQglARgrgHQgegGgXgPQAEAngUAmQgVAmglATQglASgsgIQgrgHgdgeQgdgdgHgsQgGgrASglQANgaAZgTQAYgTAdgGQAagGAcAGQAcAFAWAQIABAAQgFgpASgiQANgaAZgTQAYgSAdgHQAbgFAbAGQAUAEARAJQADgLAGgKQANgaAZgTQAYgSAdgGQAbgFAcAGQAXAFAUAMQANgVAUgPQAZgTAcgGQAbgFAcAFQAbAGAWAQQAWAQAPAYIACAEIAEgDQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbIABARQAIgJAJgHQAYgSAdgGQAbgGAbAGQAcAFAWAQQAXAQAOAYQAOAYAEAcQADASgDASIACAAQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAbQAFAqgVAmQgHAOgJAKIAAAAQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgQAfgbARQAKAEAKAHQAXAQAOAZQAOAYAEAcQAFApgVAmQgVAngmASQgLAFgMADQANANAKAQQAPAYADAbQAGApgWAnQgVAmglASQgOAHgPADQARAPAMAUQAPAYADAbQAFApgVAnQgVAmglASQgaAMgdAAQgNAAgNgCg");
	var mask_10_graphics_37 = new cjs.Graphics().p("AEJLfQgrgIgdgeQgdgdgGgsQgGgrATglQAOgbAYgSQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAIAOAFAOQACgYAMgWQANgbAYgSQAXgSAdgGIgLgKQgdgegGgrQgGgrATglQANgbAYgSQAVgQAYgGIgEgEQgdgegGgsQgGgrATglQANgbAYgSIAIgFQgWgKgQgQQgdgegHgrQgGgsATglQAHgPALgMQgYAFgbgFQgrgIgdgdQgdgegHgrQgDgVADgTQgaAGgcgFQgrgIgdgeQgdgdgGgsIgCgVQgRAUgXALQgmASgrgIQgrgIgdgdQgNgNgIgQQgLAKgOAHQglASgsgHQgcgFgVgOQgWAjgiAQQgmASgrgIQgWgEgTgKQgEAMgGAMQgVAngmASQglARgrgHQgegGgXgPQAEAngUAmQgVAmglATQglASgsgIQgrgHgdgeQgdgdgHgsQgGgrASglQANgaAZgTQAYgTAdgGQAagGAcAGQAcAFAWAQIABAAQgFgpASgiQANgaAZgTQAYgSAdgHQAbgFAbAGQAUAEARAJQADgLAGgKQANgaAZgTQAYgSAdgGQAbgFAcAGQAXAFAUAMQANgVAUgPQAZgTAcgGQAbgFAcAFQAbAGAWAQQAWAQAPAYIACAEIAEgDQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbIABARQAIgJAJgHQAYgSAdgGQAbgGAbAGQAcAFAWAQQAXAQAOAYQAOAYAEAcQADASgDASIACAAQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAbQAFAqgVAmQgHAOgJAKIAAAAQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgQAfgbARQAKAEAKAHQAXAQAOAZQAOAYAEAcQAFApgVAmQgVAngmASQgLAFgMADQANANAKAQQAPAYADAbQAGApgWAnQgVAmglASQgOAHgPADQARAPAMAUQAPAYADAbQAFApgVAnQgVAmglASQglASgsgIQgrgIgdgdQgWgXgJgfQgDAagNAZQgVAmgmASQgaANgdAAQgNAAgNgDg");
	var mask_10_graphics_38 = new cjs.Graphics().p("AEJLfQgrgIgdgeQgdgdgGgsQgGgrATglQAHgOAJgLQgQASgWALQglASgsgIQgrgIgcgeQgdgdgGgsQgGgrATglQANgaAXgSQAYgTAdgGQAbgFAbAFQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgHAOgKALQAJgJAKgIQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAIAOAFAOQACgYAMgWQANgbAYgSQAXgSAdgGIgLgKQgdgegGgrQgGgrATglQANgbAYgSQAVgQAYgGIgEgEQgdgegGgsQgGgrATglQANgbAYgSIAIgFQgWgKgQgQQgdgegHgrQgGgsATglQAHgPALgMQgYAFgbgFQgrgIgdgdQgdgegHgrQgDgVADgTQgaAGgcgFQgrgIgdgeQgdgdgGgsIgCgVQgRAUgXALQgmASgrgIQgrgIgdgdQgNgNgIgQQgLAKgOAHQglASgsgHQgcgFgVgOQgWAjgiAQQgmASgrgIQgWgEgTgKQgEAMgGAMQgVAngmASQglARgrgHQgegGgXgPQAEAngUAmQgVAmglATQglASgsgIQgrgHgdgeQgdgdgHgsQgGgrASglQANgaAZgTQAYgTAdgGQAagGAcAGQAcAFAWAQIABAAQgFgpASgiQANgaAZgTQAYgSAdgHQAbgFAbAGQAUAEARAJQADgLAGgKQANgaAZgTQAYgSAdgGQAbgFAcAGQAXAFAUAMQANgVAUgPQAZgTAcgGQAbgFAcAFQAbAGAWAQQAWAQAPAYIACAEIAEgDQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbIABARQAIgJAJgHQAYgSAdgGQAbgGAbAGQAcAFAWAQQAXAQAOAYQAOAYAEAcQADASgDASIACAAQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAbQAFAqgVAmQgHAOgJAKIAAAAQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgQAfgbARQAKAEAKAHQAXAQAOAZQAOAYAEAcQAFApgVAmQgVAngmASQgLAFgMADQANANAKAQQAPAYADAbQAGApgWAnQgVAmglASQgOAHgPADQARAPAMAUQAPAYADAbQAFApgVAnQgVAmglASQglASgsgIQgrgIgdgdQgWgXgJgfQgDAagNAZQgVAmgmASQgaANgdAAQgNAAgNgDg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AEJLfQgrgIgdgeQgdgdgGgsQgGgrATglQAHgOAJgLQgQASgWALQglASgsgIQgrgIgcgeQgcgcgGgpQgdAIgggFQgrgIgdgeQgdgdgHgsQgGgsATgkQANgbAYgSQAYgSAdgGQAbgGAcAGQAbAFAWAQQAWAQAPAYQAMAWAFAYIAJgDQAbgFAbAFQAcAGAWAQQAXAQAOAYQAPAYADAbQAGApgWAnQgHAOgKALQAJgJAKgIQAYgSAdgGQAbgGAbAGQAcAGAWAQQAXAQAOAYQAIAOAFAOQACgYAMgWQANgbAYgSQAXgSAdgGIgLgKQgdgegGgrQgGgrATglQANgbAYgSQAVgQAYgGIgEgEQgdgegGgsQgGgrATglQANgbAYgSIAIgFQgWgKgQgQQgdgegHgrQgGgsATglQAHgPALgMQgYAFgbgFQgrgIgdgdQgdgegHgrQgDgVADgTQgaAGgcgFQgrgIgdgeQgdgdgGgsIgCgVQgRAUgXALQgmASgrgIQgrgIgdgdQgNgNgIgQQgLAKgOAHQglASgsgHQgcgFgVgOQgWAjgiAQQgmASgrgIQgWgEgTgKQgEAMgGAMQgVAngmASQglARgrgHQgegGgXgPQAEAngUAmQgVAmglATQglASgsgIQgrgHgdgeQgdgdgHgsQgGgrASglQANgaAZgTQAYgTAdgGQAagGAcAGQAcAFAWAQIABAAQgFgpASgiQANgaAZgTQAYgSAdgHQAbgFAbAGQAUAEARAJQADgLAGgKQANgaAZgTQAYgSAdgGQAbgFAcAGQAXAFAUAMQANgVAUgPQAZgTAcgGQAbgFAcAFQAbAGAWAQQAWAQAPAYIACAEIAEgDQAYgSAdgGQAbgGAcAGQAbAGAXAQQAWAQAOAYQAPAZADAbIABARQAIgJAJgHQAYgSAdgGQAbgGAbAGQAcAFAWAQQAXAQAOAYQAOAYAEAcQADASgDASIACAAQAbgGAcAGQAcAGAWAPQAXAQAOAZQAPAYADAbQAFAqgVAmQgHAOgJAKIAAAAQAbgFAcAFQAbAGAXAQQAWAQAPAYQAOAYAEAbQAFApgVAnQgQAfgbARQAKAEAKAHQAXAQAOAZQAOAYAEAcQAFApgVAmQgVAngmASQgLAFgMADQANANAKAQQAPAYADAbQAGApgWAnQgVAmglASQgOAHgPADQARAPAMAUQAPAYADAbQAFApgVAnQgVAmglASQglASgsgIQgrgIgdgdQgWgXgJgfQgDAagNAZQgVAmgmASQgaANgdAAQgNAAgNgDg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_10_graphics_26,x:200.6976,y:110.1538}).wait(1).to({graphics:mask_10_graphics_27,x:211.1127,y:103.9788}).wait(1).to({graphics:mask_10_graphics_28,x:220.6377,y:100.1788}).wait(1).to({graphics:mask_10_graphics_29,x:229.8976,y:98.0228}).wait(1).to({graphics:mask_10_graphics_30,x:239.9136,y:98.0228}).wait(1).to({graphics:mask_10_graphics_31,x:251.4226,y:98.0228}).wait(1).to({graphics:mask_10_graphics_32,x:259.5136,y:99.8228}).wait(1).to({graphics:mask_10_graphics_33,x:265.8976,y:110.6978}).wait(1).to({graphics:mask_10_graphics_34,x:266.6965,y:122.2728}).wait(1).to({graphics:mask_10_graphics_35,x:266.6965,y:133.4978}).wait(1).to({graphics:mask_10_graphics_36,x:266.6965,y:145.075}).wait(1).to({graphics:mask_10_graphics_37,x:266.6965,y:146.375}).wait(1).to({graphics:mask_10_graphics_38,x:266.6965,y:146.375}).wait(1).to({graphics:mask_10_graphics_39,x:266.6965,y:146.375}).wait(91));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(26).to({_off:false},0).to({_off:true},85).wait(19));

	// 手1
	this.instance_19 = new lib.手繪筆1();
	this.instance_19.setTransform(54.9,440,1.4252,1.4252,0,0,0,80.8,180.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:44.5,y:419.2},0).wait(1).to({y:401.6},0).wait(1).to({y:379.2},0).wait(1).to({x:58.4,y:357.5},0).wait(1).to({x:80,y:346.15},0).wait(1).to({x:96,y:340.55},0).wait(1).to({x:120},0).wait(1).to({x:140.8,y:351.75},0).wait(1).to({x:158.4,y:366.95},0).wait(1).to({x:174,y:386.15},0).wait(1).to({x:188.4,y:405.35},0).wait(1).to({x:201.2,y:422.95},0).wait(1).to({x:214,y:442.95},0).wait(1).to({x:228.4,y:462.15},0).wait(1).to({x:246,y:482.95},0).wait(1).to({x:258.8,y:500.55},0).wait(1).to({x:278.8,y:518.15},0).wait(1).to({x:294.8,y:530.15},0).wait(1).to({x:314.8,y:545.35},0).wait(1).to({x:339.6,y:549.35},0).wait(1).to({x:350,y:532.55},0).wait(1).to({x:339.6,y:510.15},0).wait(1).to({x:327.6,y:490.95},0).wait(1).to({x:311.6,y:470.95},0).wait(1).to({x:306.8,y:463.75},0).to({_off:true},1).wait(104));

	// 圖層_2 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgyB8QgpgRgXgoQgYgpAGgrQAGgsAighQAighAsgFQArgFAoAYQAoAZAQApQAQApgNAsQgOAtgkAaQgbAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AAKDlQgogRgXgoQgYgpAGgsQAFggATgaIgRABQgggBgegQQgdgPgSgbQgWgiABgsQABgrAYghQAZgiApgNQApgOAoALQAZAIAWASQAWATAMAZQAQAfgCAkQgCAkgTAdIgCADQAqgDAmAXQAoAYAQApQAQApgNAtQgOAtgkAaQgbAUgjAEIgQABQgaAAgZgKg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AApFGQgpgRgXgoQgXgpAGgsQAEggATgaIgRABQgggBgdgQQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgIQgagTgOgeQgPgeABghQABgpAagjQAZgjAngNQAngNApAMQAqALAZAgQAVAaAGAiQAHAhgKAgQgFARgJAOQARAIAOAMQAWATANAZQAPAfgCAjQgCAkgTAdIgCADQAqgDAmAXQApAZAQApQAQApgOAtQgNAtgkAaQgcAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_3 = new cjs.Graphics().p("AAtG5QgpgRgWgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgQgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgdQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDQAqgDAjAVQAsAbAQAxQAPAzgXAuQgPAigfAUQAWAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPAMQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQAqgEAmAYQAoAYAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEIgQABQgbAAgYgKg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AAtIgQgpgRgWgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgQgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgoAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDIANgBQgJgOgGgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAhgLAiAHQAiAHAcAXQAcAYALAgQAMAhgGAkQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgXAuQgPAigfAUQAWAMARAVQAUAZAHAiQAGAhgJAfQgFARgKAPQARAIAPAMQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQAqgEAmAYQAoAYAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEIgQABQgbAAgYgKg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AANJ1QgogRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUATgMQgKgFgJgHQghgbgMgnQgMgnANgpQANgpAggYQAggZAqgDIANAAQgJgPgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZACQgGgWABgWQACglAVggQAWgfAhgPQAagMAdAAQAdAAAaALQAhAPAXAfQAWAgACAlQADAlgSAiQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgZgBQAJAOAEARQAPAzgVAuQgQAigfAVQAXALAQAUQAUAZAGAiQAHAigKAfQgFARgIAPQAQAIAOAMQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AhGK4QgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgQgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgmQgLgnANgpQAMgpAggYQAggZArgDIANgBQgKgOgFgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAZgMAdAAQARAAAQAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqQAUArgKAuQgLAuglAeQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgVAbgiANQgaAKgagBQAIAOAGARQAPAzgXAuQgPAhggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQApgEAmAYQAoAYAQApQAQAqgNAtQgOAtgkAaQgbAUgiAEIgRABQgaAAgYgKg");
	var mask_11_graphics_7 = new cjs.Graphics().p("Ai5K4QgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgQgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgmQgLgnANgpQAMgpAggYQAggZArgDIANgBQgJgOgGgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQARAAAQAEQgBgeANgdQAQgiAcgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAlAEAfAYQAfAYANAjQANAjgIAmQgIAmgZAcQgYAYgiALQghALgigGQghgHgbgWQgXgUgNgbQgKAOgOALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAigfATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgXAuQgPAhggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQAqgEAmAYQAoAYAQApQAPAqgMAtQgOAtgkAaQgbAUgjAEIgQABQgaAAgZgKg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AkoK4QgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUATgNQgKgFgJgHQghgbgMgmQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgGgVABgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQAAgeANgdQAPgiAegVQAdgUAmgDQAlgDAgAQQApAUAUAqIABACQAUgZAfgPQAjgRAlAFQAlAEAfAYQAfAYAMAjIABABIABAAQAWgWAegKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiQgBAjgTAeQgUAfgeAQQgeARgkgBQgkAAgegRQgbgQgRgbQgKgOgFgQQgXAXggAKQgiALghgGQgigHgbgWQgXgUgMgbQgLAOgOALQgcAWglAFQgZAEgYgGQAAAigQAfQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgWAuQgPAhggAUQAXAMAQAVQAVAZAGAiQAHAigKAfQgFARgJAPQARAHAOANQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AmIK4QgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUASgNQgJgFgJgHQghgbgMgmQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgHgVACgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQAAgeANgdQAPgiAegVQAdgUAmgDQAmgDAgAQQApAUATAqIABACQAUgZAfgPQAjgRAlAFQAlAEAfAYQAfAYAMAjIABABIABAAQAWgWAegKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiIAAAHQAKgFAMgEQAjgJAkAJQAkAKAZAaQAZAZAKAlQAJAkgLAjQgKAigbAaQgcAZgjAIQgjAIgkgMQgkgMgXgbQgVgYgIggQgGgXACgXQgcAOgggBQgkAAgegRQgbgQgRgbQgKgOgGgQQgWAXggAKQgiALghgGQgigHgbgWQgXgUgMgbQgKAOgOALQgcAWglAFQgbAEgYgGQABAigQAfQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgWAuQgQAhgfAUQAXAMAQAVQAVAZAGAiQAHAigKAfQgFARgJAPQARAHAOANQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AnjK4QgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUATgNQgKgFgJgHQghgbgMgmQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgGgVABgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQAAgeANgdQAPgiAegVQAdgUAmgDQAmgDAgAQQApAUAUAqIABACQAUgZAfgPQAigRAlAFQAlAEAfAYQAfAYAMAjIABABIABAAQAWgWAegKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiIAAAHQALgFALgEQAjgJAkAJQAkAKAZAaQAZAZAKAlQAJAkgLAjIgDAJIAPgGQAkgLAjAIQAjAIAbAaQAbAaAKAjQAKAjgKAkQgJAkgaAaQgaAZgkAJQglAJgigKQgfgJgXgXQgYgXgLgeQgMgiAHglQADgLADgKQgMAGgOADQgjAIgkgMQgkgMgXgbQgVgYgIggQgGgXACgXQgcAOgggBQgkAAgegRQgbgQgRgbQgKgOgFgQQgXAXggAKQgiALghgGQghgHgbgWQgXgUgMgbQgLAOgOALQgcAWglAFQgaAEgYgGQAAAigQAfQgSAigfATQgfATgnAAIgHAAQAIAcgGAfQgGAkgWAbQgWAbgiANQgZAKgbgBQAJAOAFARQAPAzgWAuQgPAhggAUQAXAMAQAVQAVAZAGAiQAHAigKAfQgFARgJAPQARAHAOANQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AotK4QgpgRgXgpQgYgpAGgsQAEgfAUgaIgRAAQggAAgegRQgdgQgSgbQgWgiABgrQAAgmATgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAOgUATgNQgKgFgIgHQgigbgMgmQgLgnANgpQAMgpAggYQAggZArgDIANgBQgKgOgFgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAYgIAZABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQAQAAARAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAkAEAfAYQAfAYANAjIAAABIABAAQAWgWAfgKQAegKAfAEQAgAFAZARQAdAUAQAgQAQAggCAiIgBAHQALgFALgEQAjgJAkAJQAlAKAZAaQAZAZAJAlQAJAkgKAjIgDAJIAOgGQAkgLAjAIQAjAIAbAaQAcAaAKAjQAKAjgKAkIgGAQIAFAAQAegEAbAIQAvANAcAqQATAdACAkQADAjgPAgQgPAfgeAVQgeAUgiAEQgjADghgPQghgPgUgcQgVgcgEgkQgEgjANggQggAHgfgJQgegJgYgXQgYgXgLgeQgLgiAHglQACgLAEgKQgNAGgOADQgjAIgjgMQgkgMgYgbQgVgYgIggQgGgXACgXQgcAOgfgBQgkAAgegRQgbgQgSgbQgKgOgFgQQgXAXgfAKQghALgigGQghgHgbgWQgYgUgMgbQgLAOgNALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgbgBQAJAOAGARQAPAzgXAuQgPAhggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgGARgJAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQApgEAnAYQAoAYAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEIgRABQgaAAgYgKg");
	var mask_11_graphics_12 = new cjs.Graphics().p("ApsK4QgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUASgNQgJgFgJgHQghgbgMgmQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgGgVABgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQAAgeANgdQAPgiAegVQAdgUAmgDQAmgDAgAQQApAUAUAqIABACQAUgZAfgPQAjgRAlAFQAlAEAfAYQAeAYAMAjIABABIABAAQAWgWAegKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiIAAAHQAKgFAMgEQAjgJAkAJQAkAKAZAaQAZAZAKAlQAJAkgLAjIgDAJIAPgGQAkgLAjAIQAjAIAbAaQAbAaAKAjQAKAjgKAkIgFAQIAFAAQAdgEAcAIQAuANAcAqQATAdADAkQACAigOAeQAaAAAaAJQAlAOAXAfQAXAeADAoQADAogRAiQgQAdgdAUQgdATghADQgiADgggOQgggNgUgbQgTgXgHgfQgHgfAHgdQADgNAGgMQgeABgdgNQgigPgUgcQgUgcgFgkQgEgjAOggQghAHgegJQgfgJgXgXQgYgXgLgeQgMgiAHglQACgLAEgKQgMAGgOADQgjAIgkgMQgkgMgXgbQgVgYgIggQgGgXACgXQgcAOgggBQgkAAgegRQgbgQgRgbQgJgOgGgQQgWAXggAKQgiALghgGQgigHgbgWQgXgUgNgbQgKAOgOALQgcAWglAFQgaAEgZgGQABAigQAfQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgWAuQgQAhgfAUQAXAMAQAVQAVAZAGAiQAHAigKAfQgFARgJAPQARAHAOANQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AqqK4QgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUASgNQgJgFgJgHQghgbgMgmQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgHgVACgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQgBgeAOgdQAPgiAegVQAdgUAmgDQAmgDAgAQQApAUAUAqIABACQAUgZAfgPQAjgRAlAFQAlAEAfAYQAfAYAMAjIABABIABAAQAWgWAdgKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiIAAAHQAKgFAMgEQAjgJAkAJQAkAKAZAaQAZAZAKAlQAJAkgLAjIgDAJIAPgGQAkgLAjAIQAjAIAbAaQAbAaAKAjQAKAjgKAkIgFAQIAFAAQAdgEAcAIQAuANAcAqQATAdADAkQACAigOAeQAaAAAaAJQAlAOAXAfQAXAeADAoQADAngRAiIAFAAQAkAAAhAUQAhAUARAgQARAhgCAmQgCAmgVAfQgVAegjAQQgiAQglgEQgkgEgfgXQgegYgOgiQgNghAGgmQADgXAKgSQgdAAgcgMQgggNgUgbQgTgXgHgfQgHgfAHgdQADgNAGgMQgfABgcgNQgigPgUgcQgUgcgFgkQgEgjAOggQghAHgegJQgfgJgXgXQgYgXgLgeQgMgiAHglQACgLAEgKQgNAGgNADQgjAIgkgMQgkgMgXgbQgVgYgIggQgGgXACgXQgcAOgggBQgkAAgdgRQgbgQgRgbQgKgOgGgQQgWAXggAKQgiALghgGQgigHgbgWQgXgUgNgbQgKAOgOALQgcAWglAFQgbAEgYgGQABAigQAfQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgWAuQgQAhgfAUQAXAMAQAVQAVAZAGAiQAHAigKAfQgFARgJAPQAQAHAPANQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEIgQABQgaAAgYgKg");
	var mask_11_graphics_14 = new cjs.Graphics().p("ANPK7QglgQgVgfQgTgbgEgiQgFgjANgfQAEgJAFgKQgYAHgZgDQglgDgegYQgfgXgNgiQgOgiAGgmQAEgWAKgTQgdABgcgMQgggOgVgaQgTgYgHgeQgGgfAHgeQADgMAFgMQgeABgdgOQghgPgUgbQgVgcgEgkQgEgjANggQggAGgfgJQgegJgYgWQgYgXgLgeQgLgiAHglQACgLAEgKQgNAGgOACQgjAIgjgMQgkgLgYgbQgVgZgIggQgFgWACgXQgcANgfAAQgkgBgegRQgbgPgSgbQgJgOgGgQQgXAXggAKQghALgigHQghgGgbgXQgXgTgNgbQgKANgOALQgcAXgmAFQgaADgYgFQABAhgRAfQgRAiggATQgfATgmAAIgIAAQAIAdgFAfQgGAjgWAbQgWAbgiANQgaAKgagBQAJAPAFARQAPAygXAvQgPAgggAVQAXAMARAUQAUAaAHAiQAGAhgJAgQgFARgKAPQARAHAPAMQAWATAMAZQAQAfgCAkQgCAkgTAdIgCADQAqgDAmAXQAoAZAQApQAQApgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgoQgYgpAGgsQAFggATgaIgRABQgggBgegQQgdgQgSgbQgWgiABgsQABglASgeQgNgGgMgJQgagTgPgeQgOgeAAghQABgpAagjQAPgTASgNQgJgGgJgHQgigbgMglQgLgnANgpQAMgpAggZQAggZArgDIANAAQgJgOgGgSQgKghAIgjQAIgkAXgaQAXgaAjgLQAZgIAYABQgGgVABgXQADgkAVggQAWggAigPQAagLAdAAQARAAAQADQgBgdANgdQAQgjAdgUQAegVAlgDQAmgCAgAQQApAUAVAqIABACQATgaAfgPQAkgQAkAEQAlAEAfAYQAfAYANAjIABACIAAgBQAWgWAfgKQAegKAfAFQAfAEAZASQAdATAQAgQAQAhgCAiIgBAGQALgFALgDQAjgKAkAKQAlAJAZAaQAZAaAJAkQAJAlgKAiIgDAJIAOgFQAkgLAjAIQAjAIAbAaQAcAaAKAiQAKAjgKAkIgGARIAFgBQAegEAbAJQAvANAcApQATAeACAkQADAigOAeQAagBAZAKQAlAOAYAeQAXAfADAoQADAngRAiIAEAAQAlAAAhAUQAgATASAhQARAhgDAmQgBAhgQAbIAFgBQAjgHAkALQAjAMAYAbQAXAbAHAlQAHAlgMAhQgMAigdAYQgcAYgkAGQgLACgKAAQgbAAgagLg");
	var mask_11_graphics_15 = new cjs.Graphics().p("AObMjQgdgLgUgVQgVgVgKgdQgKgdADgeQADgbANgYIADgFIgFABQglAGglgPQglgQgVgfQgTgbgEgiQgFgjANgfQAEgKAFgJQgYAHgZgDQglgDgegYQgfgXgNgiQgOgiAGgmQAEgWAKgTQgdABgcgMQgggOgVgaQgTgYgHgeQgGgfAHgeQADgNAFgLQgeAAgdgNQghgOgUgbQgVgcgEgkQgEgkANggQggAGgfgJQgegJgYgWQgYgXgLgeQgLgiAHglQACgLAEgKQgNAFgOADQgjAIgjgMQgkgLgXgbQgVgZgIggQgFgXACgWQgcANggAAQgkgBgegRQgbgPgSgbQgJgPgGgPQgXAWggALQghALgigHQghgGgbgXQgYgUgMgaQgKANgOALQgcAXgmAFQgaADgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAdgFAfQgGAjgWAbQgWAbgiANQgaAKgagBQAIAPAGARQAPAygXAvQgPAhggAVQAXAMARAUQAUAZAHAiQAGAhgJAgQgFARgKAOQARAIAPAMQAWATAMAZQAQAfgCAkQgCAkgTAdIgCADQAqgDAmAXQAoAZAQApQAQApgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgoQgYgpAGgsQAFggATgaIgRABQgggBgegQQgdgQgSgbQgWgiABgsQABgmASgeQgNgGgMgIQgagTgPgeQgOgeAAghQABgpAagiQAPgUASgMQgJgGgJgHQgigbgMgmQgLgnANgpQAMgpAggZQAggZArgDIANAAQgKgPgFgRQgKghAIgjQAIgkAXgaQAXgaAjgLQAZgIAYABQgGgVABgXQADgkAVggQAWggAigPQAagLAdAAQARgBAQAEQgBgeANgcQAQgjAdgUQAegVAlgDQAmgCAgAQQApAUAVAqIABACQATgaAfgPQAkgQAkAEQAlAEAfAYQAfAYANAjIABACIAAgBQAWgWAfgKQAegKAfAFQAgAEAZASQAcATAQAgQAQAhgCAiIgBAGQALgFALgDQAjgKAkAKQAlAJAZAaQAZAaAJAkQAJAlgKAiIgDAJIAOgFQAkgLAjAIQAjAIAbAaQAcAaAKAiQAKAjgKAkIgGARIAFgBQAegEAbAJQAvANAcApQATAeACAkQADAigOAfQAagBAZAKQAlAOAYAeQAXAeADAoQADAngRAiIAEAAQAlAAAhAUQAgATASAhQARAhgDAmQgBAhgQAbIAFgBQAjgHAkALQAjAMAYAbQAXAbAHAlQAHAlgMAhQgFANgHAMQAfgGAhAJQAfAJAYAXQAYAWALAeQALAfgEAgQgFAhgSAbQgRAYgbAPQgaAQgeACIgLAAQgYAAgXgIg");
	var mask_11_graphics_16 = new cjs.Graphics().p("AP/OQQgpgFgfgZQgegYgMgoQgMgoALglQAEgRAJgQIgGABQgeADgcgLQgdgKgVgWQgUgVgLgdQgKgdADgdQADgcAOgYIADgFIgFABQglAHglgQQglgPgWgfQgTgbgEgjQgEgiAMgfQAEgKAFgJQgYAGgZgCQgkgEgfgXQgegYgOgiQgNghAGgmQADgWAKgTQgdAAgcgMQgggNgUgbQgTgXgHgfQgHgeAHgdQADgNAGgMQgeABgdgNQgigPgUgcQgUgcgFgkQgEgkAOggQghAHgegJQgfgJgXgXQgYgXgLgeQgMgiAHglQACgLAEgKQgNAGgNADQgjAIgjgMQgkgMgXgbQgVgYgIggQgGgXACgXQgcAOgggBQgkAAgegRQgbgQgRgbQgKgOgGgQQgWAXggAKQgiALghgGQgigHgbgWQgXgUgNgbQgKAOgOALQgcAWglAFQgbAEgYgGQABAigQAfQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgWAuQgQAigfAUQAXAMAQAVQAVAZAGAiQAHAigKAeQgFARgJAPQAQAIAPAMQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEQgjAEgfgNQgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgdABggQABgpAagjQAOgUASgNQgJgFgJgHQghgbgMgnQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgHgVACgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQgBgeAOgdQAPgiAegVQAdgUAmgDQAmgDAgAQQApAUAUAqIABACQAUgZAfgPQAjgRAlAFQAlAEAfAYQAfAYAMAjIABABIABAAQAWgWAegKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiIAAAHQAKgFAMgEQAigJAkAJQAkAKAZAaQAZAZAKAlQAJAkgLAjIgDAJIAPgGQAkgLAjAIQAjAIAbAaQAbAaAKAjQAKAjgKAkIgFAQIAFAAQAdgEAcAIQAuANAcAqQATAdADAkQACAjgOAeQAaAAAaAJQAlAOAXAfQAXAeADAoQADAmgRAiIAFAAQAkAAAhAUQAhAUARAgQARAhgCAmQgCAhgQAcIAGgCQAjgHAjAMQAkAMAXAbQAYAbAHAkQAHAlgMAiQgFANgIAMQAggHAhAJQAeAJAZAXQAYAXALAeQALAegFAhQgEAcgOAYQAhgFAfALQAkANAZAhQAZAhADAnQACAogUAjQgUAkgjASQgcAPggAAIgQgBg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AQ9PiQgjgKgZgZQgagbgIgnQgJgmANgkIABAAQgcAJgfgDQgpgFgegZQgegYgMgoQgNgoALglQAFgRAJgQIgHABQgdADgdgLQgdgKgUgWQgVgVgKgdQgKgdADgdQADgcANgYIADgFIgFABQglAHglgQQglgPgVgfQgTgbgEgjQgFgiANgfQAEgKAFgJQgYAGgZgCQglgEgegXQgfgYgNgiQgOghAGgmQAEgXAKgSQgdAAgcgMQgggMgVgbQgTgXgHgfQgGgfAHgdQADgNAFgMQgeABgdgNQghgPgUgcQgVgcgEgkQgEgkANggQggAHgfgJQgegJgYgXQgYgXgKgeQgLgiAHglQACgLADgKQgMAGgOADQgjAIgjgMQgkgMgYgbQgVgYgIggQgFgXACgXQgcAOgggBQgkAAgegRQgbgQgSgbQgJgOgGgQQgXAXggAKQghALgigGQghgHgbgWQgXgUgNgbQgKAOgOALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgXAuQgPAiggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAYQAQAfgCAkQgCAlgTAdIgCADQAqgEAmAYQAoAYAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgQgSgbQgWgiABgrQABgmASgdQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDIANgBQgJgOgGgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQARAAAQAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAlAEAfAYQAfAYANAjIABABIAAAAQAWgWAfgKQAegKAfAEQAgAFAZARQAdAUAQAgQAQAggCAiIgBAHQALgGALgDQAjgJAkAJQAkAKAZAaQAZAZAJAlQAJAkgKAjIgDAJIAOgGQAkgLAjAIQAjAIAbAaQAcAaAKAjQAKAjgKAkIgGAQIAFAAQAegEAbAIQAvANAcAqQATAdACAkQADAjgOAeQAaAAAZAJQAlAOAYAfQAXAeADAoQADAngRAiIAEAAQAlAAAhAUQAgAUASAfQARAhgDAmQgBAhgQAcIAFgCQAjgHAkAMQAjAMAYAbQAXAbAHAkQAHAlgMAiQgFANgHAMQAggHAgAJQAfAJAYAXQAYAXALAeQALAegEAhQgEAcgPAYQAhgFAfALQAlANAZAhQAZAhACAnQACAdgKAaIASgFQAjgGAiALQAjAMAXAaQAXAaAIAjQAHAkgKAhQgLAigaAYQgbAZgiAIQgPAEgPAAQgTAAgTgGg");
	var mask_11_graphics_18 = new cjs.Graphics().p("AShQrQglgGgagXQgbgXgMgjQgLgcADgcIgIACQgiAIgjgKQgjgLgYgZQgagbgJgmQgIgnANgjIAAgBQgcAKgegEQgpgEgfgZQgegZgMgoQgMgnALgmQAEgRAJgPIgGABQgeACgcgKQgdgLgVgVQgUgVgLgdQgKgdADgeQADgbAOgYIADgFIgFABQglAGglgPQglgQgWgfQgTgbgEgiQgEgjAMgfQAEgKAFgJQgYAHgZgDQgkgDgfgYQgegXgOgiQgNgiAGglQADgWAKgTQgdABgcgMQgggOgUgaQgTgYgHgeQgHgfAHgeQADgMAGgMQgeABgdgOQgigPgUgbQgUgcgFgkQgEgkAOggQghAGgegJQgegJgXgWQgYgXgLgeQgMgiAHglQACgLAEgKQgNAFgNADQgjAIgkgMQgkgLgXgbQgVgZgIggQgGgXACgWQgcANggAAQgkgBgegRQgbgPgRgbQgKgOgGgQQgWAXggAKQgiALghgHQgigGgbgXQgXgUgNgaQgKANgOALQgcAXglAFQgbADgYgFQABAhgQAfQgSAigfATQgfATgnAAIgHAAQAHAdgFAfQgGAjgWAbQgWAbgiANQgaAKgagBQAJAPAFARQAPAygWAvQgQAhgfAVQAXAMAQAUQAVAaAGAiQAHAhgKAgQgFARgJAPQARAHAOAMQAWATANAZQAPAfgCAjQgCAkgTAdIgCADQAqgDAmAXQApAZAQApQAQApgOAtQgNAtgkAaQgcAUgjAEQgjAEgfgNQgpgRgYgoQgXgpAGgsQAEggATgaIgRABQgggBgdgQQgdgQgSgbQgXgiABgrQABgmATgdQgOgGgMgJQgagTgOgeQgPgeABghQABgpAagjQAOgTASgNQgJgGgJgHQghgbgMgmQgMgnANgpQANgpAggZQAggZAqgDIANAAQgJgPgFgRQgKghAHgjQAIgkAXgaQAXgaAjgLQAZgIAZABQgHgVACgXQACgkAWggQAWggAhgPQAagLAdAAQARAAAQADQgBgdAOgdQAPgjAegUQAdgVAmgDQAmgCAgAQQApAUAUAqIABACQAUgaAfgPQAjgQAlAEQAlAEAfAYQAfAYAMAjIABACIABgBQAWgWAegKQAfgKAeAFQAgAEAaASQAcATAQAgQAQAhgCAiIAAAGQAKgFAMgDQAjgKAkAKQAkAJAZAaQAZAaAKAkQAJAlgLAiIgDAJIAOgFQAkgLAjAIQAjAIAbAaQAbAaAKAiQAKAjgKAkIgFARIAFgBQAdgEAcAJQAuANAcApQATAeADAkQACAjgOAeQAagBAaAKQAlAOAXAeQAXAfADAoQADAngRAiIAFAAQAkAAAhAUQAhATARAhQARAhgCAlQgCAhgQAbIAGgBQAjgHAjALQAkAMAXAbQAYAbAHAlQAHAlgMAhQgFAOgIALQAggGAhAJQAeAJAZAXQAYAWALAeQALAfgFAgQgEAdgOAYQAhgFAfALQAkANAZAhQAZAhADAnQABAcgKAbIATgFQAigHAjAMQAiALAXAaQAYAbAHAjQAEAVgBATQAfgJAhAGQAkAHAbAXQAbAXAMAiQAMAjgGAjQgHAjgXAcQgYAcgiALQgVAIgWAAQgNAAgNgDg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AUCRnQgjgHgZgXQgYgVgMgeQgLgbABgcQgLAGgNAFQghAMgkgHQglgHgagXQgbgXgMgiQgLgdADgcIgIACQgiAIgjgKQgjgKgYgZQgagbgJgnQgIgmANgkIAAAAQgcAJgegDQgpgFgfgZQgegYgMgoQgMgoALglQAEgRAJgQIgGABQgeADgcgLQgdgKgVgWQgUgVgLgdQgKgdADgdQADgcAOgYIADgFIgFABQglAHglgQQglgPgWgfQgTgbgEgjQgEgiAMgfQAEgKAFgJQgYAGgZgCQgkgEgfgXQgegYgOgiQgNggAGgmQADgXAKgSQgdAAgcgMQgggNgUgbQgTgXgHgfQgHgfAHgdQADgNAGgMQgeABgdgNQghgPgUgcQgUgcgFgkQgEgkAOggQghAHgegJQgfgJgXgXQgYgXgLgeQgMgiAHglQACgLAEgKQgNAGgNADQgjAIgkgMQgkgMgXgbQgVgYgIggQgGgXACgXQgcAOgggBQgkAAgegRQgbgQgRgbQgKgOgGgQQgWAXggAKQgiALghgGQgigHgbgWQgXgUgNgbQgKAOgOALQgcAWglAFQgbAEgYgGQABAigQAfQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgWAuQgQAigfAUQAXAMAQAVQAVAZAGAiQAHAigKAfQgFARgJAPQARAHAOANQAWASANAZQAPAfgCAkQgCAlgTAcIgCADQAqgEAmAYQApAYAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEQgjAEgfgNQgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgQgSgbQgXghABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUASgNQgJgFgJgHQghgbgMgnQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgHgVACgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQAAgeANgdQAPgiAegVQAdgUAmgDQAmgDAgAQQApAUAUAqIABACQAUgZAfgPQAjgRAlAFQAlAEAfAYQAfAYAMAjIABABIABAAQAWgWAegKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiIAAAHQAKgGAMgDQAjgJAkAJQAkAKAZAaQAZAZAKAlQAJAkgLAjIgDAJIAPgGQAkgLAjAIQAiAIAbAaQAbAaAKAjQAKAjgKAkIgFAQIAFAAQAdgEAcAIQAuANAcAqQATAdADAkQACAjgOAeQAaAAAaAJQAlAOAXAfQAXAeADAoQADAngRAiIAFAAQAkAAAhAUQAhAUARAgQARAhgCAmQgCAhgQAbIAGgCQAjgHAjAMQAkAMAXAbQAYAbAHAkQAHAlgMAiQgFANgIAMQAggHAhAJQAeAJAZAXQAYAXALAeQALAegFAhQgEAcgOAYQAhgFAfALQAkANAZAhQAZAhADAnQABAdgKAaIATgFQAigGAjALQAiAMAXAaQAYAaAHAjQAEAVgBAUQAfgKAhAHQAkAGAbAXQAbAXAMAjQAJAZgBAaQAVgOAZgEQAigGAhAMQAiAMAXAZQAWAZAIAjQAIAigJAhQgJAhgZAZQgZAZghAJQgSAGgTAAQgPAAgPgEg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AV5ScQgjgFgagVQgbgUgOghQgMgZAAgbQgWASgaAHQggAKgjgIQgjgHgZgXQgYgVgMgeQgLgbABgcQgLAGgNAFQghAMgkgHQglgHgagXQgbgXgMgiQgKgdACgcIgIACQgiAIgjgKQgjgKgYgZQgagbgJgnQgIgmANgkIAAAAQgbAJgfgDQgpgFgfgZQgegYgMgoQgMgoALglQAEgRAKgQIgHABQgeADgcgLQgdgKgVgWQgUgVgLgdQgKgdADgdQADgcAOgYIADgFIgFABQglAHglgQQglgPgWgfQgTgbgEgjQgEgiAMgfQAEgKAGgJQgZAGgZgCQgkgEgfgXQgegXgOgiQgNghAGgmQAEgXAJgSQgdAAgcgMQgggNgTgbQgTgXgHgfQgHgfAHgdQADgNAGgMQgeABgdgNQgigPgUgcQgUgcgFgkQgEgkAOggQghAHgegJQgfgJgXgXQgYgXgLgeQgMgiAHglQACgLAEgKQgMAGgOADQgjAIgkgMQgkgMgXgbQgVgYgIggQgGgXACgXQgcAOgggBQgkAAgegRQgbgQgRgbQgKgOgFgQQgXAXggAKQgiALghgGQgigHgbgWQgXgUgMgbQgLAOgOALQgcAWglAFQgaAEgYgGQAAAigQAfQgSAigfATQgfATgnAAIgHAAQAHAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAJAOAFARQAPAzgWAuQgQAigfAUQAXAMAQAVQAVAZAGAiQAHAigKAfQgFARgJAPQARAHAOANQAWASANAZQAPAfgCAkQgCAlgTAdIgCADQAqgEAmAYQApAXAQApQAQAqgOAtQgNAtgkAaQgcAUgjAEQgjAEgfgNQgpgRgYgpQgXgpAGgsQAEgfATgaIgRAAQggAAgdgRQgdgPgSgbQgXgiABgrQABgmATgeQgOgGgMgJQgagTgOgeQgPgeABggQABgpAagjQAOgUATgNQgKgFgJgHQghgbgMgnQgMgnANgpQANgpAggYQAggZAqgDIANgBQgJgOgFgRQgKghAHgkQAIgjAXgaQAXgaAjgMQAZgIAZABQgGgVABgWQACglAWggQAWgfAhgPQAagMAdAAQARAAAQAEQAAgeANgdQAPgiAegVQAdgUAmgDQAmgDAgAQQApAUAUAqIABACQAUgZAfgPQAjgRAlAFQAlAEAfAYQAfAYAMAjIABABIABAAQAWgWAegKQAfgKAeAEQAgAFAaARQAcAUAQAgQAQAggCAiIAAAHQAKgGAMgDQAjgJAkAJQAkAKAZAaQAZAZAKAlQAJAkgLAjIgDAJIAPgGQAkgLAjAIQAjAIAbAaQAbAaAKAjQAKAjgKAkIgFAQIAFAAQAdgEAbAIQAuANAcAqQATAdADAkQACAjgOAeQAaAAAaAJQAlAOAXAfQAXAeADAoQADAngRAiIAFAAQAkAAAhAUQAhAUARAgQARAhgCAmQgCAhgQAcIAGgCQAjgHAjAMQAkAMAXAaQAYAbAHAkQAHAlgMAiQgFANgIAMQAggHAhAJQAeAJAZAXQAYAXALAeQALAegFAhQgEAcgOAYQAhgFAfALQAkANAZAhQAZAhADAnQACAdgKAaIASgFQAigGAjALQAiAMAXAaQAYAaAHAjQAFAVgCAUQAfgKAhAHQAkAGAbAXQAbAXAMAjQAJAZgBAaQAVgOAZgEQAigGAhAMQAiAMAXAZQAWAZAIAjQAEAOAAAPQAUgSAagHQAmgMAoAMQAoAMAZAeQAaAfAEAqQAEApgTAkQgYAtgwASQgXAIgXAAIgVgCg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AURScQgjgFgbgVQgbgUgOghQgLgZgBgbQgVASgaAHQghAKgjgIQgigHgagXQgXgVgNgeQgKgbABgcQgMAGgMAFQgiAMgkgHQgkgHgbgXQgbgXgMgiQgKgdADgcIgJACQgiAIgigKQgjgKgZgZQgagbgIgnQgJgmANgkIABAAQgcAJgfgDQgpgFgegZQgegYgMgoQgNgoALglQAFgRAJgQIgHABQgdADgdgLQgdgKgUgWQgVgVgKgdQgKgdADgdQADgcANgYIADgFIgFABQglAHglgQQglgPgVgfQgTgbgEgjQgFgiANgfQAEgKAFgJQgYAGgZgCQglgEgegXQgfgXgMgiQgOghAGgmQAEgXAJgSQgcAAgcgMQgggNgVgbQgTgXgHgfQgGgfAHgdQADgNAFgMQgeABgdgNQghgPgUgcQgVgcgEgkQgEgkANggQggAHgfgJQgegJgYgXQgYgXgLgeQgLgiAHglQACgLAEgKQgNAGgOADQgjAIgjgMQgkgMgYgbQgVgYgIggQgFgXACgXQgcAOgggBQgkAAgegRQgbgQgSgbQgJgOgGgQQgXAXggAKQghALgigGQghgHgbgWQgYgUgMgbQgKAOgOALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgagBQAIAOAGARQAPAzgXAuQgPAiggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQAqgEAmAYQAoAXAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgPgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDIANgBQgKgOgFgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQARAAAQAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAlAEAfAYQAfAYANAjIABABIAAAAQAWgWAfgKQAegKAfAEQAgAFAZARQAdAUAQAgQAQAggCAiIgBAHQALgGALgDQAjgJAkAJQAlAKAZAaQAZAZAJAlQAJAkgKAjIgDAJIAOgGQAkgLAjAIQAjAIAbAaQAcAaAKAjQAKAjgKAkIgGAQIAFAAQAegEAbAIQAvANAcAqQASAdACAkQADAjgNAeQAZAAAZAJQAlAOAYAfQAXAeADAoQADAngRAiIAEAAQAlAAAhAUQAgAUASAgQARAhgDAmQgBAhgQAcIAFgCQAjgHAkAMQAjAMAYAaQAXAbAHAkQAHAlgMAiQgFANgHAMQAfgHAhAJQAfAJAYAXQAYAXALAeQALAegEAhQgEAcgPAYQAhgFAfALQAlANAZAhQAZAhACAnQACAdgKAaIASgFQAjgGAiALQAjAMAXAaQAXAaAIAjQAEAVgBAUQAegKAhAHQAlAGAaAXQAbAXAMAjQAJAZgBAaQAWgOAZgEQAhgGAiAMQAhAMAXAZQAXAZAIAjQADAOABAPQAUgSAZgHQAmgMAoAMQAfAJAWAUQAGgLAHgJQAUgYAegNQAdgNAgABQAfACAcAQQAdAPARAaQAQAYAFAeQAFAdgHAcQgIAbgTAYQgTAWgaANQgaANgdABQgeAAgagLQgWgJgRgQQgYAsgvARQgWAIgXAAIgVgCg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AUOScQgjgFgbgVQgbgUgOghQgLgZgBgbQgVASgaAHQghAKgjgIQgigHgagXQgXgVgNgeQgLgbACgcQgMAGgMAFQgiAMgkgHQgkgHgbgXQgbgXgMgiQgKgdACgcIgIACQgiAIgigKQgjgKgZgZQgagbgIgnQgJgmANgkIAAAAQgbAJgfgDQgpgFgegZQgegYgMgoQgNgoALglQAFgRAJgQIgHABQgdADgdgLQgdgKgUgWQgVgVgKgdQgKgdADgdQADgcANgYIADgFIgFABQglAHglgQQglgPgVgfQgTgbgEgjQgFgiANgfQAEgKAFgJQgYAGgZgCQglgEgegXQgfgXgMgiQgOghAGgmQAEgXAJgSQgcAAgcgMQgggNgVgbQgTgXgHgfQgGgfAHgdQADgNAFgMQgeABgdgNQghgPgUgcQgVgcgEgkQgEgkANggQggAHgfgJQgegJgYgXQgYgXgLgeQgLgiAHglQACgLAEgKQgNAGgOADQgjAIgjgMQgkgMgYgbQgVgYgIggQgFgXABgXQgbAOgggBQgkAAgegRQgbgQgSgbQgJgOgGgQQgXAXggAKQghALgigGQghgHgbgWQgYgUgMgbQgKAOgOALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgbgBQAJAOAGARQAPAzgXAuQgPAiggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQApgEAnAYQAoAXAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgPgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDIANgBQgKgOgFgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQARAAAQAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAlAEAfAYQAfAYANAjIAAABIABAAQAWgWAfgKQAegKAfAEQAgAFAZARQAdAUAQAgQAQAggCAiIgBAHQALgGALgDQAjgJAkAJQAlAKAZAaQAZAZAJAlQAJAkgKAjIgDAJIAOgGQAkgLAjAIQAjAIAbAaQAcAaAKAjQAKAjgKAkIgGAQIAFAAQAegEAbAIQAvANAcAqQASAdACAkQADAjgNAeQAZAAAZAJQAlAOAYAfQAXAeADAoQADAngSAiIAFAAQAlAAAhAUQAgAUASAgQARAhgDAmQgCAhgQAcIAGgCQAjgHAkAMQAjAMAYAaQAXAbAHAkQAHAlgMAiQgFANgHAMQAfgHAhAJQAfAJAYAXQAYAXALAeQALAegEAhQgEAcgPAYQAhgFAfALQAlANAZAhQAZAhACAnQACAdgKAaIASgFQAjgGAiALQAjAMAXAaQAXAaAIAjQAEAVgCAUQAfgKAhAHQAlAGAaAXQAbAXAMAjQAJAZgBAaQAWgOAZgEQAhgGAiAMQAhAMAXAZQAXAZAIAjQADAOAAAPQAVgSAZgHQAmgMAoAMQAfAJAWAUQAGgLAHgJQASgVAYgNQglgVgRgnQgQgiAFgnQAFgnAXgdQAYgdAkgNQAlgNAlAIQAkAIAcAaQAcAbAKAkQAHAagEAcQgEAcgPAXQgOAXgXARIgQAJQAbAQARAZQAQAYAFAeQAFAdgHAcQgIAbgTAYQgTAWgaANQgaANgdABQgeAAgagLQgWgJgRgQQgYAsgvARQgWAIgYAAIgUgCg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AUOScQgjgFgbgVQgbgUgOghQgLgZgBgbQgVASgaAHQghAKgjgIQgigHgagXQgXgVgNgeQgLgbACgcQgMAGgMAFQgiAMgkgHQgkgHgbgXQgbgXgMgiQgKgdACgcIgIACQgiAIgigKQgjgKgZgZQgagbgIgnQgJgmANgkIAAAAQgbAJgfgDQgpgFgegZQgegYgMgoQgNgoALglQAFgRAJgQIgHABQgdADgdgLQgdgKgUgWQgVgVgKgdQgKgdADgdQADgcANgYIADgFIgFABQglAHglgQQglgPgVgfQgTgbgEgjQgFgiANgfQAEgKAFgJQgYAGgZgCQglgEgegXQgfgXgMgiQgOghAGgmQAEgXAJgSQgcAAgcgMQgggNgVgbQgTgXgHgfQgGgfAHgdQADgNAFgMQgeABgdgNQghgPgUgcQgVgcgEgkQgEgkANggQggAHgfgJQgegJgYgXQgYgXgLgeQgLgiAHglQACgLAEgKQgNAGgOADQgjAIgjgMQgkgMgYgbQgVgYgIggQgFgXABgXQgbAOgggBQgkAAgegRQgbgQgSgbQgJgOgGgQQgXAXggAKQghALgigGQghgHgbgWQgYgUgMgbQgKAOgOALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgbgBQAJAOAGARQAPAzgXAuQgPAiggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQApgEAnAYQAoAXAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgPgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDIANgBQgKgOgFgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQARAAAQAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAlAEAfAYQAfAYANAjIAAABIABAAQAWgWAfgKQAegKAfAEQAgAFAZARQAdAUAQAgQAQAggCAiIgBAHQALgGALgDQAjgJAkAJQAlAKAZAaQAZAZAJAlQAJAkgKAjIgDAJIAOgGQAkgLAjAIQAjAIAbAaQAcAaAKAjQAKAjgKAkIgGAQIAFAAQAegEAbAIQAvANAcAqQASAdACAkQADAjgNAeQAZAAAZAJQAlAOAYAfQAXAeADAoQADAngSAiIAFAAQAlAAAhAUQAgAUASAgQARAhgDAmQgCAhgQAcIAGgCQAjgHAkAMQAjAMAYAaQAXAbAHAkQAHAlgMAiQgFANgHAMQAfgHAhAJQAfAJAYAXQAYAXALAeQALAegEAhQgEAcgPAYQAhgFAfALQAlANAZAhQAZAhACAnQACAdgKAaIASgFQAjgGAiALQAjAMAXAaQAXAaAIAjQAEAVgCAUQAfgKAhAHQAlAGAaAXQAbAXAMAjQAJAZgBAaQAWgOAZgEQAhgGAiAMQAhAMAXAZQAXAZAIAjQADAOAAAPQAVgSAZgHQAmgMAoAMQAfAJAWAUQAGgLAHgJQASgVAYgNQglgVgRgnQgQgiAFgnQAEgaALgWQgaAGgcgGQgjgIgagXQgUgSgMgZQgMgZgBgcQgBgUAFgUQAKgiAagaQAbgbAjgIQAigJAkAKQAkALAZAaQAXAZAJAiQAJAjgJAhQgEAQgIANQAbgFAbAGQAkAIAcAaQAcAbAKAkQAHAagEAcQgEAcgPAXQgOAXgXARIgQAJQAbAQARAZQAQAYAFAeQAFAdgHAcQgIAbgTAYQgTAWgaANQgaANgdABQgeAAgagLQgWgJgRgQQgYAsgvARQgWAIgYAAIgUgCg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AUOScQgjgFgbgVQgbgUgOghQgLgZgBgbQgVASgaAHQghAKgjgIQgigHgagXQgXgVgNgeQgLgbACgcQgMAGgMAFQgiAMgkgHQgkgHgbgXQgbgXgMgiQgKgdACgcIgIACQgiAIgigKQgjgKgZgZQgagbgIgnQgJgmANgkIAAAAQgbAJgfgDQgpgFgegZQgegYgMgoQgNgoALglQAFgRAJgQIgHABQgdADgdgLQgdgKgUgWQgVgVgKgdQgKgdADgdQADgcANgYIADgFIgFABQglAHglgQQglgPgVgfQgTgbgEgjQgFgiANgfQAEgKAFgJQgYAGgZgCQglgEgegXQgfgXgMgiQgOghAGgmQAEgXAJgSQgcAAgcgMQgggNgVgbQgTgXgHgfQgGgfAHgdQADgNAFgMQgeABgdgNQghgPgUgcQgVgcgEgkQgEgkANggQggAHgfgJQgegJgYgXQgYgXgLgeQgLgiAHglQACgLAEgKQgNAGgOADQgjAIgjgMQgkgMgYgbQgVgYgIggQgFgXABgXQgbAOgggBQgkAAgegRQgbgQgSgbQgJgOgGgQQgXAXggAKQghALgigGQghgHgbgWQgYgUgMgbQgKAOgOALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgbgBQAJAOAGARQAPAzgXAuQgPAiggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQApgEAnAYQAoAXAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgPgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDIANgBQgKgOgFgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQARAAAQAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAlAEAfAYQAfAYANAjIAAABIABAAQAWgWAfgKQAegKAfAEQAgAFAZARQAdAUAQAgQAQAggCAiIgBAHQALgGALgDQAjgJAkAJQAlAKAZAaQAZAZAJAlQAJAkgKAjIgDAJIAOgGQAkgLAjAIQAjAIAbAaQAcAaAKAjQAKAjgKAkIgGAQIAFAAQAegEAbAIQAvANAcAqQASAdACAkQADAjgNAeQAZAAAZAJQAlAOAYAfQAXAeADAoQADAngSAiIAFAAQAlAAAhAUQAgAUASAgQARAhgDAmQgCAhgQAcIAGgCQAjgHAkAMQAjAMAYAaQAXAbAHAkQAHAlgMAiQgFANgHAMQAfgHAhAJQAfAJAYAXQAYAXALAeQALAegEAhQgEAcgPAYQAhgFAfALQAlANAZAhQAZAhACAnQACAdgKAaIASgFQAjgGAiALQAjAMAXAaQAXAaAIAjQAEAVgCAUQAfgKAhAHQAlAGAaAXQAbAXAMAjQAJAZgBAaQAWgOAZgEQAhgGAiAMQAhAMAXAZQAXAZAIAjQADAOAAAPQAVgSAZgHQAmgMAoAMQAfAJAWAUQAGgLAHgJQASgVAYgNQglgVgRgnQgQgiAFgnQAEgaALgWQgaAGgcgGQgjgIgagXQgUgSgMgZQgMgZgBgcQgBgUAFgUQAEgOAHgNQgZACgZgHQghgJgYgXQgYgYgKghQgLghAHghQAGghAWgbQAXgbAfgMQAfgNAjAEQAjAEAcAUQAlAbANAsQAOAsgRArIgGAOQAZgCAZAHQAkALAZAaQAXAZAJAiQAJAjgJAhQgEAQgIANQAbgFAbAGQAkAIAcAaQAcAbAKAkQAHAagEAcQgEAcgPAXQgOAXgXARIgQAJQAbAQARAZQAQAYAFAeQAFAdgHAcQgIAbgTAYQgTAWgaANQgaANgdABQgeAAgagLQgWgJgRgQQgYAsgvARQgWAIgYAAIgUgCg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AUOScQgjgFgbgVQgbgUgOghQgLgZgBgbQgVASgaAHQghAKgjgIQgigHgagXQgXgVgNgeQgLgbACgcQgMAGgMAFQgiAMgkgHQgkgHgbgXQgbgXgMgiQgKgdACgcIgIACQgiAIgigKQgjgKgZgZQgagbgIgnQgJgmANgkIAAAAQgbAJgfgDQgpgFgegZQgegYgMgoQgNgoALglQAFgRAJgQIgHABQgdADgdgLQgdgKgUgWQgVgVgKgdQgKgdADgdQADgcANgYIADgFIgFABQglAHglgQQglgPgVgfQgTgbgEgjQgFgiANgfQAEgKAFgJQgYAGgZgCQglgEgegXQgfgXgMgiQgOghAGgmQAEgXAJgSQgcAAgcgMQgggNgVgbQgTgXgHgfQgGgfAHgdQADgNAFgMQgeABgdgNQghgPgUgcQgVgcgEgkQgEgkANggQggAHgfgJQgegJgYgXQgYgXgLgeQgLgiAHglQACgLAEgKQgNAGgOADQgjAIgjgMQgkgMgYgbQgVgYgIggQgFgXABgXQgbAOgggBQgkAAgegRQgbgQgSgbQgJgOgGgQQgXAXggAKQghALgigGQghgHgbgWQgYgUgMgbQgKAOgOALQgcAWgmAFQgaAEgYgGQABAigRAfQgRAiggATQgfATgmAAIgIAAQAIAcgFAfQgGAkgWAbQgWAbgiANQgaAKgbgBQAJAOAGARQAPAzgXAuQgPAiggAUQAXAMARAVQAUAZAHAiQAGAigJAfQgFARgKAPQARAHAPANQAWASAMAZQAQAfgCAkQgCAlgTAdIgCADQApgEAnAYQAoAXAQApQAQAqgNAtQgOAtgkAaQgbAUgjAEQgjAEgggNQgpgRgXgpQgYgpAGgsQAFgfATgaIgRAAQggAAgegRQgdgPgSgbQgWgiABgrQABgmASgeQgNgGgMgJQgagTgPgeQgOgeAAggQABgpAagjQAPgUASgNQgJgFgJgHQgigbgMgnQgLgnANgpQAMgpAggYQAggZArgDIANgBQgKgOgFgRQgKghAIgkQAIgjAXgaQAXgaAjgMQAZgIAYABQgGgVABgWQADglAVggQAWgfAigPQAagMAdAAQARAAAQAEQgBgeANgdQAQgiAdgVQAegUAlgDQAmgDAgAQQApAUAVAqIABACQATgZAfgPQAkgRAkAFQAlAEAfAYQAfAYANAjIAAABIABAAQAWgWAfgKQAegKAfAEQAgAFAZARQAdAUAQAgQAQAggCAiIgBAHQALgGALgDQAjgJAkAJQAlAKAZAaQAZAZAJAlQAJAkgKAjIgDAJIAOgGQAkgLAjAIQAjAIAbAaQAcAaAKAjQAKAjgKAkIgGAQIAFAAQAegEAbAIQAvANAcAqQASAdACAkQADAjgNAeQAZAAAZAJQAlAOAYAfQAXAeADAoQADAngSAiIAFAAQAlAAAhAUQAgAUASAgQARAhgDAmQgCAhgQAcIAGgCQAjgHAkAMQAjAMAYAaQAXAbAHAkQAHAlgMAiQgFANgHAMQAfgHAhAJQAfAJAYAXQAYAXALAeQALAegEAhQgEAcgPAYQAhgFAfALQAlANAZAhQAZAhACAnQACAdgKAaIASgFQAjgGAiALQAjAMAXAaQAXAaAIAjQAEAVgCAUQAfgKAhAHQAlAGAaAXQAbAXAMAjQAJAZgBAaQAWgOAZgEQAhgGAiAMQAhAMAXAZQAXAZAIAjQADAOAAAPQAVgSAZgHQAmgMAoAMQAfAJAWAUQAGgLAHgJQASgVAYgNQglgVgRgnQgQgiAFgnQAEgaALgWQgaAGgcgGQgjgIgagXQgUgSgMgZQgMgZgBgcQgBgUAFgUQAEgOAHgNQgZACgZgHQghgJgYgXQgYgYgKghIgFgTQgWAEgWgDQgkgGgegZQgdgZgMgjQgLgjAJgmQAIgmAagaQAagbAmgJQAlgKAkAMQAjALAZAdQAaAdAGAlIAAABQATgDAUACQAjAEAcAUQAlAbANAsQAOAsgRArIgGAOQAZgCAZAHQAkALAZAaQAXAZAJAiQAJAjgJAhQgEAQgIANQAbgFAbAGQAkAIAcAaQAcAbAKAkQAHAagEAcQgEAcgPAXQgOAXgXARIgQAJQAbAQARAZQAQAYAFAeQAFAdgHAcQgIAbgTAYQgTAWgaANQgaANgdABQgeAAgagLQgWgJgRgQQgYAsgvARQgWAIgYAAIgUgCg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:90.9229,y:206.0297}).wait(1).to({graphics:mask_11_graphics_1,x:84.8068,y:195.5377}).wait(1).to({graphics:mask_11_graphics_2,x:81.7831,y:185.8341}).wait(1).to({graphics:mask_11_graphics_3,x:81.314,y:174.3835}).wait(1).to({graphics:mask_11_graphics_4,x:81.314,y:164.0763}).wait(1).to({graphics:mask_11_graphics_5,x:84.5703,y:155.571}).wait(1).to({graphics:mask_11_graphics_6,x:92.9218,y:148.8802}).wait(1).to({graphics:mask_11_graphics_7,x:104.4075,y:148.8802}).wait(1).to({graphics:mask_11_graphics_8,x:115.5662,y:148.8802}).wait(1).to({graphics:mask_11_graphics_9,x:125.1878,y:148.8802}).wait(1).to({graphics:mask_11_graphics_10,x:134.2551,y:148.8802}).wait(1).to({graphics:mask_11_graphics_11,x:141.648,y:148.8802}).wait(1).to({graphics:mask_11_graphics_12,x:147.9771,y:148.8802}).wait(1).to({graphics:mask_11_graphics_13,x:154.1961,y:148.8802}).wait(1).to({graphics:mask_11_graphics_14,x:161.709,y:149.3041}).wait(1).to({graphics:mask_11_graphics_15,x:168.8204,y:159.4321}).wait(1).to({graphics:mask_11_graphics_16,x:175.494,y:169.5781}).wait(1).to({graphics:mask_11_graphics_17,x:184.0114,y:178.2859}).wait(1).to({graphics:mask_11_graphics_18,x:192.6913,y:185.3121}).wait(1).to({graphics:mask_11_graphics_19,x:202.888,y:191.3859}).wait(1).to({graphics:mask_11_graphics_20,x:213.8732,y:196.4839}).wait(1).to({graphics:mask_11_graphics_21,x:224.3181,y:196.4839}).wait(1).to({graphics:mask_11_graphics_22,x:224.6278,y:196.4839}).wait(1).to({graphics:mask_11_graphics_23,x:224.6278,y:196.4839}).wait(1).to({graphics:mask_11_graphics_24,x:224.6278,y:196.4839}).wait(1).to({graphics:mask_11_graphics_25,x:224.6278,y:196.4839}).wait(105));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},111).wait(19));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504.8,933.4);
// library properties:
lib.properties = {
	id: '7222653C43C51B459BC057220887715C',
	width: 474,
	height: 506,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1671589254806", id:"Image"},
		{src:"images/B2A04_atlas_1.png?1671589254685", id:"B2A04_atlas_1"}
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
an.compositions['7222653C43C51B459BC057220887715C'] = {
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