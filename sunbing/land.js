/**
 * Created by Administrator on 2016/8/22.
 */
function Land(img, x, y, speed) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
}

Land.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, this.y);
}
Land.prototype.update = function (dt) {
    this.x=this.x+this.speed*dt;
    if(this.x<-336){
        this.x=this.x+336*Land.count;
    }
}
Land.prototype.setCount = function (count) {
    Land.count=count;
}