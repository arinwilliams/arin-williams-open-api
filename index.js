
//console.log("hello!")

/*const baseURL = "https://api.sampleapis.com/coffee/iced";
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => {
    const coldCoffeeImageUrl = data[0].url;
    const coldCoffeeImage = document.createElement("img");
    coldCoffeeImage.src = coldCoffeeImageUrl
  }); */
/*
const coffeeContainer = document.getElementById("coldDrinkContainer")
const fetchColdBtn =document.getElementById("fetchColdCoffee")
console.log(fetchColdBtn)

  const baseURL = "https://api.sampleapis.com/coffee/iced";
  fetch(baseURL)
    .then(resp => resp.json())
    .then(data => console.log(data));
    */
  
const icedOrHotContainer = document.getElementById("icedOrHotContainer");
const fetchIcedBtn = document.getElementById("icedContainer");
const fetchHotBtn = document.getElementById("hotContainer");

fetchIcedBtn.addEventListener("click", () => 
    fetch("https://api.sampleapis.com/coffee/iced")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Invalid Request");
        }
        return res.json();
    })
.then( (data) => {
    //clear out previous cold drink
    icedOrHotContainer.innerHTML = "";

const icedImgURL = data[0].url;
const icedImg = document.createElement("img");
icedImg.src = icedImgURL; 

const icedDrinkName = data[0].title
const icedDrinkTitle = document.createElement("h2");
icedDrinkTitle.innertext = title;

// Append the created elements to the container
icedOrHotContainer.appendChild(icedImg);
icedOrHotContainer.appendChild(icedDrinkTitle);

})

.catch((error) => {
  console.error("Error fetching iced coffee data:", error);

})
)