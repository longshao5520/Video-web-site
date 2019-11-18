import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { Course } from '@libs/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ApiUseTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose'

@Crud({
  model: Course
})

@Controller('courses')
@ApiUseTags('视频')
export class CoursesController {
  constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>) {}

  @Get('option')
  option(){
    return{
      title:'视频管理',
      column:[
        {
          sortable:true,
          label:'课程名称',
          prop:'name'
        },
        {
          label:'课程封面',
          prop:'cover'
        },
      ]
    }
  }
}
