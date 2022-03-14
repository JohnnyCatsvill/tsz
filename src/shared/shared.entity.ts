import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SharedEntity {
  @ApiProperty({ example: 2 })
  id: number;

  @ApiProperty({ example: Date(), description: 'Creation date' })
  created_at: Date;

  @ApiProperty({ example: Date(), description: 'Date of update' })
  updated_at: Date;

  @ApiPropertyOptional({ example: null, description: 'Deletion date' })
  deleted_at: Date;
}
