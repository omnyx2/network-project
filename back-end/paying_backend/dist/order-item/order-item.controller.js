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
exports.OrderItemController = void 0;
const common_1 = require("@nestjs/common");
const order_item_service_1 = require("./order-item.service");
const order_item_entity_1 = require("../entities/order-item.entity");
let OrderItemController = class OrderItemController {
    constructor(orderItemService) {
        this.orderItemService = orderItemService;
        this.orderItemService = orderItemService;
    }
    async findAll() {
        const orderItemList = await this.orderItemService.findAll();
        return Object.assign({
            data: orderItemList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async findOne(id) {
        const foundOrderItem = await this.orderItemService.findOne(+id);
        return Object.assign({
            data: foundOrderItem,
            statuscode: 200,
            statusMsg: `data find success`
        });
    }
    async updateOrderItem(id, orderItem) {
        await this.orderItemService.updateOrderItem(id, orderItem);
        return Object.assign({
            data: Object.assign({}, orderItem),
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }
    async saveOrderItem(orderItem) {
        await this.orderItemService.saveOrderItem(orderItem);
        return Object.assign({
            data: Object.assign({}, orderItem),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async deleteOrderItem(id) {
        await this.orderItemService.deleteOrderItem(+id);
        return Object.assign({
            data: { orderItemId: id },
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
], OrderItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_item_entity_1.OrderItem]),
    __metadata("design:returntype", Promise)
], OrderItemController.prototype, "updateOrderItem", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_item_entity_1.OrderItem]),
    __metadata("design:returntype", Promise)
], OrderItemController.prototype, "saveOrderItem", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderItemController.prototype, "deleteOrderItem", null);
OrderItemController = __decorate([
    (0, common_1.Controller)('order-item'),
    __metadata("design:paramtypes", [order_item_service_1.OrderItemService])
], OrderItemController);
exports.OrderItemController = OrderItemController;
//# sourceMappingURL=order-item.controller.js.map