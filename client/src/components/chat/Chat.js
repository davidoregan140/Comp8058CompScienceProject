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
import style from "./chatStyle";
import marked from "marked";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      author: "",
      text: ""
    };
    //binding all our functions to this class
    this.deleteChat = this.deleteChat.bind(this);
    this.updateChat = this.updateChat.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleChatUpdate = this.handleChatUpdate.bind(this);
  }
  updateChat(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }
  handleChatUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //if author or text changed, set it. if not, leave null and our PUT request
    //will ignore it.
    let author = this.state.author ? this.state.author : null;
    let text = this.state.text ? this.state.text : null;
    let chat = { author: author, text: text };
    this.props.onChatUpdate(id, chat);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      author: "",
      text: ""
    });
  }
  deleteChat(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onChatDelete(id);
    console.log("oops deleted");
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div style={style.chat}>
        <h3>{this.props.author}</h3>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <a style={style.updateLink} href="" onClick={this.updateChat}>
          update
        </a>
        <a style={style.deleteLink} href="" onClick={this.deleteChat}>
          delete
        </a>
        {this.state.toBeUpdated ? (
          <form onSubmit={this.handleChatUpdate}>
            <input
              type="text"
              placeholder="Update name..."
              style={style.chatFormAuthor}
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
            <input
              type="text"
              placeholder="Update your chat..."
              style={style.chatFormText}
              value={this.state.text}
              onChange={this.handleTextChange}
            />
            <input type="submit" style={style.chatFormPost} value="Update" />
          </form>
        ) : null}
      </div>
    );
  }
}

export default Chat;
