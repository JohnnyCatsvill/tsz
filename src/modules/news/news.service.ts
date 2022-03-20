import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from '../home/entities/home.entity';
import { User } from '../user/entities/user.entity';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const news = this.newsRepository.create(createNewsDto);
    const author = await this.userRepository.findOne({id: createNewsDto.id_author});
    news.author = author;
    return this.newsRepository.save(news);
  }

  async findAll(): Promise<[News[], number]> {
    return this.newsRepository.findAndCount()
  }

  async findOne(id: number): Promise<News> {
    return this.newsRepository.findOne({id});
  }

  async update(id: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    const {id_author, ...remain} = updateNewsDto;
    const author = await this.userRepository.findOne({id: id_author});
    await this.newsRepository.update({id}, {...remain, author: author, updated_at: Date()})
    return this.newsRepository.findOne({id});
  }

  async remove(id: number): Promise<News> {
    const news = await this.newsRepository.findOne({id});
    this.newsRepository.delete({id});
    return news;
  }

  async softRemove(id: number): Promise<News> {
    await this.newsRepository.update({id}, {deleted_at: Date()})
    return this.newsRepository.findOne({id});
  }
}
