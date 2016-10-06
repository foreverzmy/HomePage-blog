var cat = {
    w: window.innerWidth,
    h: window.innerHeight,
    can: null,
    ctx: null,
    init: function() {
        this.can = document.getElementById('canvas2');
        this.ctx = this.can.getContext("2d");
        this.can.width = this.w;
        this.can.height = this.h;
    },
    start: function() {
        this.init();
        this.cat();
    },
    cat: function() {
        var cat = new Image();
        //设置猫的大小和位置
        var catWidth = 507.5,
            catHeight = 297,
            left = (this.w - 507.5) / 2.2,
            top = (this.h - 297) * 0.7;
        if (this.w < 768) { //设置小屏幕时猫的大小和位置
            catWidth = 0.8 * this.w;
            catHeight = catWidth * 297 / 507.5;
            left = 0.08 * this.w;
            top = (this.h - catWidth * 297 / 507.5) * 0.8;
        }
        cat.src = 'img/gatito.svg';
        cat.onload = function() {
            let action = 0;
            setInterval(function() { //动态画行走的猫
                this.ctx.clearRect(0, 0, this.w, this.h);
                this.ctx.drawImage(cat, 507.5 * action, 0, 507.5, 297, left, top, catWidth, catHeight);
                action++;
                if (action == 16) action = 0;
            }.bind(this), 75)
        }.bind(this);
    },
}

cat.start();
