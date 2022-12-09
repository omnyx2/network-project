"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBackEndGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ChatBackEndGateway = class ChatBackEndGateway {
    handleConnection(client) {
        console.log('connected', client.id);
        client.leave(client.id);
    }
    handleDisconnect(client) {
        console.log(client.data);
        console.log('disonnected', client.id);
    }
    async handleMessage(data) {
        this.server.emit('ServerToClient', data);
        console.log(data);
    }
    sendMessage(client, message) {
        console.log({ id: client.id, message });
        this.server.emit('getMessage', { id: client.id, message });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatBackEndGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('ClientToServer'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatBackEndGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], ChatBackEndGateway.prototype, "sendMessage", null);
ChatBackEndGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(5000, {
        cors: {
            origin: 'http://localhost:3000',
        },
    })
], ChatBackEndGateway);
exports.ChatBackEndGateway = ChatBackEndGateway;
//# sourceMappingURL=chatBackEnd.gateway.js.map