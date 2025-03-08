// Function to load recent blog content.
function recentBlogContentLoad(blogPostNum){
    // Switch statement to load different posts
    switch (blogPostNum) {
        case 1:
            // Switches image tag attributes around on first image.
            const blogImageOne = document.getElementById("recent-blog-image-1");
            blogImageOne.src ="";
            blogImageOne.alt ="";
            // Changes the title and link of blog post 1
            const blogTitleLinkOne = document.getElementById("blog-post-title-link-1");
            const blogTitleOne = document.getElementById("blog-post-title-1");
            blogTitleLinkOne.href="";
            blogTitleOne.innerHTML="";
            // Changes the descript of blog post 1
            const blogTextOne = document.getElementById("blog-post-text-1");
            blogTextOne.innerHTML ="";      
            break;
        case 2:
            // Switches image tag attributes around on second image.
            const blogImageTwo = document.getElementById("recent-blog-image-2");
            blogImageTwo.src ="";
            blogImageTwo.alt ="";
            // Changes the title and link of blog post 2
            const blogTitleLinkTwo = document.getElementById("blog-post-title-link-2");
            const blogTitleTwo = document.getElementById("blog-post-title-2");
            blogTitleLinkTwo.href="";
            blogTitleTwo.innerHTML="";
            // Changes the descript of blog post 2
            const blogTextTwo = document.getElementById("blog-post-text-2");
            blogTextTwo.innerHTML ="";  
            break;
        case 3:
            // Switches image tag attributes around on second image.
            const blogImageThree = document.getElementById("recent-blog-image-3");
            blogImageThree.src ="";
            blogImageThree.alt ="";
            // Changes the title and link of blog post 2
            const blogTitleLinkThree = document.getElementById("blog-post-title-link-3");
            const blogTitleThree = document.getElementById("blog-post-title-3");
            blogTitleLinkThree.href="";
            blogTitleThree.innerHTML="";
            // Changes the descript of blog post 2
            const blogTextThree = document.getElementById("blog-post-text-3");
            blogTextThree.innerHTML ="";
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
            const projectPostImageOne = document.getElementsByClassName("recent-project-card-img-1");
            const projectPostTitleOne = document.getElementsByClassName("recent-project-card-title-1");
            const projectPostDescriptionOne = document.getElementsByClassName("recent-project-card-text-1");
            const projectPostButtonOne = document.getElementsByClassName("recent-project-card-button-1");
            
            // Changes image settings on project post one
            for(let i = 0; i < projectPostImageOne.length; i++){
                projectPostImageOne[i].style="background-color: black;";
                projectPostImageOne[i].src="/Users/kieranpritchard/Documents/Coding Projects/HTML, CSS & Javascript/Projects/Kieran-Pritchard-Portfolio/res/Digital-Logo-BPC.png";
                projectPostImageOne[i].alt="Logo for Bournemouth & Poole Colleges digital sector of courses.";
            }

            // Changes title on project post one.
            for(let i = 0; i < projectPostTitleOne.length; i++){
                projectPostTitleOne[i].innerHTML="My College Course";
            }
            
            // Changes description on blog one.
            for(let i = 0; i < projectPostDescriptionOne.length; i++){
                projectPostDescriptionOne[i].innerHTML="An overview of all of my course including: practical work, exams, and more. Each topic is spread out over the page around a unit of the course. This page is a working document, this means it is being updated all the time.";
            }
            
            // Changes button link on blog one.
            for(let i = 0; i < projectPostButtonOne.length; i++){
                projectPostButtonOne[i].href = "./Portfolio-Posts/College-Course.html"
            }
            break;
        case 2:
            // Accesses project two posts elements.
            const projectPostImageTwo = document.getElementsByClassName("recent-project-card-img-2")
            const projectPostTitleTwo = document.getElementsByClassName("recent-project-card-title-2");
            const projectPostDescriptionTwo = document.getElementsByClassName("recent-project-card-text-2")
            const projectPostButtonTwo = document.getElementsByClassName("recent-project-card-button-2")

            // Changes image settings on project post two
            for(let i = 0; i < projectPostImageTwo.length; i++){
                projectPostImageTwo[i].style="background-color: white;"
                projectPostImageTwo[i].src="/Users/kieranpritchard/Documents/Coding Projects/HTML, CSS & Javascript/Projects/Kieran-Pritchard-Portfolio/res/IDEA-Logo.png";
                projectPostImageTwo[i].alt="The logo for the iDEA award E-learning platform";
            }
            
            // Changes title on project post two.
            for(let i = 0; i < projectPostTitleTwo.length; i++){
                projectPostTitleTwo[i].innerHTML="My iDEA Awards";
            }
            
            // Changes description on project post two.
            for(let i = 0; i < projectPostDescriptionTwo.length; i++){
                projectPostDescriptionTwo[i].innerHTML="An overview and account of my time gaining my iDEA awards. The page only goes up to silver at the moment however, once gold realeases I will go ahead and gain the certifacate for that.";
            }
            
            // Changes button link on project post two.
            for(let i = 0; i < projectPostButtonTwo.length; i++){
                projectPostButtonTwo[i].href="./Portfolio-Posts/My-iDEA-Awards.html"
            }
            break;
        case 3:
            const projectPostImageThree = document.getElementsByClassName("recent-project-card-img-3")
            const projectPostTitleThree = document.getElementsByClassName("recent-project-card-title-3");
            const projectPostDescriptionThree = document.getElementsByClassName("recent-project-card-text-3")
            const projectPostButtonThree = document.getElementsByClassName("recent-project-card-button-3")

            // Changes image settings on project post three
            for(let i = 0; i < projectPostImageThree.length; i++){
                projectPostImageThree[i].style="background-color: white;"
                projectPostImageThree[i].src="/Users/kieranpritchard/Documents/Coding Projects/HTML, CSS & Javascript/Projects/Kieran-Pritchard-Portfolio/res/Sololearn-Logo.png";
                projectPostImageThree[i].alt="The logo for the SoloLearn App.";
            }
            
            // Changes title on blog three.
            for(let i = 0; i < projectPostTitleThree.length; i++){
                projectPostTitleThree[i].innerHTML="SoloLearn Certifacates";
            }
            // Changes description on blog three.
            for(let i = 0; i < projectPostDescriptionThree.length; i++){
                projectPostDescriptionThree[i].innerHTML="A recount of my progress through SoloLearn, a online course platform for learning different programming langauages. This shows all of the certifacates I learned, as well as my thoughts and feelings on each course.";
            }
            
            // Changes button link on blog three.
            for(let i = 0; i < projectPostButtonThree.length; i++){
                projectPostButtonThree[i].href="./Portfolio-Posts/SoloLearn-Certifacates.html";
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
    const windowSize = window.innerWidth;
    const contactMessageForm = document.getElementById("contact-me-form-email-body");

    // if statement to change row numbers based on height in pixels
    if( windowSize < 576){
        contactMessageForm.rows="10"
    } else if(windowSize >= 576){
        contactMessageForm.rows="10"
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
    const sendFromEmailAddress = document.getElementById().value
    const sendEmailSubject = document.getElementById().value
    const sendEmailBody = document.getElementById().value
    
    // Opens the emails client for user to send
    document.location.href = "mailto:KieranPritchard06@gmail.com?subject=" + encodeURIComponent(sendEmailSubject) + "&body=" + encodeURIComponent("Email Send From: " + sendFromEmailAddress + "%0A") + encodeURIComponent(sendEmailBody)
}

// Function executes all functions to be loaded
function websiteLoadFunctions(){
    // Loads all the recent blog post contents for home page.
    recentBlogContentLoad(1)
    recentBlogContentLoad(2)
    recentBlogContentLoad(3)
}
