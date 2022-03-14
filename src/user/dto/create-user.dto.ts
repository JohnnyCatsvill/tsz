import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'JohnyCoffee', description: 'Login of user' })
  login: string;

  @ApiPropertyOptional({ example: 'johnCoffe@gmail.com', description: 'Email of user' })
  email: string;

  @ApiProperty({ example: '+79999999999', description: 'Phone of user' })
  phone: string;

  @ApiProperty({ example: 'password', description: 'Password of user' })
  password: string;

  @ApiProperty({ example: 'Иван', description: 'Firstname of user' })
  firstname: string;

  @ApiPropertyOptional({ example: 'Иваныч', description: 'Lastname of user' })
  lastname: string;

  @ApiPropertyOptional({ example: 'Иванов', description: 'Middlename of user' })
  middlename: string;

  @ApiProperty({example: '1254131315', description: 'Number of purchase document' })
  number_of_purchase_document: number;
}
