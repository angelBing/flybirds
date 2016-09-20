/**
 * Created by Administrator on 2016/8/22.
 */
function Pipe(img1, img2, x, speed) {
    this.img1 = img1;
    this.img2 = img2;
    this.x = x;
    this.speed = speed;
    this.r = Math.random() * 200 + 100;  // 200到300的随机数
    //console.log(this.r);
}

Pipe.prototype.draw = function () {
    ctx.drawImage(this.img1, this.x, this.r - 420);//同时创建俩张图片
    ctx.drawImage(this.img2, this.x, 150 + this.r);
}

Pipe.prototype.update = function (dt) {
    this.x = this.x + this.speed * dt;
    if (this.x < -52) {
        this.x = this.x + Pipe.count * Pipe.gap;
        this.r = Math.random() * 200 + 100;  // 200到300的随机数

    }
}
Pipe.prototype.setCount = function (gap, count) {
    Pipe.gap = gap;//间距
    Pipe.count = count;
}


Pipe.prototype.hitTest = function (x, y) {
    return (x > this.x && x < this.x +52) && (!(y > this.r && y < this.r + 150));
}