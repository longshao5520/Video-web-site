import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'


@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
export class Diversity {
  @ApiProperty({description: '标题'})
  @prop()
  title: string

  @ApiProperty({description: '视频文件'})
  @prop()
  file: string
}