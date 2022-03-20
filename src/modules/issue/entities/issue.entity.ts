import { ApiProperty } from "@nestjs/swagger";
import { Flat } from "../../flat/entities/flat.entity";
import { SharedEntity } from "../../shared/shared.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { IssuesCategory } from "../enums/issue-category.enum";
import { IssuesPriority } from "../enums/issue-priority.enum";
import { IssuesStatus } from "../enums/issue-status.enum";

@Entity()
export class Issues extends SharedEntity {
  @Column()
  @ApiProperty({ example: 'Перегорела лампочка', description: 'Title of Issue (main problem)' })
  title: string;

  @Column()
  @ApiProperty({ example: 'Подьезд 2, 3 этаж', description: 'Description of Issue (details)' })
  description: string;

  @Column()
  @ApiProperty({enum: IssuesCategory, example: IssuesCategory.Shared, description: 'Category of Issue, field to tell if this Issue shred for all users all private' })
  category: IssuesCategory;

  @ManyToOne(type => Flat)
  @ApiProperty({ type: Number, example: 2, description: 'Flat this issue come from' })
  flat: Flat;

  @ManyToOne(type => User)
  @ApiProperty({ type: Number, example: 2, description: 'User this issue come from' })
  createdBy: User;

  @ManyToOne(type => User)
  @ApiProperty({ type: Number, example: 2, description: 'User this issue assigned to' })
  assignedTo: User;

  @Column({nullable: true})
  @ApiProperty({ enum: IssuesPriority, example: IssuesPriority.Common, description: 'Priority of task (filled by moderator)' })
  priority: IssuesPriority;

  @Column()
  @ApiProperty({ example: false, description: 'Is task could be given to outsource', default: false })
  shared_pool: boolean;

  @Column({default: IssuesStatus.Created})
  @ApiProperty({ enum: IssuesStatus, example: IssuesStatus.Created, description: 'Status of Issue', default: IssuesStatus.Created })
  status: IssuesStatus;
}
