/***************************************************************************************
 *    Based on/Adapted from
 *    Titles: React Getting Started — The MERN Stack Tutorial
 *    Author: Gilbraith, Bryan
 *    Date: 2016
 *    Code version: 1.0
 *    Sources: https://medium.com/@bryantheastronaut/ok-here-we-go-b9f683c5a00c
 *
 ***************************************************************************************/

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
