import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Flat } from "../../flat/entities/flat.entity";
import { Home } from "../../home/entities/home.entity";
import { SharedEntity } from "../../shared/shared.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { MeterType } from "../enums/meter-type.enum";

@Entity()
export class Meter extends SharedEntity {
  @Column()
  @ApiProperty({enum: MeterType, example: MeterType.Electricity, description: 'Type of meter' })
  meter_type: MeterType;

  @Column()
  @ApiProperty({ example: 228, description: 'Last value of meter' })
  last_value: number;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: Date(), description: 'Date of meter installing' })
  installing_date: Date;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: Date(), description: 'Last date of meter checking' })
  checking_date: Date;

  @ManyToOne(type => Flat)
  @ApiPropertyOptional({example: 2, description: 'flat this meter assigned to'})
  flat: Flat;

  @ManyToOne(type => Home)
  @ApiPropertyOptional({example: 2, description: 'home this meter assigned to'})
  home: Home;
}
