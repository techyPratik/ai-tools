const tools = [
  {
    name: "ChatGPT",
    desc: "Your AI assistant for writing, coding, and learning — created by OpenAI.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    link: "https://chat.openai.com/",
  },
  {
    name: "Napkin AI",
    desc: "Turn ideas into visuals and concepts instantly using AI-powered sketching.",
    img: "https://img.icons8.com/?size=512&id=R1mSgB6PaKbu&format=png", // icons8 placeholder
    link: "https://www.napkin.ai/",
  },
  {
    name: "Gamma AI",
    desc: "Generate stunning presentations, documents, and websites using AI.",
    img: "https://gamma.app/favicon.ico", // verified icon
    link: "https://gamma.app/",
  },
  {
    name: "Canva Magic Studio",
    desc: "Design, write, and generate images effortlessly using Canva’s AI tools.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Canva_Logo.png",
    link: "https://www.canva.com/magic-studio/",
  },
  // <-- corrected entry: Gork -> Grok (xAI)
  {
    name: "Grok (xAI)",
    desc: "Elon Musk’s Grok — a witty, realtime chatbot from xAI integrated tightly with X.",
    img: "https://x.ai/favicon.ico", // you can change this to a nicer logo if you have one
    link: "https://x.ai/",
  },
  {
    name: "Gemini (Google AI)",
    desc: "Google’s multimodal AI for text, image, and reasoning tasks.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    link: "https://gemini.google.com/",
  },
  {
    name: "Perplexity AI",
    desc: "Ask anything — Perplexity gives you real answers with cited web sources.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Perplexity_AI_logo.svg",
    link: "https://www.perplexity.ai/",
  },
  {
    name: "Claude AI",
    desc: "Anthropic’s advanced chatbot built for reasoning and creativity.",
    img: "https://img.icons8.com/?size=512&id=xh3r6QbZK6Bj&format=png",
    link: "https://claude.ai/",
  },
  {
    name: "Blackbox AI",
    desc: "Code faster with Blackbox — the AI-powered coding assistant for developers.",
    img: "https://avatars.githubusercontent.com/u/94414104?s=200&v=4",
    link: "https://www.useblackbox.io/",
  },
];

const toolContainer = document.getElementById("toolContainer");
const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const popupLink = document.getElementById("popupLink");
const closePopup = document.getElementById("closePopup");

function displayTools(filteredTools) {
  toolContainer.innerHTML = "";
  filteredTools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <img src="${tool.img}" alt="${tool.name}" onerror="this.src='https://img.icons8.com/fluency/96/artificial-intelligence.png'">
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
      <a href="#" class="btn">View More</a>
    `;
    card.querySelector(".btn").addEventListener("click", e => {
      e.preventDefault();
      openPopup(tool);
    });
    toolContainer.appendChild(card);
  });
}

function openPopup(tool) {
  popupImage.src = tool.img;
  popupTitle.textContent = tool.name;
  popupDesc.textContent = tool.desc;
  popupLink.href = tool.link;
  popup.classList.remove("hidden");
}

closePopup.addEventListener("click", () => popup.classList.add("hidden"));
popup.addEventListener("click", e => {
  if (e.target === popup) popup.classList.add("hidden");
});

searchBar.addEventListener("input", () => {
  const term = searchBar.value.toLowerCase().trim();
  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(term) ||
    t.desc.toLowerCase().includes(term)
  );
  displayTools(filtered);
});

displayTools(tools);