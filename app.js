class links {
  constructor(name, title, subTitle, text, Image) {
    this.name = name;
    this.title = title;
    this.subTitle = subTitle;
    this.text = text;
    this.Image = Image;
  }
}
const divWrapper = document.createElement("div");
const avatarImage = document.createElement("img");
const title = document.createElement("h3");
const subTitle = document.createElement("h5");
const text = document.createElement("p");
const ul = document.createElement("ul");

Image.src;
Image.witdh;
Image.height;

const linkText = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = linkText[i];
  li.appendChild(a);
  ul.appendChild(li);
}

divWrapper.append(avatarImage, title, subTitle, text, ul);
document.body.appendChild(divWrapper);
