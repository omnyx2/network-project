import { Test, TestingModule } from '@nestjs/testing';
import { WorkingdateController } from './workingdate.controller';

describe('WorkingdateController', () => {
  let controller: WorkingdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingdateController],
    }).compile();

    controller = module.get<WorkingdateController>(WorkingdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
