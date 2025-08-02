// * Handles theme switching, carousel initialization, content loading, and various UI interactions

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Main initialization function that runs when DOM is loaded
 * Sets up theme, carousels, and timeline animations
 */
window.addEventListener("DOMContentLoaded", function () {
    applyTheme();
    emailFormSize()
    initializeCarousels();
    setupTimelineObserver();
});

// ============================================================================
// THEME MANAGEMENT
// ============================================================================

// * Applies the current theme (dark/light) based on stored preference or system setting
// * Updates theme attribute and icon display
function applyTheme() {
    // Get stored theme or system preference
    let storedTheme = localStorage.getItem("preferredTheme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? "dark" : "light");

    // Apply theme to document
    document.documentElement.setAttribute("data-bs-theme", theme);

    // Update theme toggle icons
    updateThemeIcons(theme);
}

// Updates the theme toggle icons based on current theme
function updateThemeIcons(theme) {
    const iconToAdd = theme === "dark" ? "fa-sun" : "fa-moon";
    const iconToRemove = theme === "dark" ? "fa-moon" : "fa-sun";

    const icons = document.getElementsByClassName("themeToggle");
    for (let icon of icons) {
        icon.classList.remove(iconToRemove);
        icon.classList.add(iconToAdd);
    }
}

// * Toggles between dark and light themes
// * Saves preference to localStorage and updates UI
function themeSwitcher() {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Apply new theme
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("preferredTheme", newTheme);

    // Update icons
    updateThemeIcons(newTheme);
}

// ============================================================================
// CAROUSEL MANAGEMENT
// ============================================================================

// * Initializes all Bootstrap carousels on the page
// * Handles both Bootstrap and fallback carousel functionality

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(function(carousel) {
        // Check if Bootstrap is available
        if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
            initializeBootstrapCarousel(carousel);
        } else {
            // Fallback for when Bootstrap is not loaded
            console.warn('Bootstrap not available, using fallback carousel initialization');
            initializeFallbackCarousel(carousel);
        }
    });
}


// * Initializes a Bootstrap carousel with appropriate settings
function initializeBootstrapCarousel(carousel) {
    // Check if auto-advance is enabled (data-bs-ride attribute present)
    const hasAutoAdvance = carousel.hasAttribute('data-bs-ride');
    
    // Initialize the carousel
    new bootstrap.Carousel(carousel, {
        interval: hasAutoAdvance ? 5000 : false, // Auto-advance every 5 seconds only if enabled
        wrap: true,     // Allow continuous cycling
        keyboard: true, // Allow keyboard navigation
        pause: hasAutoAdvance ? 'hover' : false  // Pause on mouse hover only if auto-advance is enabled
    });
}

// * Fallback carousel initialization for when Bootstrap is not available
// * Provides basic carousel functionality with manual controls

function initializeFallbackCarousel(carousel) {
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');
    
    let currentIndex = 0;
    
    
    // * Shows the slide at the specified index
    // * [index] - Index of the slide to show
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

// ============================================================================
// FORM HANDLING
// ============================================================================

/**
 * Sends email via user's email client
 * Validates email format and required fields before opening mailto link
 */
function sendEmailMessage() {
    // Get form values
    const sendFromEmailAddress = document.getElementById("contact-me-form-your-email").value;
    const sendEmailSubject = document.getElementById("contact-me-form-email-subject").value;
    const sendEmailBody = document.getElementById("contact-me-form-email-body").value;
    
    // Construct mailto URL
    const sendEmailStructure = "mailto:KieranPritchard06@gmail.com?subject=" + 
        encodeURIComponent(sendEmailSubject) + 
        "&body=" + encodeURIComponent("Email Send From: " + sendFromEmailAddress + " ") + 
        encodeURIComponent(sendEmailBody);
    
    // Validate email format
    if (sendFromEmailAddress.includes("@") || sendFromEmailAddress.includes(".")) {
        if (sendEmailSubject && sendEmailBody) {
            window.open(sendEmailStructure);
        } else {
            alert("Please include a subject and a message.");
        }
    } else {
        alert("Incorrect email address format.");
        return;
    }
}

function emailFormSize() {
    const messageInput = document.getElementById("contact-me-form-email-body");
    if (!messageInput) return;

    const width = window.innerWidth;
    let rows = 10;

    switch (true) {
        case width < 1400:
            rows = 15;
            break;
        case width >= 1200:
            rows = 15;
            break;
        case width === 768:
        case width === 992:
        case width === 576:
        default:
            rows = 10;
            break;
    }

    messageInput.setAttribute("rows", String(rows));
}


// ============================================================================
// SEARCH AND FILTERING
// ============================================================================

/**
 * Searches through blog posts based on title
 * Filters blog list to show only matching posts
 */
function blogSearch() {
    // Get search input and elements
    let input = document.getElementById('blog-searchbar');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('blog-list');
    let li = ul.getElementsByTagName('li');

    // Loop through blog posts to find matching titles
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        let txtValue = a.textContent || a.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/**
 * Filters blogs based on selected topic checkboxes
 * Shows/hides blog posts based on their category classes
 * @param {string} filterTopic - The topic class to filter by
 */
function blogFilter(filterTopic) {
    // Get all blog posts and checkbox states
    const blogPosts = document.querySelectorAll('#blog-list li');
    let boxOneIsChecked = document.getElementById("blog-topic-1").checked;
    let boxTwoIsChecked = document.getElementById("blog-topic-2").checked;
    let boxThreeIsChecked = document.getElementById("blog-topic-3").checked;

    if (boxOneIsChecked || boxTwoIsChecked || boxThreeIsChecked) {
        // Filter posts based on selected topics
        blogPosts.forEach(post => {
            if (post.classList.contains(filterTopic)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    } else {
        // Show all posts if no filters are selected
        blogPosts.forEach(post => {
            post.style.display = "block";
        });
    }
}

// ============================================================================
// BACKGROUND COLOR MANAGEMENT
// ============================================================================

/**
 * Automatically sets background colors for icon containers
 * Analyzes images to determine appropriate background colors
 * Skips 16:9 aspect ratio images to avoid background color changes
 */
function setIconBackgroundColors() {
    const iconContainers = document.querySelectorAll('.recent-project-card-img-background, .project-page-project-card-image-background');
    iconContainers.forEach((container) => {
        const img = container.querySelector('img');
        if (img) {
            if (img.complete) {
                checkAndSetBackgroundFromImage(container, img);
            } else {
                img.addEventListener('load', () => {
                    checkAndSetBackgroundFromImage(container, img);
                });
            }
        }
    });
}

/**
 * Checks if image is 16:9 aspect ratio and sets background accordingly
 * @param {HTMLElement} container - The container element to set background for
 * @param {HTMLImageElement} img - The image to analyze
 */
function checkAndSetBackgroundFromImage(container, img) {
    // Calculate aspect ratio
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const targetRatio = 16 / 9; // 16:9 aspect ratio
    const tolerance = 0.1; // Allow for some variation
    
    // Check if image is approximately 16:9
    if (Math.abs(aspectRatio - targetRatio) <= tolerance) {
        // For 16:9 images, make them fill the container width with consistent height
        img.style.setProperty('width', '100%', 'important');
        img.style.setProperty('height', '150px', 'important');
        img.style.setProperty('object-fit', 'cover', 'important');
        // Still apply background color analysis for 16:9 images
        setBackgroundFromImage(container, img);
        return;
    }
    
    // For non-16:9 images, proceed with normal background color analysis
    setBackgroundFromImage(container, img);
}

/**
 * Automatically sets background colors for header image containers
 * Handles special cases for specific logos
 */
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

/**
 * Analyzes image and sets appropriate background color
 * Uses canvas analysis for dominant color detection with fallback to filename-based colors
 * @param {HTMLElement} container - The container element to set background for
 * @param {HTMLImageElement} img - The image to analyze
 */
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

// ============================================================================
// TIMELINE ANIMATIONS
// ============================================================================

/**
 * Sets up intersection observers for timeline animations
 * Handles both card visibility and progressive line drawing
 */
function setupTimelineObserver() {
    // Observer for timeline cards
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    });

    // Observe all timeline cards
    document.querySelectorAll('.timeline-card').forEach(card => {
        observer.observe(card);
    });

    // Observer for timeline line animation
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timeline = entry.target;
                timeline.classList.add('animate-line');
                
                // Start the progressive line drawing
                startProgressiveLineDrawing(timeline);
                
                timelineObserver.unobserve(timeline);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0
    });

    // Observe the timeline container
    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer) {
        timelineObserver.observe(timelineContainer);
    }
}

/**
 * Creates progressive line drawing animation for timeline
 * Gradually fills the timeline line as items come into view
 * @param {HTMLElement} timeline - The timeline element to animate
 */
function startProgressiveLineDrawing(timeline) {
    const timelineItems = timeline.querySelectorAll('.timeline-item');
    
    // Create the progressive line drawing
    timelineItems.forEach((item, index) => {
        const delay = (index + 1) * 1000; // 1s, 2s, 3s, 4s
        
        setTimeout(() => {
            const progress = ((index + 1) / timelineItems.length) * 100;
            
            // Create a style element to override the pseudo-element
            const styleId = `timeline-line-${Date.now()}`;
            let styleElement = document.getElementById(styleId);
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = styleId;
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                .timeline.animate-line::before {
                    height: ${progress}% !important;
                }
            `;
        }, delay);
    });
}

// ============================================================================
// EVENT LISTENERS AND INITIALIZATION
// ============================================================================

// Initialize background colors and carousels when DOM is ready
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

// Re-initialize after all content is loaded
window.addEventListener('load', function() {
    isBackgroundNeeded()
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