## ECR

- ECR 레포지토리 생성

```bash
aws ecr create-repository --repository-name nest-aws-repository --image-scanning-configuration scanOnPush=true --region ap-northeast-2
```

생성 결과

```
{
    "repository": {
        "repositoryArn": "arn:aws:ecr:ap-northeast-2:774654182296:repository/nest-aws-repository",
        "registryId": "774654182296",
        "repositoryName": "nest-aws-repository",
        "repositoryUri": "774654182296.dkr.ecr.ap-northeast-2.amazonaws.com/nest-aws-repository",
        "createdAt": "2022-12-19T15:49:32+09:00",
        "imageTagMutability": "MUTABLE",
        "imageScanningConfiguration": {
            "scanOnPush": true
        },
        "encryptionConfiguration": {
            "encryptionType": "AES256"
        }
    }
}
```

Docker 로그인(인증 토큰을 검색하고 레지스트리에 대해 Docker 클라이언트를 인증합니다.)

```bash
# MacOS / Linux
aws ecr get-login-password --region ap-northease-2 | docker login --username AWS --password-stdin jkl9510357.dkr.ecr.ap-northease-2.amazonaws.com

# 윈도우
(Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin 774654182296.dkr.ecr.ap-northease-2.amazonaws.com
```

- 도커 빌드
  docker build -t nest-aws-repository ./nest-aws

- ECR 레포지토리에 푸시

```도커 이미지 태깅
docker tag nest-aws-repository:latest 774654182296.dkr.ecr.ap-northeast-2.amazonaws.com/nest-aws-repository:latest
```

- ECR 레포지토리에 푸시

```bash
docker push 774654182296.dkr.ecr.ap-northeast-2.amazonaws.com/nest-aws-repository:latest
```
