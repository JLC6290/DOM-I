const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// populate navigation elements

document.querySelector("nav").appendChild(document.createElement("a"));
document.querySelector("nav").prepend(document.createElement("a"));

let navLinks = document.querySelectorAll("a")
navLinks[0].textContent = "prepend";
navLinks[1].textContent = siteContent.nav["nav-item-1"];
navLinks[2].textContent = siteContent.nav["nav-item-2"];
navLinks[3].textContent = siteContent.nav["nav-item-3"];
navLinks[4].textContent = siteContent.nav["nav-item-4"];
navLinks[5].textContent = siteContent.nav["nav-item-5"];
navLinks[6].textContent = siteContent.nav["nav-item-6"];
navLinks[7].textContent = "append";

// populate header
let cta = document.querySelector("h1");
cta.textContent = siteContent.cta["h1"];
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
let button = document.querySelector("button");
button.textContent = siteContent.cta["button"];

//populate main body content
let mainTitles = document.querySelectorAll(".main-content h4");
mainTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainTitles[4].textContent = siteContent["main-content"]["vision-h4"];

let mainContent = document.querySelectorAll(".main-content p");
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// populate contact section
document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
let address = document.querySelectorAll(".contact p");
address[0].textContent = siteContent["contact"]["address"];
address[1].textContent = siteContent["contact"]["phone"];
address[2].textContent = siteContent["contact"]["email"];

// populate footer section
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];


// styling
navLinks.forEach(item => item.style.color = 'green');

// add stuff
document.querySelector("nav").appendChild(document.createElement("a"));

navLinks[6].textContent = "append";
