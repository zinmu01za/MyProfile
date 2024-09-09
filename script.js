gsap.fromTo(
    ".loading-page",
     {opacity:1},
     {
    opacity:0,
    duration:1.5,
    delay:3.5,
    display:"none",
}
);

gsap.fromTo(".logo-name",
    {
        y:50,
        opacity:0,
        
    },{
        y:0,
        opacity:1,
        
        duration:2,
        delay:0.5,
    }
);

// Delay navbar show after load page

document.addEventListener('DOMContentLoaded', function() {
    const loadingPage = document.querySelector('.loading-page');
    const navbar = document.querySelector('.navcon');
    
    // Delay before hiding the loading page and showing the navbar
    setTimeout(() => {
        loadingPage.style.display = 'none';  // Immediately hide the loading page
        navbar.style.display = 'block';  // Immediately show the navbar
    }, 5000);  // Delay before hiding the loading page (adjust as needed)
});


// Delay navbar show after load page


//add shadowdrop after scroll

window.addEventListener('scroll', function() {
    const navcon = document.querySelector('.navcon');
    const scrollThreshold = 50; // Adjust this value based on when you want the shadow to appear

    if (window.scrollY > scrollThreshold) {
        navcon.classList.add('scrolled');  // Add the 'scrolled' class when scrolled past threshold
    } else {
        navcon.classList.remove('scrolled');  // Remove the 'scrolled' class when scrolled back up
    }
});

//add shadowdrop after scroll

// Function to handle the shadow based on scroll position
function handleNavbarShadow() {
    const navbar = document.querySelector('.navcon');
    
    if (window.scrollY === 0) {
        navbar.style.boxShadow = 'none';  // Remove shadow when at the top
    } else {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';  // Add shadow when scrolling
    }
}

// Event listener to handle scroll
window.addEventListener('scroll', handleNavbarShadow);

// Run the function immediately after the loading page finishes
window.addEventListener('load', function() {
    const navbar = document.querySelector('.navcon');
    navbar.style.display = 'block';  // Ensure the navbar is displayed after loading
    handleNavbarShadow();  // Call this function to check initial scroll position
});




