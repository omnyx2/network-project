
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
        console.log('connected', client.id);
        client.leave(client.id);
        //client.data.roomId = `room:lobby`;
        //client.join('room:lobby');
    }

    //소켓 연결 해제시 유저목록에서 제거
    public handleDisconnect(client: Socket): void {
        console.log(client.data)
        
        console.log('disonnected', client.id);
    }



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
}
