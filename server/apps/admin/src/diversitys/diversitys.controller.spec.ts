import { Test, TestingModule } from '@nestjs/testing';
import { DiversitysController } from './diversitys.controller';

describe('Diversitys Controller', () => {
  let controller: DiversitysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiversitysController],
    }).compile();

    controller = module.get<DiversitysController>(DiversitysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
