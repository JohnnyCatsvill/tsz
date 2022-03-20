import { ApiProperty } from "@nestjs/swagger";

export class CreateHomeDto {
  @ApiProperty({ example: 'Moscow', description: 'City where this home was build' })
  city: string;

  @ApiProperty({ example: 228, description: 'Home number' })
  number: string;

  @ApiProperty({ example: Date(), description: 'Street name' })
  street: string;

  @ApiProperty({ example: Date(), description: 'Tsz this home assigned to' })
  id_tsz: number;
}
