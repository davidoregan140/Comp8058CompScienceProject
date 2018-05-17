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

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: "", text: "" };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onChatSubmit({ author: author, text: text });
    this.setState({ author: "", text: "" });
  }
  render() {
    return (
      <form style={style.chatForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name..."
          style={style.chatFormAuthor}
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          style={style.chatFormText}
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" style={style.chatFormPost} value="Post" />
      </form>
    );
  }
}

export default ChatForm;
