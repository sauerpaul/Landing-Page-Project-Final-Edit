/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Global Variables

const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar-list');


// Build the Navigation Function

function buildNavigationLinks() {
  // for...of loop to capture array of sections
  for (let sectionAttribute of sections) {
    let sectionID = sectionAttribute.getAttribute('id');
    let sectionData = sectionAttribute.getAttribute('data-nav');

    // Create list items for <ul> element
    const li = document.createElement('li');

    // Add anchor element to list items with section attributes
    li.innerHTML = `<a class='menu-link' href='#${sectionID}'>${sectionData}</a>`;

    // Append list items to #navbar-list
    ul.appendChild(li);
  }
};

// Call the Navigation Function

buildNavigationLinks();


// Section Active State

// Detect Viewport Location

// Highlight Navigation List Items on Scroll

function highlightNavigation() {

  const navigationHighlighting = document.querySelectorAll('li');
  const activeState = document.getElementsByTagName('section');
  const scrollPosition = window.pageYOffset + 55;

  let sectionArrayOne = [];
  let sectionArrayTwo = [];
  
  // for...loop for retrieving the top and bottom bounds of each section
  for (let i = 0; i < sections.length; i++) {
    // Array for the tops of each section
    let topOfArray = sections[i].getBoundingClientRect().top + window.pageYOffset;
    sectionArrayOne[i] = topOfArray;
    // Array for the bottoms of each section
    let bottomOfArray = sections[i].getBoundingClientRect().bottom + window.pageYOffset;
    sectionArrayTwo[i] = bottomOfArray;
  
    if (scrollPosition >= parseInt(topOfArray) && scrollPosition < parseInt(bottomOfArray))
    // Add class="active" to each list item and class="your-active-class" to each section when scrolling through the viewport
    { 
      navigationHighlighting[i].classList.add('active'); // Add active class
      activeState[i].classList.add('your-active-class'); // Add your-active-class
    } else {
      navigationHighlighting[i].classList.remove('active'); // Remove active class
      activeState[i].classList.remove('your-active-class'); // Remove your-active-class
    }
  };
};

// Event Listener for Scroll Highlighting

window.addEventListener('scroll', highlightNavigation);



// Scroll to Section from Navigation Link

const navigationLinks = document.getElementsByClassName('menu-link');

// for...of loop to capture menu-link HTMLCollection
for (let navbarLink of navigationLinks) {
  // Event Listener for Navigation Links
  navbarLink.addEventListener('click', function(e) {

    let scrollToAnchor = navbarLink.getAttribute('href');
    e.preventDefault();
    // Scroll to anchor position using .scrollIntoView method
    document.querySelector(scrollToAnchor).scrollIntoView(
      {
        behavior: 'smooth',
      }
    );
  });
};


// Scroll to Anchor ID using scrollTO Event

const button = document.getElementById('anchor').addEventListener('click', function() {

  // Use window.scrollTo() Method
  window.scrollTo(
    {
      top: 200,
      behavior: 'smooth',
    }
  );
});


// Please disregard this section of code

/*
// Creating Collapsible Sections

const collapseSections = document.getElementsByClassName('landing-container');

// for...loop through <div> elements
for (let i = 0; i < collapseSections.length; i++) {

  // Use classList.toggle() Method - CSS is Provided
  collapseSections[i].addEventListener('click', function() {
    this.classList.toggle('collapse');
  });
};
*/
