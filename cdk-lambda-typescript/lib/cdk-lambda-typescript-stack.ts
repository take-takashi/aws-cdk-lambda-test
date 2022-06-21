import { aws_lambda, aws_lambda_nodejs, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';

export class CdkLambdaTypescriptStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const func = new aws_lambda_nodejs.NodejsFunction(this, 'testFunction', {
      functionName: 'testFunction',
      entry: path.join(__dirname, '../lambda/index.ts'),
      runtime: aws_lambda.Runtime.NODEJS_16_X,
      handler: 'handler',
    })
  }
}
