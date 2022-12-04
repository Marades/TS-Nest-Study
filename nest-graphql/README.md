## Quick Start

GraphQL은 API를 위한 강력한 쿼리 언어로, REST API에 존재하는 많은 문제들을 우하하게 해결해준다.

### Overview

Nest는 GraphQL 어플리케이션을 만들기 위한 두가지 방법을 제공해주는데, 첫 번째는 code first, 두 번째는 schema first 방법니다.

- code first 방법은 데코레이터와 class를 사용해 GraphQL 스키마를 생성하게 된다. 이 방법은 Typescript만을 사용해서 작업할 때 유용하다.
- schema first접근은 GraphQL SDL(Schema Definition Language)파일을 사용한다. SDL 언어와 상관없이 서로 다른 플랫폼끼리 스키마 파일을 공유할 수 있는 방법이다. Nest는 class나 interface같은 타입스크립트 정의들을 graphQL 스키마로부터 자동으로 생성해줘서 불필요한 코드작성을 감소시킨다.

### GraphQL

playground는 graphical, interactive한 브라우저 GraphQL IDE로, GraghQL 서버와 같은 url(http://localhost:3000/graphql)에서 이용 가능하며 configuration을 통해 수정할 수도 있다.

### Multiple endpoints

@nestjs/graphql의 또 다른 유용한 기능은 multiple endpoint를 한 번에 제공할 수 있다는 것이다. 이로서 우리는 어떤 모듈이 어떤 endpoint에 포함될 것인지를 결정할 수 있다. 기본적으로, GraphQL은 모든 resolver를 app에서 찾으며, include를 사용하여 이를 제한할 수 있다.

### Code First

데코레이터와 typescript class로 graphQL스키마를 자동생성할 수 있다.
이를 위해선, 스키마 파일이 자동으로 생성될 경로를 autoSchemaFile 속성을 통해 넣어주어야한다. autoSchemaFile속성을 true로 하면 in-memory에 올릴 수도 있다.

### Schma First

Schema First 방법을 쓰려면 typePaths 속성을 사용해야한다. 이는 GraphQLModule이 GraghQL SDL을 어디서 찾앙야하는지 알려준다. 이 파일들은 in-memory상에서 합쳐지므로 우리는 schema 파일들을 resolver와 가까운 곳에 분리해서 작성해둘 수 있다.
GraphQL SDL은 자동적으로 AST를 통해 typescript class나 interface를 만들어주는데 definetions를 통해 이를 정해줄 수 있꼬 outputAs를 통해 class, interface 여부도 정할 수 있다.(기본은 interface)

app.module.ts에 코드를 작성한다면 앱을 시작할 때마다 graphql이 typescript definitions를 재생성 할 것이다. 이보다는 필요할 때만 generate를 할 수 있도록 script로 분리해두는 것이 더 좋을것이다.

## Resolvers

Resolver는 GraphQL operation(query, mutation, subscription)들을 데이터로 바꾸기 위한 기능을 제공해주며 우리가 스키마로서 정한 같은 형식의 데이터를 반환해준다.
주며 보통 우리는 resolver map이라는 것을 만들게 되는데 @nestjs/graphql 패키지는 이를 데코레이터를 통해 자동으로 만들어준다.

### Code First

code first방법에서 우리는 Graphql 스키마를 만들기 위한 GraphQL SDL 수기 작성 같은 일반적인 방법들을 할 필요가 없다. 대신에 우리가 데코레이터를 작성하면 @nestjs/graphql이 이를 읽어 schema를 만들어주게 된다.

### Object types

대부분의 Graphql schema 정의들은 object type이다. 각각의 object type들은 app에서 사용하게 될 하나의 domain object를 나타내게 된다.
