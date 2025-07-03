AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Motion Engineer",
    cardImage: "img/portfolios/web/web1/1.png",
    description:
      "A responsive portfolio website built with HTML, CSS, JS, and Bootstrap, showcasing video editing and animation work.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/732/732212.png", // HTML icon
    Previewlink: "https://navinkr.com/",
    Githublink: "https://github.com/blackhat-coder21/navinmotion.github.io", // no GitHub link provided
  },
  {
    title: "ERP App",
    cardImage: "img/portfolios/app/erp/erp_logo.jpg",
    description:
      "An ERP-like app for IIIT Allahabad students to access academic info and pay fees.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // Flutter/MySQL
    Previewlink: "",
    Githublink: "", // private repo
  },
   {
    title: "Multi Lingual Hateful Meme Detection",
    cardImage: "img/portfolios/Mini_Project.png",
    description:
      "An ERP-like app for IIIT Allahabad students to access academic info and pay fees.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // Flutter/MySQL
    Previewlink: "",
    Githublink: "https://github.com/blackhat-coder21/Multi-Lingual-Hateful-Meme-Detection", // private repo
  },
  {
    title: "Mcube Media Forum (Sanatan Temple) App",
    cardImage: "img/portfolios/app/app4/sanatan.jpg",
    description:
      "A video streaming app exploring ancient temples using Firebase, Google Maps, and Facebook SDK.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/226/226770.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.knowyourtemple",
    Githublink: "", // not provided
  },
  {
    title: "StreamIt - Media Player",
    cardImage: "img/portfolios/app/app6/streamit.jpg",
    description:
      "Android Media Player app using ExoPlayer with wide format support and equalizer features.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/226/226770.png", // Android/Java
    Previewlink: "",
    Githublink: "https://github.com/blackhat-coder21/StreamIt",
  },
  {
    title: "ParkEase+",
    cardImage: "img/portfolios/app/app5/parkease.jpg",
    description:
      "Flutter app to find, book, and pay for parking with real-time maps and Razorpay integration.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // Flutter
    Previewlink: "",
    Githublink: "https://github.com/blackhat-coder21/ParkEasePlus",
  },
  {
    title: "GradePlus",
    cardImage: "img/portfolios/app/app3/gradeplus_logo.jpg",
    description:
      "Student resource sharing app built using Flutter and Firebase for lectures and PYQs.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    Previewlink: "",
    Githublink: "https://github.com/blackhat-coder21/GradePlus",
  },
  {
    title: "GeniArt",
    cardImage: "img/portfolios/app/app8/logo.jpg",
    description:
      "Android Media Player app using ExoPlayer with wide format support and equalizer features.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/226/226770.png", // Android/Java
    Previewlink: "",
    Githublink: "https://github.com/blackhat-coder21/GeniArt",
  },
  {
    title: "Acadmate",
    cardImage: "img/portfolios/app/app1.jpg",
    description:
      "A student-centric Android app for accessing semester materials, PDFs, and PYQs.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/226/226770.png", // Android icon
    Previewlink: "",
    Githublink: "https://github.com/blackhat-coder21/AcadMate",
  },
];


// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
