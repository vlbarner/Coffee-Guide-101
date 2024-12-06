document.addEventListener("DOMContentLoaded", () => {
  const coffee_name = document.querySelector(".coffee_name");
  const coffee_filling = document.querySelector(".filling");
  const buttons = document.querySelectorAll("button");
  let current_element = null;

  const changeCoffeeType = (selected) => {
    if (!coffee_name || !coffee_filling) return;
    console.log("Changing coffee type to:", selected.innerText);
    
    resetCup();
    
    coffee_filling.dataset.coffeeType = selected.id;
    coffee_filling.classList.add('active');
    
    current_element = selected;
    current_element.classList.add("selected");
    coffee_name.innerText = selected.innerText;

    updateFilling(selected.id);

    // Show steam for hot drinks if applicable
    const steamElements = document.querySelectorAll(".steam");
    steamElements.forEach((element) => {
      element.style.display = selected.dataset.hot === "true" ? "block" : "none";
    });
  };

  const updateFilling = (coffeeType) => {
    const fillingTypes = ['chocolate', 'coffee', 'grappa', 'milk', 'milk_foam', 'steamed_milk', 'water', 'whipped_cream'];
    fillingTypes.forEach((type) => {
      const fillingElement = document.querySelector(`.${type}`);
      if (fillingElement) {
        fillingElement.style.bottom = getComputedStyle(document.documentElement).getPropertyValue(`--${type}-bottom`);
      }
    });

    // Set the specific filling for the selected coffee type
    const coffeeAttributes = {
      americano: { coffee: '-60%', water: '0' },
      au_lait: { coffee: '-50%', milk: '0%' },
      capuccino: { coffee: '-65%', steamed_milk: '-35%', milk_foam: '0' },
      corretto: { coffee: '-45%', grappa: '-10%' },
      espresso: { coffee: '-60%' },
      latte: { coffee: '-60%', steamed_milk: '-20%', milk_foam: '0%' },
      lungo: { coffee: '-50%', water: '0' },
      macchiato: { coffee: '-70%', milk_foam: '0' },
      mocha: { coffee: '-60%', chocolate: '-40%', steamed_milk: '-20%', whipped_cream: '0%' },
      ristretto: { coffee: '-80%' },
    };

    if (coffeeAttributes[coffeeType]) {
      for (let [key, value] of Object.entries(coffeeAttributes[coffeeType])) {
        document.querySelector(`.${key}`).style.bottom = value;
      }
    }
  };

  const resetCup = () => {
    if (!coffee_name || !coffee_filling) return;
    console.log("Resetting cup");
    coffee_name.textContent = "Choose your coffee";

    coffee_filling.classList.remove('active');
    coffee_filling.removeAttribute('data-coffee-type');

    const steamElements = document.querySelectorAll(".steam");
    steamElements.forEach((element) => {
      element.style.display = "none";
    });

    if (current_element) {
      current_element.classList.remove("selected");
      current_element = null;
    }

    // Reset all fillings
    const fillingTypes = ['chocolate', 'coffee', 'grappa', 'milk', 'milk_foam', 'steamed_milk', 'water', 'whipped_cream'];
    fillingTypes.forEach((type) => {
      const fillingElement = document.querySelector(`.${type}`);
      if (fillingElement) {
        fillingElement.style.bottom = '100%'; // or any initial position to hide them
      }
    });
  };

  buttons.forEach((button) => {
    if (button.id === "reset") {
      button.addEventListener("click", resetCup);
    } else {
      button.addEventListener("click", (event) => changeCoffeeType(event.target));
    }
  });
});


