import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})

//视频分集
export class Diversitys{
  @ApiModelProperty({description: '视频分集名称'})
  @prop()
  name: string
  
  @ApiModelProperty({description: '文件 '})
  @prop()
  file: string
}