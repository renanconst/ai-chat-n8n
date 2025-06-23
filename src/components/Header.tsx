
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DarkModeToggle from './DarkModeToggle'
import { Github, BotMessageSquare } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b bg-gray-100 dark:bg-gray-800 px-4 py-3 shadow-sm">
      <div className="mx-auto w-full max-w-[1200px] flex items-center justify-between">
        <Link href="/" className="text-xl flex items-center gap-1 font-bold text-primary dark:text-white">
          <BotMessageSquare className='h-8 w-8' />
          AI-chat
        </Link>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href="https://github.com/renanconst/ai-chat-n8n" target="_blank" rel="noopener noreferrer">
              <Github className='h-4 w-4 dark:text-white' />
            </a>
          </Button>

          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}