const rate = document.querySelectorAll('.rate');

const submit_btn = document.getElementById("submit");
let rate_at_thanks = document.querySelector("#rate_given")

let main1 = document.getElementById("main1");
let main2 = document.getElementById("main2");  
 

for (let i = 0; i < rate.length; i++) {
    rate[i].addEventListener('click', function (){

         for (let index = 0; index < rate.length; index++) {
          
                 if(i == index){
                    rate[index].classList.add('clicked')
                 }
                 else if(i!=index){
                    rate[index].classList.remove('clicked')
                 }
            }
            submit_btn.addEventListener('click',()=>{
                rate_at_thanks.innerHTML = `&nbsp;${rate[i].innerHTML}&nbsp;`;
                main1.style.display = 'none';
                main2.style.display = 'block';
            });
        });
} 
