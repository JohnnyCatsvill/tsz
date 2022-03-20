import { Injectable } from '@nestjs/common';
import { CreateIssuesDto } from './dto/create-issue.dto';
import { UpdateIssuesDto } from './dto/update-issue.dto';

@Injectable()
export class IssuesService {
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
}
