import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Home } from './entities/home.entity';

@ApiTags('Home')
@Controller('Home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post()
  @ApiOperation({ summary: 'Create home, staff only' })
  @ApiResponse({type: Home})
  async create(@Body() createHomeDto: CreateHomeDto) {
    return this.homeService.create(createHomeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all homes, staff only' })
  @ApiResponse({type: [Home]})
  async findAll() {
    return this.homeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds home by id, staff only' })
  @ApiResponse({type: Home})
  @ApiParam({name: 'id', example: 2})
  async findOne(@Param('id') id: string) {
    return this.homeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates home by id, staff only' })
  @ApiResponse({type: Home})
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: CreateHomeDto})
  async update(@Param('id') id: string, @Body() updateHomeDto: CreateHomeDto) {
    return this.homeService.update(+id, updateHomeDto);
  }

  @Delete(':id/hard')
  @ApiOperation({ summary: 'Deletes home by id (hard delete), staff only' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Home})
  async remove(@Param('id') id: string) {
    return this.homeService.remove(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes home by id, staff only' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Home})
  async softRemove(@Param('id') id: string) {
    return this.homeService.softRemove(+id);
  }
}
