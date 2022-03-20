import { Module } from '@nestjs/common';
import { NewsModule } from './modules/news/news.module';
import { MetersModule } from './modules/meters/meters.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssuesModule } from './modules/issues/issue.module';
import { FlatModule } from './modules/flat/flat.module';
import { HomeModule } from './modules/home/home.module';
import { TszModule } from './modules/tsz/tsz.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NewsModule, 
    IssuesModule, 
    MetersModule, 
    UserModule, 
    FlatModule, 
    HomeModule, 
    TszModule],
})
export class AppModule {}
