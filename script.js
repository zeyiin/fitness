document.addEventListener('DOMContentLoaded', () => {
    let points = 0;
    const pointsElement = document.getElementById('points');
    const workoutBtn = document.getElementById('workoutBtn');
    const challengeBtn = document.getElementById('challengeBtn');
    const challengesContainer = document.getElementById('challenges');
    
    const challenges = [
        "10 Push-ups",
        "20 Sit-ups",
        "30-Second Plank",
        "15 Jumping Jacks",
        "5 Burpees"
    ];
    
    function updatePoints() {
        pointsElement.textContent = `Points: ${points}`;
    }
 
    workoutBtn.addEventListener('click', () => {
        points += 10; // increment points by 10 for each workout completed
        updatePoints();
    });

    challengeBtn.addEventListener('click', () => {
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        const challengeElement = document.createElement("p");
        challengeElement.textContent = randomChallenge;
        challengesContainer.appendChild(challengeElement);
    });
});

