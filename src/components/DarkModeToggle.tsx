'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // evita mismatch entre SSR e client

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <Button className='cursor-pointer' variant="outline" size="sm" onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
      {currentTheme === 'dark' ? <Sun className='h-4 w-4 dark:text-white' /> : <Moon className='h-4 w-4 dark:text-white' />}
    </Button>
  )
}