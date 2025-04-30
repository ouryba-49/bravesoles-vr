// Optional prompt-based styling (keep if you're using prompt input)
function submitPrompt() {
  const prompt = document.getElementById('promptInput')?.value;
  if (prompt) updateSceneFromPrompt(prompt);
}

function updateSceneFromPrompt(prompt) {
  const shoe = document.getElementById('shoeModel');
  
  if (prompt.toLowerCase().includes("vintage")) {
    shoe.setAttribute('color', '#8B4513'); // Brownish for vintage
  } else if (prompt.toLowerCase().includes("urban")) {
    shoe.setAttribute('color', '#2E2E2E'); // Dark grey for urban
  } else if (prompt.toLowerCase().includes("minimal")) {
    shoe.setAttribute('color', '#FFFFFF'); // White for minimal
  } else {
    shoe.setAttribute('color', '#4CC3D9'); // Default color
  }
}

// Show info panel when clicking on 3D sandal
AFRAME.registerComponent('show-info', {
  init: function () {
    this.el.addEventListener('click', function () {
      document.querySelector('#infoPanel').setAttribute('visible', true);
    });
  }
});

// Hide both info panels
AFRAME.registerComponent('close-info', {
  init: function () {
    this.el.addEventListener('click', function () {
      document.querySelector('#infoPanel').setAttribute('visible', false);
      document.querySelector('#opheliaPanel').setAttribute('visible', false);
    });
  }
});

// Show Ophelia panel when image clicked
AFRAME.registerComponent('show-ophelia-info', {
  init: function () {
    this.el.addEventListener('click', function () {
      document.querySelector('#opheliaPanel').setAttribute('visible', true);
    });
  }
});

// Ensure ambient audio plays after user clicks post scene load
AFRAME.scenes[0].addEventListener('loaded', () => {
  const audioEntity = document.querySelector('#audioController');

  function tryPlayAudio() {
    if (audioEntity && audioEntity.components.sound && !audioEntity.components.sound.isPlaying) {
      audioEntity.components.sound.playSound();
      document.body.removeEventListener('click', tryPlayAudio);
    }
  }

  document.body.addEventListener('click', tryPlayAudio);
});
