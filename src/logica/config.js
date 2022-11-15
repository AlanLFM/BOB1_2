import { createChatBotMessage } from "react-chatbot-kit";

import DogPicture from "../logica/widget";


const config = {
  botName: "BOB",
  initialMessages: [createChatBotMessage(`Holi soy BOB🤖`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
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