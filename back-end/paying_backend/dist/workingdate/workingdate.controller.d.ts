import { WorkingDateService } from './workingdate.service';
import { WorkingDateJson } from './workingdate.dto';
export declare class WorkingDateController {
    private workingdateService;
    constructor(workingdateService: WorkingDateService);
    findOrderbyFrancchi(francchi_id: number): Promise<WorkingDateJson>;
    saveWorkingDate(workingdatejson: WorkingDateJson): Promise<string>;
    deleteByFrancchi_id(francchi_id: number): Promise<string>;
}
