let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    if (display.innerText === "This is a Basic Calculator") {
      display.innerText = "";
    }
    switch (e.target.innerText) {
      case "CE":
        display.innerText = "";
        break;
      case "C":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
