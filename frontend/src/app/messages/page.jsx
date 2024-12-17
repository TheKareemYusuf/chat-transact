"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { MessageList } from "@/components/chat/message-list"
import { MessageInput } from "@/components/chat/message-input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mockMessages = [
  {
    id: "1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    sender: {
      name: "Jeff Ben",
      username: "@jeff",
    },
    timestamp: "10:40 AM",
  },
  {
    id: "2",
    content: "Hey Jeff Ben! How are you?",
    sender: {
      name: "Jane Harrison",
      username: "@jane",
    },
    timestamp: "11:41 AM",
    isOutgoing: true,
  },
]

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null)

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header showBackButton={!!selectedChat} onBack={() => setSelectedChat(null)} />
        <div className="flex-1 flex">
          <div className="w-80 border-r overflow-y-auto">
            {/* Chat list */}
            <div className="divide-y">
              {["Jeff Ben", "Dev Abiodun"].map((name, i) => (
                <button
                  key={name}
                  onClick={() => setSelectedChat(name)}
                  className="w-full p-4 text-left hover:bg-gray-50 flex items-start gap-3"
                >
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{name}</div>
                    <div className="text-sm text-gray-500">
                      {i === 0
                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        : "Hello Dev! How are you today?"}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">5 min ago</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{selectedChat[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{selectedChat}</div>
                      <div className="text-sm text-gray-500">@{selectedChat.toLowerCase().replace(" ", "")}</div>
                    </div>
                  </div>
                </div>
                <MessageList messages={mockMessages} />
                <MessageInput onSend={console.log} />
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold mb-2">Select a chat</h2>
                  <p>Please select a conversation to view messages.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

