// handle active class for navigation links
// const navigationLinks = document.querySelectorAll("header nav a");
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function(event) {
//     event.preventDefault();
//     for (let j = 0; j < navigationLinks.length; j++) {
//       navigationLinks[j].classList.remove("active");
//     }
//     this.classList.add("active");
//   });
// }

// handle form submit
// const form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   alert("Form submitted successfully!");
// });
document.getElementById("checkbox").addEventListener("click",function(){
    var menu = document.getElementById("menu")
    if(menu.style.visibility="hidden");{
        menu.style.visibility="visible"
    }
    if(menu.style.display=="flex"){
      
        menu.style.display="none";
        
    }
    else{
        menu.style.display="flex";
        menu.style.backgroundColor="#efefef";
    }
})


// var checkbox = document.getElementById("checkbox");

// window.addEventListener("resize", function() {
//   if (window.innerHeight >= 590) {
//     checkbox.setAttribute("disabled","disabled");
//     checkbox.style.display = "none";
//   } else {
//     checkbox.removeAttribute("disabled");
//     checkbox.style.display = "inline-block";
//   }
// });

// var checkbox = document.getElementById("checkbox");
// checkbox.setAttribute("disabled", "disabled");
// checkbox.style.display = "none";

// window.addEventListener("resize", function() {
//   if (window.innerWidth <= 590) {
//     checkbox.removeAttribute("disabled");
//     checkbox.style.display = "inline-block";
//   } else {
//     checkbox.setAttribute("disabled", "disabled");
//     checkbox.style.display = "none";
//   }
// });

// var checkbox = document.getElementById("checkbox");
// checkbox.setAttribute("disabled", "disabled");
// checkbox.style.display = "none";

// var mediaQuery = window.matchMedia("max-width: 590px");
// mediaQuery.addEventListener(function(mediaQuery) {
//   if (mediaQuery.matches) {
//     checkbox.removeAttribute("disabled");
//     checkbox.style.display = "inline-block";
//   } else {
//     checkbox.setAttribute("disabled", "disabled");
//     checkbox.style.display = "none";
//   }
// });



// window.addEventListener("load", function() {
//     const checkbox = document.getElementById("checkbox");
//     checkbox.style.display = "none";
  
//     window.addEventListener("resize", function() {
//       if (window.innerWidth <= 590) {
//         checkbox.style.display = "inline-block";
//         // checkbox.removeAttribute("visiblity");
//         // checkbox.style.visibility = "visible";
//         console.log("hello bhai");
//       } else {
//         checkbox.style.display = "none";
//       }
//     });
//   });

window.addEventListener("load", function() {
    const checkbox = document.querySelector("#checkbox");
  
    function updateVisibility() {
      if (window.innerWidth >= 590) {
        checkbox.style.display = "inline-block";
        checkbox.disabled = false;
      } else {
        // checkbox.style.display = "none";
        // checkbox.disabled = true;
      }
    }
  
    window.addEventListener("resize", updateVisibility);
  });
  