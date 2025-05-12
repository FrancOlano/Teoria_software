document.getElementById("toggleTable").addEventListener("click", () => {
  const table = document.getElementById("modelTable");
  table.style.display = table.style.display === "none" ? "table" : "none";
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  alert("Theme changed!");
});

function showTrivia() {
  const funFacts = [
    "Did you know? GPT-3 has 175 billion parameters!",
    "Did you know? GPT-4 can process both text and image inputs — it's multimodal.",
    "Did you know? Training GPT-3 required several thousand petaflop/s-days of computation.",
    "Did you know? The 'attention' mechanism in transformers revolutionized natural language processing.",
    "Did you know? GPT stands for Generative Pre-trained Transformer.",
    "Did you know? LLMs are not just used for chatbots — they help in coding, writing, tutoring, and even legal assistance.",
    "Did you know? The transformer architecture was introduced in 2017 in a paper titled 'Attention is All You Need'.",
    "Did you know? LLMs don’t understand language — they predict the next word based on patterns in data.",
    "Did you know? Fine-tuning an LLM on specific data can drastically change its behavior and expertise.",
    "Did you know? Prompt engineering is a technique used to get better results from LLMs without changing the model itself.",
    "Did you know? Large Language Models are usually trained on a mixture of books, websites, and human conversations.",
    "Did you know? The largest models today have over a trillion parameters.",
    "Did you know? LLMs can hallucinate — generating convincing but false information.",
    "Did you know? Transformers replaced earlier RNN and LSTM architectures in NLP tasks due to their scalability.",
    "Did you know? LLMs often undergo reinforcement learning from human feedback (RLHF) to improve their responses.",
    "Did you know? The cost of training a cutting-edge LLM can exceed several million dollars.",
    "Did you know? LLMs are powering AI tools in writing, code generation, education, medicine, and more.",
    "Did you know? One of the early breakthroughs in transformers was using 'self-attention' to process entire sequences at once.",
    "Did you know? GPT models are autoregressive — they generate one token at a time, each based on previous ones.",
    "Did you know? Tokenization breaks down text into chunks (tokens) before it’s processed by an LLM.",
    "Did you know? A single word can be split into multiple tokens — for example, 'fantastic' might be 2 or 3 tokens.",
    "Did you know? OpenAI’s GPT-3 model was trained using a dataset called 'The Pile' among others.",
    "Did you know? LLMs can be 'prompted' to play games, simulate interviews, and imitate famous authors.",
    "Did you know? Instruction-tuned LLMs perform better when you give them clear and specific tasks.",
    "Did you know? Early LLMs like GPT-2 had fewer than 2 billion parameters — tiny compared to modern models.",
    "Did you know? Some LLMs can write functioning code in multiple programming languages.",
    "Did you know? LLMs don’t have memory by default — they don’t remember previous chats unless designed to.",
    "Did you know? OpenAI introduced ChatGPT in late 2022, sparking massive public interest in LLMs.",
    "Did you know? Microsoft integrated GPT-based models into products like Word, Excel, and Bing.",
    "Did you know? LLMs can summarize articles, translate languages, and even compose music lyrics.",
    "Did you know? Safety filters and moderation layers are applied to LLMs to reduce harmful outputs.",
    "Did you know? AI alignment is the research field focused on making LLMs do what humans want — safely.",
    "Did you know? Transformer-based models are now standard in almost all modern NLP systems.",
    "Did you know? Embeddings are vector representations of words or sentences used in LLMs.",
    "Did you know? LLMs can simulate reasoning by chaining multiple thoughts — known as 'chain of thought prompting'.",
    "Did you know? Some LLMs have multilingual capabilities and can translate or reason across languages.",
    "Did you know? LLMs like Claude, PaLM, Gemini, and LLaMA are developed by different AI labs.",
    "Did you know? Training a large model consumes enormous energy, leading to concerns about environmental impact.",
    "Did you know? LLMs cannot access the internet unless explicitly connected to one through tools or plugins.",
    "Did you know? The architecture behind ChatGPT is a type of decoder-only transformer.",
    "Did you know? Some LLMs are open-source — like Meta’s LLaMA or Mistral’s models.",
    "Did you know? You can run small LLMs on a smartphone or laptop with quantization and optimization.",
    "Did you know? Developers often use APIs to access LLMs rather than running them locally.",
    "Did you know? Some researchers are working on 'tiny' LLMs that require much less memory and power.",
    "Did you know? Not all AI models are LLMs — computer vision models use very different architectures.",
    "Did you know? LLMs do not possess consciousness or self-awareness, despite sounding human-like.",
    "Did you know? Hallucination rates in LLMs are an active area of research for improving reliability.",
    "Did you know? LLMs can simulate personalities or characters by adjusting the system prompt.",
    "Did you know? The largest LLMs are trained using parallel computing across thousands of GPUs.",
    "Did you know? When LLMs generate biased content, it’s usually a reflection of bias in their training data.",
    "Did you know? Responsible AI development includes transparency, testing, and human feedback at all stages."
  ];

  const randomIndex = Math.floor(Math.random() * funFacts.length);
  alert(funFacts[randomIndex]);
}
