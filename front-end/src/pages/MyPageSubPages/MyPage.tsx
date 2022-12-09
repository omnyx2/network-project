import React, { Component } from "react";


import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import io from "socket.io-client"; //모듈 가져오기
import "react-toastify/dist/ReactToastify.css";
import { SOCKET_URL } from '../../configs';

const socket = io.connect(SOCKET_URL);

class MyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "", //id
      msg: "", //메세지 내용
      messageList: [], //메세지 리스트
      orderList: []
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
      console.log(message)
      //"receive message"라는 이벤트 받음(2) 
      this.setState({
        messageList: [...this.state.messageList, message],
      });
      
    });
    // socket.on("notification", (data) =>{ 
    //   toast.success(` It's time for ${data.title}`)
    // });
    
    // // socket.on("newOrder", (newOrder) => {
    //   console.log(newOrder)
    //   //"receive message"라는 이벤트 받음(2)
    //   this.setState({
    //     orderList: [...this.state.orderList, newOrder],
    //   });
    // });
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
      <ToastContainer />

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
