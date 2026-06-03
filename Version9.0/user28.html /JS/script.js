let canvas;
let ctx;

let barrelLength = 20;

let ground = [];
let projectile = null;
let gravity = 0.5;
let animating = false;

window.onload = function () {

    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    for (let x = 0; x < 600; x++) {
        ground[x] = 200 + Math.sin(x * 0.02) * 20;
    }

    update();
};

let currentPlayer = 1;

let player1HP = 100;
let player2HP = 100;

let player1 = {
    x: 80,
    y: 0
};

let player2 = {
    x: 520,
    y: 0
};

//SwitchTurns
function switchTurn(){

    if(currentPlayer === 1){
        currentPlayer = 2;
    }else{
        currentPlayer = 1;
    }

    document.getElementById("turnText").innerHTML =
    "Player " + currentPlayer + " Turn";
}

// FUNCTION 1
function darkMode(){
    document.body.classList.toggle("dark");
}

// FUNCTION 2
function randomTank(){

    let tanks = [
        "Tiger I",
        "M1 Abrams",
        "T-90",
        "Panzer IV"
    ];

    let random = Math.floor(Math.random() * tanks.length);

    document.getElementById("tankName").innerHTML =
    tanks[random];
}

// FUNCTION 3
function calculatePen() {

    let pen =
    parseFloat(document.getElementById("pen").value);

    let armor =
    parseFloat(document.getElementById("armor").value);

    let angle =
    parseFloat(document.getElementById("angle").value);

    let caliber =
    parseFloat(document.getElementById("caliber").value);

    let filler =
    parseFloat(document.getElementById("filler").value);

    // Convert angle
    let radians = angle * (Math.PI / 180);

    // Effective armor
    let effectiveArmor =
    armor / Math.cos(radians);

    // OVERPRESSURE
    if(caliber >= armor * 3){

        document.getElementById("result").innerHTML =

        "💥 OVERPRESSURE!";

        return;
    }

    // RICOCHET
    if(angle >= 70){

        document.getElementById("result").innerHTML =

        "🟡 RICOCHET!";

        return;
    }

    // PEN CHECK
    if(pen >= effectiveArmor){

        let damageResult = "";

        // Explosive filler effects
        if(filler >= 150){

            damageResult =
            "🔥 Catastrophic Explosion";

        } else if(filler >= 50){

            damageResult =
            "⚠ Critical Internal Damage";

        } else {

            damageResult =
            "🔧 Minor Internal Damage";
        }

        document.getElementById("result").innerHTML =

        "✅ PENETRATION<br>" +

        "Effective Armor: " +
        effectiveArmor.toFixed(1) + " mm<br>" +

        damageResult;

    } else {

        document.getElementById("result").innerHTML =

        "❌ NON-PENETRATION<br>" +

        "Effective Armor: " +
        effectiveArmor.toFixed(1) + " mm";
    }
}

let selectedArmor = {
    zone: "",
    thickness: 0,
    angle: 0
};

// FUNCTION 4
function selectArmor(zone){

    if(zone === "front"){

        selectedArmor = {
            zone: "Front Hull",
            thickness: 350,
            angle: 60
        };

    } else if(zone === "side"){

        selectedArmor = {
            zone: "Side Hull",
            thickness: 80,
            angle: 25
        };

    } else if(zone === "turret"){

        selectedArmor = {
            zone: "Turret",
            thickness: 400,
            angle: 70
        };
    }

    document.getElementById("armorInfo").innerHTML =

    "Selected: " + selectedArmor.zone +
    "<br>Base Armor: " + selectedArmor.thickness + "mm" +
    "<br>Angle: " + selectedArmor.angle + "°";
}


// FUNCTION 5
function recommendTank(){

    let style =
    document.getElementById("style").value;

    if(style == "fast"){

        document.getElementById("recommend").innerHTML =
        "Recommended Tank: T-90";

    } else {

        document.getElementById("recommend").innerHTML =
        "Recommended Tank: Tiger I";
    }
}

function getWeather(){

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Shakopee&appid=82a7d8780b774a5c9211ea0273214ccb&units=metric")

    .then(response => response.json())

    .then(data => {

        document.getElementById("weather").innerHTML =

        "Weather: " +
        data.weather[0].main +

        " | Temperature: " +

        data.main.temp + "°C";
    });
}

function endShot(){

    animating = false;
    projectile = null;
    switchTurn();
}





// FUNCTION 7
function fire(){

    

    if(animating) return;

    let angle = parseFloat(document.getElementById("angle").value);
    let power = parseFloat(document.getElementById("power").value);

    let rad = angle * Math.PI / 180;

    let startX;
    let startY;
    let direction;

    if(currentPlayer === 1){

        startX =
        player1.x + Math.cos(rad) * barrelLength;

        startY =
        player1.y - 10 - Math.sin(rad) * barrelLength;
        direction = 1;

    }else{

        startX =
        player2.x - Math.cos(rad) * barrelLength;

        startY =
        player2.y - 10 - Math.sin(rad) * barrelLength;
        direction = -1;
    }

    projectile = {
        x: startX,
        y: startY,
        vx: Math.cos(rad) * power * 0.5 * direction,
        vy: -Math.sin(rad) * power * 0.5
    };

    animating = true;
}

function draw(){

    console.log("DRAWING", player1.x, player2.x);

    
    ctx.clearRect(0, 0, 600, 300);

    // sky
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, 600, 300);

    // ground
    ctx.fillStyle = "#2E8B57";
    ctx.beginPath();
    ctx.moveTo(0, 300);

    for(let x = 0; x < 600; x++){
        ctx.lineTo(x, ground[x]);
    }

    ctx.lineTo(600, 300);
    ctx.fill();

        // update tank heights based on terrain
    player1.y = ground[Math.floor(player1.x)] - 10;
    player2.y = ground[Math.floor(player2.x)] - 10;

        // PLAYER 1 TANK
    ctx.fillStyle = "blue";
    ctx.fillRect(player1.x - 10, player1.y - 10, 20, 10);

    // PLAYER 2 TANK
    ctx.fillStyle = "red";
    ctx.fillRect(player2.x - 10, player2.y - 10, 20, 10);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

        let angle =
    parseFloat(document.getElementById("angle").value) || 45;

    let rad = angle * Math.PI / 180;

    //Player 1 Barrel
    ctx.beginPath();

    ctx.moveTo(
        player1.x,
        player1.y - 10
    );

    ctx.lineTo(
        player1.x + Math.cos(rad) * barrelLength,
        player1.y - 10 - Math.sin(rad) * barrelLength
    );

    ctx.stroke();

    //Player 2 Barrel
    ctx.beginPath();

    ctx.moveTo(
        player2.x,
        player2.y - 10
    );

    ctx.lineTo(
        player2.x - Math.cos(rad) * barrelLength,
        player2.y - 10 - Math.sin(rad) * barrelLength
    );

    ctx.stroke();

}

// aim direction based on player position
function update(){


    draw();
    

   if(animating && projectile){

    projectile.vy += gravity;

    projectile.x += projectile.vx;
    projectile.y += projectile.vy;

    // emergency cleanup
    if(
        projectile.x < -100 ||
        projectile.x > 700 ||
        projectile.y > 500
    ){
        endShot();
        return;
    }


    // hit ground
    let gx = Math.floor(projectile.x);

    if(gx >= 0 && gx < 600){

        if(projectile.y >= ground[gx]){

            explode(projectile.x, projectile.y);
            destroyTerrain(projectile.x, 20);

            endShot();
            return;
        }
    }

    // Player 2 hit
    if(
        currentPlayer === 1 &&
        projectile.x > player2.x - 10 &&
        projectile.x < player2.x + 10 &&
        projectile.y > player2.y - 10 &&
        projectile.y < player2.y + 10
    ){
        player2HP -= 25;

        document.getElementById("p2hp").innerHTML =
        player2HP;

        checkWinner();
        
        endShot();
        return;
    }

    // Player 1 hit
    if(
        currentPlayer === 2 &&
        projectile.x > player1.x - 10 &&
        projectile.x < player1.x + 10 &&
        projectile.y > player1.y - 10 &&
        projectile.y < player1.y + 10
    ){
        player1HP -= 25;

        document.getElementById("p1hp").innerHTML =
        player1HP;

        checkWinner();

        endShot();
        return;
    }

    // draw shell
    if(projectile){

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, 4, 0, Math.PI * 2);
    ctx.fill();
}



}
console.log("Frame running");
    requestAnimationFrame(update);


}


function checkWinner(){

    if(player1HP <= 0){

        alert("PLAYER 2 WINS!");
        location.reload();
    }

    if(player2HP <= 0){

        alert("PLAYER 1 WINS!");
        location.reload();
    }
}

//Explode
function explode(x, y){

    ctx.fillStyle = "orange";

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
}

function destroyTerrain(x, radius){

    for(let i = -radius; i < radius; i++){

        let px = Math.floor(x + i);

        if(px >= 0 && px < 600){

            let fall = radius - Math.abs(i);

            ground[px] += fall * 0.5;
        }
    }
}

function moveLeft(){

    console.log("Before:", player1.x, player2.x);

    if(animating) return;

    if(currentPlayer === 1){

        if(player1Fuel > 0){

            if(player1.x - 10 > 10){

                player1Fuel -= 5;
                player1.x -= 10;

                document.getElementById("p1fuel").innerHTML =
                player1Fuel;
            }
        }

    }else{

        if(player2Fuel > 0){

            if(player2.x - 10 > player1.x + 20){

                player2Fuel -= 5;
                player2.x -= 10;

                document.getElementById("p2fuel").innerHTML =
                player2Fuel;
            }
        }
    }

    console.log("After:", player1.x, player2.x);

}

function moveRight(){

    console.log("Before:", player1.x, player2.x);

    if(animating) return;

    if(currentPlayer === 1){

        if(player1Fuel > 0){

            if(player1.x + 10 < player2.x - 20){

                player1Fuel -= 5;
                player1.x += 10;

                document.getElementById("p1fuel").innerHTML =
                player1Fuel;
            }
        }

    }else{

        if(player2Fuel > 0){

            if(player2.x + 10 < 590){

                player2Fuel -= 5;
                player2.x += 10;

                document.getElementById("p2fuel").innerHTML =
                player2Fuel;
            }
        }
    }

    console.log("After:", player1.x, player2.x);

}

let player1Fuel = 100;
let player2Fuel = 100;

document.addEventListener("keydown", function(event){

    if(event.key === "a"){
        moveLeft();
    }

    if(event.key === "d"){
        moveRight();
    }

    if(event.key === "ArrowLeft"){
        moveLeft();
    }

    if(event.key === "ArrowRight"){
        moveRight();
    }

});

