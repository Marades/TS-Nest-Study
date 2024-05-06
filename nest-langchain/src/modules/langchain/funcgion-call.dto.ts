import { z } from 'zod';

/**
 * Note that the descriptions here are crucial, as they will be passed along
 * to the model along with the class name.
 */
export const summarySchema = z.object({
  title: z.string().describe('title of content'),
  summary: z.string().describe('summary of content with 3 lines'),
});

export const calculatorSchema = z.object({
  operation: z
    .enum(['add', 'subtract', 'multiply', 'divide'])
    .describe('The type of operation to execute.'),
  number1: z.number().describe('The first number to operate on.'),
  number2: z.number().describe('The second number to operate on.'),
});
