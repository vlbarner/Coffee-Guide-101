"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var coffee_name = document.querySelector(".coffee_name");
  var coffee_filling = document.querySelector(".filling.reset");
  var buttons = document.querySelectorAll("button");
  var current_element = null;

  var changeCoffeeType = function changeCoffeeType(selected) {
    if (!coffee_name || !coffee_filling) return;
    console.log("Changing coffee type to:", selected.innerText);

    if (current_element) {
      current_element.classList.remove("selected");
      coffee_filling.classList.remove(current_element.id);
    }

    current_element = selected;
    coffee_filling.classList.add(current_element.id);
    current_element.classList.add("selected");
    coffee_name.innerText = selected.innerText;
  };

  var resetCup = function resetCup() {
    if (!coffee_name || !coffee_filling) return;
    console.log("Resetting cup");
    coffee_name.textContent = 'Choose your coffee';
    var fillingElements = document.querySelectorAll('.filling.reset > div');
    fillingElements.forEach(function (element) {
      element.style.height = '0';
      element.style.bottom = '-100%';
    });
    coffee_filling.className = 'filling reset';
    coffee_filling.style.setProperty('--water-bottom', '');
    coffee_filling.style.setProperty('--coffee-bottom', '');
    coffee_filling.style.setProperty('--milk-bottom', '');
    coffee_filling.style.setProperty('--steamed_milk-bottom', '');
    coffee_filling.style.setProperty('--milk_foam-bottom', '');
    coffee_filling.style.setProperty('--grappa-bottom', '');
    coffee_filling.style.setProperty('--chocolate-bottom', '');
    coffee_filling.style.setProperty('--whipped_cream-bottom', '');
    var steamElements = document.querySelectorAll('.steam');
    steamElements.forEach(function (element) {
      element.style.display = 'none';
    });

    if (current_element) {
      current_element.classList.remove("selected");
      current_element = null;
    }
  };

  buttons.forEach(function (button) {
    if (button.id === 'reset') {
      button.addEventListener("click", resetCup);
    } else {
      button.addEventListener("click", function (event) {
        return changeCoffeeType(event.target);
      });
    }
  });
});
//# sourceMappingURL=script.dev.js.map
