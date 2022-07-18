import * as NestJsGraphql from '@nestjs/graphql'
import { QueryMode } from './enums'

@NestJsGraphql.InputType('NestedIntFilter', { isAbstract: true })
export class NestedIntFilter {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  in?: Array<number> | undefined

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  notIn?: Array<number> | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lte?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gte?: number | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  not?: NestedIntFilter | undefined
}

@NestJsGraphql.InputType('IntFilter', { isAbstract: true })
export class IntFilter {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  in?: Array<number> | undefined

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  notIn?: Array<number> | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lte?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gte?: number | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  not?: NestedIntFilter | undefined
}

@NestJsGraphql.InputType('NestedFloatFilter', { isAbstract: true })
export class NestedFloatFilter {
  @NestJsGraphql.Field(() => NestJsGraphql.Float, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphql.Field(() => [NestJsGraphql.Float], { nullable: true })
  in?: Array<number> | undefined

  @NestJsGraphql.Field(() => [NestJsGraphql.Float], { nullable: true })
  notIn?: Array<number> | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Float, { nullable: true })
  lt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Float, { nullable: true })
  lte?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Float, { nullable: true })
  gt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Float, { nullable: true })
  gte?: number | undefined

  @NestJsGraphql.Field(() => NestedFloatFilter, { nullable: true })
  not?: NestedFloatFilter | undefined
}

@NestJsGraphql.InputType('NestedIntWithAggregatesFilter', { isAbstract: true })
export class NestedIntWithAggregatesFilter {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  in?: Array<number> | undefined

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  notIn?: Array<number> | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lte?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gte?: number | undefined

  @NestJsGraphql.Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: NestedIntWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedFloatFilter, { nullable: true })
  _avg?: NestedFloatFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _sum?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _min?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _max?: NestedIntFilter | undefined
}

@NestJsGraphql.InputType('IntWithAggregatesFilter', { isAbstract: true })
export class IntWithAggregatesFilter {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  in?: Array<number> | undefined

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  notIn?: Array<number> | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lte?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gte?: number | undefined

  @NestJsGraphql.Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: NestedIntWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedFloatFilter, { nullable: true })
  _avg?: NestedFloatFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _sum?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _min?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _max?: NestedIntFilter | undefined
}

@NestJsGraphql.InputType('NestedIntNullableFilter', { isAbstract: true })
export class NestedIntNullableFilter {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  in?: Array<number> | undefined

  @NestJsGraphql.Field(() => [NestJsGraphql.Int], { nullable: true })
  notIn?: Array<number> | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  lte?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gt?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  gte?: number | undefined

  @NestJsGraphql.Field(() => NestedIntNullableFilter, { nullable: true })
  not?: NestedIntNullableFilter | undefined
}

@NestJsGraphql.InputType('NestedStringFilter', { isAbstract: true })
export class NestedStringFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter | undefined
}

@NestJsGraphql.InputType('StringFilter', { isAbstract: true })
export class StringFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => QueryMode, { nullable: true })
  mode?: 'default' | 'insensitive' | undefined

  @NestJsGraphql.Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter | undefined
}

@NestJsGraphql.InputType('NestedStringNullableFilter', { isAbstract: true })
export class NestedStringNullableFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => NestedStringNullableFilter, { nullable: true })
  not?: NestedStringNullableFilter | undefined
}

@NestJsGraphql.InputType('StringNullableFilter', { isAbstract: true })
export class StringNullableFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => QueryMode, { nullable: true })
  mode?: 'default' | 'insensitive' | undefined

  @NestJsGraphql.Field(() => NestedStringNullableFilter, { nullable: true })
  not?: NestedStringNullableFilter | undefined
}

@NestJsGraphql.InputType('NestedStringWithAggregatesFilter', { isAbstract: true })
export class NestedStringWithAggregatesFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: NestedStringWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedStringFilter, { nullable: true })
  _min?: NestedStringFilter | undefined

  @NestJsGraphql.Field(() => NestedStringFilter, { nullable: true })
  _max?: NestedStringFilter | undefined
}

@NestJsGraphql.InputType('StringWithAggregatesFilter', { isAbstract: true })
export class StringWithAggregatesFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => QueryMode, { nullable: true })
  mode?: 'default' | 'insensitive' | undefined

  @NestJsGraphql.Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: NestedStringWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined

  @NestJsGraphql.Field(() => NestedStringFilter, { nullable: true })
  _min?: NestedStringFilter | undefined

  @NestJsGraphql.Field(() => NestedStringFilter, { nullable: true })
  _max?: NestedStringFilter | undefined
}

@NestJsGraphql.InputType('NestedStringNullableWithAggregatesFilter', { isAbstract: true })
export class NestedStringNullableWithAggregatesFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: NestedStringNullableWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined

  @NestJsGraphql.Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: NestedStringNullableFilter | undefined

  @NestJsGraphql.Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: NestedStringNullableFilter | undefined
}

@NestJsGraphql.InputType('StringNullableWithAggregatesFilter', { isAbstract: true })
export class StringNullableWithAggregatesFilter {
  @NestJsGraphql.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphql.Field(() => [String], { nullable: true })
  in?: Array<string> | undefined

  @NestJsGraphql.Field(() => [String], { nullable: true })
  notIn?: Array<string> | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  lte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gt?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  gte?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  contains?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  startsWith?: string | undefined

  @NestJsGraphql.Field(() => String, { nullable: true })
  endsWith?: string | undefined

  @NestJsGraphql.Field(() => QueryMode, { nullable: true })
  mode?: 'default' | 'insensitive' | undefined

  @NestJsGraphql.Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: NestedStringNullableWithAggregatesFilter | undefined

  @NestJsGraphql.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined

  @NestJsGraphql.Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: NestedStringNullableFilter | undefined

  @NestJsGraphql.Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: NestedStringNullableFilter | undefined
}

@NestJsGraphql.InputType('StringFieldUpdateOperationsInput', { isAbstract: true })
export class StringFieldUpdateOperationsInput {
  @NestJsGraphql.Field(() => String, { nullable: true })
  set?: string | undefined
}

@NestJsGraphql.InputType('NullableStringFieldUpdateOperationsInput', { isAbstract: true })
export class NullableStringFieldUpdateOperationsInput {
  @NestJsGraphql.Field(() => String, { nullable: true })
  set?: string | undefined
}
