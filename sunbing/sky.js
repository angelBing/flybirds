function Sky(img, x, y, speed) {//draw需要参数：图片，因为图片横坐标移动，需要x轴，speed速度需要手动给
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
}

Sky.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, this.y);//绘制图像
}

Sky.prototype.update = function (dt){
    this.x=this.x+dt*this.speed;//x坐标=x当前位置+时间*速度
    if (this.x < -800) {//图片宽度为800，需要放置两张图片左移，当第一张图片移出canvse时，
        this.x = this.x + 800 * Sky.count;//让第一张图片跳过去
    }
}
Sky.prototype.setCount = function (count) {
    Sky.count = count;//传入的图片张数
}