import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flat } from '../flat/entities/flat.entity';
import { Home } from '../home/entities/home.entity';
import { CreateMeterDto } from './dto/create-meter.dto';
import { SendMeterValuesDto } from './dto/send-meter-values.dto';
import { UpdateMeterDto } from './dto/update-meter.dto';
import { Meter } from './entities/meter.entity';
import { MeterType } from './enums/meter-type.enum';

@Injectable()
export class MeterService {
  constructor(
    @InjectRepository(Meter)
    private meterRepository: Repository<Meter>,

    @InjectRepository(Meter)
    private flatRepository: Repository<Flat>,

    @InjectRepository(Meter)
    private homeRepository: Repository<Home>,
  ) {}

  async create(createMeterDto: CreateMeterDto): Promise<Meter> {
    let home: Home = null;
    let flat: Flat = null;
    if (createMeterDto.is_shared) {
      home = await this.homeRepository.findOne({id: createMeterDto.flat_or_home_id});
    }
    else {
      flat = await this.flatRepository.findOne({id: createMeterDto.flat_or_home_id});
    }
    const meter = this.meterRepository.create(createMeterDto);
    meter.flat = flat;
    meter.home = home;
    return this.meterRepository.save(meter);
  }

  async findAll(): Promise<[Meter[], number]> {
    return this.meterRepository.findAndCount();
  }

  async findOne(id: number): Promise<Meter> {
    return this.meterRepository.findOne({id});
  }

  async update(id: number, updateMeterDto: UpdateMeterDto): Promise<Meter> {
    await this.meterRepository.update({id}, {...updateMeterDto, updated_at: Date()})
    return this.meterRepository.findOne({id});
  }

  async remove(id: number): Promise<Meter> {
    const meter = await this.meterRepository.findOne({id});
    this.meterRepository.delete({id});
    return meter;
  }

  async softRemove(id: number): Promise<Meter> {
    await this.meterRepository.update({id}, {deleted_at: Date()})
    return this.meterRepository.findOne({id});
  }

  async sendValues(id: number, value: number): Promise<Meter> {
    await this.meterRepository.update({id}, {last_value: value, updated_at: Date()})
    return this.meterRepository.findOne({id});
  }
}
