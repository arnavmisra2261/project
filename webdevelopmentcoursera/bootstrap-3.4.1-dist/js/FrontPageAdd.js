var AddButtons = document.getElementsByClassName('add');

for (var i = 0; i < AddButtons.length; i++){


    var Button = AddButtons[i]
    
    Button.addEventListener('click', function getItemInformation(event){

        var ButtonPressed = event.target

        console.log(ButtonPressed.parentElement.parentElement.parentElement)




})
}



var texts = document.querySelectorAll(".item-description")
console.log(texts)


for(i = 0; i < texts.length; i ++){

    textElement = texts.addEventListener('', function displayInfo(event){

            textDisplay = event.target;
            console.log(textDisplay)



            }   
    )

}






