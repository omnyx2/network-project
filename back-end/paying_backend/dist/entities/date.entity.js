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
exports.Dates = void 0;
const typeorm_1 = require("typeorm");
let Dates = class Dates {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Dates.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "type0" }),
    __metadata("design:type", String)
], Dates.prototype, "d1", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "type0" }),
    __metadata("design:type", String)
], Dates.prototype, "d2", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "type0" }),
    __metadata("design:type", String)
], Dates.prototype, "d3", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "type0" }),
    __metadata("design:type", String)
], Dates.prototype, "d4", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "type0" }),
    __metadata("design:type", String)
], Dates.prototype, "d5", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "type0" }),
    __metadata("design:type", String)
], Dates.prototype, "d6", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "type0" }),
    __metadata("design:type", String)
], Dates.prototype, "d7", void 0);
Dates = __decorate([
    (0, typeorm_1.Entity)()
], Dates);
exports.Dates = Dates;
//# sourceMappingURL=date.entity.js.map