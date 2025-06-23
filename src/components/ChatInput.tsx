'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ChatInput() {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!message.trim()) return
    console.log('Enviando mensagem:', message)
    setMessage('')
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
    }} className='w-full border-t bg-gray-100 p-4 dark:bg-gray-800'>
      <div className="bg-white border-gray-300 mx-auto w-full max-w-[1200px] dark:bg-gray-800 dark:border-gray-600 dark:text-white flex items-center gap-2">
        <Input
          placeholder="Digite sua pergunta..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button className='bg-blue-700 hover:bg-blue-800 cursor-pointer' onClick={handleSend}><Send className='h-4 w-4 text-white dark:text-white' /></Button>
      </div>
    </form>
  )
}