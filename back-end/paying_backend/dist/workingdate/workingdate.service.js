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
exports.WorkingDateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const workingdate_entity_1 = require("../entities/workingdate.entity");
const workingdate_dto_1 = require("./workingdate.dto");
let WorkingDateService = class WorkingDateService {
    constructor(workingdateRepository) {
        this.workingdateRepository = workingdateRepository;
        this.workingdateRepository = workingdateRepository;
    }
    async getByFrancchiId(francchi_id) {
        return this.WD2WDTdo(await this.findByFrancchiId(francchi_id));
    }
    WD2WDTdo(workingdate) {
        let len = workingdate.length;
        var wdt = [];
        for (let i = 0; i < len; i++) {
            wdt.push(new workingdate_dto_1.WorkingDateDto());
            wdt[i].days = [];
            if (workingdate[i].w1) {
                wdt[i].days.push("월");
            }
            if (workingdate[i].w2) {
                wdt[i].days.push("화");
            }
            if (workingdate[i].w3) {
                wdt[i].days.push("수");
            }
            if (workingdate[i].w4) {
                wdt[i].days.push("목");
            }
            if (workingdate[i].w5) {
                wdt[i].days.push("금");
            }
            if (workingdate[i].w6) {
                wdt[i].days.push("토");
            }
            if (workingdate[i].w7) {
                wdt[i].days.push("일");
            }
            wdt[i].nowAndThen = [];
            wdt[i].nowAndThen.push(workingdate[i].start);
            wdt[i].nowAndThen.push(workingdate[i].end);
        }
        return wdt;
    }
    async findByFrancchiId(francchi_id) {
        return this.workingdateRepository.find({
            where: { "francchi_id": francchi_id }
        });
    }
    async deleteAll(francchi_id) {
        let x = (await this.findByFrancchiId(francchi_id));
        for (let i = 0; i < x.length; i++) {
        }
    }
    async deleteWorokingData(francchi_id) {
        await this.workingdateRepository.delete({ francchi_id: francchi_id });
    }
    async saveWorkingDateDto(workingdatedto, francchi_id) {
        let x = await (this.WDTdo2WD(workingdatedto, francchi_id));
        for (let i = 0; i < x.length; i++) {
            await this.saveWorkingDate(x[i]);
        }
    }
    async saveWorkingDate(workingdate) {
        await this.workingdateRepository.save(workingdate);
    }
    WDTdo2WD(workingdatedto, francchi_id) {
        let len = workingdatedto.length;
        var wd = [];
        for (let i = 0; i < len; i++) {
            wd.push(new workingdate_entity_1.WorkingDate());
            for (let j = 0; j < workingdatedto[i].days.length; j++) {
                let s = workingdatedto[i].days[j];
                if (s == "월") {
                    wd[i].w1 = true;
                }
                if (s == "화")
                    wd[i].w2 = true;
                if (s == "수")
                    wd[i].w3 = true;
                if (s == "목")
                    wd[i].w4 = true;
                if (s == "금")
                    wd[i].w5 = true;
                if (s == "토")
                    wd[i].w6 = true;
                if (s == "일")
                    wd[i].w7 = true;
            }
            wd[i].francchi_id = francchi_id;
            wd[i].start = workingdatedto[i].nowAndThen[0];
            wd[i].end = workingdatedto[i].nowAndThen[1];
        }
        return wd;
    }
};
WorkingDateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(workingdate_entity_1.WorkingDate)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WorkingDateService);
exports.WorkingDateService = WorkingDateService;
//# sourceMappingURL=workingdate.service.js.map