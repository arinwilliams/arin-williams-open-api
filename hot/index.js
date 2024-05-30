const coffeeContainer = document.getElementById("coffeeContainer");

function getRandNum(max) {
  return Math.floor(Math.random() * max);
}

fetch("https://api.sampleapis.com/coffee/hot")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Invalid Request");
    }
    return res.json();
  })
  .then((data) => {
    //clear out previous drink
    coffeeContainer.innerHTML = "";

    // Just here to view the data from the API
    console.log(data);

    // Get random coffee drink from the array
    const randIdx = getRandNum(data.length);

    // Create an img tag for coffee
    const imgURL = data[randIdx].image;
    const img = document.createElement("img");
    img.src = imgURL;

    // Create an h2 tag for coffee's title
    const drinkName = data[randIdx].title;
    const h2 = document.createElement("h2");
    h2.innerText = drinkName;

    // Create a p tag for coffee's description
    const description = data[randIdx].description;
    const p = document.createElement("p");
    p.innerText = description;

    

    // Append the created elements to the container
    coffeeContainer.appendChild(img);
    coffeeContainer.appendChild(h2);
    coffeeContainer.appendChild(p);
  })

  .catch((error) => {
    console.error("Error fetching hot coffee data:", error);
  });
