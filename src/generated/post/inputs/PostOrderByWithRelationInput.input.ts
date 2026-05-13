import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { SortOrderInput } from "../../common/inputs/SortOrderInput.input";
import { UserOrderByWithRelationInput } from "../../user/inputs/UserOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('PostOrderByWithRelationInput', { isAbstract: true })
export class PostOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrderInput, { nullable: true })
  content?: SortOrderInput | undefined;

  @NestJsGraphQL.Field(() => SortOrderInput, { nullable: true })
  authorId?: SortOrderInput | undefined;

  @NestJsGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  author?: UserOrderByWithRelationInput | undefined;
}
