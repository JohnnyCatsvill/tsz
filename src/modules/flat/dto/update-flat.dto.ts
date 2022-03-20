import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFlatDto } from './create-flat.dto';

export class UpdateFlatDto extends PartialType(CreateFlatDto) {
  @ApiProperty({ example: 2, description: 'id of flat' })
  id: number;
}
