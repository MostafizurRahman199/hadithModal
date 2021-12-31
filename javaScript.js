let btn = document.querySelector(".button1");
let modal = document.querySelector(".modal_wrapper");

let closeBtn = document.querySelector(".close_btn");

closeBtn.addEventListener("click",function(){
    modal.style.display="none";
})

btn.addEventListener("click",function(){
    modal.style.display="block";
})

window.addEventListener("click", function(e){
    if(e.target==modal)
        {
            modal.style.display = "none";
        }
})

