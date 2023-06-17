$(document).ready(function () {
  $(".food-slider").slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".nav-trigger").click(function () {
    $(".site-content-wrapper").toggleClass("scaled");
  });
});

function toggleContent() {
  console.log("hi");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");
  var toggleButton = document.getElementById("toggleButton");

  if (box3.classList.contains("hidden")) {
    box3.classList.remove("hidden");
    box4.classList.remove("hidden");
    toggleButton.innerHTML = "View Less";
  } else {
    box3.classList.add("hidden");
    box4.classList.add("hidden");
    toggleButton.innerHTML = "View More";
  }
}

// function toggleContent() {
//   var content = document.getElementById("content");
//   var button = document.getElementById("viewButton");

//   if (content.style.display === "block") {
//     content.style.display = "none";
//     button.innerHTML = "View More";
//   } else {
//     content.style.display = "block";
//     button.innerHTML = "View Less";
//   }
// }
