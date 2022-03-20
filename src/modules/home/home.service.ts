import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHomeDto } from './dto/create-home.dto';
import { Home } from './entities/home.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  async create(createHomeDto: CreateHomeDto): Promise<Home> {
    const home = this.homeRepository.create(createHomeDto);
    return this.homeRepository.save(home);
  }

  async findAll(): Promise<[Home[], number]> {
    return this.homeRepository.findAndCount();
  }

  async findOne(id: number): Promise<Home> {
    return this.homeRepository.findOne({id});
  }

  async update(id: number, updateHomeDto: CreateHomeDto) {
    await this.homeRepository.update({id}, {...updateHomeDto, updated_at: Date()})
    return this.homeRepository.findOne({id});
  }

  async softRemove(id: number): Promise<Home> {
    await this.homeRepository.update({id}, {deleted_at: Date()});
    return this.homeRepository.findOne({id});
  }

  async remove(id: number): Promise<Home> {
    const home = await this.homeRepository.findOne({id});
    this.homeRepository.delete({id});
    return home;
  }
}
