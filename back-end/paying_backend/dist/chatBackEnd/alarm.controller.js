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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const alarm_gateway_1 = require("./alarm.gateway");
let ChatController = class ChatController {
    constructor(gd) {
        this.gd = gd;
        this.gd = gd;
    }
    francchi() {
        return { message: 'Hello world!' };
    }
    alarmtester() {
        this.gd.server.emit('getMessage', { message: "message" });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "francchi", null);
__decorate([
    (0, common_1.Get)("/test/sendmessage"),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "alarmtester", null);
ChatController = __decorate([
    (0, common_1.Controller)('Alarm'),
    __metadata("design:paramtypes", [alarm_gateway_1.AlarmGateway])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=alarm.controller.js.map