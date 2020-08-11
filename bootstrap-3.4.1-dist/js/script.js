document.addEventListener("DOMContentLoaded", 

function (event) {

    var x = document.getElementsByClassName("item-price");
        y = x.length

    function purchased(event){

        console.log(this)
        
        console.log(y)
    
        for (var i = 0; i < y ; i++) {
            console.log(x[i].textContent);
    
        }
    
    
        console.log("purchased");
        clearTotal();
        processingPayement();
        this.textContent = "PURCHASED" 
    
        
    }
    
    
    
    
    document.querySelector("button.purchase-all").addEventListener("click", purchased);


       // ---- /* to gte the x and y coordinates of where the client moves mouse  */

    // document.querySelector("body").addEventListener("mousemove", 
    // function(event){


    //     if (event.shiftKey === true ){

    //     console.log("x: " + event.clientX)
    //     console.log("y: " + event.clientY)



    //  }
    
    //     }
    //         );


function clearTotal(){



    var message = "<h2 id = &#39; total-price-value &#39;> $0 </h2>";
    document.getElementById('total-price').innerHTML = message

}



function processingPayement(){

    alert("payment has been processed");
    clearAll();


}

function clearAll(){



    for (i = 0; i <y; i++){
    document.querySelector("#content-holder").innerHTML = "" ;
    }
}









}

);

