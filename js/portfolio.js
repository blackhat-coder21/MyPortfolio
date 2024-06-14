$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: {
            target: ".mix",
        },
        animation: {
            easing: "ease-in-out",
            applyPerspective: true,
            duration: 750,
            reverseOut: true,
            effects: "fade rotateY(90deg) stagger(100ms)",
            staggerSequence: function (i) {
                return 2 * i - 5 * (i / 3 - (1 / 3) * (i % 3));
            },
            nudge: false,
        },
        controls: {
            live: false,
        },
    });

    $(".closeButton").click(() => {
        document.querySelector(".closeButton .icon").classList.toggle("active");
        $(".description").slideToggle(500);
    });

    $(".exitButton").click(() => {
        tip.classList.remove("view");
    });
    function portfolioView(object) {
        let namePlate = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate h1"
        );
        namePlate.textContent = object.namePlate;

        let category = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate span span"
        );
        category.textContent = object.category;

        let pro_brief = document.querySelector(
            ".tip .allContent .description .pro_intro .other_text p"
        );
        pro_brief.textContent = object.project_brief;

        let project_date = document.querySelector(
            ".tip .allContent .description .pro_info .Date span"
        );
        project_date.textContent = object.project_date;

        let project_client = document.querySelector(
            ".tip .allContent .description .pro_info .client span"
        );
        project_client.textContent = object.project_client;

        let project_tools = document.querySelector(
            ".tip .allContent .description .pro_info .tools span"
        );
        project_tools.textContent = object.project_tools;

        let project_link = document.querySelector(
            ".tip .allContent .description .pro_info .link a"
        );
        project_link.textContent = object.project_link;
        project_link.href = object.project_link;

        let swiper_wrapper = document.querySelector(
            ".tip .swiper-container-2 .swiper-wrapper"
        );

        swiper_wrapper.innerHTML = '';

        for (let i = 0; i < object.image.length; i++) {
            let slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            let img = document.createElement('img');
            img.src = object.image[i];
            slide.appendChild(img);
            swiper_wrapper.appendChild(slide);
        }

        project_link.addEventListener("click", (event) => {
            event.preventDefault(); 
            window.open(project_link.href, '_blank'); 
        });


        swiper.update();
    }

    // Swiper js
    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        effect: "cube",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    let about_nav_btn_2 = document.querySelectorAll(".about_nav a");

    function collapse2() {
        about_nav_btn_2.forEach((link) => {
            link.classList.remove("active");
        });
    }

    function slider1(selector) {
        selector.addEventListener("click", () => {
            collapse2();
            selector.classList.add("active");
        });
    }

    slider1(about_nav_btn_2[0]);
    slider1(about_nav_btn_2[1]);
    slider1(about_nav_btn_2[2]);
    slider1(about_nav_btn_2[3]);
    slider1(about_nav_btn_2[4]);
    slider1(about_nav_btn_2[5]);

    let cards = document.querySelectorAll(".mix");
    let tip = document.querySelector(".tip");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            // if (card.classList.contains("web")) {
            //     tip.classList.add("view");
            //     let website = card
            //         .querySelector(".title")
            //         .textContent.replace(" ", "")
            //         .replace(" ", ".")
            //         .toLowerCase();
            //     portfolioView({
            //         namePlate: card.querySelector(".title").textContent,
            //         category: "Web Development",
            //         project_brief: `Lorem ipsum, dolor sit amet consectetur
            //                         adipisicing elit. At corrupti modi perferendis
            //                         iure corporis dolores minus asperiores nemo
            //                         debitis veritatis id placeat, similique eum
            //                         recusandae ipsa quia cum earum nam?`,

            //         project_date: "2019",
            //         project_client: "XYZ Corporation",
            //         project_link: `www.${website}.com`,

            //         image: [
            //             "img/portfolios/web/1.jpg",
            //             "img/portfolios/web/2.jpg",
            //             "img/portfolios/web/3.jpg",
            //             "img/portfolios/web/4.jpg",
            //             "img/web_design.jpg",
            //             "img/web_design.jpg",
            //             "img/web_design.jpg",
            //             "img/web_design.jpg",
            //             "img/web_design.jpg",
            //         ],
            //     });
            // } 
            if (card.classList.contains("web1")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Web Development",
                    project_brief: `This project involved developing a responsive portfolio website for a client to showcase their video editing and animation skills. Built with HTML, CSS, JavaScript, and Bootstrap, the site ensures seamless accessibility across devices.

The homepage features a background video clip with the client's name and tagline. The portfolio section includes a dynamic gallery with interactive filtering, enabling users to explore different categories like video editing and animations. Each project has a detailed page with descriptions, embedded videos, and images.

An "About" section provides the client's biography, skills, experience, and a downloadable resume. A contact form with validation ensures potential clients can easily get in touch. CSS animations and JavaScript effects, such as hover effects and animated progress bars, enhance user engagement. This project leverages modern web technologies to create a professional and engaging portfolio.`,
                    project_date: "2023",
                    project_client: "Navin Kumar",
                    project_link: `https://navinkr.com/`,
                    project_tools: "HTML, CSS, JavaScript, BootStrap",
                    image: [
                        "img/portfolios/web/web1/1.png",
                        "img/portfolios/web/web1/2.png",
                        "img/portfolios/web/web1/3.png",
                        "img/portfolios/web/web1/4.png",
                        "img/portfolios/web/web1/5.png",
                        "img/portfolios/web/web1/6.png",
                        "img/portfolios/web/web1/7.png",
                        "img/portfolios/web/web1/8.png",
                        "img/portfolios/web/web1/9.png",
                        "img/portfolios/web/web1/10.png",
                        "img/portfolios/web/web1/11.png",
                        "img/portfolios/web/web1/12.png",
                    ],
                });
            }
            // else if (card.classList.contains("web2")) {
            //     tip.classList.add("view");
            //     let website = card
            //         .querySelector(".title")
            //         .textContent.replace(" ", "")
            //         .replace(" ", ".")
            //         .toLowerCase();
            //     portfolioView({
            //         namePlate: card.querySelector(".title").textContent,
            //         category: "App Development",
            //         project_brief: `Acadmate is a comprehensive student-centric project 
            //         designed to streamline academic resources seamlessly. Empowering 
            //         students with easy access to semester materials, question papers, 
            //         and essential PDFs, Acadmate ensures that educational resources are 
            //         just a click away. With user-friendly navigation and a robust database, 
            //         it aims to enhance study efficiency and support academic success by 
            //         providing students with the tools they need to excel in their courses.`,
            //         project_date: "2023",
            //         project_client: "Self",
            //         project_link: `https://github.com/blackhat-coder21/AcadMate`,
            //         project_tools: "Android Studio, Kotlin, FireBase",
            //         image: [
            //             "img/portfolios/app/app1.jpg",
            //             "img/portfolios/app/1.jpg",
            //             "img/portfolios/app/2.jpg",
            //             "img/portfolios/app/3.jpg",
            //             "img/portfolios/app/4.jpg",
            //             "img/portfolios/app/5.jpg",
            //             "img/portfolios/app/3.jpg",
            //             "img/portfolios/app/app1.jpg",
            //             "img/portfolios/app/2.jpg",
            //         ],
            //     });
            // }
            // else if (card.classList.contains("web3")) {
            //     tip.classList.add("view");
            //     let website = card
            //         .querySelector(".title")
            //         .textContent.replace(" ", "")
            //         .replace(" ", ".")
            //         .toLowerCase();
            //     portfolioView({
            //         namePlate: card.querySelector(".title").textContent,
            //         category: "App Development",
            //         project_brief: `Acadmate is a comprehensive student-centric project 
            //         designed to streamline academic resources seamlessly. Empowering 
            //         students with easy access to semester materials, question papers, 
            //         and essential PDFs, Acadmate ensures that educational resources are 
            //         just a click away. With user-friendly navigation and a robust database, 
            //         it aims to enhance study efficiency and support academic success by 
            //         providing students with the tools they need to excel in their courses.`,
            //         project_date: "2023",
            //         project_client: "Self",
            //         project_link: `https://github.com/blackhat-coder21/AcadMate`,
            //         project_tools: "Android Studio, Kotlin, FireBase",
            //         image: [
            //             "img/portfolios/app/app1.jpg",
            //             "img/portfolios/app/1.jpg",
            //             "img/portfolios/app/2.jpg",
            //             "img/portfolios/app/3.jpg",
            //             "img/portfolios/app/4.jpg",
            //             "img/portfolios/app/5.jpg",
            //             "img/portfolios/app/3.jpg",
            //             "img/portfolios/app/app1.jpg",
            //             "img/portfolios/app/2.jpg",
            //         ],
            //     });
            // }
            else if (card.classList.contains("app1")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Development",
                    project_brief: `Acadmate is a comprehensive student-centric project 
                    designed to streamline academic resources seamlessly. Empowering 
                    students with easy access to semester materials, question papers, 
                    and essential PDFs, Acadmate ensures that educational resources are 
                    just a click away. With user-friendly navigation and a robust database, 
                    it aims to enhance study efficiency and support academic success by 
                    providing students with the tools they need to excel in their courses.`,
                    project_date: "2023",
                    project_client: "Self",
                    project_link: `https://github.com/blackhat-coder21/AcadMate`,
                    project_tools: "Android Studio, Kotlin, FireBase",
                    image: [
                        "img/portfolios/app/app1.jpg",
                        "img/portfolios/app/1.jpg",
                        "img/portfolios/app/2.jpg",
                        "img/portfolios/app/3.jpg",
                        "img/portfolios/app/4.jpg",
                        "img/portfolios/app/5.jpg",
                        "img/portfolios/app/3.jpg",
                        "img/portfolios/app/app1.jpg",
                        "img/portfolios/app/2.jpg",
                    ],
                });
            }
            // else if (card.classList.contains("logo")) {
            //     tip.classList.add("view");
            //     let website = card
            //         .querySelector(".title")
            //         .textContent.replace(" ", "")
            //         .replace(" ", ".")
            //         .toLowerCase();
            //     portfolioView({
            //         namePlate: card.querySelector(".title").textContent,
            //         category: "Logo Designing",
            //         project_brief: `Lorem ipsum, dolor sit amet consectetur
            //                         adipisicing elit. At corrupti modi perferendis
            //                         iure corporis dolores minus asperiores nemo
            //                         debitis veritatis id placeat, similique eum
            //                         recusandae ipsa quia cum earum nam?`,

            //         project_date: "2019",
            //         project_client: `${
            //             card.querySelector(".title").textContent
            //         } Corporation`,
            //         project_link: `www.${website}.com`,

            //         image: [
            //             "img/portfolios/logo/1.jpg",
            //             "img/portfolios/logo/2.jpg",
            //             "img/portfolios/logo/3.jpg",
            //             "img/portfolios/logo/4.jpg",
            //             "img/portfolios/logo/5.jpg",
            //             "img/portfolios/logo/6.jpg",
            //             "img/portfolios/logo/7.jpg",
            //             "img/logo_design.jpg",
            //             "img/logo_design.jpg",
            //         ],
            //     });
            // } 
            // else if (card.classList.contains("card")) {
            //     tip.classList.add("view");
            //     let website = card
            //         .querySelector(".title")
            //         .textContent.replace(" ", "")
            //         .replace(" ", ".")
            //         .toLowerCase();
            //     portfolioView({
            //         namePlate: card.querySelector(".title").textContent,
            //         category: "Graphics Designing",
            //         project_brief: `Lorem ipsum, dolor sit amet consectetur
            //                         adipisicing elit. At corrupti modi perferendis
            //                         iure corporis dolores minus asperiores nemo
            //                         debitis veritatis id placeat, similique eum
            //                         recusandae ipsa quia cum earum nam?`,

            //         project_date: "2019",
            //         project_client: `${
            //             card.querySelector(".title").textContent
            //         } Corporation`,
            //         project_link: `www.${website}.com`,

            //         image: [
            //             "img/portfolios/card/1.jpg",
            //             "img/portfolios/card/2.jpg",
            //             "img/portfolios/card/3.jpg",
            //             "img/portfolios/card/4.jpg",
            //             "img/portfolios/card/5.jpg",
            //             "img/graphics_design.jpg",
            //             "img/graphics_design.jpg",
            //             "img/graphics_design.jpg",
            //             "img/graphics_design.jpg",
            //         ],
            //     });
            // } 
            // else if (card.classList.contains("icon")) {
            //     tip.classList.add("view");
            //     let website = card
            //         .querySelector(".title")
            //         .textContent.replace(" ", "")
            //         .replace(" ", ".")
            //         .toLowerCase();
            //     portfolioView({
            //         namePlate: card.querySelector(".title").textContent,
            //         category: "Icon Designing",
            //         project_brief: `Lorem ipsum, dolor sit amet consectetur
            //                         adipisicing elit. At corrupti modi perferendis
            //                         iure corporis dolores minus asperiores nemo
            //                         debitis veritatis id placeat, similique eum
            //                         recusandae ipsa quia cum earum nam?`,

            //         project_date: "2019",
            //         project_client: `${
            //             card.querySelector(".title").textContent
            //         } Corporation`,
            //         project_link: `www.${website}.com`,

            //         image: [
            //             "img/portfolios/icon/1.jpg",
            //             "img/portfolios/icon/2.jpg",
            //             "img/portfolios/icon/3.jpg",
            //             "img/portfolios/icon/4.jpg",
            //             "img/portfolios/icon/5.jpg",
            //             "img/icon_design.png",
            //             "img/icon_design.png",
            //             "img/icon_design.png",
            //             "img/icon_design.png",
            //         ],
            //     });
            // } 
            // else if (card.classList.contains("app")) {
            //     tip.classList.add("view");
            //     let website = card
            //         .querySelector(".title")
            //         .textContent.replace(" ", "")
            //         .replace(" ", ".")
            //         .toLowerCase();
            //     portfolioView({
            //         namePlate: card.querySelector(".title").textContent,
            //         category: "UI/UX Designing",
            //         project_brief: `Lorem ipsum, dolor sit amet consectetur
            //                         adipisicing elit. At corrupti modi perferendis
            //                         iure corporis dolores minus asperiores nemo
            //                         debitis veritatis id placeat, similique eum
            //                         recusandae ipsa quia cum earum nam?`,

            //         project_date: "2019",
            //         project_client: `${
            //             card.querySelector(".title").textContent
            //         } Corporation`,
            //         project_link: `www.${website}.com`,

            //         image: [
            //             "img/portfolios/app/1.jpg",
            //             "img/portfolios/app/2.jpg",
            //             "img/portfolios/app/3.jpg",
            //             "img/ui_design.jpg",
            //             "img/ui_design.jpg",
            //             "img/ui_design.jpg",
            //             "img/ui_design.jpg",
            //             "img/ui_design.jpg",
            //             "img/ui_design.jpg",
            //         ],
            //     });
            // }
            else if (card.classList.contains("app2")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Development",
                    project_brief: `Pragyanam is an in-development application designed for 
                    students at Indian Institute of Information Technology Allahabad (IIIT Allahabad)
                     to streamline the payment of semester fees. With its user-friendly interface, 
                     students can conveniently download their documents and access their scorecards 
                     and CGPA. Additionally, the application provides comprehensive visibility into 
                     all academic plans and activities.`,
                    project_date: "2024",
                    project_client: "Students of IIIT Allahabad",
                    project_link: `Private Repo`,
                    project_tools: "Flutter, MYSql, XAMPP Server, PHP, FireBase",
                    image: [
                        "img/portfolios/app/erp/erp_logo.jpg",
                        "img/portfolios/app/erp/erp2.jpg",
                        "img/portfolios/app/erp/erp3.jpg",
                        "img/portfolios/app/erp/erp4.jpg",
                        "img/portfolios/app/erp/erp5.jpg",
                        "img/portfolios/app/erp/erp6.jpg",
                        "img/portfolios/app/erp/erp7.jpg",
                        "img/portfolios/app/erp/erp8.jpg",
                        "img/portfolios/app/erp/erp9.jpg",
                        "img/portfolios/app/erp/erp10.jpg",
                    ],
                });
            }
            else if (card.classList.contains("app1")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Development",
                    project_brief: `Acadmate is a comprehensive student-centric project 
                    designed to streamline academic resources seamlessly. Empowering 
                    students with easy access to semester materials, question papers, 
                    and essential PDFs, Acadmate ensures that educational resources are 
                    just a click away. With user-friendly navigation and a robust database, 
                    it aims to enhance study efficiency and support academic success by 
                    providing students with the tools they need to excel in their courses.`,
                    project_date: "2023",
                    project_client: "Self",
                    project_link: `https://github.com/blackhat-coder21/AcadMate`,
                    project_tools: "Android Studio, Kotlin, FireBase",
                    image: [
                        "img/portfolios/app/app1.jpg",
                        "img/portfolios/app/1.jpg",
                        "img/portfolios/app/2.jpg",
                        "img/portfolios/app/3.jpg",
                        "img/portfolios/app/4.jpg",
                        "img/portfolios/app/5.jpg",
                        "img/portfolios/app/3.jpg",
                        "img/portfolios/app/app1.jpg",
                        "img/portfolios/app/2.jpg",
                    ],
                });
            }
            else if (card.classList.contains("app4")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Development",
                    project_brief: `Discover the mystical wonders of ancient temples through our 
                    immersive video streaming app. Immerse yourself in the rich history, 
                    architectural marvels, and spiritual ambiance of renowned temples 
                    from around the world. With stunning visuals, captivating narratives, 
                    and expert insights, our app transports you to sacred sites, allowing 
                    you to explore their hidden treasures from the comfort of your own home. 
                    Whether you're a history enthusiast, a cultural explorer, or seeking moments 
                    of tranquility, our temples video app is your gateway to a mesmerizing journey 
                    of discovery, enlightenment, and serenity.`,
                    project_date: "2024",
                    project_client: "Mcube Media Forum",
                    project_link: `https://play.google.com/store/apps/details?id=com.knowyourtemple`,
                    project_tools: "Android Studio, Kotlin, FireBase, Google Map SDK, FaceBook SDK, VedicAstro API",
                    image: [
                        "img/portfolios/app/app4/1.jpg",
                        "img/portfolios/app/app4/2.jpg",
                        "img/portfolios/app/app4/3.jpg",
                        "img/portfolios/app/app4/4.jpg",
                        "img/portfolios/app/app4/5.jpg",
                        "img/portfolios/app/app4/6.jpg",
                        "img/portfolios/app/app4/7.jpg",
                        "img/portfolios/app/app4/8.jpg",
                        "img/portfolios/app/app4/9.jpg",
                        "img/portfolios/app/app4/10.jpg",
                        "img/portfolios/app/app4/11.jpg",
                        "img/portfolios/app/app4/12.jpg",
                        "img/portfolios/app/app4/13.jpg",
                        "img/portfolios/app/app4/14.jpg",
                        "img/portfolios/app/app4/15.jpg",

                    ],
                });
            }
            else if (card.classList.contains("app6")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Development",
                    project_brief: `Media Player app with advance playback features using Exoplayer

ExoPlayer is an open-source media player library for Android developed by Google. ExoPlayer is designed to be flexible and extensible, with support for a wide variety of audio and video formats, as well as advanced playback features such as adaptive streaming, seamless looping, and dynamic bitrates. It also provides a simple API for controlling playback and monitoring playback events, making it easy to integrate into your Android application.

ExoPlayer is also highly customizable, with support for custom renderers, audio and video codecs, and track selection strategies. This allows developers to tailor the player to their specific needs and optimize playback performance for their particular use case.

Overall, ExoPlayer is a powerful and flexible media player library for Android, and is widely used by developers and organizations to provide high-quality media playback in their Android applications.

This app supports all the popular video formats including MKV, MP4 , 3GP, M4V, MOV, MTS, TS, FLV, WEBM etc.

It can show videos in folders as well as without folders in a separate section. It provides the best equalizer for managing audio track frequencies.`,
                    project_date: "2023",
                    project_client: "OOM Project(Self)",
                    project_link: `https://github.com/blackhat-coder21/StreamIt`,
                    project_tools: "Android Studio, Java, Exoplayer",
                    image: [
                        "img/portfolios/app/app6/streamit.jpg",
                        "img/portfolios/app/app6/img1.jpg",
                        "img/portfolios/app/app6/img2.jpg",
                        "img/portfolios/app/app6/img3.jpg",
                        "img/portfolios/app/app6/img4.jpg",
                        "img/portfolios/app/app6/img5.jpg",
                        "img/portfolios/app/app6/img6.jpg",
                        "img/portfolios/app/app6/img7.jpg",
                        "img/portfolios/app/app6/img8.jpg",
                        "img/portfolios/app/app6/img9.jpg",
                        "img/portfolios/app/app6/img10.jpg",
                        "img/portfolios/app/app6/img11.jpg",
                        "img/portfolios/app/app6/img12.jpg",
                        "img/portfolios/app/app6/img13.jpg",
                        "img/portfolios/app/app6/img15.jpg",

                    ],
                });
            }
            else if (card.classList.contains("app5")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Development",
                    project_brief: `ParkEase+ is an advanced Android parking application designed to enhance the urban 
                    parking experience by utilizing real-time geolocation data. The app offers users the ability to locate 
                    available parking spaces nearby, view detailed information about each spot, and book and pay for parking 
                    seamlessly through the app. By integrating with various payment gateways, ParkEase+ ensures secure and 
                    convenient transactions. The app features turn-by-turn navigation to guide users directly to their 
                    selected parking space, reducing search time and minimizing traffic congestion. Additional functionalities 
                    include notifications for available spaces and payment reminders, a comprehensive parking history for 
                    users, and a feedback mechanism to continually improve the service. For parking owners, ParkEase+ provides 
                    tools for managing space availability, pricing, and tracking payments, while administrators can monitor 
                    system performance and user accounts. Overall, ParkEase+ aims to simplify the parking process, making it 
                    efficient and hassle-free for urban drivers.`,
                    project_date: "2024",
                    project_client: "DBMS Project (Self)",
                    project_link: `https://github.com/blackhat-coder21/ParkEasePlus`,
                    project_tools: "Android Studio, Flutter, FireBase, Dart, Google Map APIs, Razorpay SDk",
                    image: [
                        "img/portfolios/app/app5/parkease.jpg",
                        "img/portfolios/app/app5/2.jpg",
                        "img/portfolios/app/app5/3.jpg",
                        "img/portfolios/app/app5/4.jpg",
                        "img/portfolios/app/app5/5.jpg",
                        "img/portfolios/app/app5/6.jpg",
                        "img/portfolios/app/app5/7.jpg",
                        "img/portfolios/app/app5/8.jpg",
                        "img/portfolios/app/app5/9.jpg",
                        "img/portfolios/app/app5/10.jpg",
                        "img/portfolios/app/app5/11.jpg",
                        "img/portfolios/app/app5/12.jpg",
                        "img/portfolios/app/app5/13.jpg",
                        "img/portfolios/app/app5/14.jpg",
                        "img/portfolios/app/app5/15.jpg",
                        "img/portfolios/app/app5/16.jpg",
                        "img/portfolios/app/app5/17.jpg",
                        "img/portfolios/app/app5/18.jpg",
                        "img/portfolios/app/app5/19.jpg",
                        "img/portfolios/app/app5/20.jpg",
                    ],
                });
            }
            else if (card.classList.contains("app3")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "App Development",
                    project_brief: `The Student Resource App, GradePlus, is a dedicated platform 
                    designed to enhance the learning experience of students. It offers easy 
                    access to course materials, lecture notes, and past year question papers 
                    (PYQs). Additionally, it provides a centralized platform for academic discussions, 
                    fostering collaboration and knowledge sharing among students. GradePlus aims to 
                    empower students to improve their learning experience and academic performance.`,
                    project_date: "2024",
                    project_client: "Software Engineering Project (Self)",
                    project_link: `https://github.com/blackhat-coder21/GradePlus`,
                    project_tools: "Android Studio, Flutter, FireBase, Dart",
                    image: [
                        "img/portfolios/app/app3/gradeplus_logo.jpg",
                        "img/portfolios/app/app3/1.jpg",
                        "img/portfolios/app/app3/2.jpg",
                        "img/portfolios/app/app3/3.jpg",
                        "img/portfolios/app/app3/4.jpg",
                        "img/portfolios/app/app3/5.jpg",
                        "img/portfolios/app/app3/6.jpg",
                        "img/portfolios/app/app3/7.jpg",
                        "img/portfolios/app/app3/8.jpg",
                    ],
                });
            }
        });
    });
});
