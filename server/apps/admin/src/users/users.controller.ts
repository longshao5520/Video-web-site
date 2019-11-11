import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: User
})

@Controller('users')
@ApiUseTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}

  @Get('option')
  option(){
    return{
      title:'用户管理',
      column:[
        {
          label:'用户名',
          prop:'username'
        },
        // {
        //   label:'课程封面',
        //   prop:'cover'
        // },
      ]
    }
  }
}
