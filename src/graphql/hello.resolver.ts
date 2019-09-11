import { Resolver, Args, Query } from "@nestjs/graphql";

@Resolver('Heello')
export class HelloResolver {

    @Query()
    hello(@Args('name') name: string) {
        return `Hello ${name}`;
    }
};