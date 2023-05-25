// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get all the quantity input elements
    var quantityInputs = document.querySelectorAll(".quantity input[name='name']");

    // Get all the delete buttons
    var deleteButtons = document.querySelectorAll(".delete-btn");

    // Get all the like buttons
    var likeButtons = document.querySelectorAll(".like-btn");

    // Get the total price element
    var totalPriceElement = document.getElementById("total-price");

    // Calculate and update the total price
    function updateTotalPrice() {
      var total = 0;

      // Loop through each item
      var items = document.querySelectorAll(".item");
      items.forEach(function(item) {
        var quantity = parseInt(item.querySelector(".quantity input[name='name']").value);
        var price = parseInt(item.querySelector(".total-price").textContent);

        // Calculate the subtotal for each item
        var subtotal = quantity * price;
        total += subtotal;
      });

      // Update the total price element
      totalPriceElement.textContent = "$" + total;
    }

    // Add event listeners for quantity change
    quantityInputs.forEach(function(input) {
      input.addEventListener("change", updateTotalPrice);
    });

    // Add event listeners for item deletion
    deleteButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var item = button.closest(".item");
        item.parentNode.removeChild(item);
        updateTotalPrice();
      });
    });

    // Add event listeners for item liking
    likeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        button.classList.toggle("liked");
      });
    });
    $('.like-btn').on('click', function() {
        $(this).toggleClass('is-active');
     });


    // Add event listeners for item addition
    var plusButtons = document.querySelectorAll(".plus-btn");
    plusButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var input = button.parentNode.querySelector("input[name='name']");
        var quantity = parseInt(input.value);
        input.value = quantity + 1;
        updateTotalPrice();
      });
    });

    // Add event listeners for item subtraction
    var minusButtons = document.querySelectorAll(".minus-btn");
    minusButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var input = button.nextElementSibling;
        var quantity = parseInt(input.value);
        if (quantity > 0) {
          input.value = quantity - 1;
          updateTotalPrice();
        }
      });
    });

    // Initial calculation of total price
    updateTotalPrice();
  });

