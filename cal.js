document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".box");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = button.innerText;
            if (buttonText === "Delete") {
                screen.value = "";
            } else if (buttonText === "=") {
                try {
                    screen.value = eval(screen.value);
                } catch (error) {
                    screen.value = "Error";
                }
            } else {
                screen.value += buttonText;
            }
        });
    });
});
