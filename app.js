
    // Create Dino Constructor
function Dino (species, weight, height, diet, where, when, fact) {
  this.species =  species
  this.weight = weight
  this.height = height
  this.diet = diet
  this.where = where
  this.when = when
  this.fact = fact
}


    // Create Dino Objects
    // Refactor and use JSON to fetch data
const triceratops = new Dino(
      "Triceratops",
      13000,
      114,
      "herbavor",
      "North America",
      "Late Cretaceous",
      "First discovered in 1889 by Othniel Charles Marsh")

  const trex = new Dino(
      "Tyrannosaurus Rex",
      11905,
      144,
      "carnivor",
      "North America",
      "Late Cretaceous",
      "The largest known skull measures in at 5 feet long.")

      const anklyo = new Dino(
        "Anklyosaurus",
        10500,
        55,
        "herbavor",
       "North America",
        "Late Cretaceous",
        "Anklyosaurus survived for approximately 135 million years.")

      const brachio = new Dino(
        "Brachiosaurus",
        70000,
        372,
        "herbavor",
        "North America",
        "Late Jurasic",
        "An asteroid was named 9954 Brachiosaurus in 1991.")

      const stego = new Dino(
        "Stegosaurus",
        11600,
        79,
        "herbavor",
       "North America, Europe, Asia",
        "Late Jurasic to Early Cretaceous",
        "The Stegosaurus had between 17 and 22 seperate places and flat spines.")

      const elas = new Dino(
       "Elasmosaurus",
        16000,
        59,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Elasmosaurus was a marine reptile first discovered in Kansas.")

      const pteranodon = new Dino(
       "Pteranodon",
        44,
        20,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Actually a flying reptile, the Pteranodon is not a dinosaur.")

      const pigeon = new Dino(
       "Pigeon",
        0.5,
        9,
        "herbavor",
        "World Wide",
        "Holocene",
        "All birds are living dinosaurs.")


    // Create Human Object
    // Use IIFE to get human data from form
    document.getElementById('btn').addEventListener('click', (function userData() {
      let name = document.getElementById('name').value;
      let feet = parseFloat(document.getElementById('feet').value);
      let inches = parseFloat(document.getElementById('inches').value);
      let height = (feet * 12) + inches;
      let weight = parseFloat(document.getElementById('weight').value);
      let diet = document.getElementById('diet').value;
      const humanData = {name, height, weight, diet};
    })();




    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function () {
    if (humanData.height < this.height) {
      return this.species + "is taller than you";
    }
    else {
      return this.species + "is shorter than you";
    }

};


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareWeight= function () {
        if (humanData.weight < this.weight) {
          return this.species + "is heaiver than you";
        }
        else {
          return this.species + "is not heavier than you";
        }
};

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet = function () {
        if (humanData.diet !== this.diet {
          return this.species + "does not share the same diet as you";
        }
        else {
          return this.species + "shares the same diet as you";
        }
  };

    // Generate Tiles for each Dino in Array
    addtiles = () => {
             const humandata= gethumandata();

            const dinodata = dino();

            const results =dino_data.slice(0,4).concat(human_data).concat(dino_data.slice(4,8));

            results.forEach((data) => {
                const { species, image, fact, weight, height, diet } = data;
                //Call the Dino compare method
                const dinoCompareDiet = new Dino(
                    species,
                    weight,diet, height,
                     where, when, fact
                )
                const compareDiett = dinoCompareDiet.compareDiet();
        })
         grid.innerHTML += `
         <div class="grid-item">
             <h3>${species}</h3>
             <img src="${image ? image : ""}" alt="" />
             <p>${fact ? compareDiet : ""} ${weight ? compareDinoWeight : ""}</p>

           </div>
       ;
    }


        // Add tiles to DOM



    // Remove form from screen
    const humanDataForm = document.getElementById('dino-compare');
    function hideFormAndShowGrid() {
        humanDataForm.style.display = "none";
        gridContentContainer.style.display = "flex";
    }

// On button click, prepare and display infographic
const gridContentContainer = document.getElementById('grid');
function appendHTMLContent(htmlContent) {
    gridContentContainer.innerHTML = htmlContent;
}
