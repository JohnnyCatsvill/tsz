import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIssuesDto } from './dto/create-issue.dto';
import { UpdateIssuesDto } from './dto/update-issue.dto';
import { Issues } from './entities/issue.entity';

@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(Issues)
    private issueRepository: Repository<Issues>,
  ) {}

  create(createIsseDto: CreateIssuesDto) {
    return 'This action adds a new Isse';
  }

  findAll() {
    return `This action returns all Isses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Isse`;
  }

  update(id: number, updateIsseDto: UpdateIssuesDto) {
    return `This action updates a #${id} Isse`;
  }

  remove(id: number) {
    return `This action removes a #${id} Isse`;
  }

  softRemove(id: number) {
    return `This action removes a #${id} Isse`;
  }
}
