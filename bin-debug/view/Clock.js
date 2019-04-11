var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock(delay, counter) {
        if (delay === void 0) { delay = 1000; }
        if (counter === void 0) { counter = 20; }
        var _this = _super.call(this) || this;
        _this.delay = delay;
        _this.counter = counter;
        return _this;
        //this.init();
    }
    //
    Clock.prototype.init = function () {
        this.timer = new egret.Timer(this.delay, this.counter);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.tmeHandle, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
        //gamesheet_85578a11_json
        //back_bg_clock_png
        //icon_vsbg_1_png
        //icon_vsbg_2_png
        //icon_vs_png
        var gameSheetName = "gamesheet_85578a11_json#";
        var vsStr = gameSheetName + "icon_vs_png";
        var vsbg1str = gameSheetName + "icon_vsbg_1_png";
        var vsbg2str = gameSheetName + "icon_vsbg_2_png";
        this.vsicon_bg1 = new egret.Bitmap(RES.getRes(vsbg1str));
        this.addChild(this.vsicon_bg1);
        this.vsicon_bg1.alpha = 0;
        this.vsicon_bg2 = new egret.Bitmap(RES.getRes(vsbg2str));
        this.addChild(this.vsicon_bg2);
        this.vsicon_bg2.alpha = 0;
        this.vsicon = new egret.Bitmap(RES.getRes(vsStr));
        this.addChild(this.vsicon);
        this.vsicon.alpha = 0;
        this.vsicon.x = this.vsicon_bg1.width + 2;
        this.vsicon_bg2.x = this.vsicon_bg1.width + 2;
        var bgStr = gameSheetName + "back_bg_clock_png";
        var bgTexture = RES.getRes(bgStr);
        this.bg = new egret.Bitmap(bgTexture);
        RES.getResByUrl("resource/assets/sheet/font_redlittle_num.fnt", this.onLoadComplete, this, RES.ResourceItem.TYPE_FONT);
    };
    //
    Clock.prototype.onLoadComplete = function (e) {
        this.addChildAt(this.bg, 0);
        this.numText = new egret.BitmapText();
        this.numText.x = 33;
        this.numText.y = 37;
        this.numText.font = e;
        this.addChild(this.numText);
        this.vsicon_bg1.x = -this.vsicon_bg1.width + 80;
        this.vsicon.x = this.vsicon_bg1.x + this.vsicon_bg1.width - 120;
        this.vsicon_bg2.x = this.vsicon_bg1.x + this.vsicon_bg1.width - 80;
        this.vsicon.y = this.vsicon_bg1.y - 20;
        this.vsicon_bg2.y = this.vsicon_bg1.y - 10;
        ///this.numText.text = "18";
    };
    Clock.prototype.setText = function (str) {
        this.numText.text = str;
        if (str.length == 2) {
            this.numText.x = 25;
        }
        else if (str.length == 1) {
            this.numText.x = 33;
        }
        else {
            this.numText.text = "0";
        }
    };
    //
    Clock.prototype.start = function () {
        this.timer.start();
    };
    //
    Clock.prototype.tmeHandle = function (e) {
        //console.log(e.target);
        var t = e.target;
        this.setText(String(this.counter - t.currentCount));
    };
    //
    Clock.prototype.timerComplete = function (e) {
        console.log("timer is complete......");
        this.bg.alpha = 0;
        this.numText.alpha = 0;
        var tw_vs = egret.Tween.get(this.vsicon);
        var tw_vsb1 = egret.Tween.get(this.vsicon_bg1);
        var tw_vsbg2 = egret.Tween.get(this.vsicon_bg2);
        //egret.Ease.sineOut
        tw_vs.to({ alpha: 1 }, 300, egret.Ease.sineIn).to({ alpha: 0 }, 300, egret.Ease.sineOut);
        tw_vsb1.to({ alpha: 1 }, 300, egret.Ease.sineIn).to({ alpha: 0 }, 300, egret.Ease.sineOut);
        tw_vsbg2.to({ alpha: 1 }, 300, egret.Ease.sineIn).to({ alpha: 0 }, 300, egret.Ease.sineOut).call(this.twend, this);
    };
    //
    Clock.prototype.twend = function () {
        //console.log("complete clock effect");
        this.dispatchEvent(new egret.Event(Data.CLOCKEVENT_COMPLETE));
    };
    return Clock;
}(egret.Sprite));
__reflect(Clock.prototype, "Clock");
//# sourceMappingURL=Clock.js.map