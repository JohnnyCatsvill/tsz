import { Module } from '@nestjs/common';
import { MeterService } from './meter.service';
import { MeterController } from './meter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from '../home/entities/home.entity';
import { Flat } from '../flat/entities/flat.entity';
import { Meter } from './entities/meter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meter, Flat, Home])],
  controllers: [MeterController],
  providers: [MeterService]
})
export class MeterModule {}
