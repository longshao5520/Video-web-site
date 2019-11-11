import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';
import { ApiUseTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose'
import { Diversitys } from '@libs/db/models/diversity.model';

@Crud({
  model: Diversitys
})

@Controller('diversitys')
@ApiUseTags('分集')
export class DiversitysController {
  constructor(@InjectModel(Diversitys) private readonly model: ReturnModelType<typeof Diversitys>) {}

  @Get('option')
  option(){
    return{
      title:'分集管理',
      column:[
        {
          label:'分集名称',
          prop:'name'
        },
        // {
        //   label:'课程封面',
        //   prop:'cover'
        // },
      ]
    }
  }
}
