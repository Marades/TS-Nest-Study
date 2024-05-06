import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { ChatOpenAI } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import { calculatorSchema, summarySchema } from './funcgion-call.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LangchainService {
  private model: ChatOpenAI;
  constructor(private readonly configService: ConfigService) {
    this.model = new ChatOpenAI({
      apiKey: this.configService.get('OPEN_AI_API_KEY'),
      modelName: 'gpt-3.5-turbo',
    });
  }
  async chat() {
    const prompt = ChatPromptTemplate.fromMessages([
      ['human', 'Tell me a short joke about {topic}'],
    ]);
    const outputParser = new StringOutputParser();

    const chain = prompt.pipe(this.model).pipe(outputParser);

    const response = await chain.invoke({
      topic: 'ice cream',
    });
    console.log(response);
    return response;
  }

  async functinoCallig() {
    const summaryTool = new DynamicStructuredTool({
      name: 'summarizer',
      description: 'summarize the content with title and description',
      schema: summarySchema,
      func: async ({ title, summary }) => {
        return `title : ${title}\ndescription : ${summary}`;
      },
    });

    const llmWithTools = this.model.bindTools([summaryTool]);
    const res = await llmWithTools.invoke(`요약
    OpenAI API를 사용시 한국어 문장을 사용하면 더 많은 비용이 나오게 됩니다. 이와 관련하여 토큰의 개념, 영어와 한글의 토큰 수 비교, Tokenizer에 대한 내용을 정리하였습니다.
    
    배경
    OpenAI의 API 사용요금은 질문과 응답에 사용된 토큰 수에 따라 책정됩니다. 쉽게 말하면 사용된 글자 수가 많으면 토큰이 많아지고 요금도 많이 청구된다는 것입니다. OpenAI(What are tokens and how to count them?)에 따르면 영어 단어 4개 정도를 처리하는데 1개의 토큰이 사용된다고 합니다.
    
    한국어는 어떨까요? OpenAI에서 제공하는 토크나이저(Tokenizer)에 텍스트를 입력하면 사용되는 토큰을 계산해볼 수 있는데 한국어를 입력했을때에는 음절당 2-3토큰이 나왔습니다. 영어 단어에 비하면 상당히 많은 양의 토큰입니다.
    
    이러한 차이 때문에 OpenAI API를 사용시 한국어 문장을 사용하면 더 많은 비용이 나오게 됩니다. 또한 ChatGPT를 웹을 통해 사용시에 한국어 답변의 최대 길이가 짧은 것도 이 때문일 것 같습니다.
    
    `);

    return res.tool_calls;
  }

  async functionCallingTest() {
    const calculatorTool = new DynamicStructuredTool({
      name: 'calculator',
      description: 'Can perform mathematical operations.',
      schema: calculatorSchema,
      func: async ({ operation, number1, number2 }) => {
        // Functions must return strings
        if (operation === 'add') {
          return `${number1 + number2}`;
        } else if (operation === 'subtract') {
          return `${number1 - number2}`;
        } else if (operation === 'multiply') {
          return `${number1 * number2}`;
        } else if (operation === 'divide') {
          return `${number1 / number2}`;
        } else {
          throw new Error('Invalid operation.');
        }
      },
    });

    const llmWithTools = this.model.bindTools([calculatorTool]);
    const res = await llmWithTools.invoke('What is 3 * 12');

    console.log(res.tool_calls);
    return res.toJSON();
  }
}
