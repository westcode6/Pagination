let link = document.getElementsByClassName("link");
let currentLink = 1;

function activeLink() {
  for (l of link) {
    l.classList.remove("active");
  }
  event.target.classList.add("active");
  currentLink = event.target.value;
}

function backBtn() {
  if (currentLink > 1) {
    for (l of link) {
      l.classList.remove("active");
    }

    currentLink--;
    link[currentLink - 1].classList.add("active");
  }
}

function nextBtn() {
  if (currentLink < link.length) {
    for (l of link) {
      l.classList.remove("active");
    }

    currentLink++;
    link[currentLink - 1].classList.add("active");
  }
}
