import { Controller, Get } from '@nestjs/common';
import { LangchainService } from './langchain.service';

@Controller('langchain')
export class LangchainController {
  constructor(private readonly langchainService: LangchainService) {}

  @Get('')
  async chat() {
    return await this.langchainService.chat();
  }

  @Get('calculator')
  async calculate() {
    return await this.langchainService.functionCallingTest();
  }

  @Get('summarizer')
  async summarize() {
    return await this.langchainService.functinoCallig();
  }
}
