import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  @ApiProperty({ example: 2, description: 'id of news' })
  id: number;
}
