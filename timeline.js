function resetButtonStyles() {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active'); // Remove the active class from all buttons
    });
}

document.getElementById('intro-button').addEventListener('click', function() {
    console.log("Introduction button clicked");
    resetButtonStyles(); // Reset styles for all buttons
    this.classList.add('active'); // Add active class to clicked button
    const content = document.getElementById('content');
    content.classList.remove('active');  // Remove active styles
    document.querySelector('h2').innerHTML = " "; // Clear h2 for intro
    document.body.className = ''; // Reset body classes
    document.body.classList.remove('twoMonth'); // Remove section-specific class
    document.body.classList.remove('fiveMonth');
    document.body.classList.remove('eightMonth');
    document.body.classList.remove('twelveMonth');
    document.body.classList.add('intro'); // Add section-specific class
    document.getElementById('content-img').src = "images/intro.jpg";
    document.getElementById('content-img').alt = "kitten";
    document.getElementById('content-text').innerHTML = `
        <p>
            I would like to introduce my cat whose name is Gravity. 
            He got this name because he always attracts the whole family to gather around him. 
        </p>
        <p>
            He loves to snooze in the sun and watch the birds fly around on the balcony. 
            He brings us endless joy and this is a website dedicated to his growth record.
        </p>
    `;
});

document.getElementById('twoMonth-button').addEventListener('click', function() {
    console.log("2 Month Old button clicked");
    resetButtonStyles(); // Reset styles for all buttons
    this.classList.add('active'); // Add active class to clicked button
    const content = document.getElementById('content');
    const contentText = document.getElementById('content-text');
    content.classList.add('active'); // Apply active styles
    document.body.className = ''; // Reset body classes
    document.body.classList.remove('intro');
    document.body.classList.remove('fiveMonth');
    document.body.classList.remove('eightMonth');
    document.body.classList.remove('twelveMonth');
    document.body.classList.add('twoMonth'); // Add section-specific class
    document.getElementById('content-img').src = "images/2m.jpg";
    document.getElementById('content-img').alt = "Gravity at 2 months";
        document.getElementById('content-text').innerHTML = `
    <h2>2 Month Old</h2>
        <p>
            At 2 months old, Gravity had just been brought home by me from the neighborhood meadow. 
            He was still a mischievous kitty who loved to parkour around the house and climb along the 
            curtains from the floor to the roof. He was curious about everything, 
            like hogging the toolbox as in this photo.
        </p>
    `;
});

document.getElementById('fiveMonth-button').addEventListener('click', function() {
    console.log("5 Month Old button clicked");
    resetButtonStyles(); // Reset styles for all buttons
    this.classList.add('active'); // Add active class to clicked button
    const content = document.getElementById('content');
    document.body.className = ''; // Reset body classes
    document.body.classList.remove('intro');
    document.body.classList.remove('twoMonth');
    document.body.classList.remove('eightMonth');
    document.body.classList.remove('twelveMonth');
    document.body.classList.add('fiveMonth'); // Add section-specific class 
    document.getElementById('content-img').src = "images/5m.jpg";
    document.getElementById('content-img').alt = "Gravity at 5 months";
    document.getElementById('content-text').innerHTML = `
      <h2>5 Month Old</h2>
        <p>
            At 5 months old, although Gravity reigns supreme in the house, 
            he's actually too timid to go outside. If a visitor came over, 
            he would hide and not come out until the visitor left. 
            He found a perfect spot behind the bookshelf where he could 
            see us and we couldn't see him.
        </p>
    `;
});

document.getElementById('eightMonth-button').addEventListener('click', function() {
    console.log("8 Month Old button clicked");
    resetButtonStyles(); // Reset styles for all buttons
    this.classList.add('active'); // Add active class to clicked button
    const content = document.getElementById('content');
    document.body.className = ''; // Reset body classes
    document.body.classList.remove('intro');
    document.body.classList.remove('twoMonth');
    document.body.classList.remove('fiveMonth');
    document.body.classList.remove('twelveMonth');
    document.body.classList.add('eightMonth'); // Add section-specific class 
    document.getElementById('content-img').src = "images/8m.jpg";
    document.getElementById('content-img').alt = "Gravity at 8 months";
    document.getElementById('content-text').innerHTML = `
      <h2>8 Month Old</h2>
        <p>
            At 8 months old, Gravity was no longer as mischievous as 
            he was as a baby. Whenever I sat down in the rocking chair, 
            he would lay on my legs and join me in a rocking moment, 
            and he would look at me with loving eyes whenever 
            I gently touched his little head.
        </p>
    `;
});

document.getElementById('twelveMonth-button').addEventListener('click', function() {
    console.log("12 Month Old button clicked");
    resetButtonStyles(); // Reset styles for all buttons
    this.classList.add('active'); // Add active class to clicked button
    const content = document.getElementById('content');
    document.body.className = ''; // Reset body classes
    document.body.classList.remove('intro');
    document.body.classList.remove('twoMonth');
    document.body.classList.remove('fiveMonth');
    document.body.classList.remove('eightMonth');
    document.body.classList.add('twelveMonth'); // Add section-specific class 
    document.getElementById('content-img').src = "images/12m.jpg";
    document.getElementById('content-img').alt = "Gravity at 12 months";
    document.getElementById('content-text').innerHTML = `
      <h2>12 Month Old</h2>
        <p>
            From one year old, Gravity began to enjoy lazy sunbathing and 
            cozy naps. He always finds the best corner in the house to relax 
            on the floor and sunbathe. At this time, he would always show 
            his belly with a heart-shaped pattern and let me pet his soft tummy.
        </p>
    `;
});