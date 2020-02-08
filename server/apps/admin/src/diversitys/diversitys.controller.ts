import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Diversity } from '@libs/db/models/diversity.model';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Diversity
})

@ApiTags('分集')
@Controller('diversitys')
export class DiversitysController {
  constructor(@InjectModel(Diversity) private readonly model: ReturnModelType<typeof Diversity>) { }
}
