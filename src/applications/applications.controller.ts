import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './entities/application.entity';

@ApiTags('applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create application' })
  @ApiResponse({type: Application})
  create(@Body() createNewsDto: CreateApplicationDto) {
    return this.applicationsService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all applications of this user plus all shared ones, all for staff' })
  @ApiResponse({type: [Application]})
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds application by id if user has acces to, all for staff' })
  @ApiResponse({type: Application})
  @ApiParam({name: 'id', example: 2})
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updates application by id, staff only' })
  @ApiResponse({type: Application})
  @Patch(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: UpdateApplicationDto})
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateApplicationDto) {
    return this.applicationsService.update(+id, updateNewsDto);
  }

  @ApiOperation({ summary: 'Deletes application by id if user has access to, everyone for staff' })
  @Delete(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Application})
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(+id);
  }
}
