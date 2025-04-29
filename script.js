function submitPrompt() {
  const prompt = document.getElementById('promptInput').value;
  updateSceneFromPrompt(prompt);
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

// This stays as regular JS too — no <script> tags
AFRAME.registerComponent('show-info', {
  init: function () {
    this.el.addEventListener('click', function () {
      const panel = document.querySelector('#infoPanel');
      panel.setAttribute('visible', true);
    });
  }
});

AFRAME.registerComponent('close-info', {
  init: function () {
    this.el.addEventListener('click', function () {
      const panel = document.querySelector('#infoPanel');
      panel.setAttribute('visible', false);
    });
  }
});


