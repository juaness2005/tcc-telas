// elementos
const container = document.getElementById("container");
const messageBox = document.getElementById("message");
const popup = document.querySelector(".popup");

let lastClicked = null;
let popupFechado = false;
let coracoesClicados = 0;

// 💌 suas mensagens
const mensagens = [
  "Você é especial ❤️",
  "Pensei em você hoje 💭",
  "Você me faz sorrir 😊",
  "Te escolheria mil vezes 💖",
  "Você ilumina meu dia ✨"
];

// botão fechar popup
document.getElementById("fechar").addEventListener("click", () => {
  popup.classList.add("hidden");

  setTimeout(() => {
    popup.style.display = "none";
    popupFechado = true; // libera clique nos corações
  }, 300);
});

// cria corações baseado na quantidade de mensagens
mensagens.forEach((texto) => {
  const heart = document.createElement("div");
  heart.classList.add("coracao");
  heart.textContent = "❤️";

  // posição aleatória
  heart.style.top = (Math.random() * 90 + 5) + "%";
  heart.style.left = (Math.random() * 90 + 5) + "%";

heart.addEventListener("click", () => {
  if (!popupFechado) return;

  // evita contar duas vezes o mesmo coração
  if (heart.classList.contains("hidden")) return;

  if (lastClicked) {
    lastClicked.classList.add("hidden");
  }

  messageBox.textContent = texto;
  messageBox.classList.add("show");

  lastClicked = heart;

  // 🔥 conta cliques
  coracoesClicados++;

  // 🎯 quando acabar todos
  if (coracoesClicados === mensagens.length) {
    setTimeout(() => {
      document.getElementById("popupFinal").classList.remove("hidden");
    }, 500);
  }
});

  container.appendChild(heart);
});