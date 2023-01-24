import { Injectable } from '@nestjs/common';
import { CreateUsergInput } from './dto/create-userg.input';
import { UpdateUsergInput } from './dto/update-userg.input';

@Injectable()
export class UsergService {
  create(createUsergInput: CreateUsergInput) {
    return 'This action adds a new userg';
  }

  findAll() {
    return `This action returns all userg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userg`;
  }

  update(id: number, updateUsergInput: UpdateUsergInput) {
    return `This action updates a #${id} userg`;
  }

  remove(id: number) {
    return `This action removes a #${id} userg`;
  }
}
