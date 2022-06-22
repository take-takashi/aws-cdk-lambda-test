# aws-cdk-lambda-test

# install command
```
npm install -g aws-cdk
npm install -g npm@8.12.2
mkdir cdk-lambda-typescript
cd cdk-lambda-typescript/
cdk init --language typescript
```

# setup aws cli command
## これ、不要だったかもしれない。初めからインストールされていた？

```
mkdir ~/.tmp && cd $_
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
```

## こちらはおそらく実施の必要は必須か
```
aws configure
# このコマンドでアカウントIDを取得
aws sts get-caller-identity --output text --query Account
cdk bootstrap aws://{account_id}/ap-northeast-1
```