import { ApiProperty } from "@nestjs/swagger";
import { Home } from "src/home/entities/home.entity";
import { SharedEntity } from "src/shared/shared.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class Tsz extends SharedEntity {
  @Column()
  @ApiProperty({ example: 'Some tsz name', description: 'Name of tsz' })
  name: string;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: 228, description: 'Email of tsz' })
  email: string;

  @Column()
  @ApiProperty({ example: Date(), description: 'Phone of tsz' })
  phone: string;

  // @OneToMany(type => Home, home => home.tsz)
  // @ApiProperty({type: [Home], description: 'Homes of tsz'})
  // homes: Home[];

  @ManyToMany(type => User, user => user.tszs)
  @ApiProperty({type: [Number], example: [2], description: 'users this tsz attached to'})
  users: User[];
}
