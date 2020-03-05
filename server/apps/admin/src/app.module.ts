import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { DiversitysModule } from './diversitys/diversitys.module';

@Module({
  imports: [
    DbModule,
    VideosModule,
    DiversitysModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
