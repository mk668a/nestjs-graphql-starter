import * as NestJsGraphQL from '@nestjs/graphql'
import { BoolWithAggregatesFilter, DateTimeWithAggregatesFilter, StringNullableWithAggregatesFilter, StringWithAggregatesFilter } from '../../common/inputs'

@NestJsGraphQL.InputType('PostScalarWhereWithAggregatesInput', { isAbstract: true })
export class PostScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined

  @NestJsGraphQL.Field(() => BoolWithAggregatesFilter, { nullable: true })
  published?: BoolWithAggregatesFilter | undefined

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  content?: StringNullableWithAggregatesFilter | undefined

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  authorId?: StringNullableWithAggregatesFilter | undefined
}
