// Fade In Animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(".hidden").forEach((el)=>{
    observer.observe(el);
});

// Navbar Shadow

window.addEventListener("scroll",()=>{

    const nav = document.querySelector("header");

    if(window.scrollY > 50){
        nav.classList.add("active-nav");
    }else{
        nav.classList.remove("active-nav");
    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior:'smooth'
        });

    });

});
