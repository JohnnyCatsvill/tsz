import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { ApplicationsModule } from './applications/applications.module';
import { MetersModule } from './meters/meters.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [NewsModule, ApplicationsModule, MetersModule, UserModule],
})
export class AppModule {}
