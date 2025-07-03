AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a JavaScript library for building component-based user interfaces</li>",
  },
  {
    langImage: "assets/images/techstack-page/c.png",
    langName: "C",
    langDesc: "<li>C is a general-purpose, procedural programming language supporting structured programming</li>",
  },
  {
    langImage: "assets/images/techstack-page/java.png",
    langName: "Java",
    langDesc: "<li>Java is a class-based, object-oriented programming language used for developing applications</li>",
  },
  {
    langImage: "assets/images/techstack-page/android_studio.png",
    langName: "Android Studio",
    langDesc: "<li>Android Studio is the official IDE for Google's Android operating system, used for app development</li>",
  },
  {
    langImage: "assets/images/techstack-page/android.png",
    langName: "Android",
    langDesc: "<li>Android is an open-source mobile operating system based on a modified version of the Linux kernel</li>",
  },
  {
    langImage: "assets/images/techstack-page/api.png",
    langName: "API",
    langDesc: "<li>API stands for Application Programming Interface, which allows different software applications to communicate</li>",
  },
  {
    langImage: "assets/images/techstack-page/figma.png",
    langName: "Figma",
    langDesc: "<li>Figma is a web-based design tool, used for UI/UX design and prototyping</li>",
  },
  {
    langImage: "assets/images/techstack-page/firebase.png",
    langName: "Firebase",
    langDesc: "<li>Firebase is a platform developed by Google for creating mobile and web applications with backend support</li>",
  },
  {
    langImage: "assets/images/techstack-page/flutter.png",
    langName: "Flutter",
    langDesc: "<li>Flutter is an open-source UI software development toolkit created by Google for building natively compiled apps</li>",
  },
  {
    langImage: "assets/images/techstack-page/jetpack.png",
    langName: "Jetpack",
    langDesc: "<li>Android Jetpack is a suite of libraries, tools, and guidance to help developers write high-quality apps</li>",
  },
  {
    langImage: "assets/images/techstack-page/kotlin.png",
    langName: "Kotlin",
    langDesc: "<li>Kotlin is a modern programming language that runs on the Java Virtual Machine and is officially supported for Android development</li>",
  },
  {
    langImage: "assets/images/techstack-page/mongodb.png",
    langName: "MongoDB",
    langDesc: "<li>MongoDB is a NoSQL database that stores data in flexible, JSON-like documents</li>",
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySQL",
    langDesc: "<li>MySQL is an open-source relational database management system based on SQL</li>",
  },
    {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript is a core web technology used for interactivity and dynamic behavior on websites</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node.js",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created as an extension of the C programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in files, widely used for source code management</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a popular front-end open-source CSS framework for responsive design</li>",
  }
];


const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
