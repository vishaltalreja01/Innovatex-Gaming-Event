// header -> nav toggle (button & scroll) Starts
const toggleNav = (e, navId, className) => {
    let nav = document.getElementById(navId);

    let openNav = () => {
        e.classList.add(className);
        nav.classList.add(className);
        document.body.classList.add('prevent-scroll');
    }

    let closeNav = () => {
        e.classList.remove(className);
        nav.classList.remove(className);
        document.body.classList.remove('prevent-scroll');
    }

    if (e.classList.contains(className)) {
        closeNav();
    } else {
        openNav();
    }

    window.addEventListener('scroll', () => {
        if (e.classList.contains(className) || nav.classList.contains(className)) {
            closeNav();
        }
    });
}

// header -> hide on bottom
const mainHeader = document.getElementById('mainHeader');

window.addEventListener('scrollend', () => {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        return mainHeader.classList.add('hide');
    }

    mainHeader.classList.remove('hide');
});

window.addEventListener('resize', () => {
    mainHeader.classList.remove('hide');
});
// header -> nav toggle (button & scroll) End



//Google Translate Funciton code starts here
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({}, 'google_translate_element');

//     setTimeout(function () {
//         var selectElement = document.querySelector(".goog-te-combo");
//         if (selectElement) {
//             selectElement.value = "en";
//             var event = new Event("change");
//             selectElement.dispatchEvent(event);
//         }
//     }, 1000);
// }

// Function to initialize Google Translate
function googleTranslateElementInit() {
    // Load the TranslateElement
    new google.translate.TranslateElement({}, 'google_translate_element');

    // Set a timeout to wait for the translation elements to be fully loaded
    setTimeout(function () {
        // Get the language select element
        var selectElement = document.querySelector(".goog-te-combo");

        // Check if a language is stored in local storage
        var storedLanguage = localStorage.getItem("selectedLanguage");

        // If a language is stored, set the select element to that language
        if (storedLanguage) {
            selectElement.value = storedLanguage;
            var event = new Event("change");
            selectElement.dispatchEvent(event);
        }

        // Add an event listener to the select element to store the selected language
        selectElement.addEventListener("change", function () {
            var selectedLanguage = selectElement.value;
            localStorage.setItem("selectedLanguage", selectedLanguage);
        });
    }, 1000);
}

//Google Translate Funciton code End here




// Partners Logo Slider code starts here
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
// Partners Logo Slider code end here


// Slider code starts here
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 3000; // Adjust the interval time in milliseconds

function showSlides() {
    const track = document.querySelector('.slider-track');
    const slideWidth = slides[0].clientWidth;

    // Move the track to show the current set of slides
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 4;
    showSlides();
}

function nextSlide() {
    currentIndex = (currentIndex < totalSlides - 4) ? currentIndex + 1 : 0;
    showSlides();
}

function autoSlide() {
    nextSlide();
}

setInterval(autoSlide, intervalTime); // Automatic sliding every 'intervalTime' milliseconds

showSlides();
// Slider code end here
