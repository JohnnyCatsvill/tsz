import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({type: User})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all users, staff only' })
  @ApiResponse({type: [User]})
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds user by id, user himself and staff only' })
  @ApiResponse({type: User})
  @ApiParam({name: 'id', example: 2})
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updates user by id, user himself and staff only' })
  @ApiResponse({type: User})
  @Patch(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiBody({type: CreateUserDto})
  async update(@Param('id') id: string, @Body() updateNewsDto: UpdateUserDto) {
    return this.userService.update(+id, updateNewsDto);
  }

  @ApiOperation({ summary: 'Deletes user by id, user himself and staff only' })
  @Delete(':id')
  @ApiParam({name: 'id', example: 2})
  @ApiResponse({type: User})
  async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
