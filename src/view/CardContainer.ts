class CardContainer extends egret.Sprite {
	// private card0:CardUnit;
	// private card1:CardUnit;
	// private card2:CardUnit;
	// private card3:CardUnit;
	// private card4:CardUnit;
	private cardInfo:Array<Object>;
	private w:number = 30;
	private point:egret.BitmapText;
	public constructor(name:string) {	
		super();
		this.name = name;
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
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHandle,this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchbeginHandle,this);

		RES.getResByUrl("resource/assets/sheet/font_redlittle_num.fnt",this.onLoadComplete,this,RES.ResourceItem.TYPE_FONT);
	}
	//
	private onLoadComplete(e:egret.BitmapFont):void
	{
		this.point = new egret.BitmapText();
			this.point.x = 60;
			this.point.y = -25;
			this.point.font = e;
			this.point.text = "0";
			this.addChild(this.point);

	}
//
	private clickHandle(e:egret.TouchEvent):void
	{
		console.log("click name:"+this.name);
		this.Bets();
	}
	//
	private touchbeginHandle(e:egret.TouchEvent):void
	{
		//442031-
		//398826-38826=360000
		//console.log("ooollllppppp");
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
	//
	public Bets(num:number =55):void
	{
		let thisnum:number = Number( this.point.text);
	//	console.log("thisnum:"+thisnum);
		thisnum +=Data.BetNum;
		this.point.text = String(thisnum);

	}


}