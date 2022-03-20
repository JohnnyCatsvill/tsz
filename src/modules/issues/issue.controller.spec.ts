import { Test, TestingModule } from '@nestjs/testing';
import { IssuesController } from './issue.controller';
import { IssuesService } from './issue.service';

describe('IssueController', () => {
  let controller: IssuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuesController],
      providers: [IssuesService],
    }).compile();

    controller = module.get<IssuesController>(IssuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
