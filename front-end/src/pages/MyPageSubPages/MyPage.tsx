import React, { Component } from "react";

import io from "socket.io-client"; //모듈 가져오기

const socket = io.connect("http://192.168.88.110:5000"); //백엔드 서버 포트를3001와 socket연결

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", //id
      msg: "", //메세지 내용
      messageList: [], //메세지 리스트
    };
  }
  sendMsg = (e) => {
    e.preventDefault();
    socket.emit("ClientToServer", {
      //"send message"라는 이벤트 발생 (1)
      name: this.state.name,
      msg: this.state.msg,
    });
    this.setState({
      name: "",
      msg: "",
    });
  };
  componentWillMount() {
    socket.on("ServerToClient", (message) => {
      //"receive message"라는 이벤트 받음(2)
      this.setState({
        messageList: [...this.state.messageList, message],
      });
    });
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <section className="chat_list">
          {this.state.messageList.map((item) => (
            <div className="messagelist">
              <p className="username">{item.name}</p>
              <p className="msg_text">{item.msg}</p>
            </div>
          ))}
        </section>
        <form className="chat_con" onSubmit={this.sendMsg}>
          <div className="chat_inputs">
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.name}
              name="name"
              id="id"
              placeholder="아이디"
            />
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.msg}
              name="msg"
              id="msg"
              placeholder="메세지내용"
            />
          </div>
          <button className="chat_button" type="submit">
            보내기
          </button>
        </form>
      </div>
    );
  }
}
export default MyPage;
