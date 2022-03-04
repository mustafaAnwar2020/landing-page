//add sections , navs by clicking on btn ,hence it will call specified functions
document.getElementById("btn").addEventListener("click", function () {
  createSection();
  createNav();
});
let count = 0;

//create the basic section with Html
createSection = () => {
  count++;
  const sectionHtml = `
    <section id="section${count}" data-nav="Section ${count}">
      <div class="container">
        <h2>Section ${count}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  `;
  document.querySelector("main").insertAdjacentHTML("beforeend", sectionHtml);
};

//create the navs, more added by adding more sections
const nav = document.getElementById("navbarlist");
createNav = () => {
  nav.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const items = `<li><a href="#${section.id}" data-nav="${section.id}" class="link">${section.dataset.nav}</a></li>`;
    nav.insertAdjacentHTML("beforeend", items);
  });
};

//forloop that calls creatSection() and createNav() functions to make the 4 basic ones
for (i = 0; i < 4; i++) {
  createSection();
  createNav();
}

//smooth scrolling to specific section by clicking on a nav
nav.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

let header = document.querySelector("header");
let topButton = document.getElementById("top");

// if user scrolls below the fold of the page button top will appear ; else it's hidden
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > 1000) {
    topButton.style.visibility = "visible";
  } else {
    topButton.style.visibility = "hidden";
  }
});

// if not scrolling  Wait 2 seconds, and the header will be hidden
// on scroll clear the time of that noScroll and make header visible
let noScroll;
document.onscroll = () => {
  header.style.visibility = "visible";
  clearTimeout(noScroll);
  noScroll = setTimeout(() => {
    header.style.visibility = "hidden";
  }, 2000);
};

//get all sections , get active link by using the id of the section
//add active class to section on view
//add active class to section link
// if section not active remove active class, active link
window.onscroll = () => {
  document.querySelectorAll("section").forEach((element)=> {
    let activeLink = nav.querySelector(`[data-nav=${element.id}]`);
    const rect = element.getBoundingClientRect();
    if (rect.top >= -400 &&rect.top <= 150) {
      element.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      element.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
};
