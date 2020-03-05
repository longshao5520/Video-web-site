import { Controller, Get } from '@nestjs/common';
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
  @Get('option')
  async option() {
    return {
      index: true,
      stripe: true,
      translate: false,
      dialogType: 'drawer',
      dialogWidth: '40%',
      align: 'center',
      menuAlign: 'center',
      labelWidth: '60',
      column: [
        {
          label: 'ID',
          prop: '_id',
          width: 300,
          display: false
        },
        {
          label: '标题',
          prop: 'title',
          span: 24
        },
        {
          label: '封面',
          prop: 'cover',
          type: 'upload',
          listType: 'picture-img',
          action: '/upload',
          width: 150,
          span: 8
        },
      ]
    }
  }
}
