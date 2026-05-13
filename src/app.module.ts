import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma.module'
import { UserModule } from './generated/user/user.crud'
import { PostModule } from './generated/post/post.crud'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    PrismaModule,
    UserModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
