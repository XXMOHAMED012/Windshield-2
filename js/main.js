
let faqs = document.querySelectorAll(" .faq .container .box")

faqs.forEach( faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

let prog = document.getElementById("sc");
console.log(prog);
let hi = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progheight = (window.pageYOffset / hi) * 100 ;
    prog.style.height = progheight + "%";
}
