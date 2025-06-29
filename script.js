const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const includeUpper = document.getElementById("includeUpper");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

generateBtn.addEventListener("click", () => {
  let chars = lower;
  if (includeUpper.checked) chars += upper;
  if (includeNumbers.checked) chars += numbers;
  if (includeSymbols.checked) chars += symbols;

  const length = +lengthEl.value;
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordEl.value = password;
});

copyBtn.addEventListener("click", () => {
  passwordEl.select();
  document.execCommand("copy");
  alert("Password copied!");
});