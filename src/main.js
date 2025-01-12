// Function opens page for recent blog posts

function openRecentBlogPost(recentBlogPostNumber){
    if(recentBlogPostNumber === 1){
        window.open()
        console.log("Opened first recent blog.")
    } else if(recentBlogPostNumber === 2){
        window.open()
        console.log("Opened second recent blog.")
    } else if(recentBlogPostNumber === 3){
        window,open()
        console.log("Opened third recent blog.")
    } else{
        console.log("Please input a number from 1-3")
    }
}

// Function opens page for recent projects posts

function openRecentProjectPost(recentProjectPostNumber){
    if(recentProjectPostNumber === 1){
        window.open()
        console.log("Opened first recent project.")
    } else if(recentProjectPostNumber === 2){
        window.open()
        console.log("Opened second recent project.")
    } else if(recentProjectPostNumber === 3){
        window,open()
        console.log("Opened third recent project.")
    } else{
        console.log("Please input a number from 1-3")
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