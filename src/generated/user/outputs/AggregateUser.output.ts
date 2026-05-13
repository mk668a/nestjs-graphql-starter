import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCountAggregate } from "./UserCountAggregate.output";
import { UserMaxAggregate } from "./UserMaxAggregate.output";
import { UserMinAggregate } from "./UserMinAggregate.output";

@NestJsGraphQL.ObjectType('AggregateUser', { isAbstract: true })
export class AggregateUser {
  @NestJsGraphQL.Field(() => UserCountAggregate, { nullable: true })
  _count!: UserCountAggregate | null;

  @NestJsGraphQL.Field(() => UserMinAggregate, { nullable: true })
  _min!: UserMinAggregate | null;

  @NestJsGraphQL.Field(() => UserMaxAggregate, { nullable: true })
  _max!: UserMaxAggregate | null;
}
