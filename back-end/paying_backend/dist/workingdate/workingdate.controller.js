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
exports.WorkingDateController = void 0;
const common_1 = require("@nestjs/common");
const workingdate_service_1 = require("./workingdate.service");
const workingdate_dto_1 = require("./workingdate.dto");
let WorkingDateController = class WorkingDateController {
    constructor(workingdateService) {
        this.workingdateService = workingdateService;
        this.workingdateService = workingdateService;
    }
    async findOrderbyFrancchi(francchi_id) {
        const data = await this.workingdateService.getByFrancchiId(francchi_id);
        return Object.assign({
            data: data,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
    async saveWorkingDate(workingdatejson) {
        let workingdatedto = workingdatejson.data;
        let francchi_id = workingdatejson.francchi_id;
        await this.workingdateService.deleteWorokingData(francchi_id);
        await this.workingdateService.saveWorkingDateDto(workingdatedto, francchi_id);
        return Object.assign({
            data: Object.assign({}, workingdatejson),
            statusCode: 200,
            statusMsg: 'save successfully'
        });
    }
    async deleteByFrancchi_id(francchi_id) {
        this.workingdateService.deleteWorokingData(francchi_id);
        return Object.assign({
            data: francchi_id,
            statusCode: 200,
            statusMsg: `data view Success`,
        });
    }
};
__decorate([
    (0, common_1.Get)('/francchi/:id'),
    __param(0, (0, common_1.Param)('francchi_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkingDateController.prototype, "findOrderbyFrancchi", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workingdate_dto_1.WorkingDateJson]),
    __metadata("design:returntype", Promise)
], WorkingDateController.prototype, "saveWorkingDate", null);
__decorate([
    (0, common_1.Delete)("delete/:francchi_id"),
    __param(0, (0, common_1.Param)('francchi_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkingDateController.prototype, "deleteByFrancchi_id", null);
WorkingDateController = __decorate([
    (0, common_1.Controller)('workingdate'),
    __metadata("design:paramtypes", [workingdate_service_1.WorkingDateService])
], WorkingDateController);
exports.WorkingDateController = WorkingDateController;
//# sourceMappingURL=workingdate.controller.js.map