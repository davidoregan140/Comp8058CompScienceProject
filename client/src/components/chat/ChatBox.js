import React, { Component } from "react";
import axios from "axios";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import style from "./chatStyle";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadChatsFromServer = this.loadChatsFromServer.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.handleChatDelete = this.handleChatDelete.bind(this);
    this.handleChatUpdate = this.handleChatUpdate.bind(this);
    this.pollInterval = 2000;
    this.url = "http://localhost:3000/chat";
  }
  loadChatsFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data });
    });
  }
  handleChatSubmit(chat) {
    let chats = this.state.data;
    chat.id = Date.now();
    let newChats = chats.concat([chat]);
    this.setState({ data: newChats });
    axios.post(this.props.url, chat).catch(err => {
      console.error(err);
      this.setState({ data: chats });
    });
  }
  handleChatDelete(id) {
    axios
      .delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log("Chat deleted");
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleChatUpdate(id, chat) {
    //sends the chat id and new author/text to our api
    axios.put(`${this.props.url}/${id}`, chat).catch(err => {
      console.log(err);
    });
  }
  componentDidMount() {
    this.loadChatsFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(
        this.loadChatsFromServer,
        this.props.pollInterval
      );
    }
  }
  //when incorporating into another project
  //(with react-router for instance),
  //this will prevent error messages every 2 seconds
  //once the ChatBox is unmounted
  componentWillUnmount() {
    this.pollInterval && clearInterval(this.pollInterval);
    this.pollInterval = null;
  }
  render() {
    return (
      <div style={style.chatBox}>
        <h2 style={style.title}>Chats:</h2>
        <ChatList
          onChatDelete={this.handleChatDelete}
          onChatUpdate={this.handleChatUpdate}
          data={this.state.data}
        />
        <ChatForm onChatSubmit={this.handleChatSubmit} />
      </div>
    );
  }
}

export default ChatBox;
