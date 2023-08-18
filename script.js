const bands = ["The Beatles", "The Rolling Stones", "AC/DC"];

const removeArticles = (bandName) => {
  const articles = ["a", "an", "the"];
  for (const article of articles) {
    bandName = bandName.replace(article, "");
  }
  return bandName;
};

const sortedBands = bands.map(removeArticles).sort();

const ul = document.getElementById("band");
for (const band of sortedBands) {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
}
