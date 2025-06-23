export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 px-4 py-2">
      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-bounce [animation-delay:-0.3s]" />
      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-bounce [animation-delay:-0.15s]" />
      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-bounce" />
    </div>
  )
}