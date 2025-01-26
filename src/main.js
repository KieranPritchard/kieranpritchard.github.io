function recentBlogContentLoad(blogPostNum){
    // Switch statement to load different posts
    switch (blogPostNum) {
        case 1:
            // Switches image tag attributes around on first image.
            const blogImageOne = document.getElementById("recent-blog-image-1");
            blogImageOne.src =;
            blogImageOne.alt =;
            // Changes the title and link of blog post 1
            const blogTitleLinkOne = document.getElementById("blog-post-title-link-1");
            const blogTitleOne = document.getElementById("blog-post-title-1");
            blogTitleLinkOne.href=;
            blogTitleOne.innerHTML=;
            // Changes the descript of blog post 1
            const blogTextOne = document.getElementById("blog-post-text-1");
            blogTextOne.innerHTML =;      
            break;
        case 2:
            // Switches image tag attributes around on second image.
            const blogImageTwo = document.getElementById("recent-blog-image-2");
            blogImageTwo.src =;
            blogImageTwo.alt =;
            // Changes the title and link of blog post 2
            const blogTitleLinkTwo = document.getElementById("blog-post-title-link-2");
            const blogTitleTwo = document.getElementById("blog-post-title-2");
            blogTitleLinkTwo.href=;
            blogTitleTwo.innerHTML=;
            // Changes the descript of blog post 2
            const blogTextTwo = document.getElementById("blog-post-text-2");
            blogTextTwo.innerHTML =;  
            break;
        case 3:
            // Switches image tag attributes around on second image.
            const blogImageThree = document.getElementById("recent-blog-image-2");
            blogImageThree.src =;
            blogImageThree.alt =;
            // Changes the title and link of blog post 2
            const blogTitleLinkThree = document.getElementById("blog-post-title-link-2");
            const blogTitleThree = document.getElementById("blog-post-title-2");
            blogTitleLinkThree.href=;
            blogTitleThree.innerHTML=;
            // Changes the descript of blog post 2
            const blogTextThree = document.getElementById("blog-post-text-2");
            blogTextThree.innerHTML =;
        default:
            break;
    }
}

function recentProjectContentLoad(projectPostNum){
    // Switch to load the different content
    switch (projectPostNum) {
        case 1:
            
            break;
        case 2:
            
            break;
        case 3:

            break;
        default:
            break;
    }
}

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