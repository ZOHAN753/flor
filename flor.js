 function bloomFlower() {
            document.getElementById("openButton").style.display = "none";
            let flower = document.getElementById("flower");
            let petals = document.querySelectorAll(".petal");
            let center = document.querySelector(".center");
            let message = document.getElementById("message");
            let stem = document.getElementById("stem");
            let sound = document.getElementById("bloomSound");

            flower.style.transform = "scale(1)";
            sound.play();

            petals.forEach((petal, index) => {
                setTimeout(() => {
                    petal.style.opacity = "1";
                }, index * 300);
            });

            setTimeout(() => {
                center.style.opacity = "1";
                stem.style.opacity = "1";
                message.style.opacity = "1";
                typeMessage();
            }, 3200);
        }

        function typeMessage() {
            let messageText = "Te quiero demasiado Ash, estas flores son para ti 💖";
            let messageElement = document.getElementById("message");
            let index = 0;
            messageElement.textContent = "";

            function type() {
                if (index < messageText.length) {
                    messageElement.textContent += messageText[index];
                    index++;
                    setTimeout(type, 100);
                }
            }
            type();
        }