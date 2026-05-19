const field = document.querySelector("#heartField");
const score = document.querySelector("#score");
const secretMessage = document.querySelector("#secretMessage");
const stars = document.querySelector(".stars");

const heartPositions = [
  { left: 12, top: 18 },
  { left: 72, top: 16 },
  { left: 48, top: 42 },
  { left: 22, top: 70 },
  { left: 80, top: 72 },
];

const finalMessage = [
  "Si algún día me preguntan qué se siente encontrar a alguien especial, creo que hablaría de ti.",
  "De tu forma de existir tan bonita, tan tuya. De cómo incluso los días simples se sienten diferentes cuando apareces. Porque contigo no todo tiene que ser perfecto para sentirse bien.",
  "Tienes unos ojos que parecen guardar historias, una sonrisa que desarma el orgullo y una manera de querer que se siente como hogar.",
  "Y tal vez el mundo nunca entienda completamente lo increíble que eres... pero yo sí. Y créeme, habría vuelto a encontrarte en cualquier vida.",
];

let found = 0;

heartPositions.forEach((position, index) => {
  const button = document.createElement("button");
  button.className = "heart";
  button.type = "button";
  button.textContent = "♥";
  button.style.left = `${position.left}%`;
  button.style.top = `${position.top}%`;
  button.style.animationDelay = `${index * 120}ms`;
  button.setAttribute("aria-label", `Corazón secreto ${index + 1}`);

  button.addEventListener("click", () => {
    if (button.classList.contains("found")) return;

    button.classList.add("found");
    found += 1;
    score.textContent = found;

    if (found === heartPositions.length) {
      secretMessage.innerHTML = finalMessage
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
      secretMessage.classList.add("revealed");
      launchFinalHearts();
    }
  });

  field.appendChild(button);
});

for (let index = 0; index < 26; index += 1) {
  const star = document.createElement("span");
  star.textContent = index % 3 === 0 ? "♥" : "•";
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${8 + Math.random() * 9}s`;
  star.style.animationDelay = `${Math.random() * 8}s`;
  star.style.fontSize = `${12 + Math.random() * 18}px`;
  stars.appendChild(star);
}

function launchFinalHearts() {
  for (let index = 0; index < 14; index += 1) {
    const burst = document.createElement("span");
    burst.textContent = "♥";
    burst.style.left = `${10 + Math.random() * 80}%`;
    burst.style.animationDuration = `${3 + Math.random() * 3}s`;
    burst.style.animationDelay = `${Math.random()}s`;
    burst.style.fontSize = `${20 + Math.random() * 24}px`;
    stars.appendChild(burst);
  }
}
