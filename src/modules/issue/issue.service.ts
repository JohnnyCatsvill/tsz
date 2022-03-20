import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flat } from '../flat/entities/flat.entity';
import { Home } from '../home/entities/home.entity';
import { User } from '../user/entities/user.entity';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
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

  async create(createIssueDto: CreateIssueDto): Promise<Issue> {
    const creator = await this.userRepository.findOne({id: createIssueDto.id_created_by});
    const flat = await this.flatRepository.findOne({id: createIssueDto.id_flat});
    const issue = this.issueRepository.create(createIssueDto);
    issue.flat = flat;
    issue.createdBy = creator;
    return this.issueRepository.save(issue);
  }

  async findAll(): Promise<[Issue[], number]> {
    return this.issueRepository.findAndCount();
  }

  async findOne(id: number): Promise<Issue> {
    return this.issueRepository.findOne({id});
  }

  async update(id: number, updateIsseDto: UpdateIssueDto): Promise<Issue> {
    await this.issueRepository.update({id}, {...updateIsseDto, updated_at: Date()});
    return this.issueRepository.findOne({id});
  }

  async softRemove(id: number): Promise<Issue> {
    await this.issueRepository.update({id}, {deleted_at: Date()});
    return this.issueRepository.findOne({id});
  }

  async remove(id: number): Promise<Issue> {
    const issue = await this.issueRepository.findOne({id});
    this.issueRepository.delete({id});
    return issue;
  }
}
