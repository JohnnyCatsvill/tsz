import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export abstract class SharedEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 2 })
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"} )
  @ApiProperty({ example: Date(), description: 'Creation date' } )
  created_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"} )
  @ApiProperty({ example: Date(), description: 'Date of update' } )
  updated_at: Date;

  @Column({nullable: true, default: null})
  @ApiPropertyOptional({ example: null, description: 'Deletion date' })
  deleted_at: Date;
}
