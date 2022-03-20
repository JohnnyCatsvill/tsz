import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTszDto } from './create-tsz.dto';

export class UpdateTszDto extends PartialType(CreateTszDto) {
  // @ApiProperty({ example: 3, description: 'id of tsz' })
  // id: number;
}
