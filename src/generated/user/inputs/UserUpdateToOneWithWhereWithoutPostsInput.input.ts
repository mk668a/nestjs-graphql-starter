import * as NestJsGraphQL from "@nestjs/graphql";
import { UserUpdateWithoutPostsInput } from "../../user/inputs/UserUpdateWithoutPostsInput.input";
import { UserWhereInput } from "../../user/inputs/UserWhereInput.input";

@NestJsGraphQL.InputType('UserUpdateToOneWithWhereWithoutPostsInput', { isAbstract: true })
export class UserUpdateToOneWithWhereWithoutPostsInput {
  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutPostsInput)
  data!: UserUpdateWithoutPostsInput;
}
