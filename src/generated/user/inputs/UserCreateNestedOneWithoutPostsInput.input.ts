import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutPostsInput } from "../../user/inputs/UserCreateOrConnectWithoutPostsInput.input";
import { UserCreateWithoutPostsInput } from "../../user/inputs/UserCreateWithoutPostsInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutPostsInput', { isAbstract: true })
export class UserCreateNestedOneWithoutPostsInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutPostsInput, { nullable: true })
  create?: UserCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
