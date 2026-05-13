import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutPostsInput } from "../../user/inputs/UserCreateOrConnectWithoutPostsInput.input";
import { UserCreateWithoutPostsInput } from "../../user/inputs/UserCreateWithoutPostsInput.input";
import { UserUpdateToOneWithWhereWithoutPostsInput } from "../../user/inputs/UserUpdateToOneWithWhereWithoutPostsInput.input";
import { UserUpsertWithoutPostsInput } from "../../user/inputs/UserUpsertWithoutPostsInput.input";
import { UserWhereInput } from "../../user/inputs/UserWhereInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneWithoutPostsNestedInput', { isAbstract: true })
export class UserUpdateOneWithoutPostsNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutPostsInput, { nullable: true })
  create?: UserCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutPostsInput, { nullable: true })
  upsert?: UserUpsertWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  disconnect?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  delete?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateToOneWithWhereWithoutPostsInput, { nullable: true })
  update?: UserUpdateToOneWithWhereWithoutPostsInput | undefined;
}
