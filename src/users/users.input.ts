import * as NestJsGraphql from '@nestjs/graphql'
import { SortOrder } from 'src/common/enums'
import {
  IntFilter,
  IntWithAggregatesFilter,
  NullableStringFieldUpdateOperationsInput,
  StringFieldUpdateOperationsInput,
  StringFilter,
  StringNullableFilter,
  StringNullableWithAggregatesFilter,
  StringWithAggregatesFilter
} from 'src/common/inputs'

@NestJsGraphql.InputType('UsersWhereInput', { isAbstract: true })
export class UsersWhereInput {
  @NestJsGraphql.Field(() => [UsersWhereInput], { nullable: true })
  AND?: Array<UsersWhereInput> | undefined

  @NestJsGraphql.Field(() => [UsersWhereInput], { nullable: true })
  OR?: Array<UsersWhereInput> | undefined

  @NestJsGraphql.Field(() => [UsersWhereInput], { nullable: true })
  NOT?: Array<UsersWhereInput> | undefined

  @NestJsGraphql.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined

  @NestJsGraphql.Field(() => StringFilter, { nullable: true })
  first_name?: StringFilter | undefined

  @NestJsGraphql.Field(() => StringFilter, { nullable: true })
  last_name?: StringFilter | undefined

  @NestJsGraphql.Field(() => StringNullableFilter, { nullable: true })
  gender?: StringNullableFilter | undefined

  @NestJsGraphql.Field(() => StringFilter, { nullable: true })
  created_at?: StringFilter | undefined

  @NestJsGraphql.Field(() => StringFilter, { nullable: true })
  updated_at?: StringFilter | undefined
}

@NestJsGraphql.InputType('UsersOrderByWithRelationInput', { isAbstract: true })
export class UsersOrderByWithRelationInput {
  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  first_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  last_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  gender?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  created_at?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  updated_at?: 'asc' | 'desc' | undefined
}

@NestJsGraphql.InputType('UsersWhereUniqueInput', { isAbstract: true })
export class UsersWhereUniqueInput {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  id?: number | undefined
}

@NestJsGraphql.InputType('UsersCountOrderByAggregateInput', { isAbstract: true })
export class UsersCountOrderByAggregateInput {
  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  first_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  last_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  gender?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  created_at?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  updated_at?: 'asc' | 'desc' | undefined
}

@NestJsGraphql.InputType('UsersAvgOrderByAggregateInput', { isAbstract: true })
export class UsersAvgOrderByAggregateInput {
  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined
}

@NestJsGraphql.InputType('UsersMaxOrderByAggregateInput', { isAbstract: true })
export class UsersMaxOrderByAggregateInput {
  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  first_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  last_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  gender?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  created_at?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  updated_at?: 'asc' | 'desc' | undefined
}

@NestJsGraphql.InputType('UsersMinOrderByAggregateInput', { isAbstract: true })
export class UsersMinOrderByAggregateInput {
  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  first_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  last_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  gender?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  created_at?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  updated_at?: 'asc' | 'desc' | undefined
}

@NestJsGraphql.InputType('UsersSumOrderByAggregateInput', { isAbstract: true })
export class UsersSumOrderByAggregateInput {
  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined
}

@NestJsGraphql.InputType('UsersOrderByWithAggregationInput', { isAbstract: true })
export class UsersOrderByWithAggregationInput {
  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  first_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  last_name?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  gender?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  created_at?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => SortOrder, { nullable: true })
  updated_at?: 'asc' | 'desc' | undefined

  @NestJsGraphql.Field(() => UsersCountOrderByAggregateInput, { nullable: true })
  _count?: UsersCountOrderByAggregateInput | undefined

  @NestJsGraphql.Field(() => UsersAvgOrderByAggregateInput, { nullable: true })
  _avg?: UsersAvgOrderByAggregateInput | undefined

  @NestJsGraphql.Field(() => UsersMaxOrderByAggregateInput, { nullable: true })
  _max?: UsersMaxOrderByAggregateInput | undefined

  @NestJsGraphql.Field(() => UsersMinOrderByAggregateInput, { nullable: true })
  _min?: UsersMinOrderByAggregateInput | undefined

  @NestJsGraphql.Field(() => UsersSumOrderByAggregateInput, { nullable: true })
  _sum?: UsersSumOrderByAggregateInput | undefined
}

@NestJsGraphql.InputType('UsersScalarWhereWithAggregatesInput', { isAbstract: true })
export class UsersScalarWhereWithAggregatesInput {
  @NestJsGraphql.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UsersScalarWhereWithAggregatesInput> | undefined

  @NestJsGraphql.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UsersScalarWhereWithAggregatesInput> | undefined

  @NestJsGraphql.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UsersScalarWhereWithAggregatesInput> | undefined

  @NestJsGraphql.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => StringWithAggregatesFilter, { nullable: true })
  first_name?: StringWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => StringWithAggregatesFilter, { nullable: true })
  last_name?: StringWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  gender?: StringNullableWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => StringWithAggregatesFilter, { nullable: true })
  created_at?: StringWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => StringWithAggregatesFilter, { nullable: true })
  updated_at?: StringWithAggregatesFilter | undefined
}

@NestJsGraphql.InputType('UsersCreateInput', { isAbstract: true })
export class UsersCreateInput {
  @NestJsGraphql.Field(() => String)
  first_name!: string

  @NestJsGraphql.Field(() => String)
  last_name!: string

  @NestJsGraphql.Field(() => String, { nullable: true })
  gender?: string | undefined

  @NestJsGraphql.Field(() => String)
  created_at!: string

  @NestJsGraphql.Field(() => String)
  updated_at!: string
}

@NestJsGraphql.InputType('UsersCreateManyInput', { isAbstract: true })
export class UsersCreateManyInput {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  id?: number | undefined

  @NestJsGraphql.Field(() => String)
  first_name!: string

  @NestJsGraphql.Field(() => String)
  last_name!: string

  @NestJsGraphql.Field(() => String, { nullable: true })
  gender?: string | undefined

  @NestJsGraphql.Field(() => String)
  created_at!: string

  @NestJsGraphql.Field(() => String)
  updated_at!: string
}

@NestJsGraphql.InputType('UsersUpdateManyMutationInput', { isAbstract: true })
export class UsersUpdateManyMutationInput {
  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  first_name?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  last_name?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  gender?: NullableStringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  created_at?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  updated_at?: StringFieldUpdateOperationsInput | undefined
}

@NestJsGraphql.InputType('UsersUpdateInput', { isAbstract: true })
export class UsersUpdateInput {
  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  first_name?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  last_name?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  gender?: NullableStringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  created_at?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphql.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  updated_at?: StringFieldUpdateOperationsInput | undefined
}
