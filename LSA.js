// For navitaion fix on top of the screen

// <!-- Form validations for slot booking -->

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// <!-- Gallary onhover changes images -->

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function event2(imgs) {
  var expandImg = document.getElementById("bigImageEvent2");
  var imgText = document.getElementById("event2");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

$("#studentCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));
  }
});

// For carousel collebrations
$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

// window.addEventListener('scroll', function () {
//   let navbarTopElement = document.getElementById('navbarTopLSA')
//   if (window.scrollY > 600) {
//     navbarTopElement.classList.add('fixed-top', 'bg-info')
//   } else {
//     let navbarTopElement = document.getElementById('navbarTopLSA')
//     navbarTopElement.classList.remove('fixed-top', 'navbar-custom-bg')
//     navbarTopElement.classList.remove('fixed-top', 'bg-info')
//   }
// })
