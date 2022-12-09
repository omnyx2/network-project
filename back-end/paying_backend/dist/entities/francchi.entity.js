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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Francchi = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const order_entity_1 = require("./order.entity");
const workingdate_entity_1 = require("./workingdate.entity");
let Francchi = class Francchi {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Francchi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Francchi.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "addr" }),
    __metadata("design:type", String)
], Francchi.prototype, "addr", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Francchi.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Francchi.prototype, "full_checker", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Francchi.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workingdate_entity_1.WorkingDate, (workingdates) => workingdates.francchi),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Francchi.prototype, "workingdates", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (products) => products.francchi, { eager: true }),
    __metadata("design:type", Array)
], Francchi.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (orders) => orders.francchi),
    __metadata("design:type", Array)
], Francchi.prototype, "orders", void 0);
Francchi = __decorate([
    (0, typeorm_1.Entity)()
], Francchi);
exports.Francchi = Francchi;
//# sourceMappingURL=francchi.entity.js.map