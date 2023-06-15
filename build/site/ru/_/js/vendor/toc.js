function createToc(config) {
  const content = config.content;
  const tocElement = config.tocElement;
  const titleElements = config.titleElements;
  content.querySelector(titleElements[0]).classList.add("no-break");

  let tocElementDiv = content.querySelector(tocElement);
  let tocUl = document.createElement("ul");
  tocUl.id = "list-toc-generated";
  tocElementDiv.appendChild(tocUl);

  // Add class to all title elements
  let tocElementNbr = 0;
  for (var i = 0; i < titleElements.length; i++) {
    let titleHierarchy = i + 1;
    let titleElement = content.querySelectorAll(titleElements[i]);

    titleElement.forEach(function(element) {
      if (element.querySelector('a.anchor')) {
        element.querySelector('a.anchor').remove();
      }
      // Add classes to the element
      element.classList.add("title-element");
      element.setAttribute("data-title-level", titleHierarchy);

      // Add id if doesn't exist
      tocElementNbr++;
      idElement = element.id;
      element.id = "title-element-" + tocElementNbr;
    });
  }

  // Create toc list
  let tocElements = content.querySelectorAll(".title-element");

  for (var i = 0; i < tocElements.length; i++) {
    let tocElement = tocElements[i];

    let tocNewLi = document.createElement("li");

    // Add class for the hierarchy of toc
    tocNewLi.classList.add("toc-element");
    tocNewLi.classList.add(
      "toc-element-level-" + tocElement.dataset.titleLevel
    );

    // Keep class of title elements
    let classTocElement = tocElement.classList;
    for (var n = 0; n < classTocElement.length; n++) {
      if (classTocElement[n] != "title-element") {
        tocNewLi.classList.add(classTocElement[n]);
      }
    }

    // Create the element
    tocNewLi.innerHTML =
      '<a href="#' + tocElement.id + '">' + tocElement.innerHTML + "</a>";
    tocUl.appendChild(tocNewLi);
  }
}
