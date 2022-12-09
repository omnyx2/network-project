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
exports.FrancchiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const francchi_entity_1 = require("../entities/francchi.entity");
const product_service_1 = require("../product/product.service");
let FrancchiService = class FrancchiService {
    constructor(francchiRepository, productService) {
        this.francchiRepository = francchiRepository;
        this.productService = productService;
        this.francchiRepository = francchiRepository;
        this.productService = productService;
    }
    findAll() {
        return this.francchiRepository.find();
    }
    findOne(id) {
        return this.francchiRepository.findOneBy({ id: id });
    }
    async updateFrancchi(id, francchi) {
        await this.francchiRepository.update(id, francchi);
    }
    productCreate(product, francchi_id) {
        product.francchi_id = francchi_id;
        return product;
    }
    async saveProduct(product, francchi_id) {
        await this.productService.saveProduct(this.productCreate(product, francchi_id));
    }
    async saveFrancchi(francchi) {
        await this.francchiRepository.save(francchi);
        try {
            for (let i = 0; i < francchi.products.length; i++)
                await this.saveProduct(francchi.products[i], francchi.id);
        }
        catch (err) { }
    }
    async createFrancchi(francchis) {
        try {
            for (let i = 0; i < francchis.length; i++)
                await this.saveFrancchi(francchis[i]);
        }
        catch (err) { }
    }
    async deleteFrancchi(id) {
        await this.francchiRepository.delete({ id: id });
    }
};
FrancchiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(francchi_entity_1.Francchi)),
    __metadata("design:paramtypes", [typeorm_2.Repository, product_service_1.ProductService])
], FrancchiService);
exports.FrancchiService = FrancchiService;
//# sourceMappingURL=francchi.service.js.map