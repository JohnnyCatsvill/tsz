import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flat } from '../flat/entities/flat.entity';
import { Home } from '../home/entities/home.entity';
import { User } from '../user/entities/user.entity';
import { CreateIssuesDto } from './dto/create-issue.dto';
import { UpdateIssuesDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Home)
    private homeRepository: Repository<Home>,

    @InjectRepository(Flat)
    private flatRepository: Repository<Flat>,
  ) {}

  async create(createIssueDto: CreateIssuesDto): Promise<Issue> {
    const creator = this.userRepository.findOne({id: createIssueDto.id_created_by})
    return 'This action adds a new Isse';
  }

  async findAll() {
    return `This action returns all Isses`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} Isse`;
  }

  async update(id: number, updateIsseDto: UpdateIssuesDto) {
    return `This action updates a #${id} Isse`;
  }

  async remove(id: number) {
    return `This action removes a #${id} Isse`;
  }

  async softRemove(id: number) {
    return `This action removes a #${id} Isse`;
  }
}
