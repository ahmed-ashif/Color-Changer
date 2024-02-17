const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach( function(button){
  button.addEventListener('click',function(e) {
    //  console.log(e);
    //  console.log(e.target);
     if(e.target.id === 'red'){
      body.style.backgroundColor = 'red';
     }
     if(e.target.id === 'orange'){
      body.style.backgroundColor = 'orange';
     }
     if(e.target.id === 'green'){
      body.style.backgroundColor = 'green';
     }
     if(e.target.id === 'default'){
      body.style.backgroundColor = 'white';
     }
  })
})