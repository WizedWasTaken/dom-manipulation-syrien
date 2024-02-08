function opgave1() {
  const menuElement = document.querySelector("#menu");
  console.dir(menuElement);
}

function opgave2() {
  const activeElement = document.querySelector(".active");
  console.dir(activeElement);
}

function opgave3() {
  const headingOneElementsFromHTML = document.querySelectorAll("h1");
  console.dir(headingOneElementsFromHTML);
}

function opgave4() {
  const paragraphElementsFromHTML = document.querySelectorAll("p");
  console.dir(paragraphElementsFromHTML);
}

function opgave5() {
  const imageElements = document.querySelectorAll("img");
  imageElements.forEach((imageElement) => {
    imageElement.alt = "Billedet er underlagt copyright";
  });
}

function opgave6() {
  const firstHeadingElement = document.querySelector("h1");
  firstHeadingElement.textContent = "Overskriften er udskiftet";
}

function opgave7() {
  const headingElements = document.querySelectorAll("h1");
  headingElements.forEach((headingElement) => {
    headingElement.classList.add("title");
  });
}

function opgave8() {
  const listItems = document.querySelectorAll("li");
  console.dir(listItems);
}

function opgave9() {
  const playgroundElement = document.querySelector("#playground");

  const unorderedListElement = document.createElement("ul");

  for (let i = 0; i < 3; i++) {
    let listItemElement = document.createElement("li");
    listItemElement.textContent = `${i + 1}`;
    unorderedListElement.appendChild(listItemElement);
  }

  playgroundElement.appendChild(unorderedListElement);
}

// function opgave10() {
//   let imageElements = document.querySelectorAll("img");
//   imageElements[0].src = imageElements[1].src;
//   imageElements[1].src = imageElements[0].src;
// }

function opgave10() {
  const imageElements = document.querySelectorAll("img");
  for (let i = 0; i < imageElements.length; i += 2) {
    // Hvis der er et ulige antal billeder, så vil det sidste billede ikke blive byttet.
    if (i + 1 < imageElements.length) {
      // Opret midlertidige placeholders i DOM'en for at reservere plads til billedbyttet.
      const placeholder1 = document.createElement("div");
      const placeholder2 = document.createElement("div");

      // Find billederne der skal skiftes, samt deres parent element.
      const firstImage = imageElements[i];
      const secondImage = imageElements[i + 1];
      const firstParent = firstImage.parentNode;
      const secondParent = secondImage.parentNode;

      // Put placeholdersne ind i DOM'en for at reservere plads.
      firstParent.insertBefore(placeholder1, firstImage);
      secondParent.insertBefore(placeholder2, secondImage);

      // Skift de 2 billeder ved at flytte dem før vores placeholders.
      firstParent.insertBefore(secondImage, placeholder1);
      secondParent.insertBefore(firstImage, placeholder2);

      // Fjern placeholdersne igen.
      placeholder1.remove();
      placeholder2.remove();
    }
  }
}

function opgave11() {
  const pElements = document.querySelectorAll("#deleteme, #deletemetoo");

  pElements.forEach((pElement) => {
    pElement.remove();
  });
}

opgave10();
