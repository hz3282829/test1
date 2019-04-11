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
var CardUnit = (function (_super) {
    __extends(CardUnit, _super);
    function CardUnit() {
        var _this = _super.call(this) || this;
        _this.ss = "jjj";
        _this.faceID = 0;
        _this._cardInfo = {};
        return _this;
    }
    CardUnit.prototype.creatCardByName = function (cardInfo) {
        this._cardInfo = cardInfo;
        // console.log(cardInfo);
        var bgData = cardInfo["background"];
        var cardSheetName = "cardsheet#";
        var bgStr = cardSheetName + bgData[0];
        var bgStr1 = cardSheetName + bgData[1];
        var numStr = cardSheetName + cardInfo["num"];
        var bigImgStr = cardSheetName + cardInfo["bigImg"];
        var smallImgStr = cardSheetName + cardInfo["smallImg"];
        var nameStr = cardInfo["num"];
        var bgtextr = RES.getRes(bgStr);
        var numtextr = RES.getRes(numStr);
        var smalltextr = RES.getRes(smallImgStr);
        var bigtextr = RES.getRes(bigImgStr);
        var backtextr = RES.getRes(bgStr1);
        this.creatCard(bgtextr, numtextr, smalltextr, bigtextr, backtextr, nameStr);
    };
    CardUnit.prototype.creatCard = function (bg, num, small, big, back, name) {
        //var  bgBitmap:egret.Bitmap;
        this.bgBitmap = new egret.Bitmap(bg);
        this.name = "bgBitmap";
        this.bgBitmap.x = 0;
        this.bgBitmap.y = 0;
        //this.addChild(this.bgBitmap);
        var numBitmap = new egret.Bitmap(num);
        numBitmap.x = 0;
        numBitmap.y = 0;
        this.addChild(numBitmap);
        var smallBitmap = new egret.Bitmap(small);
        smallBitmap.x = 3;
        smallBitmap.y = 30;
        this.addChild(smallBitmap);
        var bigBitmap = new egret.Bitmap(big);
        bigBitmap.x = 22;
        bigBitmap.y = 45;
        this.addChild(bigBitmap);
        this.backBitmap = new egret.Bitmap(back);
        this.name = "backBitmap";
        var nameStr = name;
        this.addChild(this.backBitmap);
    };
    CardUnit.prototype.replaceCar = function () {
        console.log("change background:" + this.faceID);
        this.addChild(this.bgBitmap);
        if (this.faceID == 0) {
            this.removeChild(this.backBitmap);
            this.addChildAt(this.bgBitmap, 0);
            this.faceID = 1;
        }
        else {
            this.removeChild(this.bgBitmap);
            this.addChild(this.backBitmap);
            this.faceID = 0;
        }
    };
    return CardUnit;
}(egret.Sprite));
__reflect(CardUnit.prototype, "CardUnit");
//# sourceMappingURL=CardUnit.js.map