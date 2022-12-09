import { FrancchiService } from './francchi.service';
import { Francchi } from '../entities/francchi.entity';
export declare class FrancchiController {
    private francchiService;
    constructor(francchiService: FrancchiService);
    findAll(): Promise<Francchi[]>;
    findOne(id: number): Promise<Francchi>;
    updateFrancchi(id: number, francchi: Francchi): Promise<string>;
    saveFrancchi(francchi: Francchi): Promise<string>;
    createFrancchi(francchis: Francchi[]): Promise<any>;
    deleteFrancchi(id: string): Promise<string>;
}
