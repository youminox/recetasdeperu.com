"use client";

import { openChat } from "@/lib/chat-constants";

export default function OpenChatButton({
  label = "Preguntar al Chef IA",
  prompt,
  className = "btn btn-buy",
  magnetic = false,
}: {
  label?: string;
  prompt?: string;
  className?: string;
  magnetic?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => openChat(prompt)}
      className={className}
      data-magnetic={magnetic ? "" : undefined}
    >
      <span>👨‍🍳</span>
      <span>{label}</span>
    </button>
  );
}
