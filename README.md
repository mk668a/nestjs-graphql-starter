# This project is NestJS with Prisma and GraphQL Starter

## Tech

- NestJS
- Prisma
- GraphQL
- ESLint / Prettier / husky
- postgresql

## sample

```
query{
  findManyUsers(where:{id:{equals:1}}){
    id
    first_name
    last_name
    gender
  }
}
```

```
query{
  groupByUsers(orderBy:[{id:desc}],by:id){
    id
    first_name
    last_name
  }
}
```

```
query{
  groupByUsers(orderBy:[{id:desc}],by:id){
    id
    first_name
    last_name
  }
}
```

```
mutation{
  createUsers(data:{
    first_name:"first_name",
    last_name:"last_name",
    gender:"gender"
  }){
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
  deleteUsers(where:{id:1}){
    id
    first_name
    last_name
    gender
    created_at
    updated_at
  }
}
```
