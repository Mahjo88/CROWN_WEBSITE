/* Start NavBar */
/* Catch Elements */
let openIcon = document.getElementById("open");
let nav = document.querySelector("nav");
let opations = document.querySelectorAll(".header .container ul li a");

/* Event 1 */
openIcon.addEventListener("click", () => {
  openIcon.classList.toggle("fa-times");
  nav.classList.toggle("show");
});

/* Event 2 */
opations.forEach((opation) => {
  opation.addEventListener("click", () => {
     opations.forEach((opation) => {
       opation.classList.remove("selected");
     });
     opation.classList.add("selected");
     
     openIcon.classList.toggle("fa-times");
  nav.classList.toggle("show");
  });
});
/* End NavBar */



/* Start About */
let about = document.querySelector(".about");
let spans = document.querySelectorAll(".content-box .box .brog span");
let scrollTop = document.getElementById("scrollTop");

window.onscroll = function () {
  if (scrollY >= about.offsetTop + 150) 
  {
     spans.forEach((span) => {
       span.style.width = span.dataset.width;
       
       scrollTop.classList.add("active");
     });
  }
  else {
    scrollTop.classList.remove("active");
  }
};

scrollTop.addEventListener("click", () => {
  scroll(0,0);
});
/* End About */


/* Start Preview */
let contentWork = document.querySelectorAll(".work .contentWork .box")
let previewBox = document.querySelector(".previewBox");
let closeIcon = document.querySelector(".previewBox .icon");
let img = document.querySelector(".previewBox .imgBox img");

window.onload = () => {
  for(let i = 0; i < contentWork.length; i++){
    let newIndex = i;
    let clickImgIndex;
    contentWork[i].onclick = () => {
      clickImgIndex = newIndex;
      function preview() {
        let imgUrl = contentWork[newIndex].querySelector("img").src;
        img.src = imgUrl;
      }
      /* Start Work At Previous And Next Buttons */
      let prevBtn = document.querySelector(".previewBox .prev");
      let nextBtn = document.querySelector(".previewBox .next");
      if(newIndex == 0) {
        prevBtn.style.display = 'none';
      }
      if(newIndex >= contentWork.length - 1) {
        nextBtn.style.display = 'none';
      }
      prevBtn.onclick = () => {
        newIndex--;
        if(newIndex == 0) {
          preview();
          prevBtn.style.display = 'none';
        }
        else {
          preview();
          nextBtn.style.display = 'block';
        }
      }
      
      nextBtn.onclick = () => {
        newIndex++;
        if(newIndex >= contentWork.length - 1) {
          preview();
          nextBtn.style.display = 'none';
        }
        else {
          preview();
          prevBtn.style.display = 'block';
        }
      }
      preview(); previewBox.classList.add("show");
      
      closeIcon.onclick = () => { 
       newIndex = clickImgIndex;    
       prevBtn.style.display = 'block';
       nextBtn.style.display = 'block'; previewBox.classList.remove("show");
      }
    }
  }
}
/* End Preview */


