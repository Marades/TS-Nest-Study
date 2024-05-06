// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { BasicMessageDto } from './dtos/basic-message.dto';
// import { PromptTemplate } from '@langchain/core/prompts';
// import { ChatOpenAI } from '@langchain/openai';
// import { HttpResponseOutputParser } from 'langchain/output_parsers';
// import { TEMPLATES } from 'src/utils/constants/templates.constants';
// import customMessage from 'src/utils/responses/customMessage.response';
// import { MESSAGES } from 'src/utils/constants/messages.constants';
// import { openAI } from 'src/utils/constants/openAI.constants';

// @Injectable()
// export class LangchainService {
//   async chat(basicMessageDto: BasicMessageDto) {
//     try {
//       const prompt = PromptTemplate.fromTemplate(TEMPLATES.BASIC_CHAT_TEMPLATE);

//       const model = new ChatOpenAI({
//         temperature: +openAI.BASIC_CHAT_OPENAI_TEMPERATURE,
//         modelName: openAI.GPT_3_5_TURBO_1106.toString(),
//       });

//       const outputParser = new HttpResponseOutputParser();
//       const chain = prompt.pipe(model).pipe(outputParser);
//       const response = await chain.invoke({
//         input: basicMessageDto.user_query,
//       });
//       return customMessage(
//         HttpStatus.OK,
//         MESSAGES.SUCCESS,
//         Object.values(response)
//           .map((code) => String.fromCharCode(code))
//           .join(''),
//       );
//     } catch (e: unknown) {
//       throw new HttpException(
//         customMessage(
//           HttpStatus.INTERNAL_SERVER_ERROR,
//           MESSAGES.EXTERNAL_SERVER_ERROR,
//         ),
//         HttpStatus.INTERNAL_SERVER_ERROR,
//       );
//     }
//   }
// }
