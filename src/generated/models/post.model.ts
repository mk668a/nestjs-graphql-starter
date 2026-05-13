import * as NestJsGraphQL from "@nestjs/graphql";
import { User } from "../models/user.model";

@NestJsGraphQL.ObjectType('Post', { isAbstract: true })
export class Post {
  @NestJsGraphQL.Field(() => String)
  id!: string;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | null;

  author?: User | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  authorId?: string | null;
}
