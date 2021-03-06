    // Create Dino Array
  const dinosArray =  [
      {
          "species": "Triceratops",
          "weight": 13000,
          "height": 114,
          "diet": "herbavor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "First discovered in 1889 by Othniel Charles Marsh"
      },
      {
          "species": "Tyrannosaurus Rex",
          "weight": 11905,
          "height": 144,
          "diet": "carnivor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "The largest known skull measures in at 5 feet long."
      },
      {
          "species": "Anklyosaurus",
          "weight": 10500,
          "height": 55,
          "diet": "herbavor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "Anklyosaurus survived for approximately 135 million years."
      },
      {
          "species": "Brachiosaurus",
          "weight": 70000,
          "height": "372",
          "diet": "herbavor",
          "where": "North America",
          "when": "Late Jurasic",
          "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
      },
      {
          "species": "Stegosaurus",
          "weight": 11600,
          "height": 79,
          "diet": "herbavor",
          "where": "North America, Europe, Asia",
          "when": "Late Jurasic to Early Cretaceous",
          "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
      },
      {
          "species": "Elasmosaurus",
          "weight": 16000,
          "height": 59,
          "diet": "carnivor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
      },
      {
          "species": "Pteranodon",
          "weight": 44,
          "height": 20,
          "diet": "carnivor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
      },
      {
          "species": "Pigeon",
          "weight": 0.5,
          "height": 9,
          "diet": "herbavor",
          "where": "World Wide",
          "when": "Holocene",
          "fact": "All birds are living dinosaurs."
      }
  ]

//Object.values(dinos)

// Create Dino Constructor
function Dino (species, weight, height, diet, where, when, fact, name) {
this.species =  species;
this.weight = weight;
this.height = height;
this.diet = diet;
this.where = where;
this.when = when;
this.fact = fact;
this.name = "";
//this.image="images/" + species + '.png';


}


//Create dino Objects for each dinosaur
const dinos = dinosArray.map(dino => new Dino
  (

    dino.species,
    dino.weight,
    dino.height,
    dino.diet,
    dino.where,
    dino.when,
    dino.fact,

 )
  )


    // Create Human Object
//Obtain human data from form

    function getHuman() {
      let humanName = document.getElementById('name').value;
      let feet = parseFloat(document.getElementById('feet').value);
      let inches = parseFloat(document.getElementById('inches').value);
      let humanHeight = (feet * 12) + inches;
      let humanWeight = parseFloat(document.getElementById('weight').value);
      let humanDiet = document.getElementById('diet').value;


      // create human constructor to compare with dino
            class HumanObject {
          constructor(species, weight, height, diet, where, when, fact, name) {
            this.species= "human";
            this.weight = weight;
            this.height = height;
            this.diet = diet;
            this.where = "";
            this.when = "";
            this.fact = "";
            this.name = name;
          }
        }

      //create variable to save human data into for comparison

      const human = new HumanObject("", humanWeight, humanHeight, humanDiet, "", "", "", humanName);

      return human;
    };

let humanData;





    // Create Dino Compare  Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function (humanInfo) {
    if (humanData.height < this.height) {
      return this.species + " is taller than you";
    }
    else {
      return this.species + " is shorter than you";
    }

};


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareWeight = function  (humanInfo) {
        if (humanData.weight < this.weight){
          return this.species + " is heaiver than you";
        }
        else {
          return this.species + " is not heavier than you";
        }
};

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

  Dino.prototype.compareDiet = function (humanInfo) {
      if (humanData.diet !== this.diet) {
        return this.species + " does not share the same diet as you";
      }
      else {
        return this.species + " shares the same diet as you";
      }
  };

//Return random fact
  Dino.prototype.randomFact = function (humanInfo){

    return this.fact;
};


  // Generate Tiles for each Dino in Array
function generateTiles () {
const grid = document.getElementById('grid')


    dinos.forEach(compare)


      function compare(dinos, index) {
        if (index === 4) {
          grid.innerHTML += `
          <div class="grid-item">
           <h3>${dinos.name}</h3>
           <img src="./images/${dinos.species}.png" alt="${dinos.species} image" />`
        }
        else {
          //Pigeon must always return fact
          //Other Dinos can return a random "fact"/"Comnpare"
          const randomNumber = dinos.species === 'Pigeon' ? 2 : Math.round(Math.random() * 5);

          switch (randomNumber) {
              case 0:
                  fact = `The ${dinos.species} lived in ${dinos.where}.`;
                  break;
              case 1:
                  fact = `The ${dinos.species} lived in the ${dinos.when} period.`;
                  break;
              case 2:
                  fact = dinos.fact;
                  break;
              case 3:
                  fact = dinos.compareWeight(humanData.weight);
                  break;
              case 4:
                  fact = dinos.compareHeight(humanData.height);
                  break;
              case 5:
                  fact = dinos.compareDiet(humanData.diet);
                  break;
              default:
                  fact = ' ';
          }

        // const { species,weight,diet,height,where,when,fact } = info;
        const comparingDiet = dinos.compareDiet(humanData.diet);
        const comparingWeight = dinos.compareWeight(humanData.weight);
        const comparingHeight = dinos.compareHeight(humanData.height);
        const giveRandomFact = dinos.randomFact(humanData.fact);

// Add tiles to DOM
// Conditional (ternary) operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//the "fact" in <p> relates to fact in switch and case above
grid.innerHTML += `
<div class="grid-item">
 <h3>${dinos.species}</h3>
 <img src="./images/${dinos.species}.png" alt="${dinos.species} image" />

 <p>${fact}

 </p>

</div>
`;
}}}

// <img src="${dino.species}.png" alt="${dino.species} image" />


// Remove form from screen

  document.getElementById('btn').addEventListener('click', function (){
  humanData = getHuman();
  //Add human to the middle of dino Array
dinos.splice(4,0, humanData);
  generateTiles();
  document.getElementById("dino-compare").style.display = "none";
})

// On button click, prepare and display infographic
