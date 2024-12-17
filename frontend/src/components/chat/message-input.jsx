"use client"

import { useState } from "react"
import { Smile, Paperclip } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


export function MessageInput({ onSend }) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      onSend(message)
      setMessage("")
    }
  }

  return (
    <div className="border-t p-4">
      <div className="flex items-end gap-2">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type here"
          className="min-h-[80px]"
        />
        <div className="flex flex-col gap-2">
          <Button variant="ghost" size="icon">
            <Smile className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleSend}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

