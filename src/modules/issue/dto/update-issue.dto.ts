import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IssuesPriority } from '../enums/issue-priority.enum';
import { IssuesStatus } from '../enums/issue-status.enum';
import { CreateIssuesDto } from './create-issue.dto';

export class UpdateIssuesDto extends PartialType(CreateIssuesDto) {
  @ApiProperty({ example: 1, description: 'id of issue' })
  id: number;

  @ApiProperty({enum: IssuesStatus, example: IssuesStatus.Created, description: 'Status of issue' })
  status: IssuesStatus;
    
  @ApiProperty({ example: 2, description: 'Worker id that resolved this issue' })
  assigned_to: number;

  @ApiProperty({enum: IssuesPriority, example: IssuesPriority.Common, description: 'Priority of task (filled by moderator)' })
  priority: IssuesPriority;

  @ApiProperty({ example: false, description: 'Is this task can be outsourced' })
  shared_pool: boolean;
}
