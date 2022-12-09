
// events.gateway.ts
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
@WebSocketGateway(5000, {
    cors: true,
})
  export class AlarmGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;
      //소켓 연결시 유저목록에 추가
      public handleConnection(client: Socket): void {
        //console.log('connected', client.id);
        console.log(`⚡: ${client.id} user just connected!`);
        client.leave(client.id);
        client.on("newEvent", (event) => {
          console.log(event);
      });
        
    }

    //소켓 연결 해제시 유저목록에서 제거
    public handleDisconnect(client: Socket): void {
        console.log(client.data)
        //console.log('disonnected', client.id);
    
        console.log('🔥: A user disconnected');
      }

    @SubscribeMessage('ClientToServer')
    sendMessage(client: Socket, msg: any): void {
        console.log({name: client.id, msg})
        let x = "test"
        let snippt = {name: msg.name, msg:msg.msg}
        this.server.emit('ServerToClient', snippt)

        client.emit("notification", {
          title: "eventList[i].title",
          hour: "eventList[i].hour",
          mins: "eventList[i].minute",
      });

        
    }
    /*
    @SubscribeMessage('ClientToServer')
    async handleMessage(@MessageBody() data) {
      this.server.emit('ServerToClient', data);
      console.log(data)
    }

    @SubscribeMessage('sendMessage')
    sendMessage(client: Socket, message: string): void {
        console.log({id: client.id, message})
        this.server.emit('getMessage', {id: client.id, message})

    }
    */
}
