import * as NestJsGraphQL from '@nestjs/graphql'
import { DateTimeFieldUpdateOperationsInput } from '../../common/inputs/DateTimeFieldUpdateOperationsInput.input'
import { NullableStringFieldUpdateOperationsInput } from '../../common/inputs/NullableStringFieldUpdateOperationsInput.input'
import { StringFieldUpdateOperationsInput } from '../../common/inputs/StringFieldUpdateOperationsInput.input'

@NestJsGraphQL.InputType('UsersUpdateWithoutPostsInput', { isAbstract: true })
export class UsersUpdateWithoutPostsInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  first_name?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  last_name?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput | undefined

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  gender?: NullableStringFieldUpdateOperationsInput | undefined

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined
}
