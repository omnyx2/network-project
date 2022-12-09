"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionItemModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const option_item_service_1 = require("./option-item.service");
const option_item_controller_1 = require("./option-item.controller");
const option_item_entity_1 = require("../entities/option-item.entity");
let OptionItemModule = class OptionItemModule {
};
OptionItemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([option_item_entity_1.OptionItem])],
        providers: [option_item_service_1.OptionItemService],
        controllers: [option_item_controller_1.OptionItemController],
        exports: [option_item_service_1.OptionItemService],
    })
], OptionItemModule);
exports.OptionItemModule = OptionItemModule;
//# sourceMappingURL=option-item.module.js.map