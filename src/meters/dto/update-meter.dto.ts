import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMeterDto } from './create-meter.dto';

export class UpdateMeterDto extends PartialType(CreateMeterDto) {
  @ApiProperty({ example: 2, description: 'id of meter' })
  id: number;
}
