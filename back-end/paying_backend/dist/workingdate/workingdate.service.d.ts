import { Repository } from 'typeorm';
import { WorkingDate } from '../entities/workingdate.entity';
import { WorkingDateDto } from './workingdate.dto';
export declare class WorkingDateService {
    private workingdateRepository;
    constructor(workingdateRepository: Repository<WorkingDate>);
    getByFrancchiId(francchi_id: number): Promise<WorkingDateDto[]>;
    WD2WDTdo(workingdate: WorkingDate[]): WorkingDateDto[];
    findByFrancchiId(francchi_id: number): Promise<WorkingDate[]>;
    deleteAll(francchi_id: number): Promise<void>;
    deleteWorokingData(francchi_id: number): Promise<void>;
    saveWorkingDateDto(workingdatedto: WorkingDateDto[], francchi_id: number): Promise<void>;
    saveWorkingDate(workingdate: WorkingDate): Promise<void>;
    WDTdo2WD(workingdatedto: WorkingDateDto[], francchi_id: number): WorkingDate[];
}
