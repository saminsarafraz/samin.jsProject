let username = "samin_s";
let password = "WebUser1400!";

const url = "http://185.8.174.13";


function toJson(result) {
  return result.json();
}

function creatDropDownAuthor(author) {
  let name;
  let authorsObject;
  let authorName;
  let authorLastName;
  let parentElement = document.querySelector("#author");
  for (i = 0; i < author.length; i++) {
    authorsObject = author[i];
    authorName = authorsObject.first_name;
    authorLastName = authorsObject.last_name;
    name = authorName + authorLastName;
    let newElement = document.createElement("option");
    newElement.innerText = name;
    newElement.setAttribute("value", authorsObject.url);
    newElement.classList.add("margin-top-bottom");
    parentElement.append(newElement);
  }
  return author;
}
function getAuthors() {
  fetch(`${url}/author/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  })
    .then((i) => i.json())
    .then(creatDropDownAuthor);
}
getAuthors();

function creatDropDownGenre(genre) {
  let genreObject;
  let genreName;
  let parentElement = document.querySelector("#genre");
  for (i = 0; i < genre.length; i++) {
    genreObject = genre[i];
    genreName = genreObject.name;
    let newElement = document.createElement("option");
    newElement.innerText = genreName;
    newElement.setAttribute("value", genreObject.url);
    newElement.classList.add("margin-top-bottom");
    parentElement.append(newElement);
  }
  return genre
}

function getGenre() {
  fetch(`${url}/genre/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  })
    .then((i) => i.json())
    .then(creatDropDownGenre);
}
getGenre();

function createBooks() {
  const booksName = document.querySelector("#book-name").value;
  const selectedAuthorUrl = document.querySelector("#author").value;
  const selectedGenreUrl = document.querySelector("#genre").value;
  const isbn = document.querySelector("#isbn").value;
  const description = document.querySelector("#description").value;
  if (booksName == "" || selectedAuthorUrl == "" || selectedGenreUrl == "" || isbn == "" || description == "") {
    document.querySelector("#third-result").innerText = "please enter the value in all input"
  }
  else {
    document.querySelector("#third-result").innerText = ""
    let genreArray = [];
    genreArray.push(selectedGenreUrl)
    const book = {
      title: booksName,
      author: selectedAuthorUrl,
      genre: genreArray,
      isbn: isbn,
      description: description,
    }
    fetch(`${url}/book/`, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    })
      .then(checkStatus)
      .then(toJson)
      .then(checkIsbn)
      .then(getBooks)
  }
}

function checkIsbn(error) {
  if (error.isbn) {
    document.querySelector("#result").innerHTML = error.isbn[0];
  }
}

function checkStatus(res) {
  if (res.status > 399) {
    document.querySelector("#second-result").innerText = "not found";
  } else {
    document.querySelector("#second-result").innerText = "book created!";
  }
  return res;
}

const displayBooks = (books) => {
  let bookOrderList = document.querySelector("ol");
  bookOrderList.innerHTML = ""
  for (let i = 0; i < books.length; i++) {

    const book = books[i];
    let element = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "DELETE";
    button.style.backgroundImage = "linear-gradient(315deg,rgb(148, 218, 241) 0%, #FFF8DC 75%)";
    button.style.marginLeft = "40px";
    button.style.width = "80px";

    button.addEventListener("click", () => {
      fetch(book.url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(username + ":" + password),
        }

      }).then(bookOrderList.innerHTML = " ").then(getBooks).then(bookDeleted)
    });
    element.innerText = book.title;
    element.append(button);
    bookOrderList.append(element);
  }
  return books;
};

function getBooks() {
  fetch(`${url}/book/`)
    .then((r) => r.json())
    .then(displayBooks);
}
getBooks()

function bookDeleted(result) {
  const resultElement = document.querySelector("#result");
  resultElement.innerText = "book deleted!";
}

