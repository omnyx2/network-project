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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_entity_1 = require("../entities/product.entity");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.productService = productService;
    }
    async findAll() {
        const productList = await this.productService.findAll();
        return Object.assign({
            data: productList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async findOne(id) {
        const foundProduct = await this.productService.findOne(+id);
        return Object.assign({
            data: foundProduct,
            statuscode: 200,
            statusMsg: `data find success`
        });
    }
    async findProductbyFrancchi(id) {
        const orderList = await this.productService.findbyFrancchiId(+id);
        return Object.assign({
            data: orderList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async updateProduct(id, product) {
        await this.productService.updateProduct(id, product);
        return Object.assign({
            data: Object.assign({}, product),
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }
    async saveProduct(product) {
        await this.productService.saveProduct(product);
        return Object.assign({
            data: Object.assign({}, product),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async deleteProduct(id) {
        await this.productService.deleteProduct(+id);
        return Object.assign({
            data: { productId: id },
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
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/francchi/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProductbyFrancchi", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "saveProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map