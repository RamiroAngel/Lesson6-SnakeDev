var canvas = null,
    ctx = null;
    var x = 50,
        y = 50;

function paint(ctx) {
    ctx.fillStyle = '#2D5B71';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#B85EAA';
    ctx.fillRect(x, y, 10, 10);
}
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}
window.addEventListener('load', init, false);
function run() {
    window.requestAnimationFrame(run);
    act();
    paint(ctx);
    }
function act(){
    x += 2;
    if (x > canvas.width) {
        x = 0;
        }
}
