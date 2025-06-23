import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'
import ChatContainer from '@/components/ChatContainer'
import { ChatProvider } from '@/components/context/ChatContext'

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] bg-muted">
      <Header />
      <ChatProvider>
        <div className="flex-grow overflow-hidden">
          <ChatContainer />
        </div>
        <ChatInput />
      </ChatProvider>
    </main>
  )
}
