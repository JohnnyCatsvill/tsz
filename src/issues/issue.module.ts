import { Module } from '@nestjs/common';
import { IssuesService } from './issue.service';
import { IssuesController } from './issue.controller';

@Module({
  controllers: [IssuesController],
  providers: [IssuesService]
})
export class IssuesModule {}
