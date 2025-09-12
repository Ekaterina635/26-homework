//1
document.getElementById("outer").addEventListener("click", () => {
    console.log("Клик по ВНЕШНЕМУ div");
  });

  document.getElementById("middle").addEventListener("click", () => {
    console.log("Клик по СРЕДНЕМУ div");
  });

  document.getElementById("inner").addEventListener("click", () => {
    console.log("Клик по ВНУТРЕННЕМУ div");
  });

//2
document.getElementById("middle").addEventListener("click", (event) => {
  console.log("Клик по СРЕДНЕМУ div (всплытие остановлено)");
  event.stopPropagation(); 
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