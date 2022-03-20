import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({ required: true, example: 'JohnyCoffee', description: 'Login of user' })
  login: string;

  @ApiProperty({ required: true, example: 'password', description: 'Password of user' })
  password: string;
}
