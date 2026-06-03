function calculateDailyAllowance() {
    
    const budgetInput = document.getElementById('totalBudget').value;
    const daysInput = document.getElementById('tripDays').value;
    const resultDiv = document.getElementById('budgetResult');
    const totalBudget = parseFloat(budgetInput);
    const tripDays = parseInt(daysInput);

    
    if (isNaN(totalBudget) || isNaN(tripDays) || totalBudget <= 0 || tripDays <= 0) {
        resultDiv.className = "mt-4 p-3 rounded text-center alert alert-danger";
        resultDiv.innerText = "⚠️ Please enter valid numbers for budget and days.";
        resultDiv.classList.remove('d-none');
        return;
    }

    const dailyAllowance = totalBudget / tripDays;
    resultDiv.classList.remove('d-none');
    

    if (dailyAllowance < 50) {
        resultDiv.className = "mt-4 p-3 rounded text-center alert alert-warning";
        resultDiv.innerHTML = `Daily Allowance: <strong>$${dailyAllowance.toFixed(2)}</strong><br>⚠️ Budget is lean! Consider cheaper lodging or shorter stays.`;
    } else {
        resultDiv.className = "mt-4 p-3 rounded text-center alert alert-success";
        resultDiv.innerHTML = `Daily Allowance: <strong>$${dailyAllowance.toFixed(2)}</strong><br>✅ Great profile! Plenty for local transit and travel logistics.`;
    }
}

        
   