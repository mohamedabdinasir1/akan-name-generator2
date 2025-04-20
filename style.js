document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const genderInput = document.querySelector('input[name="Gender"]:checked');
  
    // Validate inputs
    if (!day || !month || !year || !genderInput) {
      alert("Please fill in all fields correctly.");
      return;
    }
  
    if (day < 1 || day > 31 || month < 1 || month > 12 || year > 2025) {
      alert("Invalid date. Please check the values.");
      return;
    }
  
    // Create date object and validate real date
    const dateObj = new Date(`${year}-${month}-${day}`);
    if (isNaN(dateObj.getTime()) || dateObj.getDate() !== day) {
      alert("Invalid date entered.");
      return;
    }
  
    // Get day of the week (0 = Sunday, 6 = Saturday)
    const dayOfWeek = dateObj.getDay();
  
    // Akan names data
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const gender = genderInput.value;
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  
    // Display result
    document.getElementById("result").innerText = 
      `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
  });
  