import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Video } from './models/video.model';
import { Diversity } from './models/diversity.model';

const models = TypegooseModule.forFeature([User, Video, Diversity])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/videoweb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
