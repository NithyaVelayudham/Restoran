   // start the counter used in about section

   let counters=document.querySelectorAll('.counter');
let interval=50;
counters.forEach((value)=>{
let startvalue=0;
let endvalue=parseInt(value.getAttribute("data-value"));
let duration=Math.floor(interval/endvalue);
let count=setInterval(function(){
    startvalue +=1;
    value.textContent=startvalue;
    if(startvalue==endvalue){
        clearInterval(count);
    }
},100);
});
   

          // start the counter used in about section


          /*--filter start--*/

const item1=document.querySelectorAll(".btn");
const boxes=document.querySelectorAll(".box");


item1.forEach( (b)=>{
    b.addEventListener('click',(event)=>{
        event.preventDefault();
        setActiveBtn(event);
const itemfilter=event.target.dataset.filter;


boxes.forEach((box)=>{
if(itemfilter=="all"){
    box.style.display="block";
}else{
    const boxfilter=box.dataset.item;
    if(itemfilter==boxfilter){
        box.style.display="block";
    }else{
        box.style.display="none";
    }
}
});

    });
});
    
    function setActiveBtn(event){
     item1.forEach((b)=>{
            b.classList.remove('btn-clicked');
            event.target.classList.add('btn-clicked');
        })
    }
      /*--filter end--*/

     function myform() {
    
    const form=document.getElementById("form");
        const username=document.getElementById("username");
        const email=document.getElementById("email");
        const date=document.getElementById("date");
        const subject=document.getElementById("subject");

        function checkReckquired(inputs){
            inputs.forEach(input=> {
         if (input.value.trim()==="") {
         errorInput(input,`${getName(input)}
         is Required`);
                   }else{
                    successInput(input);
                   }
            });
        }
     
        //get to the feild msg
        function getName(input){
            return input.id;
           // return input.getAttributte("data-name"); //get to the html data attribute
        }
        // create errorinput function
        function errorInput(input,message){
            const formGroup=input.parentElement;
            formGroup.className ="form-group error";
            const p= formGroup.querySelector('p');
            p.innerHTML= message;
        }
        // create successinput function
        function successInput(input){
            const formGroup=input.parentElement;
            formGroup.className ="form-group success";
            const p= formGroup.querySelector('p');
            p.innerHTML= " ";
        }}
        // create form Event
      form.addEventListener("submit", function (e) {
            a.preventDefault();
checkReckquired([username,email,date,subject]);
         
            });
       
                     /*----end---*/


      
  //testimonial start

  var slider=document.getElementById("slider-main");
var item=slider.getElementsByClassName("slider-item");
function next(){
    slider.append(item[0]);
    }
    function prev(){
        slider.prepend(item[item.length-1]);
        }

 
 