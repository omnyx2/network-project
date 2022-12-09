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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../entities/product.entity");
const product_option_service_1 = require("../product-option/product-option.service");
let ProductService = class ProductService {
    constructor(productRepository, productOptionService) {
        this.productRepository = productRepository;
        this.productOptionService = productOptionService;
        this.productRepository = productRepository;
        this.productOptionService = productOptionService;
    }
    findAll() {
        return this.productRepository.find();
    }
    findOne(id) {
        return this.productRepository.findOneBy({ id: id });
    }
    findbyFrancchiId(francchi_id) {
        return this.productRepository.find({
            where: { "francchi_id": francchi_id }
        });
    }
    async updateProduct(id, product) {
        await this.productRepository.update(id, product);
    }
    async findId(name, price) {
        return this.productRepository.find({
            where: {
                "name": name,
                "price": price
            }
        });
    }
    productOptionCreate(productOption, product_id) {
        productOption.product_id = product_id;
        return productOption;
    }
    async saveProductOption(productOption, product_id) {
        await this.productOptionService.saveProductOption(this.productOptionCreate(productOption, product_id));
    }
    async saveProduct(product) {
        await this.productRepository.save(product);
        try {
            let x = (await this.findId(product.name, product.price));
            let len = (await x.length);
            for (let i = 0; i < product.options.length; i++)
                await this.saveProductOption(product.options[i], x[len - 1].id);
        }
        catch (err) { }
    }
    async deleteProduct(id) {
        await this.productRepository.delete({ id: id });
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        product_option_service_1.ProductOptionService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map