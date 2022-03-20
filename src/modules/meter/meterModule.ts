import { Module } from '@nestjs/common';
import { MeterService } from './meter.service';
import { MeterController } from './meterController';

@Module({
  controllers: [MeterController],
  providers: [MeterService]
})
export class MeterModule {}
