import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateNestedOneWithoutPostsInput } from "../../user/inputs/UserCreateNestedOneWithoutPostsInput.input";

@NestJsGraphQL.InputType('PostCreateInput', { isAbstract: true })
export class PostCreateInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutPostsInput, { nullable: true })
  author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
