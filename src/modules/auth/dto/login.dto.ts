import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({ example: 'JohnyCoffee', description: 'Login of user' })
  login: string;

  @ApiProperty({ example: 'password', description: 'Password of user' })
  password: string;
}
