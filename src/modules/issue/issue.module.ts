import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from './entities/issue.entity';
import { User } from '../user/entities/user.entity';
import { Flat } from '../flat/entities/flat.entity';
import { Home } from '../home/entities/home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Issue, User, Flat, Home])],
  controllers: [IssueController],
  providers: [IssueService]
})
export class IssueModule {}
