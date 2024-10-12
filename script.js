// Function to toggle the display of the selected unit's details
function toggleDetails(unitId) {
    // Get all unit options
    const unitOptions = document.querySelectorAll('.unit-option');
    
    // Loop through each unit option and manage the visibility
    unitOptions.forEach(unit => {
        const details = unit.querySelector('.size-color-selection');
        
        // Show the details for the selected unit, hide others
        if (unit.id === unitId) {
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block"; // Show the selected unit details
            } else {
                details.style.display = "none"; // Hide if already open
            }
        } else {
            details.style.display = "none"; // Hide the other unit details
        }
    });
}

// Add event listeners for each unit option
document.getElementById('one-unit').addEventListener('click', function () {
    toggleDetails('unit1');
});

document.getElementById('two-units').addEventListener('click', function () {
    toggleDetails('unit2');
});

document.getElementById('three-units').addEventListener('click', function () {
    toggleDetails('unit3');
});

// Set initial state
document.querySelectorAll('.size-color-selection').forEach(function (element) {
    element.style.display = 'none'; // Hide all details by default
});

// Update total price based on unit selection
document.getElementById('bogo-form').addEventListener('change', function () {
    const unitValue = document.querySelector('input[name="unit"]:checked').value;
    let totalPrice = 0;

    if (unitValue === '1') {
        totalPrice = 10.00;
    } else if (unitValue === '2') {
        totalPrice = 18.00;
    } else if (unitValue === '3') {
        totalPrice = 24.00;
    }

    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)} USD`;
});
