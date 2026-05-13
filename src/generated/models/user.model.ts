import * as NestJsGraphQL from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { UserCount } from "../user/outputs/UserCount.output";

@NestJsGraphQL.ObjectType('User', { isAbstract: true })
export class User {
  @NestJsGraphQL.Field(() => String)
  id!: string;

  @NestJsGraphQL.Field(() => String)
  first_name!: string;

  @NestJsGraphQL.Field(() => String)
  last_name!: string;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender?: string | null;

  @NestJsGraphQL.Field(() => Date)
  created_at!: Date;

  @NestJsGraphQL.Field(() => Date)
  updated_at!: Date;

  posts?: Post[];

  @NestJsGraphQL.Field(() => UserCount, { nullable: true })
  _count?: UserCount | null;
}
