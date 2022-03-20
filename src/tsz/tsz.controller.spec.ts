import { Test, TestingModule } from '@nestjs/testing';
import { TszController } from './tsz.controller';
import { TszService } from './tsz.service';

describe('TszController', () => {
  let controller: TszController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TszController],
      providers: [TszService],
    }).compile();

    controller = module.get<TszController>(TszController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
