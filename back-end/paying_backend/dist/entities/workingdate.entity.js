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
exports.WorkingDate = void 0;
const typeorm_1 = require("typeorm");
const francchi_entity_1 = require("./francchi.entity");
let WorkingDate = class WorkingDate {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WorkingDate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorkingDate.prototype, "francchi_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkingDate.prototype, "w1", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkingDate.prototype, "w2", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkingDate.prototype, "w3", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkingDate.prototype, "w4", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkingDate.prototype, "w5", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkingDate.prototype, "w6", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkingDate.prototype, "w7", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], WorkingDate.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], WorkingDate.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => francchi_entity_1.Francchi, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'francchi_id' }),
    __metadata("design:type", francchi_entity_1.Francchi)
], WorkingDate.prototype, "francchi", void 0);
WorkingDate = __decorate([
    (0, typeorm_1.Entity)()
], WorkingDate);
exports.WorkingDate = WorkingDate;
//# sourceMappingURL=workingdate.entity.js.map