import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";
import { PostListRelationFilter } from "../../post/inputs/PostListRelationFilter.input";
import { UserWhereInput } from "../../user/inputs/UserWhereInput.input";

@NestJsGraphQL.InputType('UserWhereUniqueInput', { isAbstract: true })
export class UserWhereUniqueInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email?: string | undefined;

  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  AND?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  OR?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  NOT?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  first_name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  last_name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  gender?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => PostListRelationFilter, { nullable: true })
  posts?: PostListRelationFilter | undefined;
}
