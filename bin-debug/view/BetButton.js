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
var BetButton = (function (_super) {
    __extends(BetButton, _super);
    function BetButton() {
        var _this = _super.call(this) || this;
        _this.btnW = 80;
        return _this;
    }
    //
    BetButton.prototype.init = function () {
        //chip_v1sheet_json
        //icon_bet_01_png
        //icon_bet_effect_png
        var betSheetName = "chip_v1sheet_json_json#";
        var btn1Str = betSheetName + "icon_bet_01_png";
        var btn1textr = RES.getRes(btn1Str);
        var btn2Str = betSheetName + "icon_bet_02_png";
        var btn2textr = RES.getRes(btn2Str);
        var btn3Str = betSheetName + "icon_bet_03_png";
        var btn3textr = RES.getRes(btn3Str);
        var btn4Str = betSheetName + "icon_bet_04_png";
        var btn4textr = RES.getRes(btn4Str);
        var btneffStr = betSheetName + "icon_bet_effect_png";
        var btnefftextr = RES.getRes(btneffStr);
        var btntexttr = [btn1textr, btn2textr, btn3textr, btn4textr, btnefftextr];
        for (var i = 0; i < 4; i++) {
            var btn = new egret.Bitmap(btntexttr[i]);
            this.addChild(btn);
            btn.name = String("bet" + i);
            btn.touchEnabled = true;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTapHandle, this);
            btn.x = i * this.btnW;
            console.log(btn);
        }
        this.btnefftextr = new egret.Bitmap(btntexttr[4]);
        this.btnefftextr.x = -7;
        this.btnefftextr.y = -9;
        this.addChild(this.btnefftextr);
    };
    //
    BetButton.prototype.btnTapHandle = function (e) {
        var disp = e.target;
        //console.log(disp);
        this.btnefftextr.x = disp.x - 7;
        this.btnefftextr.y = disp.y - 9;
        var name = disp.name;
        var id = Number(name.slice(3, name.length));
        Data.BetNum = Data.BetNumArray[id];
    };
    return BetButton;
}(egret.Sprite));
__reflect(BetButton.prototype, "BetButton");
//# sourceMappingURL=BetButton.js.map