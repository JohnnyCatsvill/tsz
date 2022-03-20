import { ApiProperty } from "@nestjs/swagger";
import { SharedEntity } from "../../shared/shared.entity";
import { Tsz } from "../../tsz/entities/tsz.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Home extends SharedEntity {
  @Column()
  @ApiProperty({ example: 'Moscow', description: 'City where this home was build' })
  city: string;

  @Column()
  @ApiProperty({ example: 228, description: 'Home number' })
  number: string;

  @Column()
  @ApiProperty({ example: "ул. Петрова", description: 'Street name' })
  street: string;

  @ManyToOne(type => Tsz)
  @ApiProperty({type: Number, example: 2, description: 'Tsz this home assigned to' })
  tsz: Tsz;

  // @OneToMany(type => Flat, flat => flat.home)
  // @ApiProperty({type: [Flat], description: 'Flats in this house'})
  // flats: Flat[]

  // @OneToMany(type => News, news => news.home)
  // @ApiProperty({type: [News], description: 'news for this home' })
  // news: News[];
}
