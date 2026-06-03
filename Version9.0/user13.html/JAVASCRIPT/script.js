//////////// Function #1: Cart Handling (API Call) ///////////////
let cart_list = JSON.parse(localStorage.getItem('userCart')) || [];

function addtoCart(selecteditem, pricelisted) {

    const existingItem = cart_list.find(i => i.item === selecteditem);

    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += pricelisted;
        alert
    } else {
        cart_list.push({item: selecteditem, price: pricelisted, quantity: 1});
    }

    localStorage.setItem('userCart', JSON.stringify(cart_list));
}


function checkLocalStorage() { // Debugging function
    let current = localStorage.getItem('userCart');
    alert(current);
    alert('list length: '+cart_list.length);
}


//////////////// Function #2: Emptying Local Storage/Cart /////////////////
function emptyLocalStorage() {
    alert('Sucessfully bought your items')
    localStorage.clear();
    cart_list.length = 0;
    loadCart()
}

////////////// Function #3: Load Cart's Contents on cart.html //////////////
function loadCart() {
    let contents = document.getElementById('listdisplay');
    let totalprice = 0;

    if (cart_list.length > 0) {
        for (let i = 0; i < cart_list.length; i++) {
            contents.innerHTML += 'Item: '+cart_list[i].item+' x'+cart_list[i].quantity+' - $'+cart_list[i].price;
            totalprice += cart_list[i].price;
            if (cart_list.length > i) {
                contents.innerHTML += '<br>';
            }
        }
        
        contents.innerHTML += '<br>Total Price: $'+totalprice;
    } else {
        contents.innerHTML = 'Your cart is empty!';
    }          
}

///////////// Function #4: Simple Alert /////////////////
function submitform() {
    let userinput = document.getElementById('suggestiontext');
    
    if (userinput.value.length < 1) {
        alert('Fill out a suggestion before submitting!');
    } else {
        alert('Thanks! We will look into your suggestion');
        userinput.value = '';
    }
}

/////////////// Function #5: Changing Contents of a Container ////////////
function checked(currentcard) {
    currentcard.replaceChildren();

    const checkmark = document.createElement('h1');
    checkmark.textContent = 'Viewed';

    currentcard.appendChild(checkmark);
}
