import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,
  ) {}

  create(createIsseDto: CreateIssueDto) {
    return 'This action adds a new Isse';
  }

  findAll() {
    return `This action returns all Isses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Isse`;
  }

  update(id: number, updateIsseDto: UpdateIssueDto) {
    return `This action updates a #${id} Isse`;
  }

  remove(id: number) {
    return `This action removes a #${id} Isse`;
  }

  softRemove(id: number) {
    return `This action removes a #${id} Isse`;
  }
}
