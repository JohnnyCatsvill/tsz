import { Module } from '@nestjs/common';
import { NewsModule } from './modules/news/news.module';
import { MetersModule } from './modules/meter/meters.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueModule } from './modules/issue/issue.module';
import { FlatModule } from './modules/flat/flat.module';
import { HomeModule } from './modules/home/home.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NewsModule, 
    IssueModule,
    MetersModule, 
    UserModule, 
    FlatModule, 
    HomeModule, 
  ],
})
export class AppModule {}
