lampSwitch.addEventListener("change", function() {
    if (this.checked) {
        lamp.classList.add("lamp-on");
    } else {
        lamp.classList.remove("lamp-on");
    }
});
