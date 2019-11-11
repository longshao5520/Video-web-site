import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model'
import { Course } from './models/course.model';
import { Diversitys } from './models/diversity.model';

const models = TypegooseModule.forFeature([User,Course,Diversitys])

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
  exports: [DbService,models],
})
export class DbModule {}
