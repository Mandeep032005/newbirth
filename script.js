// Function to switch screens with a transition
function transitionScreen(fromScreenId, toScreenId) {
    document.getElementById(fromScreenId).classList.add('hidden');
    document.getElementById(toScreenId).classList.remove('hidden');
}

// Initial screen transition
function nextScreen() {
    transitionScreen('screen1', 'screen3');
    document.getElementById('greeting').textContent = 
        "Happy Birthday, Sunidhi! 🎉🎂";
    showMessages();
}

// User greeting and message display
function greetUser() {
    const name = document.getElementById('name-input').value;
    if (name) {
        document.getElementById('greeting').textContent = `Happy Birthday, ${name}! 🎉🎂`;
        transitionScreen('screen2', 'screen3');
        showMessages();
    }
}

// Show messages sequentially
function showMessages() {
    const messageContainer = document.getElementById('message-container');
    const messages = [
        "✨🎂 Happy Birthday Sunidhi ji! 🎂✨",
        "Kuch log zyada bolte nahi, par unki value sabse zyada hoti hai….",
        "Tum unhi logon mein se ho🫶.",
        "Stay exactly the way you are.",
        "Aur haan… kabhi kabhi mil bhi liya karo, warna main appointment book karna shuru kar dunga. 😌📅",
        "🌸Once again… 🥳🎉 Happy Birthday, Sunidhi 🦋⃟💗᪲᪲᪲ !."
        
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < messages.length) {
            const p = document.createElement('p');
            p.textContent = messages[i];

            // Add the highlight class to the third message
            if (i === 2) { 
                p.classList.add('highlight');
            }

            messageContainer.appendChild(p);
            i++;
        } else {
            clearInterval(interval);
            
            // Pop the "Surprise" button after all messages are displayed
            setTimeout(() => {
                document.querySelector('#screen3 .next-btn').style.display = 'block';
            }, 500); // 1-second delay after the last message
        }
    }, 1200); // Display a new message every 2 seconds
}

// Show the photo carousel screen and play music
function showCarousel() {
    transitionScreen('screen3', 'screen4');
    createPhotoCarousel();
    document.getElementById('background-music').play();
}

// Function to dynamically create and animate the 3D photo carousel
function createPhotoCarousel() {
    const carousel = document.getElementById('photo-carousel');
    const photos = [
        'Image1.jpeg',
        'image2.jpeg',
        'image3.jpeg',
        'image4.jpeg',
        'image5.jpeg'
        // Add all your photo paths here
    ];
    const angle = 360 / photos.length;

    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.classList.add('carousel-photo');
        const rotateY = `rotateY(${index * angle}deg) translateZ(300px)`;
        img.style.transform = rotateY;
        carousel.appendChild(img);
    });
}
