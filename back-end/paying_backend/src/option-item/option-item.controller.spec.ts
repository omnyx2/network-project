import { Test, TestingModule } from '@nestjs/testing';
import { OptionItemController } from './option-item.controller';

describe('OptionItemController', () => {
  let controller: OptionItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionItemController],
    }).compile();

    controller = module.get<OptionItemController>(OptionItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
