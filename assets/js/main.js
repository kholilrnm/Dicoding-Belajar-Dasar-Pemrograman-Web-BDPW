function myFunction() {
    var x = document.getElementById("myheader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
    
    var x = document.getElementById("mymain");
    if (x.className === "main") {
      x.className += " responsive";
    } else {
      x.className = "main";
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


for (let i = 0; i < 100; i++) {
  const element = document.createElement('h1')

  document.body.appendChild(element)
  if (i === 40) {
    const targetElement = document.createElement('h1')

    targetElement.id = 'home'
    targetElement.classList.add('home')
    document.body.appendChild(targetElement)
  }
  if (i === 50) {
    const targetElement = document.createElement('h1')

    targetElement.id = 'visi-misi'
    targetElement.classList.add('visi-misi')
    document.body.appendChild(targetElement)
  }
  if (i === 60) {
    const targetElement = document.createElement('h1')

    targetElement.id = 'galeri'
    targetElement.classList.add('galeri')
    document.body.appendChild(targetElement)
  }
  if (i === 70) {
    const targetElement = document.createElement('h1')

    targetElement.id = 'umkm'
    targetElement.classList.add('umkm')
    document.body.appendChild(targetElement)
  }
  if (i === 80) {
    const targetElement = document.createElement('h1')

    targetElement.id = 'peta'
    targetElement.classList.add('peta')
    document.body.appendChild(targetElement)
  }
  if (i === 90) {
    const targetElement = document.createElement('h1')

    targetElement.id = 'kontak'
    targetElement.classList.add('kontak')
    document.body.appendChild(targetElement)
  }
}

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.onclick = (e) => {
    e.preventDefault()
    const href = anchor.getAttribute('href')
    const target = document.querySelector(href)
    const to = target.offsetTop
    scrollTo(document.documentElement, to, 2000)
  }
})

const scrollTo = (element, to, duration) => {
  let start = element.offsetTop
  let change = to - start
  let currentTime = 0
  let increment = 20;


  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  }

  animateScroll()
}

const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

let intervalId = 0; 
const $scrollButton = document.querySelector('.scrollup'); 

function scrollStep() {
    
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    
    intervalId = setInterval(scrollStep, 16.66);
}

$scrollButton.addEventListener('click', scrollToTop);


// loader
// var loading = document.getElementById('loading');

// window.addEventListener('load', function() {
//   loading.style.display = "none"

// });