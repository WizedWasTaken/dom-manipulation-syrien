function opgave1() {
  let menuElement = document.querySelector("#menu");
  console.dir(menuElement);
}

function opgave2() {
  let activeElement = document.querySelector(".active");
  console.dir(activeElement);
}

function opgave3() {
  let headingOneElementsFromHTML = document.querySelectorAll("h1");
  console.dir(headingOneElementsFromHTML);
}

function opgave4() {
  let paragraphElementsFromHTML = document.querySelectorAll("p");
  console.dir(paragraphElementsFromHTML);
}

function opgave5() {
  let imageElements = document.querySelectorAll("img");
  imageElements.forEach((imageElement) => {
    imageElement.alt = "Billedet er underlagt copyright";
  });
}

function opgave6() {
  let firstHeadingElement = document.querySelector("h1");
  firstHeadingElement.textContent = "Overskriften er udskiftet";
}

function opgave7() {
  let headingElements = document.querySelectorAll("h1");
  headingElements.forEach((headingElement) => {
    headingElement.classList.add("title");
  });
}

function opgave8() {
  let listItems = document.querySelectorAll("li");
  console.dir(listItems);
}

function opgave9() {
  let playgroundElement = document.querySelector("#playground");

  let unorderedListElement = document.createElement("ul");

  for (let i = 0; i < 3; i++) {
    let listItemElement = document.createElement("li");
    listItemElement.textContent = `${i + 1}`;
    unorderedListElement.appendChild(listItemElement);
  }

  playgroundElement.appendChild(unorderedListElement);
}

function opgave10() {
  let imageElements = document.querySelectorAll("img");

  let nextImageParent = imageElements[1].parentNode;
  for (let i = 0; i < imageElements.length; i++) {
    let currentImage = imageElements[i];
    let nextImage = imageElements[i + 1];

    if (nextImage != undefined) {
      console.log("True: " + i);
      console.log(nextImage);
      nextImageParent = nextImage.parentNode;
      console.log("nextImageParent: ", nextImageParent);
      nextImageParent.insertBefore(currentImage, nextImage);
    } else {
      nextImage = imageElements[i - 1];
      console.log("False: " + i);
      console.log(nextImage);

      nextImage.parentNode.insertBefore(nextImage, currentImage);
      currentImage.remove();
    }

    // imageElements = document.querySelectorAll("img");
  }
}

opgave10();
