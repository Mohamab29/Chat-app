import { useEffect, useState } from "react";
import MessageModel from "../../../Models/MessageModel";
import chatService from "../../../Services/ChatService";
import "./Layout.css";

function Layout(): JSX.Element {
  const [message, setMessage] = useState<MessageModel>({
    from: "",
    text: "",
    createdAt: "",
  });
  useEffect(() => {
    chatService.connect();
    chatService.newMessage((message: MessageModel) => {
      setMessage({ ...message });
    });
    return () => chatService.disconnect();
  }, []);
  return (
    <div className="Layout">
      <h1> Hello </h1>
      {message && (
        <>
          <span>from: {message.from}</span>
          <br />
          <span>text: {message.text}</span>
          <br />
          <span>created at: {message.createdAt}</span>
        </>
      )}
    </div>
  );
}

export default Layout;
