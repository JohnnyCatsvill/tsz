import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from '../home/entities/home.entity';
import { CreateFlatDto } from './dto/create-flat.dto';
import { Flat } from './entities/flat.entity';

@Injectable()
export class FlatService {
  constructor(
    @InjectRepository(Flat)
    private flatRepository: Repository<Flat>,
    
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  async create(createFlatDto: CreateFlatDto): Promise<Flat> {
    const home = await this.homeRepository.findOne({id: createFlatDto.id_home})
    const flat = this.flatRepository.create(createFlatDto);
    flat.home = home;
    return this.flatRepository.save(flat);
  }

  async findAll(): Promise<[Flat[], number]> {
    return this.flatRepository.findAndCount();
  }

  async findOne(id: number): Promise<Flat> {
    return this.flatRepository.findOne({id});
  }

  async update(id: number, updateFlatDto: CreateFlatDto): Promise<Flat> {
    await this.flatRepository.update({id}, {...updateFlatDto, updated_at: Date()});
    return this.flatRepository.findOne({id});
  }

  async softRemove(id: number): Promise<Flat> {
    await this.flatRepository.update({id}, {deleted_at: Date()});
    return this.flatRepository.findOne({id});
  }

  async remove(id: number): Promise<Flat> {
    const flat = await this.flatRepository.findOne({id});
    this.flatRepository.delete({id});
    return flat;
  }
}
