import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTszDto } from './dto/create-tsz.dto';
import { UpdateTszDto } from './dto/update-tsz.dto';
import { Tsz } from './entities/tsz.entity';

@Injectable()
export class TszService {
  constructor(
    @InjectRepository(Tsz)
    private tszRepository: Repository<Tsz>
  ){}

  create(createTszDto: CreateTszDto) {
    const tsz = this.tszRepository.create(createTszDto);
    return this.tszRepository.save(tsz);
  }

  findAll() {
    return this.tszRepository.findAndCount();
  }

  findOne(id: number) {
    return this.tszRepository.findOne({id});
  }

  update(id: number, updateTszDto: UpdateTszDto) {
    return this.tszRepository.update({id}, updateTszDto);
  }

  remove(id: number) {
    return this.tszRepository.delete({id});
  }
}
