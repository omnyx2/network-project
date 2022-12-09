import { Test, TestingModule } from '@nestjs/testing';
import { OptionItemService } from './option-item.service';

describe('OptionItemService', () => {
  let service: OptionItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionItemService],
    }).compile();

    service = module.get<OptionItemService>(OptionItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
