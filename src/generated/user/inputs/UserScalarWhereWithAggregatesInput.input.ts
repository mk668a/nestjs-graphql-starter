import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../../common/inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('UserScalarWhereWithAggregatesInput', { isAbstract: true })
export class UserScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  first_name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  last_name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  gender?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
