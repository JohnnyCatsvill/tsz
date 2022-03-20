import { Module } from '@nestjs/common';
import { IssuesService } from './issue.service';
import { IssuesController } from './issue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issues } from './entities/issue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Issues])],
  controllers: [IssuesController],
  providers: [IssuesService]
})
export class IssuesModule {}
