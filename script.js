//your JS code here. If required.
// Get elements
const form = document.querySelector("form");
const fontsizeInput = document.getElementById("fontsize");
const fontcolorInput = document.getElementById("fontcolor");

// Set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");

    if (key === name) {
      return value;
    }
  }

  return null;
}

// Apply saved preferences on page load
window.onload = function () {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize + "px"
    );
    fontsizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );
    fontcolorInput.value = savedFontColor;
  }
};

// Save preferences
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fontSize = fontsizeInput.value;
  const fontColor = fontcolorInput.value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});