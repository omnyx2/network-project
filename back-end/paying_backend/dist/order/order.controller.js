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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_entity_1 = require("../entities/order.entity");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderService = orderService;
    }
    async findAll() {
        const orderList = await this.orderService.findAll();
        console.log("try");
        return Object.assign({
            data: orderList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async findOne(id) {
        const foundOrder = await this.orderService.findOne(+id);
        return Object.assign({
            data: foundOrder,
            statuscode: 200,
            statusMsg: `data find success`
        });
    }
    async findOrderbyFrancchi(id) {
        const orderList = await this.orderService.findbyFrancchiId(+id);
        return Object.assign({
            data: orderList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async filterOrder(id) {
        const orderList = await this.orderService.filterOrder(+id);
        return Object.assign({
            data: orderList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async updateOrder(id, order) {
        console.log("order patch");
        console.log("order", id);
        const { orderItems } = order, obj = __rest(order, ["orderItems"]);
        console.log(obj);
        await this.orderService.updateOrder(id, order);
        return Object.assign({
            data: Object.assign({}, order),
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }
    async saveOrder(order) {
        console.log("post order ", order);
        await this.orderService.saveOrder(order);
        return Object.assign({
            data: Object.assign({}, order),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async saveOrder2(francchi_id, order) {
        console.log("post order2 ", order);
        for (let i = 0; i < order.orderItems.length; i++)
            console.log(i + "th orderItem option : " + order.orderItems[i].options);
        order.francchi_id = francchi_id;
        await this.orderService.saveOrder(order);
        return Object.assign({
            data: Object.assign({}, order),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async postOrder(order) {
        await this.orderService.postOrder(order);
        return Object.assign({
            data: Object.assign({}, order),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async deleteOrder(id) {
        await this.orderService.deleteOrder(+id);
        return Object.assign({
            data: { orderId: id },
            statusCode: 200,
            statusMsg: 'deleted successfully'
        });
    }
};
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/francchi/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findOrderbyFrancchi", null);
__decorate([
    (0, common_1.Get)('/filter/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "filterOrder", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_entity_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entity_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "saveOrder", null);
__decorate([
    (0, common_1.Post)(':francchi_id'),
    __param(0, (0, common_1.Param)('francchi_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_entity_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "saveOrder2", null);
__decorate([
    (0, common_1.Post)('post/:id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entity_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "postOrder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrder", null);
OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map