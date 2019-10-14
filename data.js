let width = window.innerWidth,
    height = window.innerHeight;

var canvas = document.getElementById('canvas-bg');
    canvas.width = width;
    canvas.height = height;
var ctx = canvas.getContext('2d');

let dots = [];
let density = 18;

let target = {
    x: width / 2,
    y: height / 2
};

let yellow_palette = [
    "#fff000",
    "#ccc000",
    "#999000",
    "#1E5631",
    "#A4DE02",
    "#76BA1B",
    "#4C9A2A",
    "#ACDF87",
    "#68BB59"
];


