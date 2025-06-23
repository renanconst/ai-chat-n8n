import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'
import ChatContainer from '@/components/ChatContainer'

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] bg-muted">
      <Header />
      <div className="flex-grow overflow-hidden">
        <ChatContainer />
      </div>
      <ChatInput />
    </main>
  )
}
