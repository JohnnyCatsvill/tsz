import { ApiProperty } from "@nestjs/swagger";
import { Application } from "../entities/application.entity";
import { ApplicationCategory } from "../enums/application-category.enum";

export class CreateApplicationDto {
  @ApiProperty({ example: 'Перегорела лампочка', description: 'Title of application (main problem)' })
  title: string;

  @ApiProperty({ example: 'Подьезд 2, 3 этаж', description: 'Description of application (details)' })
  description: Date;

  @ApiProperty({enum: ApplicationCategory, example: ApplicationCategory.Shared, description: 'Category of application, field to tell if this application shred for all users all private' })
  category: ApplicationCategory;

  @ApiProperty({ example: 2, description: 'Whom from this application came from' })
  id_purchase_document: number;
}
