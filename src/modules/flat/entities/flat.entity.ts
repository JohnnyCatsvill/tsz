import { ApiProperty } from "@nestjs/swagger";
import { Home } from "../../home/entities/home.entity";
import { SharedEntity } from "../../shared/shared.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Flat extends SharedEntity {
  @Column({nullable: true, default: null})
  @ApiProperty({format: 'double', example: 12.25, description: 'Area of flat' })
  area: number;

  @Column()
  @ApiProperty({ example: 228, description: 'Door number of flat' })
  number: number;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: 2, description: 'Entrance number' })
  entrance: number;

  @ManyToOne(type => Home, {onDelete: 'CASCADE'})
  @ApiProperty({type: Number, example: 2, description: 'Home where this flat is'})
  home: Home

  // @OneToMany(type => PurchaseDocument, purchaseDocument => purchaseDocument.flat)
  // @ApiProperty({type: [PurchaseDocument], description: 'purchase document that attached to this flat'})
  // purchaseDocument: PurchaseDocument[]

  // @OneToMany(type => Issues, issue => issue.flat)
  // @ApiProperty({ type: [Issues], description: 'Issues that come from that flat' })
  // issue: Issues[];
}
