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
exports.OrderItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_item_entity_1 = require("../entities/order-item.entity");
const option_item_service_1 = require("../option-item/option-item.service");
let OrderItemService = class OrderItemService {
    constructor(orderItemRepository, optionItemService) {
        this.orderItemRepository = orderItemRepository;
        this.optionItemService = optionItemService;
        this.orderItemRepository = orderItemRepository;
        this.optionItemService = optionItemService;
    }
    findAll() {
        return this.orderItemRepository.find();
    }
    findOne(id) {
        return this.orderItemRepository.findOneBy({ id: id });
    }
    async findId(name, price) {
        return this.orderItemRepository.find({
            where: {
                "name": name,
                "price": price
            }
        });
    }
    async updateOrderItem(id, orderItem) {
        await this.orderItemRepository.update(id, orderItem);
    }
    optionItemCreate(optionItem, orderItem_id) {
        optionItem.orderItem_id = orderItem_id;
        console.log("orderItem", orderItem_id);
        return optionItem;
    }
    async saveOptionItem(optionItem, orderItem_id) {
        await this.optionItemService.saveOptionItem(this.optionItemCreate(optionItem, orderItem_id));
    }
    async saveOrderItem(orderItem) {
        let { id } = orderItem, x = __rest(orderItem, ["id"]);
        await this.orderItemRepository.save(x);
        try {
            let x = (await this.findId(orderItem.name, orderItem.price));
            let len = (await x.length);
            for (let i = 0; i < orderItem.options.length; i++)
                await this.saveOptionItem(orderItem.options[i], x[len - 1].id);
        }
        catch (err) { }
    }
    async deleteOrderItem(id) {
        await this.orderItemRepository.delete({ id: id });
    }
};
OrderItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        option_item_service_1.OptionItemService])
], OrderItemService);
exports.OrderItemService = OrderItemService;
//# sourceMappingURL=order-item.service.js.map