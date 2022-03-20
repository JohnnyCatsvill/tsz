import { ApiProperty } from '@nestjs/swagger';
import { Home } from '../../home/entities/home.entity';
import { SharedEntity } from '../../shared/shared.entity';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class News extends SharedEntity {
  @Column()
  @ApiProperty({
    example: 'Новые поборы на ремонт крыши',
    description: 'Title of the news',
  })
  title: string;

  @Column()
  @ApiProperty({
    example:
      'Крыша совсем шатай делает, ветер еще раз раз и вообще крыша не будет',
    description: 'Description of the news',
  })
  description: string;

  @ManyToOne(type => Home)
  @ApiProperty({ type: Number, example: 2, description: 'home this news attahced to' })
  home: Home;

  @ManyToOne(type => User)
  @ApiProperty({ type: Number, example: 2, description: 'user, who wrote this news' })
  user: User;
}
