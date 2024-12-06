"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener("DOMContentLoaded", function () {
  var coffee_name = document.querySelector(".coffee_name");
  var coffee_filling = document.querySelector(".filling");
  var buttons = document.querySelectorAll("button");
  var current_element = null;

  var changeCoffeeType = function changeCoffeeType(selected) {
    if (!coffee_name || !coffee_filling) return;
    console.log("Changing coffee type to:", selected.innerText);
    resetCup();
    coffee_filling.dataset.coffeeType = selected.id;
    coffee_filling.classList.add('active');
    current_element = selected;
    current_element.classList.add("selected");
    coffee_name.innerText = selected.innerText;
    updateFilling(selected.id); // Show steam for hot drinks if applicable

    var steamElements = document.querySelectorAll(".steam");
    steamElements.forEach(function (element) {
      element.style.display = selected.dataset.hot === "true" ? "block" : "none";
    });
  };

  var updateFilling = function updateFilling(coffeeType) {
    var fillingTypes = ['chocolate', 'coffee', 'grappa', 'milk', 'milk_foam', 'steamed_milk', 'water', 'whipped_cream'];
    fillingTypes.forEach(function (type) {
      var fillingElement = document.querySelector(".".concat(type));

      if (fillingElement) {
        fillingElement.style.bottom = getComputedStyle(document.documentElement).getPropertyValue("--".concat(type, "-bottom"));
      }
    }); // Set the specific filling for the selected coffee type

    var coffeeAttributes = {
      americano: {
        coffee: '-60%',
        water: '0'
      },
      au_lait: {
        coffee: '-50%',
        milk: '0%'
      },
      capuccino: {
        coffee: '-65%',
        steamed_milk: '-35%',
        milk_foam: '0'
      },
      corretto: {
        coffee: '-45%',
        grappa: '-10%'
      },
      espresso: {
        coffee: '-60%'
      },
      latte: {
        coffee: '-60%',
        steamed_milk: '-20%',
        milk_foam: '0%'
      },
      lungo: {
        coffee: '-50%',
        water: '0'
      },
      macchiato: {
        coffee: '-70%',
        milk_foam: '0'
      },
      mocha: {
        coffee: '-60%',
        chocolate: '-40%',
        steamed_milk: '-20%',
        whipped_cream: '0%'
      },
      ristretto: {
        coffee: '-80%'
      }
    };

    if (coffeeAttributes[coffeeType]) {
      for (var _i = 0, _Object$entries = Object.entries(coffeeAttributes[coffeeType]); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        document.querySelector(".".concat(key)).style.bottom = value;
      }
    }
  };

  var resetCup = function resetCup() {
    if (!coffee_name || !coffee_filling) return;
    console.log("Resetting cup");
    coffee_name.textContent = "Choose your coffee";
    coffee_filling.classList.remove('active');
    coffee_filling.removeAttribute('data-coffee-type');
    var steamElements = document.querySelectorAll(".steam");
    steamElements.forEach(function (element) {
      element.style.display = "none";
    });

    if (current_element) {
      current_element.classList.remove("selected");
      current_element = null;
    } // Reset all fillings


    var fillingTypes = ['chocolate', 'coffee', 'grappa', 'milk', 'milk_foam', 'steamed_milk', 'water', 'whipped_cream'];
    fillingTypes.forEach(function (type) {
      var fillingElement = document.querySelector(".".concat(type));

      if (fillingElement) {
        fillingElement.style.bottom = '100%'; // or any initial position to hide them
      }
    });
  };

  buttons.forEach(function (button) {
    if (button.id === "reset") {
      button.addEventListener("click", resetCup);
    } else {
      button.addEventListener("click", function (event) {
        return changeCoffeeType(event.target);
      });
    }
  });
});
//# sourceMappingURL=script.dev.js.map
