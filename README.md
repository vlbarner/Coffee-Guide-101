Here's the HTML code with added documentation comments:

```html
<!-- 
  Coffee Selection and Display Section
  
  Purpose:
  This section provides a user interface for selecting different types of coffee
  and displays a visual representation of the chosen coffee in a cup.

  Components:
  1. Options: Buttons for selecting various coffee types and resetting the selection.
  2. Container: Displays the coffee cup with its contents and steam effects.

  Usage:
  Users can click on the coffee buttons to see a visual representation of the selected
  coffee in the cup below. The reset button clears the current selection.
-->

<!-- Coffee selection options -->
<div class="options">
  <button id="americano">Americano</button>
  <button id="au_lait">Au lait</button>
  <button id="capuccino">Capuccino</button>
  <button id="corretto">Corretto</button>
  <button id="espresso">Espresso</button>
  <button id="latte">Latte</button>
  <button id="lungo">Lungo</button>
  <button id="macchiato">Macchiato</button>
  <button id="mocha">Mocha</button>
  <button id="ristretto">Ristretto</button>
  <button id="reset">Reset</button>
</div>

<!-- Coffee cup display section -->
<div class="container">
  <!-- Steam effect elements -->
  <div class="steam" id="steam1"> </div>
  <div class="steam" id="steam2"> </div>
  <div class="steam" id="steam3"> </div>
  <div class="steam" id="steam4"> </div>

  <!-- Coffee name display -->
  <h1 class="coffee_name">Choose your coffee</h1>

  <!-- Coffee cup visualization -->
  <div class="cup">
    <!-- Coffee ingredients -->
    <div class="filling reset">
      <div class="coffee">Coffee</div>
      <div class="water">Water</div>
      <div class="grappa">Grappa</div>
      <div class="milk">Milk</div>
      <div class="whipped_cream">Whipped cream</div>
      <div class="milk_foam">Milk foam</div>
      <div class="steamed_milk">Steamed milk</div>
      <div class="chocolate">Chocolate</div>
    </div>
    <!-- Cup plate -->
    <div class="plate"></div>
  </div>
</div>
```
