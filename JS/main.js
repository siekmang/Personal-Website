// These variables are for the theme handling
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ?? null;
const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const dismissButton = document.querySelector('#popup-dismiss-button');
const DARK_THEME_COLOR = '#273745';
const LIGHT_THEME_COLOR = '#415b74';

// This function sets the website theme based on system preferences
function setThemeBasedOnSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        metaThemeColor.setAttribute('content', DARK_THEME_COLOR);
        toggleSwitch.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        metaThemeColor.setAttribute('content', LIGHT_THEME_COLOR);
        toggleSwitch.checked = false;
    }
}

// This checks for contents in the currentTheme const, sets data-theme if there is, and calls
// the system preference function if not. Sets switch to on if dark mode is on.
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
} else {
    setThemeBasedOnSystemPreference();
}

// This function controls the privacy alert popup, allowing it to pop up only the first time 
// the user clicks the switch
function privacyPopup() {
    const clickHistory = localStorage.getItem('clickHist');
    if (clickHistory === null) {
        document.querySelector('#popup').style.display = 'unset';
        try {
            localStorage.setItem('clickHist', 'clicked');
        } catch (e) {
            console.error('LocalStorage is not available:', e);
        }
    }
}

// This function allows the user to switch the theme
function switchTheme(e) {
    privacyPopup();
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            localStorage.setItem('theme', 'dark');
        } catch (e) {
            console.error('LocalStorage is not available:', e);
        }
        metaThemeColor.setAttribute('content', DARK_THEME_COLOR);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        try {
            localStorage.setItem('theme', 'light');
        } catch (e) {
            console.error('LocalStorage is not available:', e);
        }
        metaThemeColor.setAttribute('content', LIGHT_THEME_COLOR);
    }
}

// This looks for a switch click and triggers the setTheme function
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}

// This function sets the privacy popup display to none
function dismissButtonClick(event) {
    document.querySelector('#popup').style.display = 'none';
}

// This checks for a click on the dismiss button on the privacy popup and triggers the
// dismissButtonClick function to make the privacy popup disappear
if (dismissButton) {
    dismissButton.addEventListener('click', dismissButtonClick, false);
}

// This section handles touchscreen behavior for the social buttons on the homepage. 
if (window.matchMedia("(pointer: coarse)").matches) {
    const socialButtons = document.querySelectorAll('#social-menu ul li img');

    // This handles click-like behavior for the styling of buttons
    socialButtons.forEach(socialButton => {
        socialButton.addEventListener('pointerdown', () => {
            socialButton.style.filter = 'grayscale(0)';
            socialButton.style.opacity = '100%';
            socialButton.style.transform = 'scale(1.2)';
        });

        socialButton.addEventListener('pointerup', () => {
            setTimeout(() => {
                socialButton.style.filter = 'grayscale(1)';
                socialButton.style.opacity = '75%';
                socialButton.style.transform = 'scale(1)';
            }, 500);
        });

        socialButton.addEventListener('blur', () => {
            socialButton.style.filter = 'grayscale(1)';
            socialButton.style.opacity = '75%';
            socialButton.style.transform = 'scale(1)';
        });
    });

    // This resets the style when the user returns from a tab
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            socialButtons.forEach(socialButton => {
                socialButton.style.filter = 'grayscale(1)';
                socialButton.style.opacity = '75%';
                socialButton.style.transform = 'scale(1)';
            });
        }
    });

    // This resets the style when the user leaves the tab
    window.addEventListener('beforeunload', () => {
        socialButtons.forEach(socialButton => {
            socialButton.style.filter = 'grayscale(1)';
            socialButton.style.opacity = '75%';
            socialButton.style.transform = 'scale(1)';
        });
    });
}

// This is handling local storage opt-out, checking for a local storage items that 
// are created by the site and erasing them after users click the text on the privacy page
// indicating they want to opt out of local storage
document.addEventListener('DOMContentLoaded', function() {
    function storageWipe(event) {
        if(localStorage.getItem('theme') || localStorage.getItem('clickHist')) {
            localStorage.removeItem('theme');
            localStorage.removeItem('clickHist');
            // Display a popup that history was cleared.
            alert('Local storage history cleared.');
        } else {
            alert('No theme or click history data in Local Storage.');
        }
    }

    if(document.querySelector('#lsWipe')) {
        document.querySelector('#lsWipe').addEventListener('click', storageWipe, false);
    }
});

// These are variables for the below functions that handle link buttons on the links page.
const links = document.querySelectorAll('.link-menu-div');
const linksSub = document.querySelectorAll('.link-submenu-div');

// This handles button behavior on my links page. The first if checks for
// the user using a device with a fine poiner(not a touchscreen device), and then sets
// some constants.
if (window.matchMedia("(pointer: fine)").matches) {
    const hoverStyle = {
        transform: 'scale(1.06) translateX(-47.5%)',
        transition: 'all .2s',
        backgroundColor: 'var(--link-button-hover-color)'
    };
    const defaultStyle = {
        transform: 'scale(1) translateX(-50%)',
        transition: 'all .2s',
        backgroundColor: 'var(--menu-pill-color)'
    };
    const clickStyle = {
        transform: 'scale(1) translateX(-50%)',
        transition: 'all .01s',
    };

// This is where it listens for different mouse events and changes
// style based on those events
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            Object.assign(link.style, hoverStyle);
        });

        link.addEventListener("mouseout", () => {
            Object.assign(link.style, defaultStyle);
        });

        link.addEventListener("mousedown", () => {
            Object.assign(link.style, clickStyle);
        });
    });

    linksSub.forEach(link => {
        link.addEventListener("mouseover", () => {
            Object.assign(link.style, hoverStyle);
        });

        link.addEventListener("mouseout", () => {
            Object.assign(link.style, defaultStyle);
        });

        link.addEventListener("mousedown", () => {
            Object.assign(link.style, clickStyle);
        });
    });
}

//These are variables for the below functions that handle the more/less button on the links page
const linksMore = document.getElementById('links-more-button');
const linksMoreDiv = document.getElementById('link-more');

//This sets the initial state of the more links div to none
if(linksMore) {
    linksMoreDiv.style.display = 'none';

    //This handles the more/less button on the links page. It checks for a pointerdown event
    //and then checks the current state of the linksMoreDiv. If it's none, it sets it to grid
    //and changes the button text to less. If it's not none, it sets it to none and changes
    //the button text to more. It also prevents default behavior like text selection and
    //smoothly scrolls back to the current scroll position.
    linksMore.addEventListener('pointerdown', () => {
        const currentScroll = window.scrollY; // Get current scroll position

        if (linksMoreDiv.style.display === 'none') {
            linksMoreDiv.style.display = 'grid';
            linksMore.innerHTML = '<p>Less &uarr;</p>';
        } else {
            linksMoreDiv.style.display = 'none';
            linksMore.innerHTML = '<p>More &darr;</p>';
            window.scrollTo({ top: currentScroll, behavior: 'smooth' }); // Smoothly adjust scroll
        }
    });
}

//Declaring variables for the footer and content
let footer = document.querySelector('#footer');
let content = document.querySelector('.main-box');
let footerP = document.querySelector('#footer p');
let footerLink = document.querySelector('#footer a');

//Need to check anytime the webpage changes, or scroll(need to look into this)
//If overlap == true, do something that makes the footer more visible

function footerOverlap() {
  //Declaring the space footer and content live in, and what an overlap is
  let footerSpace = footer.getBoundingClientRect();
  let contentSpace = content.getBoundingClientRect();
  let overlap = (
    footerSpace.right > contentSpace.left &&
    footerSpace.top < contentSpace.bottom);

  //Check if there is an overlap, add the background and blur or else make sure it isn't there
  if(overlap) {
    footer.style.backgroundColor = 'var(--menu-pill-color)';
    footer.style.backdropFilter = 'var(--foot-backdrop-filter)';
    footerP.style.color = 'var(--font-color)';
    footerLink.style.color = 'var(--cont-color)';
  } else {
    footer.style.backgroundColor = 'transparent';
    footer.style.backdropFilter = 'none';
    //footerP.style.color = '#e2e6eb';
    //footerLink.style.color = '#e2e6eb';
  }
}

//Initialize footerOverlap
footerOverlap();

// Check for overlap when the page loads
window.addEventListener('load', footerOverlap);

//Listen for window resize or scroll and then run footerOverlap
window.addEventListener('resize', footerOverlap);
window.addEventListener('scroll', footerOverlap);

// Set up a MutationObserver to detect changes in the content
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
            footerOverlap();
        }
    });
});

// Start observing the content element for changes
observer.observe(content, {
    childList: true,
    subtree: true
});

function preventScroll(event) {
    event.preventDefault(); // Prevent the default scrolling behavior
    event.stopPropagation(); // Stop the event from propagating further
}

// Function to disable scrolling
function disableScroll() {
    window.addEventListener('wheel', preventScroll, { passive: false }); // For mouse wheel
    window.addEventListener('touchmove', preventScroll, { passive: false }); // For touch devices
    window.addEventListener('keydown', preventKeyScroll, { passive: false }); // For keyboard scrolling
}

// Function to enable scrolling
function enableScroll() {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    window.removeEventListener('keydown', preventKeyScroll);
}

// Prevent scrolling via keyboard keys
function preventKeyScroll(event) {
    const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'];
    if (keys.includes(event.key)) {
        event.preventDefault();
    }
}

//Fullscreening Photography Portfolio images
function getPics() {}
const photogImages = document.querySelectorAll('.photo-portfolio-images');
const fullPage = document.querySelector('#fullpage');

if(fullPage) {
    photogImages.forEach(img => {
        img.addEventListener('click', function() {
            fullPage.style.backgroundImage = 'url(' + img.src + ')';
            fullPage.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            disableScroll();
        });
    });

    fullPage.addEventListener('click', () => {
        fullPage.style.display = 'none'; // Hide the #fullpage container
        document.body.style.overflow = ''; // Re-enable scrolling
        document.documentElement.style.overflow = ''; // Re-enable scrolling
        enableScroll();
    });
}