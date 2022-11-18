import { createChatBotMessage } from "react-chatbot-kit";


const config = {
  botName: "BOB",
  initialMessages: [createChatBotMessage(`Hola! ¿Qué tal?! Soy un chatbot`)],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: '#911F27',
    },
    chatButton: {
      backgroundColor: '#FFD372',
    },
  },
};

export default config