const form = document.querySelector('form')
/* 
    this usecase will give you empty
    JS runs immediately when the page loads
    When your JS file is loaded, this line:
*/

// const height =  parseInt(document.querySelector('#height').value)

/*
    executes right away, before the user has typed anything in the form.
    At this point:
    The form exists
    The <input id="height"> exists
    But the user has not entered any value yet — so:
 */

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value)
   const weight =  parseInt(document.querySelector('#weight').value)

   const results = document.querySelector('#results')

   if(height==='' || height < 0 || isNaN(height)){
         results.innerHTML = `Please give a valid height ${height}`;
   }else if(weight==='' || weight < 0 || isNaN(weight)){
         results.innerHTML = `Please give a valid height ${weight}`;
   }else{
     const bmi =   (weight/ ((height*height) / 10000)).toFixed(2);
     results.innerHTML = `<span> ${bmi} </span>`;
   }  

})
