import { Module } from '@nestjs/common';
import { TszService } from './tsz.service';
import { TszController } from './tsz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tsz } from './entities/tsz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tsz])],
  controllers: [TszController],
  providers: [TszService]
})
export class TszModule {}
