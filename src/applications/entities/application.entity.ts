import { ApiProperty } from "@nestjs/swagger";
import { SharedEntity } from "src/shared/shared.entity";
import { ApplicationCategory } from "../enums/application-category.enum";
import { ApplicationPriority } from "../enums/application-priority.enum";
import { ApplicationStatus } from "../enums/application-status.enum";

export class Application extends SharedEntity {
  @ApiProperty({ example: 'Перегорела лампочка', description: 'Title of application (main problem)' })
  title: string;

  @ApiProperty({ example: 'Подьезд 2, 3 этаж', description: 'Description of application (details)' })
  description: string;

  @ApiProperty({enum: ApplicationCategory, example: ApplicationCategory.Shared, description: 'Category of application, field to tell if this application shred for all users all private' })
  category: ApplicationCategory;

  @ApiProperty({ example: 2, description: 'Whom from this application came from' })
  id_purchase_document: number;

  @ApiProperty({ example: 2, description: 'Worker id that resolved this application' })
  resolved_by: number;

  @ApiProperty({ enum: ApplicationPriority, example: ApplicationPriority.Common, description: 'Priority of task (filled by moderator)' })
  priority: ApplicationPriority;

  @ApiProperty({ enum: ApplicationStatus, example: ApplicationStatus.Created, description: 'Status of application', default: ApplicationStatus.Created })
  status: ApplicationStatus;
}
