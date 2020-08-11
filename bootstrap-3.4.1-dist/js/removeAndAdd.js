


var RemoveItemButton = document.querySelectorAll("button.glyphicon-remove")

for(i = 0; i < RemoveItemButton.length; i++){

    var button = RemoveItemButton[i]
    button.addEventListener('click', function(event) {

    var ButtonClicked = event.target 
    ButtonClicked.parentElement.parentElement.parentElement.remove()


    // if(RemoveItemButton == ""){

    //     alert("cart is empty")

    // document.getElementById('content-holder').innerHTML = "<h2> Cart is Empty </h2>"

    // }
    UpdateCartTotal();

    })


}

function UpdateCartTotal() {
    
    var rows = document.querySelectorAll("div.row");
    var sum = 0; 

    for(i = 0; i < rows.length; i++){

        var priceElement = document.querySelectorAll("span.item-price-value")[i].innerText
        var quantityElement = document.querySelectorAll("#quantity-value")[i]

        quantity = parseInt(quantityElement.innerHTML)
        var price = quantity*priceElement

        sum += price


    }

    document.getElementById('total-price').innerHTML = "$" + sum
}


var Increment = document.querySelectorAll("#quantity-value") 

for(i = 0; i <Increment.length; i++) {

    var button = Increment[i]

    button.addEventListener('click', UpdateCartTotal());
}



var AddressButton = document.querySelector('#dropdownMenu1')





AddressButton.addEventListener('click',  function openOrCloseMe(){

    var Details = document.querySelector('.address')

    if(Details.style.display == ''){
        Details.style.display = "block";

    }

    else{
        Details.style.display = "";

    };
    
    
    
});


var AddButtons = document.querySelectorAll('.add')

for (i = 0; i< AddButtons.length ; i++){
    var ButtonEvent = AddButtons[i]
    ButtonEvent.addEventListener('click', function incrementQuantity(event){

        

        var AddButtonPressed = event.target.previousElementSibling;
        var input = parseInt(AddButtonPressed.innerHTML)

        input = input + 1; 

        AddButtonPressed.innerHTML = input
        UpdateCartTotal();

     


    });
}


var SubtractButtons = document.querySelectorAll('.subtract')

for (i = 0; i< SubtractButtons.length ; i++){
    var ButtonEvent = SubtractButtons[i]
    ButtonEvent.addEventListener('click', function decrementQuantity(event){

        

        var SubtractButtonPressed = event.target.nextElementSibling;
        var input = parseInt(SubtractButtonPressed.innerHTML)

        if(input > 1) {

        input = input - 1; 
        SubtractButtonPressed.innerHTML = input
        UpdateCartTotal();
        }

     


    });
}

