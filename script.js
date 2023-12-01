let val;
let nav =document.querySelector("nav");

window.onscroll= function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}

const scroll_container = document.getElementById('scroll_container');
const bar = document.getElementById('bar')
let isScrolling = false;
bar.addEventListener('mouseover',()=>{
    isScrolling = false;
})
scroll_container.addEventListener("wheel", function(e) {
  if (!isScrolling && e.deltaY !== 0) {
    e.preventDefault();
    isScrolling = true;
    scroll_container.scrollLeft = scroll_container.scrollLeft +  e.deltaY * 2;
  }
});

scroll_container.addEventListener("scroll", function() {
  isScrolling = false;
  // console.log("Scroll completed");
});

