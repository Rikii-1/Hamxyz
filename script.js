// ParticlesJS config
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.3
    },
    "size": {
      "value": 3
    },
    "move": {
      "enable": true,
      "speed": 1
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  },
  "retina_detect": true
});

// Musik auto-play (tergantung izin browser)
window.addEventListener("load", () => {
  const audio = document.getElementById("audio");
  if (audio) {
    audio.play().catch(e => {
      console.log("Autoplay diblokir browser.");
    });
  }

  // Efek fade-in
  const container = document.querySelector(".main-container");
  container.style.opacity = 0;
  container.style.transition = "opacity 1.5s ease";
  setTimeout(() => {
    container.style.opacity = 1;
  }, 100);
});

