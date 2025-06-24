import axios from 'axios';

export async function sendMessage(message: string) {
  try {
    const { data } = await axios.post('http://192.168.0.124:5678/webhook/ai-chat', { message })
    return data
  } catch (error) {
    throw new Error('Failed to fetch mock response')
  }
}