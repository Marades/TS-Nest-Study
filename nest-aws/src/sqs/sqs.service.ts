import {
  DeleteMessageCommand,
  ReceiveMessageCommand,
  SQSClient,
  SendMessageCommand,
} from '@aws-sdk/client-sqs';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class SqsService implements OnModuleInit {
  client: SQSClient;
  queueURL = '';
  constructor() {}
  onModuleInit() {
    this.client = new SQSClient({ region: 'ap-northeast-2' });
    // this.sendMessage('v3 test');
    // this.receiveMessage();
  }

  async sendMessage(body: string) {
    const payload = this.getMessagePayload(body);
    const command = new SendMessageCommand(payload);
    const data = await this.client.send(command);
    console.log('Send Success : ', data);
  }

  async receiveMessage() {
    const params = {
      AttributeNames: ['SentTimestamp'],
      MaxNumberOfMessages: 10,
      MessageAttributeNames: ['All'],
      QueueUrl: this.queueURL,
      VisibilityTimeout: 20,
      WaitTimeSeconds: 5,
    };
    const command = new ReceiveMessageCommand(params);
    const response = await this.client.send(command);

    console.log('Receive Success : ', response);

    const deleteParams = {
      QueueUrl: this.queueURL,
      ReceiptHandle: response.Messages[0].ReceiptHandle,
    };
    const deleteCommand = new DeleteMessageCommand(deleteParams);
    const deleteResponse = await this.client.send(deleteCommand);
    console.log('Delete Success : ', deleteResponse);
  }

  getMessagePayload(body: string) {
    return {
      // Remove DelaySeconds parameter and value for FIFO queues
      DelaySeconds: 10,
      MessageAttributes: {
        Title: {
          DataType: 'String',
          StringValue: 'Nest SQS Test',
        },
        Author: {
          DataType: 'String',
          StringValue: 'Marades',
        },
        WeeksOn: {
          DataType: 'Number',
          StringValue: '6',
        },
      },
      MessageBody: body,
      QueueUrl: this.queueURL,
      // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
      // MessageGroupId: "Group1",  // Required for FIFO queues
    };
  }
}
