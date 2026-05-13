import * as NestJsGraphQL from "@nestjs/graphql";
export * from "../enums/Language.enum";
export * from "../enums/NotificationType.enum";

export enum TransactionIsolationLevel {
  ReadUncommitted = "ReadUncommitted",
  ReadCommitted = "ReadCommitted",
  RepeatableRead = "RepeatableRead",
  Serializable = "Serializable"
}
NestJsGraphQL.registerEnumType(TransactionIsolationLevel, {
  name: "TransactionIsolationLevel",
  description: undefined,
});

export enum UserScalarFieldEnum {
  id = "id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  gender = "gender",
  created_at = "created_at",
  updated_at = "updated_at"
}
NestJsGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});

export enum PostScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  published = "published",
  title = "title",
  content = "content",
  authorId = "authorId"
}
NestJsGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}
NestJsGraphQL.registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});

export enum NullsOrder {
  first = "first",
  last = "last"
}
NestJsGraphQL.registerEnumType(NullsOrder, {
  name: "NullsOrder",
  description: undefined,
});
