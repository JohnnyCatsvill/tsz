import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { News } from './entities/news.entity';

@ApiTags('news')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'Create news, staff only' })
  @ApiResponse({type: News})
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all news, user home connected to, everyone for staff' })
  @ApiResponse({type: [News]})
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds news by id, only ones user connected to, everyone for staff' })
  @ApiResponse({type: News})
  @ApiParam({name: 'id', example: 2})
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updates news by id, staff only' })
  @ApiResponse({type: News})
  @Patch(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: CreateNewsDto})
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @ApiOperation({ summary: 'Deletes news by id, staff only' })
  @Delete(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: News})
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
