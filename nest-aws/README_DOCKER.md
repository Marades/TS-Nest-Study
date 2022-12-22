도커 빌드

```bash
docker build -t ${태그} ./nest-aws
```

도커 컴포즈 빌드

```bash
docker-compose -f docker-compose.yml up
```

도커로 빌드한 이미지 실행

```bash
docker run -p 3000:3000 nest-aws
```
