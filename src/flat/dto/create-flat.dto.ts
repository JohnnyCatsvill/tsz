import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateFlatDto {
  @ApiPropertyOptional({format: 'double', example: 12.25, description: 'Area of flat' })
  area: number;

  @ApiProperty({ example: 228, description: 'Door number of flat' })
  number: number;

  @ApiPropertyOptional({ example: Date(), description: 'Entrance number' })
  entrance: number;

  @ApiProperty({ example: Date(), description: 'Number of home this flat in' })
  id_home: number;
}
