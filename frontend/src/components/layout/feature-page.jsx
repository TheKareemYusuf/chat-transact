"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Modal } from "@/components/ui/modal"

export function FeaturePage({ title }) {
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </header>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Feature Coming Soon"
        >
          <p>This feature is currently under development and will be available soon.</p>
        </Modal>
      </div>
    </div>
  )
}