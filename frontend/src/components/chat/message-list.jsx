import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start gap-2 ${message.isOutgoing ? "flex-row-reverse" : ""}`}
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src={message.sender.avatar || "/placeholder.svg"} />
            <AvatarFallback>{message.sender.name[0]}</AvatarFallback>
          </Avatar>
          <div
            className={`rounded-lg p-3 max-w-[70%] ${
              message.isOutgoing
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <p>{message.content}</p>
            <span className="text-xs mt-1 block opacity-70">{message.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

