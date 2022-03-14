import { ApiProperty } from "@nestjs/swagger";
import { SharedEntity } from "src/shared/shared.entity";
import { MeterType } from "../enums/meter-type.enum";

export class Meter extends SharedEntity {
  @ApiProperty({enum: MeterType, example: MeterType.Electricity, description: 'Type of meter' })
  meter_type: MeterType;

  @ApiProperty({ example: 228, description: 'Last value of meter' })
  last_value: number;

  @ApiProperty({ example: Date(), description: 'Date of meter installing' })
  installing_date: Date;

  @ApiProperty({ example: Date(), description: 'Last date of meter checking' })
  checking_date: Date;
}
