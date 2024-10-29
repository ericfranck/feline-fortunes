const fortunes = [
    "Yes!",
    "Maybe...",
    "Not a chance!",
    "If you're lucky!",
    "You already know.",
    "It's a no for me, dawg.",
    "The outlook is hazy.",
    "Maybe next Halloween",
    "You bet!"
]

const fortuneContainer = document.getElementById("fortunes");

const populateFortunes = () => {
    for (let i = 0; i < 100; i++) {
        fortuneContainer.innerHTML += "<div>" + fortunes[Math.floor(Math.random()*fortunes.length)]; + "</div>";
    }
}

populateFortunes();
