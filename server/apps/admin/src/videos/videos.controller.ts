import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Video } from '@libs/db/models/video.model';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Video
})

@ApiTags('视频')
@Controller('videos')
export class VideosController {
  constructor(@InjectModel(Video) private readonly model: ReturnModelType<typeof Video>) { }
}
