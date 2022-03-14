import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ApplicationPriority } from '../enums/application-priority.enum';
import { ApplicationStatus } from '../enums/application-status.enum';
import { CreateApplicationDto } from './create-application.dto';

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {
  @ApiProperty({enum: ApplicationStatus, example: ApplicationStatus.Created, description: 'Status of application', default: ApplicationStatus.Created })
  status: ApplicationStatus;
    
  @ApiProperty({ example: 2, description: 'Worker id that resolved this application' })
  resolved_by: number;

  @ApiProperty({enum: ApplicationPriority, example: ApplicationPriority.Common, description: 'Priority of task (filled by moderator)' })
  priority: ApplicationPriority;
}
