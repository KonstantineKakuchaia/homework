/*პირველი დავალება*/ //////////////////////////////////////////////////

function powerNum(x, n, cb) {
  if (n === 1) return x;
  return cb(x, powerNum(x, n - 1, cb));
}

console.log(
  powerNum(5, 3, (x, result) => {
    return x * result;
  })
);

/* მეორე დავალება */ ///////////////////////////////////////////////////

async function reciveData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const useData = await response.json();
    blog(useData);
    const copiedData = await deepCopyObject(useData);
    console.log(copiedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

reciveData();

function blog(data) {
  const blogs = document.createElement("div");
  data.map((element) => {
    const paragraph = document.createElement("div");
    const title = document.createElement("h2");
    const article = document.createElement("p");

    paragraph.append(title, article);

    blogs.appendChild(paragraph);
    blogs.classList = "blogList";

    document.body.appendChild(blogs);

    title.innerHTML = element.id + ". " + element.title;
    article.innerHTML = element.body;

    paragraph.classList = "paragraph";
    paragraph.id = element.id;
  });
}

async function deepCopyObject(input) {
  if (typeof input !== "object" || input === null) {
    throw new Error("არგუმენტი ობიექტია");
  }

  const copiedObject = JSON.parse(JSON.stringify(input));

  return copiedObject;
}

reciveData();
