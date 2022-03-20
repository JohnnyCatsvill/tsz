import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MeterType } from '../enums/meter-type.enum';

export class CreateMeterDto {
  @ApiProperty({enum: MeterType, example: MeterType.Electricity, description: 'Type of meter' })
  meter_type: MeterType;

  @ApiProperty({ example: 228, description: 'Last value of meter' })
  last_value: number;

  @ApiPropertyOptional({ example: Date(), description: 'Date of meter installing' })
  installing_date: Date;

  @ApiPropertyOptional({ example: Date(), description: 'Last date of meter checking' })
  checking_date: Date;

  @ApiProperty({ example: false, description: 'Is this meter reads values of whole building' })
  is_shared: boolean;

  @ApiProperty({ example: 1, description: 'id of flat or home, depends on is_shared property' })
  flat_or_home_id: number;
}
