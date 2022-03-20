import { Injectable } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from "../user/dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}


  private async validateUser(dto: LoginDto): Promise<any> {
    const {login, password} = dto;
    const user = await this.usersService.findByLogin(login);
    const compare = user ? await bcrypt.compare(password, user.password) : false;
    if (user && compare) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload = { login: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(dto: CreateUserDto) {
    dto.password = await bcrypt.hash(dto.password, 10);
    await this.usersService.create(dto);
  }

}
