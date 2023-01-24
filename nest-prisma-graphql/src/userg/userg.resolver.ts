import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsergService } from './userg.service';
import { Userg } from './entities/userg.entity';
import { CreateUsergInput } from './dto/create-userg.input';
import { UpdateUsergInput } from './dto/update-userg.input';

@Resolver(() => Userg)
export class UsergResolver {
  constructor(private readonly usergService: UsergService) {}

  @Mutation(() => Userg)
  createUserg(@Args('createUsergInput') createUsergInput: CreateUsergInput) {
    return this.usergService.create(createUsergInput);
  }

  @Query(() => [Userg], { name: 'userg' })
  findAll() {
    return this.usergService.findAll();
  }

  @Query(() => Userg, { name: 'userg' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usergService.findOne(id);
  }

  @Mutation(() => Userg)
  updateUserg(@Args('updateUsergInput') updateUsergInput: UpdateUsergInput) {
    return this.usergService.update(updateUsergInput.id, updateUsergInput);
  }

  @Mutation(() => Userg)
  removeUserg(@Args('id', { type: () => Int }) id: number) {
    return this.usergService.remove(id);
  }
}
