class Data {
	public static cardNameInfo:Object = {};
	public static iconInfo:Object = {};
	public constructor() {
	}

	public static initIconfo():void
	{
		let redNum:Array<string> =[];
		let blackNum:Array<string> =[];
		for(let i:number =1;i < 14;i++)
		{
			//num_g_r_1_png
			redNum.push("num_g_r_"+i+"_png");
			blackNum.push("num_g_b_"+i+"_png");
		}
	
		this.iconInfo["redNum"] = redNum;
		this.iconInfo["blackNum"] = blackNum;
		//console.log(Data.iconInfo["redNum"]);
		
		let spades:Array<string> =["icon_g_xiao_pai0_png","icon_g_da_pai0_png"];//黑桃
		let hearts:Array<string> =["icon_g_xiao_pai1_png","icon_g_da_pai1_png"];//红心
		let clubs:Array<string> =["icon_g_xiao_pai2_png","icon_g_da_pai2_png"];//梅花
		let diamonds:Array<string> =["icon_g_xiao_pai3_png","icon_g_da_pai3_png"];//红方
		let joker:Array<string> =["icon_g_da_pai4_png","icon_g_da_pai5_png"];// 鬼  黑鬼、红鬼
		let hightLight:Array<string> =["back_g_gaoliang_png"];//高亮
		let background:Array<string> =["back_g_paimian_png","back_g_beimian_png","back_g_beimian2_png"];// 牌的背景图  空白背景（正面）/牌的背面图（垂直）/牌的背面图（倾斜）
		
		this.iconInfo["spades"] = spades;
		this.iconInfo["hearts"] = hearts;
		this.iconInfo["clubs"] = clubs;
		this.iconInfo["diamonds"] = diamonds;
		this.iconInfo["joker"] = joker;
		this.iconInfo["hightLight"] = hightLight;
		this.iconInfo["background"] = background;
		//console.log(this.iconInfo);
		

	}
	public static getCardData(nameStr:string,num:number =0):Object
	{
		let info:Object ={};
		let imgData:Array<string> =[];
		let numData:Array<string> =[];
		switch(nameStr)
		{
			case "spades":
			case "hearts":
			case "clubs":
			case "diamonds":
			 imgData = Data.iconInfo[nameStr];
			if(nameStr =="spades" || nameStr =="clubs")
			{
				numData = Data.iconInfo["blackNum"];
			}else
			{
				numData = Data.iconInfo["redNum"];
			}
			info["bigImg"] =imgData[1];
			info["smallImg"] = imgData[0];
			info["num"] = numData[num];
			info["name"] = nameStr+num;
			
			break;
			case "joker":
			imgData = Data.iconInfo[nameStr];
				if(num == 12)
				{
					numData = Data.iconInfo["blackNum"];
					info["bigImg"] =imgData[0];
				}else
				{
					numData = Data.iconInfo["redNum"];
					info["bigImg"] =imgData[1];
				}
				
				//info["smallImg"] = imgData[0];
				info["num"] = numData[num];
				info["name"] = nameStr+num;
			break;
			
		}
		info["hightLight"] = Data.iconInfo["hightLight"];
		info["background"] = Data.iconInfo["background"];
	return info;
	}
}