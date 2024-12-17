"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Plug,
  Package,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Modal } from "@/components/ui/modal";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Integration", href: "/integration", icon: Plug },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Payment", href: "/payment", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleNavClick = (item) => {
    if (item.href === "/messages") {
      return; // Allow normal navigation for messages page
    }

    setSelectedFeature(item.name);
    setShowModal(true);
  };

  return (
    <>
      <div className="flex flex-col h-full bg-gray-100 w-64">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-full bg-teal-600 rounded-md flex items-center justify-center p-2">
              <Image
                src="/ChatTransactLogo.png"
                alt="Chat Transact Logo"
                width={256}
                height={256}
                className="w-full h-10 object-contain"
              />
              
            </div>
          </div>
          <Input type="search" placeholder="Search" className="mb-4" />
          <nav className="space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md w-full",
                  pathname === item.href
                    ? "bg-teal-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JH</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Jane Harrison</div>
              <div className="text-sm text-gray-500">Log out</div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`${selectedFeature} - Coming Soon`}
      >
        <p>
          The {selectedFeature} feature is currently under development and will
          be available soon.
        </p>
      </Modal>
    </>
  );
}
