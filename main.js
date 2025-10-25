const gallery = document.getElementById("gallery");
const left = document.getElementById("left");
const right = document.getElementById("right");

gallery.addEventListener('wheel',(e)=>{
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
})

left.addEventListener('click',()=>{
    gallery.scrollLeft += -400;
})
right.addEventListener('click',()=>{
    gallery.scrollLeft  += 400;
})