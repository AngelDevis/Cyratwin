let chart;

function simulateCycle()
 {

    const sleep = parseInt(document.getElementById("sleep").value);
    const stress = parseInt(document.getElementById("stress").value);

    let estrogen = 50 + (sleep * 3) - (stress * 2);
    let progesterone = 40 + (sleep * 2);
    let cortisol = 30 + (stress * 5);

    const data = {
        labels: ["Estrogen", "Progesterone", "Cortisol"],
        datasets: [{
            label: "Hormone Levels",
            data: [estrogen, progesterone, cortisol],
            backgroundColor: [
                "#ff99cc",
                "#ff66b2",
                "#ff3385"
            ]
        }]
    };

    if (chart) chart.destroy();

    chart = new Chart(document.getElementById("hormoneChart"), {
        type: "bar",
        data: data
    });

    let message = "";

    if (stress > 7) {
        message += "High stress may increase cramps and mood swings.<br>";
    }

    if (sleep < 6) {
        message += "Low sleep may disturb hormonal balance.<br>";
    }

    if (message === "") {
        message = "Your hormonal balance looks stable 🌸";
    }

    document.getElementById("result").innerHTML = message;
}
function goToMain() {
    window.location.href = "main.html";
}
function goToMain() {
    window.location.href = "home.html";
}