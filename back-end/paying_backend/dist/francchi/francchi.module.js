"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrancchiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const francchi_service_1 = require("./francchi.service");
const product_module_1 = require("../product/product.module");
const francchi_controller_1 = require("./francchi.controller");
const francchi_entity_1 = require("../entities/francchi.entity");
let FrancchiModule = class FrancchiModule {
};
FrancchiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([francchi_entity_1.Francchi]), product_module_1.ProductModule],
        providers: [francchi_service_1.FrancchiService],
        controllers: [francchi_controller_1.FrancchiController],
        exports: [francchi_service_1.FrancchiService]
    })
], FrancchiModule);
exports.FrancchiModule = FrancchiModule;
//# sourceMappingURL=francchi.module.js.map