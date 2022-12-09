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
exports.ProductOptionController = void 0;
const common_1 = require("@nestjs/common");
const product_option_service_1 = require("./product-option.service");
const product_option_entity_1 = require("../entities/product-option.entity");
let ProductOptionController = class ProductOptionController {
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
        const foundProductOption = await this.optionItemService.findOne(+id);
        return Object.assign({
            data: foundProductOption,
            statuscode: 200,
            statusMsg: `data find success`
        });
    }
    async updateProductOption(id, optionItem) {
        await this.optionItemService.updateProductOption(id, optionItem);
        return Object.assign({
            data: Object.assign({}, optionItem),
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }
    async saveProductOption(optionItem) {
        await this.optionItemService.saveProductOption(optionItem);
        return Object.assign({
            data: Object.assign({}, optionItem),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async deleteProductOption(id) {
        await this.optionItemService.deleteProductOption(+id);
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
], ProductOptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductOptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_option_entity_1.ProductOption]),
    __metadata("design:returntype", Promise)
], ProductOptionController.prototype, "updateProductOption", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_option_entity_1.ProductOption]),
    __metadata("design:returntype", Promise)
], ProductOptionController.prototype, "saveProductOption", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductOptionController.prototype, "deleteProductOption", null);
ProductOptionController = __decorate([
    (0, common_1.Controller)('product-option'),
    __metadata("design:paramtypes", [product_option_service_1.ProductOptionService])
], ProductOptionController);
exports.ProductOptionController = ProductOptionController;
//# sourceMappingURL=product-option.controller.js.map