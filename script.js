//1+2
    const outer = document.getElementById("outer");
    const middle = document.getElementById("middle");
    const inner = document.getElementById("inner");

    outer.addEventListener("click", () => {
      console.log("Клик по outer");
    });

    middle.addEventListener("click", (event) => {
      console.log("Клик по middle");
      event.stopPropagation(); 
    });

    inner.addEventListener("click", () => {
      console.log("Клик по inner");
    });

//3
const form = document.getElementById("myForm");

  form.addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT") {
      const value = event.target.value;
      if (value.length > 20) {
        console.log(`Поле "${event.target.name}" слишком длинное!`);
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid green";
      }
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Форма отправлена!");

  });
