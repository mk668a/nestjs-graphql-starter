import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UserCount', { isAbstract: true })
export class UserCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  posts!: number;
}
