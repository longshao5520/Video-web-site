import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Diversity } from './diversity.model'


@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
export class Video {
  @ApiProperty({ description: '标题' })
  @prop()
  title: string

  @ApiProperty({ description: '封面' })
  @prop()
  cover: string

  // @arrayProp({itemsRef: 'Diversity'})
  // diversity: Ref<Diversity>[]
}