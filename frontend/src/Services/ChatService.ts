import { io, Socket } from "socket.io-client"; // npm i socket.io-client

class ChatService {
  private socket: Socket;

  public connect(): void {
    this.socket = io("http://localhost:3001");
  }
  public newMessage(displayMessage: Function): void {
    this.socket.on("new-message", (message) => displayMessage(message));
  }
  public disconnect(): void {
    this.socket.disconnect();
  }
}

const chatService = new ChatService();

export default chatService;
