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
exports.OptionItemController = void 0;
const common_1 = require("@nestjs/common");
const option_item_service_1 = require("./option-item.service");
const option_item_entity_1 = require("../entities/option-item.entity");
let OptionItemController = class OptionItemController {
    constructor(optionItemService) {
        this.optionItemService = optionItemService;
        this.optionItemService = optionItemService;
    }
    async findAll() {
        const optionItemList = await this.optionItemService.findAll();
        return Object.assign({
            data: optionItemList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async findOne(id) {
        const foundOptionItem = await this.optionItemService.findOne(+id);
        return Object.assign({
            data: foundOptionItem,
            statuscode: 200,
            statusMsg: `data find success`
        });
    }
    async updateOptionItem(id, optionItem) {
        await this.optionItemService.updateOptionItem(id, optionItem);
        return Object.assign({
            data: Object.assign({}, optionItem),
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }
    async saveOptionItem(optionItem) {
        await this.optionItemService.saveOptionItem(optionItem);
        return Object.assign({
            data: Object.assign({}, optionItem),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async deleteOptionItem(id) {
        await this.optionItemService.deleteOptionItem(+id);
        return Object.assign({
            data: { optionItemId: id },
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
], OptionItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OptionItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, option_item_entity_1.OptionItem]),
    __metadata("design:returntype", Promise)
], OptionItemController.prototype, "updateOptionItem", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [option_item_entity_1.OptionItem]),
    __metadata("design:returntype", Promise)
], OptionItemController.prototype, "saveOptionItem", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OptionItemController.prototype, "deleteOptionItem", null);
OptionItemController = __decorate([
    (0, common_1.Controller)('option-item'),
    __metadata("design:paramtypes", [option_item_service_1.OptionItemService])
], OptionItemController);
exports.OptionItemController = OptionItemController;
//# sourceMappingURL=option-item.controller.js.map