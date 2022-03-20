import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IssuePriority } from '../enums/issue-priority.enum';
import { IssueStatus } from '../enums/issue-status.enum';
import { CreateIssueDto } from './create-issue.dto';

export class UpdateIssueDto extends PartialType(CreateIssueDto) {
  @ApiProperty({enum: IssueStatus, example: IssueStatus.Created, description: 'Status of issue' })
  status: IssueStatus;
    
  @ApiProperty({ example: 2, description: 'Worker id that resolved this issue' })
  assigned_to: number;

  @ApiProperty({enum: IssuePriority, example: IssuePriority.Common, description: 'Priority of task (filled by moderator)' })
  priority: IssuePriority;

  @ApiProperty({ example: false, description: 'Is this task can be outsourced' })
  shared_pool: boolean;
}
