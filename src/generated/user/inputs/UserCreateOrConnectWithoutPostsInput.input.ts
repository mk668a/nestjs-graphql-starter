import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutPostsInput } from "../../user/inputs/UserCreateWithoutPostsInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutPostsInput', { isAbstract: true })
export class UserCreateOrConnectWithoutPostsInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutPostsInput)
  create!: UserCreateWithoutPostsInput;
}
