import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeterService } from './meter.service';
import { CreateMeterDto } from './dto/create-meter.dto';
import { UpdateMeterDto } from './dto/update-meter.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Meter } from './entities/meter.entity';
import { SendMeterValuesDto } from './dto/send-meter-values.dto';

@ApiTags('Meter')
@Controller('Meter')
export class MeterController {
  constructor(private readonly metersService: MeterService) {}

  @Post()
  @ApiOperation({ summary: 'Create meter, staff only' })
  @ApiResponse({type: Meter})
  async create(@Body() createNewsDto: CreateMeterDto) {
    return this.metersService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all meter user connected to, everyone for staff' })
  @ApiResponse({type: [Meter]})
  async findAll() {
    return this.metersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds meter by id, only ones user connected to, everyone for staff' })
  @ApiResponse({type: Meter})
  @ApiParam({name: 'id', example: 2})
  async findOne(@Param('id') id: string) {
    return this.metersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates meter by id, staff only' })
  @ApiResponse({type: Meter})
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: CreateMeterDto})
  async update(@Param('id') id: string, @Body() updateNewsDto: UpdateMeterDto) {
    return this.metersService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes meter by id, staff only' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Meter})
  async removeSoft(@Param('id') id: string) {
    return this.metersService.remove(+id);
  }

  @Delete(':id/hard')
  @ApiOperation({ summary: 'Deletes meter by id (hard delete), staff only' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Meter})
  async remove(@Param('id') id: string) {
    return this.metersService.remove(+id);
  }

  @Post(':id/sendValues')
  @ApiOperation({ summary: 'Sends new values of meter if user connected to' })
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: SendMeterValuesDto})
  @ApiResponse({type: Meter})
  async sendValues(@Body() sendMeterValuesDto: SendMeterValuesDto) {
    return this.metersService.sendValues(sendMeterValuesDto.id, sendMeterValuesDto.value);
  }
}
