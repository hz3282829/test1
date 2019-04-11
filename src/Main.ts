//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    private   cardContainer1:CardContainer = new CardContainer();
    private   cardContainer2:CardContainer = new CardContainer();
    private   cardContainer3:CardContainer = new CardContainer();
    private   clock:Clock;
    protected createChildren(): void {
        super.createChildren();
            
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })
            
        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }
        
        //inject the custom material parser
        //注入自定义的素材解析器
        
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

         this.clock = new Clock(800,15);
         this.clock.addEventListener(Data.CLOCKEVENT_COMPLETE,this.clockComplete,this);
        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
       
        await platform.login();
        const userInfo = await platform.getUserInfo();
       // console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            await this.clock.init();
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {

        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        let bg:egret.ImageLoader = new egret.ImageLoader();
            bg.once(egret.Event.COMPLETE,this.bgLoaded,this);
            bg.load("resource/assets/background.png");
           
        Data.initIconfo();
        let cardInfo0:Object =Data.getCardData("hearts",9); 
        let cardInfo1:Object =Data.getCardData("spades",5); 
        let cardInfo2:Object =Data.getCardData("clubs",8); 
        let cardInfo3:Object =Data.getCardData("diamonds",2); 
        let cardInfo4:Object =Data.getCardData("joker",12); 
        this.cardContainer1.createCard([cardInfo0,cardInfo1,cardInfo2,cardInfo3,cardInfo4]);
        this.addChild(this.cardContainer1);
        this.cardContainer1.x = 270;
        this.cardContainer1.y = 30;

        let cardInfo10:Object =Data.getCardData("spades",4); 
        let cardInfo11:Object =Data.getCardData("spades",10); 
        let cardInfo12:Object =Data.getCardData("clubs",3); 
        let cardInfo13:Object =Data.getCardData("diamonds",1); 
        let cardInfo14:Object =Data.getCardData("diamonds",8); 
        this.cardContainer2.createCard([cardInfo10,cardInfo11,cardInfo12,cardInfo13,cardInfo14]);
        this.addChild(this.cardContainer2);
        this.cardContainer2.x = 80;
        this.cardContainer2.y = 185;

        let cardInfo20:Object =Data.getCardData("joker",13); 
        let cardInfo21:Object =Data.getCardData("diamonds",5); 
        let cardInfo22:Object =Data.getCardData("clubs",8); 
        let cardInfo23:Object =Data.getCardData("diamonds",9); 
        let cardInfo24:Object =Data.getCardData("joker",12); 
        this.cardContainer3.createCard([cardInfo20,cardInfo21,cardInfo22,cardInfo23,cardInfo24]);
        this.addChild(this.cardContainer3);
        this.cardContainer3.x = 470;
        this.cardContainer3.y = 185;

       
        this.addChild(this.clock);
        this.clock.x = 330;
        this.clock.y = 140;
        this.clock.start();
        let replaceCardAsset:Function =function(){
            let bg1textr:egret.Texture = RES.getRes("cardsheet#back_g_beimian_png");
            
            console.log("................",this);
           // console.log(this.card);
           // this.card.replaceCar(bg1textr);
          // this.replaceCar(bg1textr);
            console.log("................111");
        };

        
    

        let button = new eui.Button();
        button.label = "Click!";
        //button.horizontalCenter = 0;
        //button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }

    //
    private bgLoaded(e:egret.Event):void
    {
        console.log("bg is loaded");
        //console.log(e.currentTarget.data);
        let bgbitmapData:egret.BitmapData = e.currentTarget.data;
        let bgtexture:egret.Texture = new egret.Texture();
            bgtexture.bitmapData = bgbitmapData;
        let bgBitmap:egret.Bitmap = new egret.Bitmap(bgtexture);
         this.addChildAt(bgBitmap,0);

    }
    
    //
    private replaceCardAsset1():void
    {
            
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = this.createTexTure(name);
        result.texture = texture;
        return result;
    }
    //
    private createTexTure(name:string):egret.Texture
    {
            let texture: egret.Texture = RES.getRes(name);
            return texture;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
       this.cardContainer1.replaceCardAsset();
       this.cardContainer2.replaceCardAsset();
       this.cardContainer3.replaceCardAsset();

    }

    //
    private clockComplete(e:egret.Event):void
    {
            console.log(" clock complete is ok ");
            this.cardContainer1.replaceCardAsset();
            this.cardContainer2.replaceCardAsset();
            this.cardContainer3.replaceCardAsset();
    }
}
