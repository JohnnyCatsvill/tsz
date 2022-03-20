import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsDto {
  @ApiProperty({
    example: 'Новые поборы на ремонт крыши',
    description: 'Title of the news',
  })
  title: string;

  @ApiProperty({
    example:
      'Крыша совсем шатай делает, ветер еще раз раз и вообще крыша не будет',
    description: 'Description of the news',
  })
  description: string;

  @ApiProperty({ example: 12, description: 'id of home news attached to' })
  id_home: number;

  @ApiProperty({ example: 2, description: 'id of user who wrote this news' })
  id_author: number;
}
