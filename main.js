const $ = (selector)=>{return document.querySelector(selector)}
const write = $('#write')
const show = $('#show')
const btnPause = $('#btnPause')
const btnPlay = $('#btnPlay')
const btnSlow = $('#btnSlow')
const btnNormal = $('#btnNormal')
const btnFast = $('#btnFast')

const string = `/* 一只可爱的小熊猫即将闪亮登场，Are you ready？ */
/* 可以点击旁边的快速按钮加快速度哦~ */
/* 先画一张胖乎乎的脸 */

.face{
    width: 280px;
    height: 210px;
    border: 6px solid #442415;
    border-radius: 100px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -140px;
    background: #FEFAEF;
    z-index: 1;
}

/* 再加上两只大耳朵 */

.ear{
    width: 96px;
    height: 92px;
    border: 6px solid #442415;
    position: absolute;
    left: 50%;
    margin-left: -48px;
    top: 70px;
    border-radius: 48px;
    background: #442415;}
.ear.left{transform: translateX(-97px);}
.ear.right{transform: translateX(97px);}

/* 加上迷人的卡姿兰大眼睛 */

.eye{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 166px;
    left: 50%;
    margin-left: -30px;
    z-index: 2;
    border-radius: 50%;
    background: #422515;
}
.eye::before{
    width: 30px;
    height: 30px;
    border: 3px solid #422515;
    border-radius: 50%;
    background: #FBFDE8;
    right: 8px;
    top: 8px;
}
.eye.left{transform: translateX(-68px);}
.eye.right{transform: translateX(68px);}

/* 加上鼻子 */

.nose {
    width: 20px;
    height: 18px;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    top: 194px;
    z-index: 4;
    border-radius: 10px;
    background: #422515;
}

/* 画上嘴巴 */

.mouth .up .lip{
    width: 26px;
    height: 26px;
    border: 6px solid;
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 198px;
    z-index: 3;
    border-radius: 50%;
    background: #FEFAEF;
    border-color: transparent transparent #442415 #442415;
}
.mouth .up .lip.right{transform: translateX(-13px) rotate(-48deg);}
.mouth .up .lip.left{transform: translateX(13px) rotate(-38deg);}
.mouth .down {
    width: 32px;
    height: 56px;
    position: absolute;
    left: 50%;
    margin-left: -15px;
    top: 206px;
    z-index: 2;
    overflow: hidden;
}
.mouth .down .tongue {
    width: 32px;
    height: 112px;
    border: 6px solid #442415;
    position: absolute;
    bottom: 0;
    border-radius: 16px/56px;
    background: #FD9477;
}

/* 腮红也是很有必要滴 */

.cheek {
    width: 48px;
    height: 18px;
    position: absolute;
    left: 50%;
    margin-left: -24px;
    top: 222px;
    z-index: 1;
    background: #FCB8B7;
    border-radius: 50%/50%;
}
.cheek.left{transform: translateX(-78px);}
.cheek.right{transform: translateX(78px);}

/* 画上身体 */

.body{
    width: 188px;
    height: 190px;
    border: 6px solid #442415;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 258px;
    border-radius: 88px;
    overflow: hidden;
    background: #442415;
}

/* 加上胖乎乎的肚子 */

.belly {
    width: 160px;
    height: 150px;
    border: 6px solid #442415;
    position: relative;
    left: 14px;
    top: 50px;
    border-radius: 80px;
    background: #FEFAEF;
}

/* 汪峰说：让我看到你们滴双手~ */

.hand {
    width: 98px;
    height: 38px;
    position: absolute;
    left: 50%;
    margin-left: -49px;
    top: 315px;
    z-index: 1;
    background: #442415;
}
.hand.left{
    border-radius: 50% 50% 0 50%;
    transform: translateX(-106px) rotate(-40deg);
}
.hand.right{
    top: 298px;
    border-radius: 40% 50% 50% 0;
    transform: translateX(112px) translateY(-3px) rotate(15deg);
    transform-origin: 0 0;
}

/* 接下来就是大脚丫了 */

.foot {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 378px;
    border-radius: 50% 50%;
    background: #442415;
}
.foot.left{transform: translateX(-60px);}
.foot.right{transform: translateX(60px);}
.round {
    width: 16px;
    height: 16px;
    background: #FEFAEF;
    border-radius: 50%;
    position: absolute;
}
.round.r1{
    top: 22px;
    left: 10px;
}
.round.r2{
    top: 12px;
    left: 32px;
}
.round.r3{
    top: 22px;
    left: 54px;
}
.round.r4{
    width: 38px;
    height: 38px;
    bottom: 8px;
    left: 23px;
}

/* 熊猫怎么能没竹子呢？安排~ */

.bamboo{
    width: 22px;
    height: 270px;
    background-color: #94CF1F;
    position: absolute;
    left: 50%;
    margin-left: -11px;
    top: 178px;
    transform: translateX(-150px) rotate(-16deg);
    border-radius: 10px;
}
.node{
    width: 22px;
    height: 90px;
    border: 3px solid #442415;
    border-top-color: #FEFAEF;
}
.node1{border-top-color: #000;}
.node1::before{
    width: 21px;
    height: 14px;
    border: 3px solid #000;
    border-radius: 50%;
    top: -7px;
    left: 1px;
    background: #FEFAEF;
}
.node3{border-radius: 0 0 8px 8px ;}

/* 小手挥动起来~ */

.hand.right{animation: wave 2s infinite linear;}

/* OK，感谢您的耐心观看，这只快乐的小熊猫就送给您啦~ */
/* 祝您的生活像国宝一样幸福，吃嘛嘛香，笑口常开~ */
`

let n = 1
write.innerText = string.substr(0,n)
show.innerHTML = string.substr(0,n)

const run = ()=>{
    n += 1
    if (n>string.length){
        window.clearInterval(id)
        return
    }
    write.innerText = string.substr(0,n)
    show.innerHTML = string.substr(0,n)
    write.scrollTop = write.scrollHeight
}
const clear = ()=>{window.clearInterval(id)}
const slow = ()=>{
    clear()
    id = setInterval(run,400)
}
const normal = ()=>{
    clear()
    id = setInterval(run,30)
}
const fast = ()=>{
    clear()
    id = setInterval(run,2)
}

let id = setInterval(run,30)

btnPause.onclick = clear
btnPlay.onclick = normal
btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast