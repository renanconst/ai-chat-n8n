type Props = {
  role: 'user' | 'ai'
  text: string
}

export default function ChatBubble({ role, text }: Props) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-[75%] text-base ${
          isUser
            ? 'bg-blue-700 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
        }`}
      >
        {text}
      </div>
    </div>
  )
}