document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate input values
    if (weight > 0 && height > 0) {
        // Calculate BMI
        const bmi = (weight / (height * height)).toFixed(2);

        // Determine BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } 
        else if (bmi >= 30 && bmi <= 34.9) {
            category = 'Obesity';
        } else {
            category = 'Extreme Obesity';
        }

        // Display the result
        const resultBlock = document.getElementById('bmiResult');
        resultBlock.innerHTML = `Your BMI is ${bmi} (${category}).`;
        resultBlock.style.display = 'block';
    } else {
        alert('Please enter valid weight and height values.');
    }
});
