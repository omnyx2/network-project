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
exports.FrancchiController = void 0;
const common_1 = require("@nestjs/common");
const francchi_service_1 = require("./francchi.service");
const francchi_entity_1 = require("../entities/francchi.entity");
let FrancchiController = class FrancchiController {
    constructor(francchiService) {
        this.francchiService = francchiService;
        this.francchiService = francchiService;
    }
    async findAll() {
        const francchiList = await this.francchiService.findAll();
        return Object.assign({
            data: francchiList,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async findOne(id) {
        const foundFrancchi = await this.francchiService.findOne(+id);
        return Object.assign({
            data: {
                id: id,
                name: foundFrancchi.name
            },
            statuscode: 200,
            statusMsg: `data find success`
        });
    }
    async updateFrancchi(id, francchi) {
        await this.francchiService.updateFrancchi(id, francchi);
        return Object.assign({
            data: Object.assign({}, francchi),
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }
    async saveFrancchi(francchi) {
        await this.francchiService.saveFrancchi(francchi);
        return Object.assign({
            data: Object.assign({}, francchi),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async createFrancchi(francchis) {
        await this.francchiService.createFrancchi(francchis);
        return Object.assign({
            data: { francchis },
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async deleteFrancchi(id) {
        await this.francchiService.deleteFrancchi(+id);
        return Object.assign({
            data: { francchiId: id },
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
], FrancchiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FrancchiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, francchi_entity_1.Francchi]),
    __metadata("design:returntype", Promise)
], FrancchiController.prototype, "updateFrancchi", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [francchi_entity_1.Francchi]),
    __metadata("design:returntype", Promise)
], FrancchiController.prototype, "saveFrancchi", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FrancchiController.prototype, "createFrancchi", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FrancchiController.prototype, "deleteFrancchi", null);
FrancchiController = __decorate([
    (0, common_1.Controller)('francchi'),
    __metadata("design:paramtypes", [francchi_service_1.FrancchiService])
], FrancchiController);
exports.FrancchiController = FrancchiController;
//# sourceMappingURL=francchi.controller.js.map