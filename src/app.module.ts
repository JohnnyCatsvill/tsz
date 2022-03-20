import { Module } from '@nestjs/common';
import { NewsModule } from './modules/news/news.module';
import { MeterModule } from './modules/meter/meter.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueModule } from './modules/issue/issue.module';
import { FlatModule } from './modules/flat/flat.module';
import { HomeModule } from './modules/home/home.module';
import { AuthModule } from "./modules/auth/auth.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NewsModule, 
    IssueModule,
    MeterModule,
    UserModule, 
    FlatModule, 
    HomeModule, AuthModule
  ],
})
export class AppModule {}
