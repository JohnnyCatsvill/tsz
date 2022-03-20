import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHomeDto } from './create-home.dto';

export class UpdateHomeDto extends PartialType(CreateHomeDto) {
  @ApiProperty({ example: 2, description: 'id of home' })
  id: number;
}
