import React from "react";
import axios from "axios";
import Config from "../configs";

function chatToggle() {
  var y = document.getElementById("chat");
  var x = document.getElementById("btn");
  if (y.style.display === "none") {
    y.style.display = "grid";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "grid";
  }
}

const chatbot = () => {
  return (
    <div>
      <div className="chat-window" id="chat" style={{ display: "none" }}>
        <div className="main-title">KiddieEd Assistant</div>
        <p className="close-btn" onClick={chatToggle}>
          X
        </p>
        <div id="chat-messages"></div>
        <form id="chat-form">
          <input
            type="text"
            id="chat-input"
            autocomplete="off"
            placeholder="Type your message here"
            required
          />
          <button type="submit" onClick={chat}>
            Send
          </button>
        </form>
      </div>

      <button id="btn" className="chat-btn btn btn-rounded" onClick={chatToggle}>
        <i class="fa-regular fa-comments"></i>
      </button>
    </div>
  );
};

export default chatbot;

function chat() {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const apiKey = Config.API;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = input.value;
    input.value = "";

    if (message !== "") {
      messages.innerHTML += `<div class="message user-message"><span>${message}</span>
  </div>`;

      if (message.toLowerCase().includes("who are you")) {
        const predefinedResponse =
          "I am the KiddieEd chatbot. How can I help you today?";
        messages.innerHTML += `<div class="message bot-message"><span>${predefinedResponse}</span>
</div>`;
      } else if (message.toLowerCase().includes("what is kiddieed")) {
        const predefinedResponse =
          "KiddieEd is an online learning platform for kids";
        messages.innerHTML += `<div class="message bot-message"><span>${predefinedResponse}</span>
</div>`;
      } else if (message.toLowerCase().includes("hello")) {
        const predefinedResponse =
          "Hello,I am the KiddieEd chatbot. How can I help you today?";
        messages.innerHTML += `<div class="message bot-message"><span>${predefinedResponse}</span>
</div>`;
      } else if (message.toLowerCase() === 'hi') {
        const predefinedResponse =
          "Hello,I am the KiddieEd chatbot. How can I help you today?";
        messages.innerHTML += `<div class="message bot-message"><span>${predefinedResponse}</span>
</div>`;
      } else if (
        message.toLowerCase().includes("what are the courses you have")
      ) {
        const predefinedResponse = `We have maths, science, english, astrology and many more courses. We have <a href="https://kiddieed.com/worksheets.html">worksheets</a>, <a href="https://kiddieed.com/games.html">games</a> and <a href="https://kiddieed.com/InterVideos.html">Interractive videos</a  for kids of all ages.`;
        messages.innerHTML += `<div class="message bot-message"><span>${predefinedResponse}</span>
</div>`;
      } else {
        const d1 = {
          prompt: `${message} and give extra too short and correct reply. maximum 20 words. If this question is none educational thisng? give a reply like "I am not sure about that. Because I am an educational chat bot". Also it is a adult one (18+) give reply like previuse one. If the message is like "hello", "hi" or something, say "Hello I am the KiddieEd Assistant. How can I help you". Also give the answers like primary level teacher and aswers are must be very very short. It is a mathematical question, reply it correctly.`,
          model: "text-davinci-003",
          temperature: 0,
          max_tokens: 1000,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
        const d2 = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        };
        // If not, make the API call as before
        const response = await axios.post(
          "https://api.openai.com/v1/completions",
          d1,
          d2
        );
        const chatbotResponse = response.data.choices[0].text;

        messages.innerHTML += `<div class="message bot-message"><span>${chatbotResponse}</span>
  </div>`;
      }
    }
  });
}
