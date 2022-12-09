import { Test, TestingModule } from '@nestjs/testing';
import { FrancchiController } from './francchi.controller';

describe('FrancchiController', () => {
  let controller: FrancchiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrancchiController],
    }).compile();

    controller = module.get<FrancchiController>(FrancchiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
