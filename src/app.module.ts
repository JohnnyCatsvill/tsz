import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { MetersModule } from './meters/meters.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssuesModule } from './issues/issue.module';
import { FlatModule } from './flat/flat.module';
import { HomeModule } from './home/home.module';
import { TszModule } from './tsz/tsz.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NewsModule, 
    IssuesModule, 
    MetersModule, 
    UserModule, FlatModule, HomeModule, TszModule],
})
export class AppModule {}
