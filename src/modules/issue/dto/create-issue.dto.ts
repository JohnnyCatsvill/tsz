import { ApiProperty } from "@nestjs/swagger";
import { IssueCategory } from "../enums/issue-category.enum";

export class CreateIssueDto {
  @ApiProperty({ example: 'Перегорела лампочка', description: 'Title of issue (main problem)' })
  title: string;

  @ApiProperty({ example: 'Подьезд 2, 3 этаж', description: 'Description of issue (details)' })
  description: Date;

  @ApiProperty({enum: IssueCategory, example: IssueCategory.Shared, description: 'Category of issue, field to tell if this application shred for all users all private' })
  category: IssueCategory;

  @ApiProperty({ example: 2, description: 'Whom from this issue came from' })
  id_created_by: number;

  @ApiProperty({ example: 2, description: 'Whom from this issue came from' })
  id_flat: number;
}
