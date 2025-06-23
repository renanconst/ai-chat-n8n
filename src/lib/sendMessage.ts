import axios from 'axios';

export async function sendMessage(message: string) {
  try {
    const { data } = await axios.post('http://localhost:4000/webhook/ai-chat', { message })
    return data.reply
  } catch (error) {
    throw new Error('Failed to fetch mock response')
  }
}