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


  const dinos =  [
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

Object.values(dinos)



    // Create Human Object
    // Use IIFE to get human data from form

     document.getElementById('btn').addEventListener('click', function human() {
      let humanName = document.getElementById('name').value;
      let feet = parseFloat(document.getElementById('feet').value);
      let inches = parseFloat(document.getElementById('inches').value);
      let humanHeight = (feet * 12) + inches;
      let humanWeight = parseFloat(document.getElementById('weight').value);
      let humanDiet = document.getElementById('diet').value;
      const humanData = (humanName, humnanHeight, humanWeight, humanDiet);

return humanData
    });
    console.log(human);


    //Add human to the middle of Array
dinos.splice(4,0, human);
console.log(dinos);



    // Create Dino Compare  Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function () {
    if (human.height < this.height) {
      return this.species + "is taller than you";
    }
    else {
      return this.species + "is shorter than you";
    }

};


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareWeight= function () {
        if (human.weight < this.weight){
          return this.species + "is heaiver than you";
        }
        else {
          return this.species + "is not heavier than you";
        }
};

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet = function () {
        if (human.diet !== this.diet) {
          return this.species + "does not share the same diet as you";
        }
        else {
          return this.species + "shares the same diet as you";
        }
  };
