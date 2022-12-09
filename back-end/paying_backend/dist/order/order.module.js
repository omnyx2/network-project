"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const order_entity_1 = require("../entities/order.entity");
const francchi_module_1 = require("../francchi/francchi.module");
const order_item_module_1 = require("../order-item/order-item.module");
const alarm_module_1 = require("../chatBackEnd/alarm.module");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order]), francchi_module_1.FrancchiModule, order_item_module_1.OrderItemModule, alarm_module_1.ChatBackEndModule],
        providers: [order_service_1.OrderService],
        controllers: [order_controller_1.OrderController]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map