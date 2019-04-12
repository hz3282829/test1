class BetButton extends egret.Sprite {
	private btnefftextr:egret.Bitmap;
	private btnW:number = 80;
	public constructor() {
		super();
	}
	//
	public init():void
	{
		//chip_v1sheet_json
		//icon_bet_01_png
		//icon_bet_effect_png
		let betSheetName:string = "chip_v1sheet_json_json#";
        let btn1Str:string = betSheetName+"icon_bet_01_png";
		let btn1textr:egret.Texture = RES.getRes(btn1Str);

		let btn2Str:string = betSheetName+"icon_bet_02_png";
		let btn2textr:egret.Texture = RES.getRes(btn2Str);

		let btn3Str:string = betSheetName+"icon_bet_03_png";
		let btn3textr:egret.Texture = RES.getRes(btn3Str);

		let btn4Str:string = betSheetName+"icon_bet_04_png";
		let btn4textr:egret.Texture = RES.getRes(btn4Str);

		let btneffStr:string = betSheetName+"icon_bet_effect_png";
		let btnefftextr:egret.Texture = RES.getRes(btneffStr);
		

		let btntexttr:Array<any> =[btn1textr,btn2textr,btn3textr,btn4textr,btnefftextr];
		for(let i:number =0;i <4;i++)
		{
			var btn:egret.Bitmap = new egret.Bitmap(btntexttr[i]);
			this.addChild(btn);
			
			btn.name = String("bet"+i);
			btn.touchEnabled = true;
			
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTapHandle,this)
			btn.x = i*this.btnW;
			console.log(btn);

		}
		this.btnefftextr = new egret.Bitmap(btntexttr[4]);
		this.btnefftextr.x = -7;
		this.btnefftextr.y = -9;
		this.addChild(this.btnefftextr);
	}
	//
	private btnTapHandle(e:egret.TouchEvent):void
	{
		
		let disp:egret.DisplayObject = e.target;
		//console.log(disp);
		this.btnefftextr.x = disp.x -7 ;
		this.btnefftextr.y = disp.y -9;
		let name:string = disp.name;
		let id:number = Number(name.slice(3,name.length) );
		Data.BetNum = Data.BetNumArray[id];
	}
}