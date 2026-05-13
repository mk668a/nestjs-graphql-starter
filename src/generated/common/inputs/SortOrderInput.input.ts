import * as NestJsGraphQL from "@nestjs/graphql";
import { NullsOrder, SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('SortOrderInput', { isAbstract: true })
export class SortOrderInput {
  @NestJsGraphQL.Field(() => SortOrder)
  sort!: "asc" | "desc";

  @NestJsGraphQL.Field(() => NullsOrder, { nullable: true })
  nulls?: "first" | "last" | undefined;
}
