import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutPostsInput } from "../../user/inputs/UserCreateWithoutPostsInput.input";
import { UserUpdateWithoutPostsInput } from "../../user/inputs/UserUpdateWithoutPostsInput.input";
import { UserWhereInput } from "../../user/inputs/UserWhereInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutPostsInput', { isAbstract: true })
export class UserUpsertWithoutPostsInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutPostsInput)
  update!: UserUpdateWithoutPostsInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutPostsInput)
  create!: UserCreateWithoutPostsInput;

  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;
}
