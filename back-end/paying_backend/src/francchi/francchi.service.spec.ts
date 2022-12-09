import { Test, TestingModule } from '@nestjs/testing';
import { FrancchiService } from './francchi.service';

describe('FrancchiService', () => {
  let service: FrancchiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrancchiService],
    }).compile();

    service = module.get<FrancchiService>(FrancchiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
