import { Test, TestingModule } from '@nestjs/testing';
import { TszService } from './tsz.service';

describe('TszService', () => {
  let service: TszService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TszService],
    }).compile();

    service = module.get<TszService>(TszService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
