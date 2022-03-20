import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { News } from './entities/news.entity';
import { Home } from '../home/entities/home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News, User, Home])],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
