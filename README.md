# This project is NestJS with Prisma and GraphQL Starter

## Tech

- NestJS
- Prisma
- GraphQL
- ESLint / Prettier / husky
- postgresql

## sample

```shell
{
  user(id:1){
    id
    first_name
    last_name
    gender
    created_at
    updated_at
  }
}
```

```
mutation{
  createUser(first_name:"first_name",last_name:"last_name",gender:"gender"){
    id
    first_name
    last_name
  }
}
```
