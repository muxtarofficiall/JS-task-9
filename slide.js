
let array=[]
fetch("https://fakestoreapi.com/products").then(res=>res.json().then(products=>
products.map(product=>
  {
    
              let slide=document.createElement("div");
            slide.classList.add("mySlides", "fade");
            let img = document.createElement("img");
            img.src=`${product.image}`;
            slide.append(img);
             let title= document.createElement("div");
           title.classList.add("text");
          title.textContent=product.title;
           slide.append(title)
          main_slide.prepend(slide);
      
    }
)

));

const main_slide=document.querySelector(".slideshow-container");

const slide=document.createElement("div");
        slide.classList.add("mySlides", "fade");
        const img = document.createElement("img");
        img.src="https://avatars.mds.yandex.net/i?id=f95e67f4713c25d19b072c7c210f1c9cb095c12d-4589723-images-thumbs&n=13";
        slide.append(img);
         const title= document.createElement("div");
       title.classList.add("text");
      title.textContent="Products"
       slide.append(title)
      main_slide.prepend(slide);



const element=document.querySelector(".mySlides");


let slides = document.getElementsByClassName("mySlides");

console.log(slides.length)

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
  
}