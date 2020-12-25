import { WaveGroup } from './WaveGroup.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize',this.resize.bind(this), false);
        this.resize();

        //requestAnimationFrame 을 이용해 animate 함수 시작 
        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        //캔버스를 더블 사이즈로 지정해서 레티나 디스플레이에서도 화면이 잘 보이도록 설정한다.
        this.canvas.width = this.stageWidth*2;
        this.canvas.height = this.stageHeight*2;
        this.ctx.scale(2,2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t){
        //캔버스 클리어하는 함수 
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}