import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<[User[], number]> {
    return this.userRepository.findAndCount();
  }

  async remove(id: number) {
     await this.userRepository.delete(id);
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async findByLogin(login: string) {
    return await this.userRepository.findOne({where: {login: login}});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update({id}, {...updateUserDto, updated_at: Date()});
    return this.userRepository.findOne({id});
  }

}
