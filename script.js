function sendMessage() {
    var userInput = document.getElementById("userInput");
    var userMessage = userInput.value;
  
    if (userMessage.trim() !== "") {
      var chatBox = document.getElementById("chatBox");
      var userDiv = document.createElement("div");
      userDiv.classList.add("chat-message", "user-message");
      userDiv.innerHTML = "<p>" + userMessage + "</p>";
      chatBox.appendChild(userDiv);
  
      var botResponse = getBotResponse(userMessage);
      var botDiv = document.createElement("div");
      botDiv.classList.add("chat-message", "bot-message");
      botDiv.innerHTML = "<p>" + botResponse + "</p>";
      chatBox.appendChild(botDiv);
  
      userInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    var botResponse = "";
  
    switch (userMessage) {
      case "olá":
        botResponse = "Olá! Como posso ajudá-lo?";
        break;
      case "como você está?":
        botResponse = "Estou bem, obrigado por perguntar!";
        break;
      case "quem é você?":
        botResponse = "Eu sou um chatbot programado para responder a algumas perguntas simples.";
        break;
      default:
        botResponse = "Desculpe, não entendi. Por favor, faça outra pergunta.";
    }
  
    return botResponse;
  }
  