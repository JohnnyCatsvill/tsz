import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { Table } from './enums/tables.enum';
import { SharedEntity } from './shared.entity';

@Entity()
export class Events extends SharedEntity {
  @Column()
  @ApiProperty({ example: Table.Issue, description: 'Name of the table where event occur' })
  table: Table;

  @Column()
  @ApiProperty({ example: 2, description: 'Id of data in the selected table' })
  id: number;

  @Column()
  @ApiProperty({ example: "status", description: 'Name of field int the selected table' })
  field: string;

  @Column()
  @ApiProperty({ example: "created", description: 'Changed data' })
  data: string;
}
