const list = document.querySelector("#book-list ul");

//delete books
list.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const deleteLi = e.target.parentElement;
    list.removeChild(deleteLi);
  }
});

//add books
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.querySelector("input[type='text']").value;
  if (!value) {
    return false;
  }

  //create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBrn = document.createElement("span");

  //add content
  deleteBrn.textContent = "delete";
  bookName.textContent = value;

  //add classess
  deleteBrn.classList.add("delete");
  bookName.classList.add("name");

  //append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBrn);

  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector("#add-book #hide");
hideBox.addEventListener("change", (e) => {
  hideBox.checked
    ? (list.style.display = "none")
    : (list.style.display = "block");
});

//filter books
const searchBar =
  document.forms["search-books"].querySelector('input[type="text"]');

searchBar.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent.toLowerCase();
    title.indexOf(term) !== -1
      ? (book.style.display = "block")
      : (book.style.display = "none");
  });
});

//tabbed content
const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const targetId = e.target.getAttribute("data-target");
    console.log(targetId)

    // Remove the "active" class from all tabs
    tabs.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });

    // Remove the "active" class from all panels
    document.querySelectorAll(".panel").forEach((panel) => {
      panel.classList.remove("active");
    });

    // Add the "active" class to the clicked tab and its related panel
    e.target.classList.add("active");
    const targetPanel = document.querySelector(targetId);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  }
});
