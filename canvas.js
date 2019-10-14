

function init() {
    for (let x = 0; x < width; x += width / density) {
        for (let y = 0; y < height; y += height / density) {
            let x = Math.random() * width;
            let y = Math.random() * height;
            let size = Math.random() * 7;
            let color = yellow_palette[Math.floor(Math.random() * yellow_palette.length)];
            let alfa = Math.random();

            let dot = new Dot(x, y, size, color, alfa);


            dots.push(dot);
        }
    }
}

function Dot(x, y, size, color, alfa) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.min_size = size;
    this.max_size = size * 2;
    this.color = color || null;
    this.alfa = alfa || 1;

    this.draw = () => {
        if (this.alfa == 0)
            return;

        if (this.size > this.max_size)
            this.size = this.max_size;
        if (this.size < this.min_size)
            this.size = this.min_size;


        ctx.globalAlpha = this.alfa;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

        // ctx.globalAlpha = this.alfa * 0.95;
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size * 1.1, 0, 2 * Math.PI);
        // ctx.fill();
        ctx.globalAlpha = this.alfa * 0.90;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.2, 0, 2 * Math.PI);
        ctx.fill();

        // ctx.globalAlpha = this.alfa * 0.85;
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size * 1.3, 0, 2 * Math.PI);
        // ctx.fill();
        ctx.globalAlpha = this.alfa * 0.8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.4, 0, 2 * Math.PI);
        ctx.fill();

        // ctx.globalAlpha = this.alfa * 0.75;
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size * 1.5, 0, 2 * Math.PI);
        // ctx.fill();
        ctx.globalAlpha = this.alfa * 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.6, 0, 2 * Math.PI);
        ctx.fill();

        // ctx.globalAlpha = this.alfa * 0.65;
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size * 1.7, 0, 2 * Math.PI);
        // ctx.fill();
        ctx.globalAlpha = this.alfa * 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.8, 0, 2 * Math.PI);
        ctx.fill();

    }


}

window.addEventListener('mousemove', (e) => {
    let x = 0,
        y = 0;
    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    } else if (e.clientX || e.clientY) {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = x;
    target.y = y;
});
window.addEventListener('resize', (e) => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});



function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i in dots) {
        let dot = {
            x: dots[i].x,
            y: dots[i].y
        }
        if (getDistance(target, dot) < 200)
            dots[i].size++;
        else {
            dots[i].size--;
        }


        dots[i].draw();
    }

    requestAnimationFrame(animate);
}


function getDistance(p1, p2) {
    let r = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    return Math.sqrt(r);
}


//Main
init();
animate();