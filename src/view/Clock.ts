class Clock extends egret.Sprite{
	private numText:egret.BitmapText;
	private bg:egret.Bitmap;
	private vsicon:egret.Bitmap;
	private vsicon_bg1:egret.Bitmap;
	private vsicon_bg2:egret.Bitmap;
	private timer:egret.Timer;
	private delay:number;
	private counter:number;
	public constructor(delay:number =1000,counter:number = 20) {
		super();
		this.delay = delay;
		this.counter = counter;
		//this.init();
	}
	//
	public init():void
	{

		 this.timer = new egret.Timer(this.delay,this.counter);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.tmeHandle,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComplete,this);    

		//gamesheet_85578a11_json
		//back_bg_clock_png
		//icon_vsbg_1_png
		//icon_vsbg_2_png
		//icon_vs_png
		let gameSheetName:string = "gamesheet_85578a11_json#";

		let vsStr:string = gameSheetName+"icon_vs_png";
		let vsbg1str:string =gameSheetName+"icon_vsbg_1_png";
		let vsbg2str:string =gameSheetName+"icon_vsbg_2_png";

		
		this.vsicon_bg1 = new egret.Bitmap(RES.getRes(vsbg1str));
		this.addChild(this.vsicon_bg1);
		this.vsicon_bg1.alpha = 0;
		this.vsicon_bg2 = new egret.Bitmap(RES.getRes(vsbg2str));
		this.addChild(this.vsicon_bg2);
		this.vsicon_bg2.alpha = 0;
		this.vsicon = new egret.Bitmap(RES.getRes(vsStr));
		this.addChild(this.vsicon);
		this.vsicon.alpha = 0;

		this.vsicon.x = this.vsicon_bg1.width +2;
		this.vsicon_bg2.x = this.vsicon_bg1.width+2;

		
        let bgStr:string = gameSheetName+"back_bg_clock_png";
		let bgTexture:egret.Texture = RES.getRes(bgStr);
		this.bg = new egret.Bitmap(bgTexture);
		RES.getResByUrl("resource/assets/sheet/font_redlittle_num.fnt",this.onLoadComplete,this,RES.ResourceItem.TYPE_FONT);
		

	}

	//
	private onLoadComplete(e:egret.BitmapFont):void
	{
			this.addChildAt(this.bg,0);
			this.numText = new egret.BitmapText();
			this.numText.x = 33;
			this.numText.y = 37;
			this.numText.font = e;
			this.addChild(this.numText);
			this.vsicon_bg1.x = -this.vsicon_bg1.width +80;
			this.vsicon.x = this.vsicon_bg1.x + this.vsicon_bg1.width -120;
			this.vsicon_bg2.x = this.vsicon_bg1.x+ this.vsicon_bg1.width -80;
			this.vsicon.y = this.vsicon_bg1.y - 20;
			this.vsicon_bg2.y = this.vsicon_bg1.y - 10;
			///this.numText.text = "18";
	}

	public setText(str:string):void
	{
		this.numText.text = str;
		if(str.length ==2)
		{
			this.numText.x = 25;
		}else if(str.length ==1)
		{
			this.numText.x = 33;
		}else
		{
			this.numText.text = "0";	
		}
		
	}
	//
	public start():void
	{
		this.timer.start();
	}
	//
    private tmeHandle(e:egret.TimerEvent):void
    {
        //console.log(e.target);
        let t:egret.Timer = e.target;
        this.setText ( String(this.counter - t.currentCount));
    }
	//
	private timerComplete(e:egret.TimerEvent):void
	{
		console.log("timer is complete......");
		this.bg.alpha = 0;
		this.numText.alpha = 0;

		let tw_vs:egret.Tween = egret.Tween.get(this.vsicon);
		let tw_vsb1:egret.Tween = egret.Tween.get(this.vsicon_bg1);
		let tw_vsbg2:egret.Tween = egret.Tween.get(this.vsicon_bg2);
		//egret.Ease.sineOut
		tw_vs.to({alpha:1},300,egret.Ease.sineIn).to({alpha:0},300,egret.Ease.sineOut);
		tw_vsb1.to({alpha:1},300,egret.Ease.sineIn).to({alpha:0},300,egret.Ease.sineOut);
		tw_vsbg2.to({alpha:1},300,egret.Ease.sineIn).to({alpha:0},300,egret.Ease.sineOut).call(this.twend,this);


	}
	//
	private twend():void
	{
			//console.log("complete clock effect");
			this.dispatchEvent(new egret.Event(Data.CLOCKEVENT_COMPLETE));
	}
}