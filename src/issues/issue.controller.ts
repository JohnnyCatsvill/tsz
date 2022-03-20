import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IssuesService } from './issue.service';
import { CreateIssuesDto } from './dto/create-Issue.dto';
import { UpdateIssuesDto } from './dto/update-issue.dto';
import { Issues } from './entities/issue.entity';

@ApiTags('Issues')
@Controller('Issues')
export class IssuesController {
  constructor(private readonly issueService: IssuesService) {}

  @Post()
  @ApiOperation({ summary: 'Create Issue' })
  @ApiResponse({type: Issues})
  create(@Body() createNewsDto: CreateIssuesDto) {
    return this.issueService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all Issues of this user plus all shared ones, all for staff' })
  @ApiResponse({type: [Issues]})
  findAll() {
    return this.issueService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds Issue by id if user has acces to, all for staff' })
  @ApiResponse({type: Issues})
  @ApiParam({name: 'id', example: 2})
  findOne(@Param('id') id: string) {
    return this.issueService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updates Issue by id, staff only' })
  @ApiResponse({type: Issues})
  @Patch(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: UpdateIssuesDto})
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateIssuesDto) {
    return this.issueService.update(+id, updateNewsDto);
  }

  @ApiOperation({ summary: 'Deletes Issue by id if user has access to, everyone for staff' })
  @Delete(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Issues})
  remove(@Param('id') id: string) {
    return this.issueService.remove(+id);
  }
}