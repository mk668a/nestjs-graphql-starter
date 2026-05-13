import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCountAggregate } from "./UserCountAggregate.output";
import { UserMaxAggregate } from "./UserMaxAggregate.output";
import { UserMinAggregate } from "./UserMinAggregate.output";

@NestJsGraphQL.ObjectType('UserGroupBy', { isAbstract: true })
export class UserGroupBy {
  @NestJsGraphQL.Field(() => String)
  id!: string;

  @NestJsGraphQL.Field(() => String)
  first_name!: string;

  @NestJsGraphQL.Field(() => String)
  last_name!: string;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender!: string | null;

  @NestJsGraphQL.Field(() => Date)
  created_at!: Date;

  @NestJsGraphQL.Field(() => Date)
  updated_at!: Date;

  @NestJsGraphQL.Field(() => UserCountAggregate, { nullable: true })
  _count!: UserCountAggregate | null;

  @NestJsGraphQL.Field(() => UserMinAggregate, { nullable: true })
  _min!: UserMinAggregate | null;

  @NestJsGraphQL.Field(() => UserMaxAggregate, { nullable: true })
  _max!: UserMaxAggregate | null;
}
