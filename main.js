function createProfileCard() {
  const profileData = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    bio: "Front-end developer and avid reader.",
    image: "https://i.pravatar.cc/300",
    links: [
      { text: "GitHub", url: "#" },
      { text: "Frontend Mentor", url: "#" },
      { text: "LinkedIn", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Instagram", url: "#" },
    ],
  };

  const app = document.getElementById("app");

  const card = document.createElement("div");
  card.className = "profile-card";

  const img = document.createElement("img");
  img.src = profileData.image;
  img.alt = profileData.name;
  img.className = "profile-image";
  card.appendChild(img);

  const name = document.createElement("h1");
  name.className = "profile-name";
  name.textContent = profileData.name;
  card.appendChild(name);

  const location = document.createElement("p");
  location.className = "profile-location";
  location.textContent = profileData.location;
  card.appendChild(location);

  const bio = document.createElement("p");
  bio.className = "profile-bio";
  bio.textContent = profileData.bio;
  card.appendChild(bio);

  const linksContainer = document.createElement("div");
  linksContainer.className = "profile-links";

  profileData.links.forEach((link) => {
    const button = document.createElement("button");
    button.className = "profile-link";
    button.textContent = link.text;
    button.onclick = () => window.open(link.url, "_blank");
    linksContainer.appendChild(button);
  });

  card.appendChild(linksContainer);
  app.appendChild(card);
}

document.addEventListener("DOMContentLoaded", createProfileCard);
