'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import ChatBubble from './ChatBubble'
import TypingIndicator from './TypingIndicator'
import { useChat } from './context/ChatContext'

export default function ChatContainer() {
  const { messages, isTyping } = useChat()

  return (
    <ScrollArea className="h-full p-4">
      <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-3">
        {messages.map(msg => (
          <ChatBubble key={msg.id} role={msg.role} text={msg.text} />
        ))}

        {isTyping && <TypingIndicator />}
      </div>
    </ScrollArea>
  )
}
