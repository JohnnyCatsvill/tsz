import { ApiProperty } from "@nestjs/swagger";
import { SharedEntity } from "../../shared/shared.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { UserRole } from "../enums/user-role.enum";

@Entity()
export class User extends SharedEntity {
  @Column()
  @ApiProperty({example: 'JohnyCoffee', description: 'Login of user' })
  login: string;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: 'johnCoffe@gmail.com', description: 'Email of user' })
  email: string;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: '+79999999999', description: 'Phone of user' })
  phone: string;

  @Column()
  @ApiProperty({ example: 'password', description: 'Password of user' })
  password: string;

  @Column()
  @ApiProperty({ example: 'Иван', description: 'Firstname of user' })
  firstname: string;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: 'Иваныч', description: 'Lastname of user' })
  lastname: string;

  @Column({nullable: true, default: null})
  @ApiProperty({ example: 'Иванов', description: 'Middlename of user' })
  middlename: string;
  
  @Column({default: UserRole.Client})
  @ApiProperty({enum: UserRole, example: UserRole.Client, description: 'Role of user, to have or have not access to certain endpoints', default: UserRole.Client })
  role: UserRole;

  // @OneToMany(type => PurchaseDocument, purchaseDocument => purchaseDocument.user)
  // @ApiProperty({type: [PurchaseDocument], description: 'purchase documents that attached to this user'})
  // purchaseDocuments: PurchaseDocument[];

  // @OneToMany(type => News, news => news.user)
  // @ApiProperty({type: [News], description: 'news from this user' })
  // news: News[];

  // @OneToMany(type => Issues, issue => issue.assignedTo)
  // @ApiProperty({ type: [Issues], description: 'Issues that assigned to this user' })
  // assignedIssues: Issues[];

  // @OneToMany(type => Issues, issue => issue.createdBy)
  // @ApiProperty({ type: [Issues], description: 'Issues that was created by this user' })
  // createdIssues: Issues[];
}
