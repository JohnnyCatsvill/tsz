import { Module } from '@nestjs/common';
import { FlatService } from './flat.service';
import { FlatController } from './flat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flat } from './entities/flat.entity';
import { Home } from '../home/entities/home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flat, Home])],
  controllers: [FlatController],
  providers: [FlatService]
})
export class FlatModule {}
