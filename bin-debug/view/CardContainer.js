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
var CardContainer = (function (_super) {
    __extends(CardContainer, _super);
    function CardContainer(name) {
        var _this = _super.call(this) || this;
        _this.w = 30;
        _this.name = name;
        return _this;
    }
    CardContainer.prototype.createCard = function (data) {
        this.cardInfo = data;
        for (var i = 0; i < data.length; i++) {
            var info = data[i];
            var card = new CardUnit();
            card.name = "card" + i;
            card.creatCardByName(info);
            card.x = i * this.w;
            this.addChild(card);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandle, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchbeginHandle, this);
        RES.getResByUrl("resource/assets/sheet/font_redlittle_num.fnt", this.onLoadComplete, this, RES.ResourceItem.TYPE_FONT);
    };
    //
    CardContainer.prototype.onLoadComplete = function (e) {
        this.point = new egret.BitmapText();
        this.point.x = 60;
        this.point.y = -25;
        this.point.font = e;
        this.point.text = "0";
        this.addChild(this.point);
    };
    //
    CardContainer.prototype.clickHandle = function (e) {
        console.log("click name:" + this.name);
        this.Bets();
    };
    //
    CardContainer.prototype.touchbeginHandle = function (e) {
        //442031-
        //398826-38826=360000
        //console.log("ooollllppppp");
    };
    CardContainer.prototype.replaceCardAsset = function () {
        for (var i = 0; i < this.cardInfo.length; i++) {
            //let card:CardUnit = <CardUnit>this.getChildByName("card"+i);
            var card = this.getChildAt(i);
            //console.log(this.getChildByName("card"+i));
            var tw = egret.Tween.get(card);
            tw.to({ scaleX: 0 }, 300, egret.Ease.sineOut).call(card.replaceCar, card).to({ scaleX: 1 }, 300, egret.Ease.sineIn);
        }
        //let tw2 = egret.Tween.get(card0);
        //tw2.to({x:500,y:500},1000);
        //tw2.to({scaleX:0}, 300, egret.Ease.sineOut).call(replaceCardAsset,card).to({scaleX:1}, 300, egret.Ease.sineIn);
        //egret.Tween.get(card).to({scaleX:0}, 300, egret.Ease.sineOut).call(replaceCardAsset).to({scaleX:1}, 300, egret.Ease.sineIn);
    };
    //
    CardContainer.prototype.Bets = function (num) {
        if (num === void 0) { num = 55; }
        var thisnum = Number(this.point.text);
        //	console.log("thisnum:"+thisnum);
        thisnum += Data.BetNum;
        this.point.text = String(thisnum);
    };
    return CardContainer;
}(egret.Sprite));
__reflect(CardContainer.prototype, "CardContainer");
//# sourceMappingURL=CardContainer.js.map