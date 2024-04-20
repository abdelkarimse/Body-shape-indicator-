function calculateBMI() {
    // Get the values of height and weight from the input fields
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    // Check if height or weight is not a number, or if they are less than or equal to zero
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      // If any of the conditions are true, display an alert and exit the function
      alert('Please enter valid height and weight.');
      return;
    }
    
    // Calculate BMI using the formula: weight / (height * height)
    var bmi = weight / (height * height);
    console.log(bmi); // Log the calculated BMI to the console
    
    // Define a variable to store the result message
    var result;
    
    // Determine the BMI category based on the calculated BMI value
    if (bmi < 18.5) {
      result = 'You are underweight.';
    } else if (bmi < 25) {
      result = 'You have a normal weight.';
    } else if (bmi < 30) {
      result = 'You are overweight.';
    } else {
      result = 'You are obese.';
    }
    
    // Display the result message in an alert dialog
    window.alert(result);
  }
  