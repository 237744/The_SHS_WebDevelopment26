function addNums() {
    let a = Number(document.getElementById("addNum1").value);
    let b = Number(document.getElementById("addNum2").value);
    alert("The sum is: " + (a + b));
}

// 2. The Multiplication Button
function multNums() {
    let a = Number(document.getElementById("multNum1").value);
    let b = Number(document.getElementById("multNum2").value);
    alert("The product is: " + (a * b));
}

// 3. The Pythagorean Theorem Button (Find C)
function findC() {
    let a = Number(document.getElementById("sideA").value);
    let b = Number(document.getElementById("sideB").value);
    
    // Formula: c = square root of (a squared + b squared)
    let c = Math.sqrt((a * a) + (b * b));
    
    alert("Side C is: " + c.toFixed(2));
}