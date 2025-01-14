import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../../../utils/url';

export const OPEN_AI_Client = new OpenAI({
  apiKey: OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true,
});
 