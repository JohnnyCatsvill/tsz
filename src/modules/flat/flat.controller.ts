import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlatService } from './flat.service';
import { CreateFlatDto } from './dto/create-flat.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Flat } from './entities/flat.entity';

@ApiTags('Flat')
@Controller('Flat')
export class FlatController {
  constructor(private readonly flatService: FlatService) {}

  @Post()
  @ApiOperation({ summary: 'Create flat, staff only' })
  @ApiResponse({type: Flat})
  async create(@Body() createFlatDto: CreateFlatDto) {
    return this.flatService.create(createFlatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all flats, staff only' })
  @ApiResponse({type: [Flat]})
  async findAll() {
    return this.flatService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds flat by id, staff only' })
  @ApiResponse({type: Flat})
  @ApiParam({name: 'id', example: 2})
  async findOne(@Param('id') id: string) {
    return this.flatService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates flat by id, staff only' })
  @ApiResponse({type: Flat})
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: CreateFlatDto})
  async update(@Param('id') id: string, @Body() updateFlatDto: CreateFlatDto) {
    return this.flatService.update(+id, updateFlatDto);
  }

  @Delete(':id/hard')
  @ApiOperation({ summary: 'Deletes flat by id (hard delete), staff only' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Flat})
  async remove(@Param('id') id: string) {
    return this.flatService.remove(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes flat by id, staff only' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Flat})
  async softRemove(@Param('id') id: string) {
    return this.flatService.softRemove(+id);
  }
}
