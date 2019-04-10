class CardContainer extends egret.Sprite {
	// private card0:CardUnit;
	// private card1:CardUnit;
	// private card2:CardUnit;
	// private card3:CardUnit;
	// private card4:CardUnit;
	private cardInfo:Array<Object>;
	private w:number = 30;
	public constructor() {
		super();
	}
	public  createCard(data:Array<Object>):void
	{
		this.cardInfo = data;
		for(let i:number = 0;i <data.length;i++)
		{
			let info:Object =data[i];
			let card:CardUnit = new CardUnit();
				card.name = "card"+i;
				card.creatCardByName(info);
				card.x = i*this.w;
				this.addChild(card);
		}
	}

	public replaceCardAsset():void
    {
		for(let i:number = 0;i <this.cardInfo.length;i++)
		{
			//let card:CardUnit = <CardUnit>this.getChildByName("card"+i);
			let card:CardUnit = <CardUnit>this.getChildAt(i);
			//console.log(this.getChildByName("card"+i));
			let tw = egret.Tween.get(card);
			tw.to({scaleX:0}, 300, egret.Ease.sineOut).call(card.replaceCar,card).to({scaleX:1}, 300, egret.Ease.sineIn);
		}
             //let tw2 = egret.Tween.get(card0);
            //tw2.to({x:500,y:500},1000);
            //tw2.to({scaleX:0}, 300, egret.Ease.sineOut).call(replaceCardAsset,card).to({scaleX:1}, 300, egret.Ease.sineIn);
            //egret.Tween.get(card).to({scaleX:0}, 300, egret.Ease.sineOut).call(replaceCardAsset).to({scaleX:1}, 300, egret.Ease.sineIn);
    }


}