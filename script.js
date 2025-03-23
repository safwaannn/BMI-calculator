// Query Selectors
const height1 = document.querySelector(".height1");
const height2 = document.querySelector(".height2");
const weight1 = document.querySelector(".weight1");
const weight2 = document.querySelector(".weight2");
const Btn = document.querySelector(".click");
const result = document.querySelector(".result");

// BMI Calculation Function
const BmiCalc = (mass, height) => mass / height ** 2;
Btn.addEventListener("click", function () {
  // Convert inputs to numbers
  const w1 = parseFloat(weight1.value);
  const h1 = parseFloat(height1.value);
  const w2 = parseFloat(weight2.value);
  const h2 = parseFloat(height2.value);

  // Validate Inputs
  if (
    isNaN(w1) ||
    isNaN(h1) ||
    isNaN(w2) ||
    isNaN(h2) ||
    w1 <= 0 ||
    h1 <= 0 ||
    w2 <= 0 ||
    h2 <= 0
  ) {
    result.innerHTML = "⚠️ Please enter valid positive numbers!";
    return;
  }

  // Calculate BMI
  const user1 = BmiCalc(w1, h1).toFixed(2);
  const user2 = BmiCalc(w2, h2).toFixed(2);

  // Compare BMIs
  let message;
  if (user1 > user2) {
    message = `🧑 User 1 BMI: <span class="text-blue-500">${user1}</span> is higher than User 2 BMI:<span class="text-blue-500">${user2}</span>`;
  } else if (user2 > user1) {
    message = `🧑‍🦱 User 2 BMI: <span class="text-purple-500">${user2}</span> is higher than User 1 BMI:<span class="text-blue-500">${user1}</span>`;
  } else {
    message = `Both users have the same BMI of <span class="text-green-500">${user1}</span> 😲`;
  }

  // Display Result
  result.innerHTML = message;
  result.classList.remove("opacity-0");
});
