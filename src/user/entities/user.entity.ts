import { ApiProperty } from "@nestjs/swagger";
import { SharedEntity } from "src/shared/shared.entity";
import { UserRole } from "../enums/user-role.enum";

export class User extends SharedEntity {
  @ApiProperty({example: 'JohnyCoffee', description: 'Login of user' })
  login: string;

  @ApiProperty({ example: 'johnCoffe@gmail.com', description: 'Email of user' })
  email: string;

  @ApiProperty({ example: '+79999999999', description: 'Phone of user' })
  phone: string;

  @ApiProperty({ example: 'password', description: 'Password of user' })
  password: string;

  @ApiProperty({ example: 'Иван', description: 'Firstname of user' })
  firstname: string;

  @ApiProperty({ example: 'Иваныч', description: 'Lastname of user' })
  lastname: string;

  @ApiProperty({ example: 'Иванов', description: 'Middlename of user' })
  middlename: string;
  
  @ApiProperty({enum: UserRole, example: UserRole.Customer, description: 'Role of user, to have or have not access to certain endpoints', default: UserRole.Customer })
  role: UserRole;
}
