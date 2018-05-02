import React, { Component } from "react";
import Chat from "./Chat";
import style from "./chatStyle";

class ChatList extends Component {
  render() {
    let chatNodes = this.props.data.map(chat => {
      return (
        <Chat
          author={chat.author}
          uniqueID={chat["_id"]}
          onChatDelete={this.props.onChatDelete}
          onChatUpdate={this.props.onChatUpdate}
          key={chat.id}
        >
          {chat.text}
        </Chat>
      );
    });
    return <div style={style.chatList}>{chatNodes}</div>;
  }
}

export default ChatList;
