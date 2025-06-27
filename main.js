// Event listener to load correct mode for website
window.addEventListener("DOMContentLoaded", function () {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");

    if (!currentTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDark ? "dark" : "light";
        document.documentElement.setAttribute("data-bs-theme", theme);
    }
    
    // Initialize Bootstrap carousels
    initializeCarousels();
});

// Function to initialize Bootstrap carousels
function initializeCarousels() {
    // Get all carousel elements
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(function(carousel) {
        // Check if Bootstrap is available
        if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
            // Check if auto-advance is enabled (data-bs-ride attribute present)
            const hasAutoAdvance = carousel.hasAttribute('data-bs-ride');
            
            // Initialize the carousel
            new bootstrap.Carousel(carousel, {
                interval: hasAutoAdvance ? 5000 : false, // Auto-advance every 5 seconds only if enabled
                wrap: true,     // Allow continuous cycling
                keyboard: true, // Allow keyboard navigation
                pause: hasAutoAdvance ? 'hover' : false  // Pause on mouse hover only if auto-advance is enabled
            });
        } else {
            // Fallback for when Bootstrap is not loaded
            console.warn('Bootstrap not available, using fallback carousel initialization');
            initializeFallbackCarousel(carousel);
        }
    });
}

// Fallback carousel initialization for when Bootstrap is not available
function initializeFallbackCarousel(carousel) {
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');
    
    let currentIndex = 0;
    
    function showSlide(index) {
        // Hide all slides
        items.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove active class from all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
            indicator.removeAttribute('aria-current');
        });
        
        // Show current slide
        if (items[index]) {
            items[index].classList.add('active');
        }
        
        // Activate current indicator
        if (indicators[index]) {
            indicators[index].classList.add('active');
            indicators[index].setAttribute('aria-current', 'true');
        }
        
        currentIndex = index;
    }
    
    // Initialize first slide
    showSlide(0);
    
    // Add click handlers for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Add click handlers for navigation buttons
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            showSlide(newIndex);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            showSlide(newIndex);
        });
    }
}

// Function to load recent blog content.
function recentBlogContentLoad(blogPostNum){
    // Switch statement to load different posts
    switch (blogPostNum) {
        case 1:
            const blogImageOne = document.getElementsByClassName("recent-blog-image-1");
            const blogTitleOne = document.getElementsByClassName("blog-post-title-1");
            const blogTextOne = document.getElementsByClassName("blog-post-text-1");
            // Switches image tag attributes around on first image.
            for(let i = 0; i < blogImageOne.length; i++){
                blogImageOne[i].src ="./res/Icons/A-Day-In-My-Life-As-A-Student-Thumbnail.jpg";
                blogImageOne[i].alt ="Thumbnail image of a computer on a desk in a dark room";
            }
            // Changes the title and link of blog post 1
            for(let i = 0; i < blogTitleOne.length; i++){
                blogTitleOne[i].href="./Blog-Posts/A-Day-In-My-Life-As-A-Student.html";
                blogTitleOne[i].innerHTML="A Day In The Life Of A Student";
            }
            // Changes the descript of blog post 1
            for(let i = 0; i < blogTextOne.length; i++){
                blogTextOne[i].innerHTML = "A glimpse into my world: my current routines, reflections on college life, and the changes I've experienced since starting college. I've also included how this journey has significantly benefited me in the long run and the valuable experiences and opportunities it has opened up for me.";
            }      
            break;
        case 2:
            const blogImageTwo = document.getElementsByClassName("recent-blog-image-2");
            const blogTitleTwo = document.getElementsByClassName("blog-post-title-2");
            const blogTextTwo = document.getElementsByClassName("blog-post-text-2");
            // Switches image tag attributes around on second image.
            for(let i = 0; i < blogImageTwo.length; i++){
                blogImageTwo[i].src ="./res/Icons/How-I-Started-Programming-Thumbnail.jpg";
                blogImageTwo[i].alt ="Thumbnail image of code on a monitor in a dark room";
            }
            // Changes the title and link of blog post 2
            for(let i = 0; i < blogTitleTwo.length; i++){
                blogTitleTwo[i].href="./Blog-Posts/How-I-Started-Programming.html";
                blogTitleTwo[i].innerHTML="How I Started Programming";
            }
            // Changes the descript of blog post 2
            for(let i = 0; i < blogTextTwo.length; i++){
                blogTextTwo[i].innerHTML = "This blog post is a reflection on the beginning of my programming journey. I wanted to share with you how I got started, how I began learning, and offer some personal tips and advice for anyone looking to start their own path in programming.";  
            }
            break;
        case 3:
            const blogImageThree = document.getElementsByClassName("recent-blog-image-3");
            const blogTitleThree = document.getElementsByClassName("blog-post-title-3");
            const blogTextThree = document.getElementsByClassName("blog-post-text-3");
            // Switches image tag attributes around on third image.
            for(let i = 0; i < blogImageThree.length; i++){
                blogImageThree[i].src = "./res/Icons/How-My-Opinions-On-AI-Changed-Thumbnail.jpg";
                blogImageThree[i].alt = "Thumbnail Image of someone a robot with circuts for brains to represent A.I";
            }
            // Changes the title and link of blog post 3
            for(let i = 0; i < blogTitleThree.length; i++){
                blogTitleThree[i].href="./Blog-Posts/./Blog-Posts/How-I-Started-Programming.html";
                blogTitleThree[i].innerHTML="How My Opinions On AI Changed";
            }
            // Changes the descript of blog post 3
            for(let i = 0; i < blogTextThree.length; i++){
                blogTextThree[i].innerHTML ="A short introspective piece on how my opinions and views on AI have evolved since the initial release of ChatGPT in November 2022, to the present day where it has, to some extent, become a part of everyone's daily life.";
            }
        default:
            break;
    }
}

// Function to load recent project cards
function recentProjectContentLoad(projectPostNum){
    // Switch to load the different content
    switch (projectPostNum) {
        case 1:
            // Accesses project post one elements
            const projectPostImageBackgroundOne = document.getElementsByClassName("recent-project-img-background-1")
            const projectPostImageOne = document.getElementsByClassName("recent-project-card-img-1");
            const projectPostTitleOne = document.getElementsByClassName("recent-project-card-title-1");
            const projectPostDescriptionOne = document.getElementsByClassName("recent-project-card-text-1");
            const projectPostButtonOne = document.getElementsByClassName("recent-project-card-button-1");
            
            // Changes Image Background on project post one
            for(let i = 0; i < projectPostImageBackgroundOne.length; i++){
                projectPostImageBackgroundOne[i].style="background-color: black;";
            }

            // Changes image settings on project post one
            for(let i = 0; i < projectPostImageOne.length; i++){
                projectPostImageOne[i].src="./res/Icons/Digital-Logo-BPC.png";
                projectPostImageOne[i].alt="Logo for Bournemouth & Poole Colleges digital sector of courses.";
            }

            // Changes title on project post one.
            for(let i = 0; i < projectPostTitleOne.length; i++){
                projectPostTitleOne[i].innerHTML="BTEC First Foundation in Tech";
            }
            
            // Changes description on blog one.
            for(let i = 0; i < projectPostDescriptionOne.length; i++){
                projectPostDescriptionOne[i].innerHTML="An overview of my entire course, including practical work, exams, and more. Each topic is organized around a specific unit of the course and spread throughout the page. This page is a working document, meaning it is continuously being updated.        ";
            }
            
            // Changes button link on blog one.
            for(let i = 0; i < projectPostButtonOne.length; i++){
                projectPostButtonOne[i].href = "./portfolio/btec-first-foundation-in-tech/"
            }
            break;
        case 2:
            // Accesses project two posts elements.
            const projectPostImageBackgroundTwo = document.getElementsByClassName("recent-project-img-background-2")
            const projectPostImageTwo = document.getElementsByClassName("recent-project-card-img-2")
            const projectPostTitleTwo = document.getElementsByClassName("recent-project-card-title-2");
            const projectPostDescriptionTwo = document.getElementsByClassName("recent-project-card-text-2")
            const projectPostButtonTwo = document.getElementsByClassName("recent-project-card-button-2")

            for(let i = 0; i < projectPostImageBackgroundTwo.length; i++){
                projectPostImageBackgroundTwo[i].style ="background-color: white;"
            }

            // Changes image settings on project post two
            for(let i = 0; i < projectPostImageTwo.length; i++){
                projectPostImageTwo[i].src="./res/Icons/IDEA-Logo.png";
                projectPostImageTwo[i].alt="The logo for the iDEA award E-learning platform";
            }
            
            // Changes title on project post two.
            for(let i = 0; i < projectPostTitleTwo.length; i++){
                projectPostTitleTwo[i].innerHTML="My iDEA Awards";
            }
            
            // Changes description on project post two.
            for(let i = 0; i < projectPostDescriptionTwo.length; i++){
                projectPostDescriptionTwo[i].innerHTML="An overview and account of my time gaining my iDEA awards and badges. This page only goes up to the Silver Award at the moment because Gold is still in development. However, once Gold is released, I will go ahead and earn the certificate for that as well.";
            }
            
            // Changes button link on project post two.
            for(let i = 0; i < projectPostButtonTwo.length; i++){
                projectPostButtonTwo[i].href="./portfolio/My-iDEA-Awards/"
            }
            break;
        case 3:
            const projectPostImageBackgroundThree = document.getElementsByClassName("recent-project-img-background-3")
            const projectPostImageThree = document.getElementsByClassName("recent-project-card-img-3")
            const projectPostTitleThree = document.getElementsByClassName("recent-project-card-title-3");
            const projectPostDescriptionThree = document.getElementsByClassName("recent-project-card-text-3")
            const projectPostButtonThree = document.getElementsByClassName("recent-project-card-button-3")

            for(let i = 0; i < projectPostImageBackgroundThree.length; i++){
                projectPostImageBackgroundThree[i].style="background-color: white;"
            }

            // Changes image settings on project post three
            for(let i = 0; i < projectPostImageThree.length; i++){
                projectPostImageThree[i].src="./res/Icons/Sololearn-Logo.png";
                projectPostImageThree[i].alt="The logo for the SoloLearn App.";
            }
            
            // Changes title on blog three.
            for(let i = 0; i < projectPostTitleThree.length; i++){
                projectPostTitleThree[i].innerHTML="SoloLearn Certifacates";
            }
            // Changes description on blog three.
            for(let i = 0; i < projectPostDescriptionThree.length; i++){
                projectPostDescriptionThree[i].innerHTML="A recount of my progress through SoloLearn, an online course platform for learning different programming languages. This showcases all of the certificates I earned, as well as my thoughts and feelings on each course.";
            }
            
            // Changes button link on blog three.
            for(let i = 0; i < projectPostButtonThree.length; i++){
                projectPostButtonThree[i].href="./portfolio/SoloLearn-Certifacates/"
            }
            break;
        default:
            break;
    }
}

addEventListener("load", recentProjectContentLoad(1))
addEventListener("load", recentProjectContentLoad(2))
addEventListener("load", recentProjectContentLoad(3))

//Function to resize email message box based on view width
function emailMessageBoxResize(){
    const contactMessageForm = document.getElementById("contact-me-form-email-body");
    if (!contactMessageForm) return; // Only run if the element exists

    const windowSize = window.innerWidth;
    if( windowSize < 576){
        contactMessageForm.rows="15"
    } else if(windowSize >= 576){
        contactMessageForm.rows="15"
    }else if(windowSize >= 768){
        contactMessageForm.rows="10"
    }else if(windowSize >= 992){
        contactMessageForm.rows="15"
    }else if(windowSize >= 1200){
        contactMessageForm.rows="15"
    }else if(windowSize >= 1400){
        contactMessageForm.rows="15"
    }
}

window.addEventListener("resize", emailMessageBoxResize())

// Fuction From 3W Schools
// Function to search through blogs
function blogSearch(){
    // Variables for function
    let input = document.getElementById('blog-searchbar');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('blog-list');
    let li = ul.getElementsByTagName('li');

    // Loops through blog posts to find matching title, it will hide any where that don't match
    for(i =0; i < li.length; i++){
        let a = li[i].getElementsByTagName("a")[0];
        let txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else{
            li[i].style.display = "none";
        }
    }
}

// Function Filters blogs based on what class the list item is.
function blogFilter(filterTopic) {
    // Accesses all blog posts on page.
    const blogPosts = document.querySelectorAll('#blog-list li');
    
    // Variables to store the value of status of checkboxs.
    let boxOneIsChecked = document.getElementById("blog-topic-1").checked;
    let boxTwoIsChecked = document.getElementById("blog-topic-2").checked;
    let boxThreeIsChecked = document.getElementById("blog-topic-3").checked;

    if(boxOneIsChecked || boxTwoIsChecked || boxThreeIsChecked) {
        // Loops through all blog posts to check if there is a filter on that <li> tag that matches the parameters.
        blogPosts.forEach(post => {
            if(post.classList.contains(filterTopic)){
                post.style.display = "block"
            } else{
                post.style.display = "none"
            }
        });
    } else {
        // Loop to make for post visble if none of the filter buttons a clicked.
        blogPosts.forEach(post => {
            post.style.display = "block"
        });
    }
}

// Function sends email via users client
function sendEmailMessage(){
    // Accesses the values of each field to send email.
    const sendFromEmailAddress = document.getElementById("contact-me-form-your-email").value
    const sendEmailSubject = document.getElementById("contact-me-form-email-subject").value
    const sendEmailBody = document.getElementById("contact-me-form-email-body").value
    const sendEmailStructure = "mailto:KieranPritchard06@gmail.com?subject=" + encodeURIComponent(sendEmailSubject) + "&body=" + encodeURIComponent("Email Send From: " + sendFromEmailAddress + " ") + encodeURIComponent(sendEmailBody)
    
    if(sendFromEmailAddress.includes("@") || sendFromEmailAddress.includes(".")){
        if(sendEmailSubject && sendEmailBody){
            window.open(sendEmailStructure)
        } else{
            alert("Please include a subject and a message.")
        }
    } else{
        alert("Incorrect email address format.")
        return
    }
}

// Function executes all functions to be loaded
function websiteLoadFunctions(){
    // Loads all the recent blog post contents for home page.
    recentBlogContentLoad(1)
    recentBlogContentLoad(2)
    recentBlogContentLoad(3)
}

// Function to automatically set background colors for icon containers
function setIconBackgroundColors() {
    // Get all icon containers
    const iconContainers = document.querySelectorAll('.recent-project-card-img-background, .project-page-project-card-image-background');
    iconContainers.forEach((container) => {
        const img = container.querySelector('img');
        if (img) {
            if (img.complete) {
                setBackgroundFromImage(container, img);
            } else {
                img.addEventListener('load', () => {
                    setBackgroundFromImage(container, img);
                });
            }
        }
    });
}

// Function to automatically set background colors for header image containers
function setHeaderImageBackgroundColors() {
    const headerContainers = document.querySelectorAll('.indivual-post-page-header-image-background');
    headerContainers.forEach((container) => {
        const img = container.querySelector('img');
        if (img) {
            const imgSrc = img.src.toLowerCase();
            if (imgSrc.includes('idea-logo')) {
                container.style.setProperty('background-color', '#ffffff', 'important');
                return;
            }
            if (img.complete) {
                setBackgroundFromImage(container, img);
            } else {
                img.addEventListener('load', () => {
                    setBackgroundFromImage(container, img);
                });
            }
        }
    });
}

// Function to analyze image and set background color
function setBackgroundFromImage(container, img) {
    // Resize image to a small canvas for performance
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const sampleSize = 20; // 20x20 pixels
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    try {
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);
        const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
        const data = imageData.data;
        const colorCount = {};
        let maxCount = 0;
        let dominantColor = null;
        // Quantize and count colors
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] < 128) continue; // skip transparent pixels
            // Quantize color to reduce unique colors
            const r = Math.round(data[i] / 16) * 16;
            const g = Math.round(data[i + 1] / 16) * 16;
            const b = Math.round(data[i + 2] / 16) * 16;
            const colorKey = `${r},${g},${b}`;
            colorCount[colorKey] = (colorCount[colorKey] || 0) + 1;
            if (colorCount[colorKey] > maxCount) {
                maxCount = colorCount[colorKey];
                dominantColor = colorKey;
            }
        }
        if (dominantColor) {
            container.style.setProperty('background-color', `rgb(${dominantColor})`, 'important');
            return;
        }
    } catch (error) {
        // If canvas fails (CORS, etc), fallback below
    }
    // Fallback: filename-based color
    const imgSrc = img.src.toLowerCase();
    if (imgSrc.includes('digital-logo-bpc')) {
        container.style.setProperty('background-color', '#000000', 'important');
    } else if (imgSrc.includes('idea-logo')) {
        container.style.setProperty('background-color', '#ffffff', 'important');
    } else if (imgSrc.includes('sololearn-logo')) {
        container.style.setProperty('background-color', '#ffffff', 'important');
    } else {
        container.style.setProperty('background-color', '#f0f0f0', 'important');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setIconBackgroundColors();
    setHeaderImageBackgroundColors();
    
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 5000, // Auto-advance every 5 seconds
            wrap: true, // Allow continuous cycling
            keyboard: true, // Allow keyboard navigation
            pause: 'hover' // Pause on mouse hover
        });
    });
});

window.addEventListener('load', function() {
    setIconBackgroundColors();
    setHeaderImageBackgroundColors();
    
    // Re-initialize carousels after all content is loaded
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true,
            pause: 'hover'
        });
    });
});
