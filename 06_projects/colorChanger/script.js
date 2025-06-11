const buttons =  document.querySelectorAll('.button')
const body = document.querySelector("body")

// console.log(buttons)

buttons.forEach(function(button){
     button.addEventListener('click' , function(e){
        // console.log(e)
        // console.log(e.target)
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;
            case "yellow":
                   body.style.backgroundColor = e.target.id;
                    body.style.color = "black";
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                 body.style.color = "white";
                break;
        
            default:
                body.style.backgroundColor = e.target.id;
                 body.style.color = "black";
                break;
        }

     })
})