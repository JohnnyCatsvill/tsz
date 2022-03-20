import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateTszDto {
  @ApiProperty({ example: 'Some tsz name', description: 'Name of tsz' })
  name: string;

  @ApiPropertyOptional({ example: 228, description: 'email of tsz' })
  email: string;

  @ApiProperty({ example: '898989898989', description: 'phone of tsz' })
  phone: string;
}
