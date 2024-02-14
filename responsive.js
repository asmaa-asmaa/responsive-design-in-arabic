let lis= document.querySelectorAll(".info-list li");
let divs=document.querySelectorAll(".info-content div")

lis.forEach((li)=> {

    li.onclick= function (e) {

    lis.forEach(li=>{
        li.classList.remove("selected");
    });
        e.target.classList.add("selected");

    divs.forEach((div)=>{

          div.style.display="none";

          if(div.className===e.target.dataset.class) {

            div.style.display="block";
          }
        
    });
    }
});