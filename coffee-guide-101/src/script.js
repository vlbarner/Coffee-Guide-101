document.addEventListener("DOMContentLoaded", () => {
  const coffee_name = document.querySelector(".coffee_name");
  const coffee_filling = document.querySelector(".filling.reset");
  const buttons = document.querySelectorAll("button");
  let current_element = null;

  const changeCoffeeType = (selected) => {
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

  const resetCup = () => {
    if (!coffee_name || !coffee_filling) return;
    console.log("Resetting cup");
    coffee_name.textContent = 'Choose your coffee';

    const fillingElements = document.querySelectorAll('.filling.reset > div');
    fillingElements.forEach(element => {
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

    const steamElements = document.querySelectorAll('.steam');
    steamElements.forEach(element => {
      element.style.display = 'none';
    });

    if (current_element) {
      current_element.classList.remove("selected");
      current_element = null;
    }
  };

  buttons.forEach((button) => {
    if (button.id === 'reset') {
      button.addEventListener("click", resetCup);
    } else {
      button.addEventListener("click", (event) => changeCoffeeType(event.target));
    }
  });
});
