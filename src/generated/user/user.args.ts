import * as NestJsGraphQL from "@nestjs/graphql";
import { UserScalarFieldEnum } from "../common/enums";
import { UserCreateInput } from "../user/inputs/UserCreateInput.input";
import { UserCreateManyInput } from "../user/inputs/UserCreateManyInput.input";
import { UserOrderByWithAggregationInput } from "../user/inputs/UserOrderByWithAggregationInput.input";
import { UserOrderByWithRelationInput } from "../user/inputs/UserOrderByWithRelationInput.input";
import { UserScalarWhereWithAggregatesInput } from "../user/inputs/UserScalarWhereWithAggregatesInput.input";
import { UserUpdateInput } from "../user/inputs/UserUpdateInput.input";
import { UserUpdateManyMutationInput } from "../user/inputs/UserUpdateManyMutationInput.input";
import { UserWhereInput } from "../user/inputs/UserWhereInput.input";
import { UserWhereUniqueInput } from "../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateUserArgs {
  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyUserArgs {
  @NestJsGraphQL.Field(() => [UserCreateManyInput])
  data!: UserCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneUserArgs {
  @NestJsGraphQL.Field(() => UserCreateInput)
  data!: UserCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyUserArgs {
  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  limit?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneUserArgs {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstUserArgs {
  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyUserArgs {
  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueUserArgs {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByUserArgs {
  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UserOrderByWithAggregationInput], { nullable: true })
  orderBy?: UserOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarFieldEnum])
  by!: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at">;

  @NestJsGraphQL.Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyUserArgs {
  @NestJsGraphQL.Field(() => UserUpdateManyMutationInput)
  data!: UserUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  limit?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneUserArgs {
  @NestJsGraphQL.Field(() => UserUpdateInput)
  data!: UserUpdateInput;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneUserArgs {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateInput)
  create!: UserCreateInput;

  @NestJsGraphQL.Field(() => UserUpdateInput)
  update!: UserUpdateInput;
}
