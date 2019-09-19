import { Resolver, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
@UseGuards(GqlAuthGuard)
@Resolver('Hello')
export class HelloResolver {

  @Query()
  hello(@Args('name') name: string) {
    return `Hello ${name}`;
  }
}
