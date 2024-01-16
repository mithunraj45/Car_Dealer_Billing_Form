const carModels = {
    "Polo Trendline": 870000,
    "Polo Highline": 1009000,
    "Virtus Trendline": 1105000,
    "Virtus Highline": 1308000,
    "Taigun Trendline": 1489000,
    "Taigun Highline": 1542000,
    "Taigun Topline": 1771000
};

const additionalCosts = {
    "RTO": 113990,
    "Insurance": 47300,
    "TCS charges": 11000,
    "Additional Accessories": 15000
};

function calculateTotal() {
    const carModelSelect = document.getElementById("carModel");
    const selectedCarCost = carModels[carModelSelect.value];

    const insuranceCheckbox = document.getElementById("insuranceCheckbox");
    const accessoriesCheckbox = document.getElementById("accessoriesCheckbox");
    const dealerDiscountInput = document.getElementById("dealerDiscount");
    const errorMessage = document.getElementById("errorMessage");
    const totalCostDisplay = document.getElementById("totalCost");

    // Form validation
    if (!(insuranceCheckbox.checked || accessoriesCheckbox.checked) && dealerDiscountInput.value > 0) {
        alert("Any one of the additional features have to be added");
        return;
    }

    // Reset error message
    errorMessage.textContent = "";

    // Calculate total cost
    let totalCost = selectedCarCost + additionalCosts["RTO"] + additionalCosts["TCS charges"];

    if (insuranceCheckbox.checked) {
        totalCost += additionalCosts["Insurance"];
    }

    if (accessoriesCheckbox.checked) {
        totalCost += additionalCosts["Additional Accessories"];
    }

    let dealerDiscount = parseInt(dealerDiscountInput.value) || 0;
    
    if (dealerDiscount > 30000) {
        dealerDiscount = 30000;
        alert("Maximum discount to be applied should not cross 30,000. Only 30,000 will be applied as a discount.");
    }

    totalCost -= dealerDiscount;

    // Display total cost in the form
    totalCostDisplay.textContent = `Total Cost: ₹${totalCost.toLocaleString()}`;
}

// Dynamically generate car model options
document.addEventListener("DOMContentLoaded", function() {
    const carModelSelect = document.getElementById("carModel");

    for (const model in carModels) {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        carModelSelect.appendChild(option);
    }
});
