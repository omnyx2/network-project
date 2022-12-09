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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("../entities/order.entity");
const francchi_service_1 = require("../francchi/francchi.service");
const order_item_service_1 = require("../order-item/order-item.service");
const alarm_gateway_1 = require("../chatBackEnd/alarm.gateway");
let OrderService = class OrderService {
    constructor(orderRepository, orderItemService, francchiService, gd) {
        this.orderRepository = orderRepository;
        this.orderItemService = orderItemService;
        this.francchiService = francchiService;
        this.gd = gd;
        this.orderRepository = orderRepository;
        this.orderItemService = orderItemService;
    }
    findAll() {
        return this.orderRepository.find();
    }
    findOne(id) {
        return this.orderRepository.findOneBy({ id: id });
    }
    findbyFrancchiId(francchi_id) {
        return this.orderRepository.find({
            where: { "francchi_id": francchi_id }
        });
    }
    filterOrder(francchi_id) {
        console.log("play");
        return this.orderRepository.find({
            where: { "francchi_id": francchi_id }
        });
    }
    async updateOrder(id, order) {
        await this.orderRepository.update(id, order);
    }
    async findId(user_id, francchi_id) {
        return this.orderRepository.find({
            where: {
                "user_id": user_id,
                "francchi_id": francchi_id
            }
        });
    }
    orderItemCreate(orderItem, order_id) {
        orderItem.order_id = order_id;
        return orderItem;
    }
    async saveOrderItem(orderItem, order_id) {
        await this.orderItemService.saveOrderItem(this.orderItemCreate(orderItem, order_id));
    }
    async saveOrder(order) {
        if (order.orderItems.length == 0)
            return;
        order.orderTimeAt = new Date(Date.now());
        await this.orderRepository.save(order);
        let x = (await this.findId(order.user_id, order.francchi_id));
        let len = (await x.length);
        console.log(order.francchi);
        this.gd.server.emit('ServerToClient', { name: "", msg: "!  Alarm : new order in " + (await this.francchiService.findOne(order.francchi_id)).name + "  !" });
        try {
            for (let i = 0; i < order.orderItems.length; i++)
                await this.saveOrderItem(order.orderItems[i], x[len - 1].id);
        }
        catch (err) {
            console.log(err);
        }
    }
    async postOrder(order) {
        order.orderTimeAt = new Date(Date.now());
        await this.orderRepository.save(order);
    }
    async createOrder(orders) {
        try {
            for (let i = 0; i < orders.length; i++)
                await this.saveOrder(orders[i]);
        }
        catch (err) { }
    }
    async deleteOrder(id) {
        await this.orderRepository.delete({ id: id });
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        order_item_service_1.OrderItemService,
        francchi_service_1.FrancchiService,
        alarm_gateway_1.AlarmGateway])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map