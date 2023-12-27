function calculateAge() {
    let userInput = document.getElementById("date");
    let result = document.getElementById("result");
  
    let birthDate = new Date(userInput.value);
    let today = new Date();
  
    // Calculating the difference in milliseconds
    let diffInMilliseconds = today - birthDate;
  
    // Converting milliseconds to seconds, minutes, hours, and days
    let seconds = Math.floor(diffInMilliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    // Calculating years, months, and remaining days
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30); // Approximation for months
    let remainingDays = days % 365 % 30; // Remaining days
  
    result.innerHTML = `You are <span> ${years} </span> years, <span>${months}</span> months, and <span>${remainingDays}</span> days old`;
  }