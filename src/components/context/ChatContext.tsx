'use client'

import { useState, createContext, useContext } from "react"
import { v4 as uuid } from 'uuid'
import { sendMessage } from '@/lib/sendMessage'


type ChatRole = 'user' | 'ai'

type Message = {
  id: string
  role: ChatRole
  text: string
}

type ChatContextType = {
  messages: Message[]
  isTyping: boolean
  handleSend: (text: string) => Promise<void>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async (text: string) => {
    const userMsg: Message = {
      id: uuid(), role: 'user', text: text.trim()
    }
    setMessages(prev => [...prev, userMsg])
    setIsTyping(true)

    try {
      const reply = await sendMessage(userMsg.text)
      const aiMsg: Message = { id: uuid(), role: 'ai', text: reply }
      setMessages(prev => [...prev, aiMsg])
    } catch {
      const erroMsg: Message = { id: uuid(), role: 'ai', text: "Erro ao buscar RESPONSE_LIMIT_DEFAULT." }
      setMessages(prev => [...prev, erroMsg])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <ChatContext.Provider value={{ messages, isTyping, handleSend }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) throw new Error('useChat must be used within a ChatProvider')
  return context
}