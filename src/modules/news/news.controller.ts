import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { News } from './entities/news.entity';

@ApiTags('News')
@Controller('News')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'Create news, staff only' })
  @ApiResponse({type: News})
  async create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all news, user home connected to, everyone for staff' })
  @ApiResponse({type: [News]})
  async findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds news by id, only ones user connected to, everyone for staff' })
  @ApiResponse({type: News})
  @ApiParam({name: 'id', example: 2})
  async findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates news by id, staff only' })
  @ApiResponse({type: News})
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: CreateNewsDto})
  async update(@Param('id') id: string, @Body() updateNewsDto: CreateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes news by id, staff only' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: News})
  async remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
