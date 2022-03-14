import { ApiProperty } from '@nestjs/swagger';

export class SendMeterValuesDto {
  @ApiProperty({ example: 228, description: 'Current value of meter' })
  value: number;
}
