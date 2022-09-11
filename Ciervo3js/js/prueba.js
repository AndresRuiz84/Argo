document.addEventListener("mousemove", parallax)
    function parallax(e) {
        document.querySelectorAll(".object").forEach(function (move) {
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) / 1000;
            var y = (e.clientY * moving_value) / 1000;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
    }