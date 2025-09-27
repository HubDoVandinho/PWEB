// Seleciona os botões
const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');

// Cria o elemento de áudio
const audioSim = new Audio('audio/bacurizadaFeliz.mp3');

// Evento para o botão SIM
botaoSim.addEventListener('click', () => {
  // Reinicia e toca o som
  audioSim.currentTime = 0;
  audioSim.play();

  // Efeito de confete por 2 segundos com mais alcance e tamanho
  const end = Date.now() + 2000;
  const interval = setInterval(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 90,
      origin: { x: 0.1, y: 0.6 },
      scalar: 1.5
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 90,
      origin: { x: 0.9, y: 0.6 },
      scalar: 1.5
    });
    if (Date.now() > end) clearInterval(interval);
  }, 100);
});

// Comportamento de fuga do botão NÃO ao clicar
let fugiu = false;

botaoNao.addEventListener('click', () => {
  const rect = botaoNao.getBoundingClientRect();
  const padding = 20;
  const maxX = window.innerWidth - rect.width - padding;
  const maxY = window.innerHeight - rect.height - padding;
  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY;

  // Garante que o novo local não fique muito perto do clique
  while (Math.hypot(window.innerWidth / 2 - newX, window.innerHeight / 2 - newY) < 200) {
    newX = Math.random() * maxX;
    newY = Math.random() * maxY;
  }

  if (!fugiu) {
    const placeholder = document.createElement('div');
    placeholder.style.width = rect.width + 'px';
    placeholder.style.height = rect.height + 'px';
    placeholder.style.display = 'inline-block';
    botaoNao.parentNode.insertBefore(placeholder, botaoNao);
    botaoNao.style.position = 'fixed';
    fugiu = true;
  }

  botaoNao.style.left = `${newX}px`;
  botaoNao.style.top = `${newY}px`;
});
