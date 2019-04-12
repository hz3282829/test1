class CardUnit extends egret.Sprite{
	 public ss:string = "jjj";
	 private bgBitmap:egret.Bitmap;
	 private backBitmap:egret.Bitmap;
	 private faceID:Number = 0;
	 private cardName:string;
	 private _cardInfo:Object = {}
	public constructor() {	
		super();	
	}
	 
	 public creatCardByName(cardInfo:Object):void
	 {
		 this._cardInfo =cardInfo;
		// console.log(cardInfo);
		 let bgData:Array<string> = cardInfo["background"];
        let cardSheetName:string = "cardsheet#";
        let bgStr:string = cardSheetName+bgData[0];
        let bgStr1:string =cardSheetName+bgData[1];

        let numStr:string =cardSheetName+cardInfo["num"];
        let bigImgStr:string =cardSheetName+cardInfo["bigImg"];
        let smallImgStr:string =cardSheetName+cardInfo["smallImg"];
        let nameStr:string =cardInfo["num"];

         let bgtextr:egret.Texture = RES.getRes(bgStr);
          let numtextr:egret.Texture = RES.getRes(numStr);
           let smalltextr:egret.Texture = RES.getRes(smallImgStr);
            let bigtextr:egret.Texture = RES.getRes(bigImgStr);
            let backtextr:egret.Texture = RES.getRes(bgStr1);
			this.creatCard(bgtextr,numtextr,smalltextr,bigtextr,backtextr,nameStr);
	 }
	public creatCard(bg:egret.Texture,num:egret.Texture,small:egret.Texture,big:egret.Texture,back:egret.Texture,name:string):void
	{
		
		//var  bgBitmap:egret.Bitmap;
		  this.bgBitmap = new egret.Bitmap(bg);
		  this.name = "bgBitmap";
			this.bgBitmap.x= 0;
			
			this.bgBitmap.y= 0;
		//this.addChild(this.bgBitmap);
		let numBitmap:egret.Bitmap = new egret.Bitmap(num);
			numBitmap.x= 0;
			numBitmap.y= 0;
		this.addChild(numBitmap);
		let smallBitmap:egret.Bitmap = new egret.Bitmap(small);
			smallBitmap.x= 3;
			smallBitmap.y= 30;
		this.addChild(smallBitmap);
		let bigBitmap:egret.Bitmap = new egret.Bitmap(big);
			bigBitmap.x= 22;
			bigBitmap.y= 45;
		this.addChild(bigBitmap);

		this.backBitmap = new egret.Bitmap(back);
		this.name = "backBitmap";
		let nameStr:string= name;
		this.addChild(this.backBitmap);
		
	}
	
	public replaceCar():void
	{
		console.log("change background:"+this.faceID);
		this.addChild(this.bgBitmap);
		if(this.faceID == 0)
		{
				this.removeChild(this.backBitmap);
				this.addChildAt(this.bgBitmap,0);
				this.faceID = 1;
		}else
		{
			this.removeChild(this.bgBitmap);
				this.addChild(this.backBitmap);
				this.faceID = 0;
		}
	}
}