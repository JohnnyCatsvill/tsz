import { ApiProperty } from "@nestjs/swagger";
import { Flat } from "src/flat/entities/flat.entity";
import { SharedEntity } from "src/shared/shared.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class PurchaseDocument extends SharedEntity {
  @Column()
  @ApiProperty({example: 1225, description: 'Purchase document number' })
  number: number;

  @ManyToOne(type => User)
  @ApiProperty({ type: Number, example: 2, description: 'User, this document belongs to'})
  user: User

  @ManyToOne(type => Flat)
  @ApiProperty({ type: Number, example: 2, description: 'Flat, this document belongs to'})
  flat: Flat
}
