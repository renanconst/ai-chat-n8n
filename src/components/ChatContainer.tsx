'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import ChatBubble from './ChatBubble'
import TypingIndicator from './TypingIndicator'

type ChatRole = 'user' | 'ai'

type ChatMessage = {
  role: ChatRole
  text: string
}

const mockMessages: ChatMessage[] = [
  { role: 'user', text: 'Oi, o que você faz?' },
  { role: 'ai', text: 'Sou um assistente inteligente integrado via n8n.' },
  { role: 'user', text: 'Fale me mais sobre isso, fiquei curioso com o que você pode fazer.' },
]

export default function ChatContainer() {

  return (
    <ScrollArea className="h-full p-4">
      <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-3">
        {mockMessages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} text={msg.text} />
        ))}
        <TypingIndicator />
      </div>
    </ScrollArea>
  )
}
