import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TszService } from './tsz.service';
import { CreateTszDto } from './dto/create-tsz.dto';
import { UpdateTszDto } from './dto/update-tsz.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tsz')
@Controller('tsz')
export class TszController {
  constructor(private readonly tszService: TszService) {}

  @Post()
  create(@Body() createTszDto: CreateTszDto) {
    return this.tszService.create(createTszDto);
  }

  @Get()
  findAll() {
    return this.tszService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tszService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTszDto: UpdateTszDto) {
    return this.tszService.update(+id, updateTszDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tszService.remove(+id);
  }
}
