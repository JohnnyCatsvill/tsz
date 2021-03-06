import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';

@ApiTags('Issue')
@Controller('Issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  @ApiOperation({ summary: 'Create Issue' })
  @ApiResponse({type: Issue})
  async create(@Body() createNewsDto: CreateIssueDto) {
    return this.issueService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all Issues of this user plus all shared ones, all for staff' })
  @ApiResponse({type: [Issue]})
  async findAll() {
    return this.issueService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds Issue by id if user has acces to, all for staff' })
  @ApiResponse({type: Issue})
  @ApiParam({name: 'id', example: 2})
  async findOne(@Param('id') id: string) {
    return this.issueService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates Issue by id, staff only' })
  @ApiResponse({type: Issue})
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: UpdateIssueDto})
  async update(@Param('id') id: string, @Body() updateNewsDto: UpdateIssueDto) {
    return this.issueService.update(+id, updateNewsDto);
  }

  @Delete(':id/hard')
  @ApiOperation({ summary: 'Deletes Issue by id (hard delete), for staff' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Issue})
  async remove(@Param('id') id: string) {
    return this.issueService.remove(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes Issue by id if user has access to or staff' })
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: Issue})
  async softRemove(@Param('id') id: string) {
    return this.issueService.softRemove(+id);
  }
}
