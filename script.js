window.onload = function() {
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;

  var canvasPos = getPosition(canvas);
  var mouseX = 0;
  var mouseY = 0;
  var ballX = Math.floor(Math.random() * canvasWidth);
  var ballY = 40;
  min = Math.ceil(3);
  max = Math.floor(6);
  var dy = Math.floor(Math.random() * (max - min + 1)) + min;
  var asteroids = [];
  var amount = 30;


  canvas.addEventListener("mousemove", setMousePosition, false);

  function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
  }

  function draw() {

    function update() {
      requestAnimationFrame(update);
      this.x = mouseX;
      this.y = canvasHeight;
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.beginPath();
      c.fillStyle = "#3bf7bb";
      c.rect(mouseX,canvasHeight-40, 120, 30);
      c.fill();

    }


    update();

    function obstacle(){
      this.x = ballX;
      this.y = ballY;
      c.beginPath();
      c.arc(ballX, ballY, 20, 0, 2 * Math.PI, true);
      c.fillStyle = "#FF6A6A";
      c.fill();
      requestAnimationFrame(obstacle);

    }

    obstacle();

  }



  setInterval(draw);
  setInterval(() => {
    if(ballY >= canvasHeight-40-20)
    ballY = 0;
    ballY = ballY + dy;
    ballX = ballX;

  });

  function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
      xPosition += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPosition += el.offsetTop - el.scrollTop + el.clientTop;
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }
}
