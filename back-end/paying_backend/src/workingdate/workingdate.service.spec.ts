import { Test, TestingModule } from '@nestjs/testing';
import { WorkingdateService } from './workingdate.service';

describe('WorkingdateService', () => {
  let service: WorkingdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingdateService],
    }).compile();

    service = module.get<WorkingdateService>(WorkingdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
