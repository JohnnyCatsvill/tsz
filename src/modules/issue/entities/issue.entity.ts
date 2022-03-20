import { ApiProperty } from "@nestjs/swagger";
import { Flat } from "../../flat/entities/flat.entity";
import { SharedEntity } from "../../shared/shared.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { IssueCategory } from "../enums/issue-category.enum";
import { IssuePriority } from "../enums/issue-priority.enum";
import { IssueStatus } from "../enums/issue-status.enum";

@Entity()
export class Issue extends SharedEntity {
  @Column()
  @ApiProperty({ example: 'Перегорела лампочка', description: 'Title of Issue (main problem)' })
  title: string;

  @Column()
  @ApiProperty({ example: 'Подьезд 2, 3 этаж', description: 'Description of Issue (details)' })
  description: string;

  @Column()
  @ApiProperty({enum: IssueCategory, example: IssueCategory.Shared, description: 'Category of Issue, field to tell if this Issue shred for all users all private' })
  category: IssueCategory;

  @ManyToOne(type => Flat, {onDelete: 'CASCADE'})
  @ApiProperty({ type: Number, example: 2, description: 'Flat this issue come from' })
  flat: Flat;

  @ManyToOne(type => User)
  @ApiProperty({ type: Number, example: 2, description: 'User this issue come from' })
  createdBy: User;

  @ManyToOne(type => User)
  @ApiProperty({ type: Number, example: 2, description: 'User this issue assigned to' })
  assignedTo: User;

  @Column({nullable: true})
  @ApiProperty({ enum: IssuePriority, example: IssuePriority.Common, description: 'Priority of task (filled by moderator)' })
  priority: IssuePriority;

  @Column()
  @ApiProperty({ example: false, description: 'Is task could be given to outsource', default: false })
  shared_pool: boolean;

  @Column({default: IssueStatus.Created})
  @ApiProperty({ enum: IssueStatus, example: IssueStatus.Created, description: 'Status of Issue', default: IssueStatus.Created })
  status: IssueStatus;
}
