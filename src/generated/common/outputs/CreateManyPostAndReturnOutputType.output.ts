import * as NestJsGraphQL from "@nestjs/graphql";
import { User } from "../../models/user.model";

@NestJsGraphQL.ObjectType('CreateManyPostAndReturnOutputType', { isAbstract: true })
export class CreateManyPostAndReturnOutputType {
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
  content!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  authorId!: string | null;

  @NestJsGraphQL.Field(() => User, { nullable: true })
  author!: User | null;
}
