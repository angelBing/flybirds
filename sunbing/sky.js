function Sky(img, x, y, speed) {//draw��Ҫ������ͼƬ����ΪͼƬ�������ƶ�����Ҫx�ᣬspeed�ٶ���Ҫ�ֶ���
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
}

Sky.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, this.y);//����ͼ��
}

Sky.prototype.update = function (dt){
    this.x=this.x+dt*this.speed;//x����=x��ǰλ��+ʱ��*�ٶ�
    if (this.x < -800) {//ͼƬ���Ϊ800����Ҫ��������ͼƬ���ƣ�����һ��ͼƬ�Ƴ�canvseʱ��
        this.x = this.x + 800 * Sky.count;//�õ�һ��ͼƬ����ȥ
    }
}
Sky.prototype.setCount = function (count) {
    Sky.count = count;//�����ͼƬ����
}