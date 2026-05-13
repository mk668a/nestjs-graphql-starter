import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { SortOrderInput } from "../../common/inputs/SortOrderInput.input";
import { PostOrderByRelationAggregateInput } from "../../post/inputs/PostOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('UserOrderByWithRelationInput', { isAbstract: true })
export class UserOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  first_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  last_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrderInput, { nullable: true })
  gender?: SortOrderInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  created_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updated_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  posts?: PostOrderByRelationAggregateInput | undefined;
}
