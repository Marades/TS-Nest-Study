import { Injectable, OnModuleInit } from '@nestjs/common';
import { SQS, config } from 'aws-sdk';
config.update({ region: 'ap-northeast-2' });

@Injectable()
export class SqsService implements OnModuleInit {
  sqs: SQS;
  queueURL =
    'https://sqs.ap-northeast-2.amazonaws.com/774654182296/nest-simple-queue';
  constructor() {}
  onModuleInit() {
    this.sqs = new SQS({ apiVersion: '2012-11-05' });
    // this.sendMessage('test');
    this.receiveMessage();
  }

  sendMessage(body: string) {
    const payload = this.getMessagePayload(body);
    this.sqs.sendMessage(payload, (err, data) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Success', data);
      }
    });
  }

  receiveMessage() {
    const params = {
      AttributeNames: ['SentTimestamp'],
      MaxNumberOfMessages: 10,
      MessageAttributeNames: ['All'],
      QueueUrl: this.queueURL,
      VisibilityTimeout: 20,
      WaitTimeSeconds: 0,
    };

    this.sqs.receiveMessage(params, function (err, data) {
      if (err) {
        console.log('Receive Error', err);
      } else if (data.Messages) {
        const deleteParams = {
          QueueUrl: this.queueURL,
          ReceiptHandle: data.Messages[0].ReceiptHandle,
        };
        this.sqs.deleteMessage(deleteParams, function (err, data) {
          if (err) {
            console.log('Delete Error', err);
          } else {
            console.log('Message Deleted', data);
          }
        });
      }
    });
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
      // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
      // MessageGroupId: "Group1",  // Required for FIFO queues
      QueueUrl: this.queueURL,
    };
  }
}
