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
    function CardContainer() {
        var _this = _super.call(this) || this;
        _this.w = 30;
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
    return CardContainer;
}(egret.Sprite));
__reflect(CardContainer.prototype, "CardContainer");
//# sourceMappingURL=CardContainer.js.map