import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { SortOrderInput } from "../../common/inputs/SortOrderInput.input";
import { UserCountOrderByAggregateInput } from "../../user/inputs/UserCountOrderByAggregateInput.input";
import { UserMaxOrderByAggregateInput } from "../../user/inputs/UserMaxOrderByAggregateInput.input";
import { UserMinOrderByAggregateInput } from "../../user/inputs/UserMinOrderByAggregateInput.input";

@NestJsGraphQL.InputType('UserOrderByWithAggregationInput', { isAbstract: true })
export class UserOrderByWithAggregationInput {
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

  @NestJsGraphQL.Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: UserCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: UserMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: UserMinOrderByAggregateInput | undefined;
}
