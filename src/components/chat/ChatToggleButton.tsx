import React from "react";
import { MessageCircle } from "lucide-react";

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({
  isOpen,
  onClick,
}) => {
  // Скрываем кнопку когда чат открыт
  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-br from-accent to-amber-600 hover:scale-105 hover:shadow-accent/20"
      aria-label="Chat öffnen"
    >
      <MessageCircle className="w-5 h-5 text-white" />
    </button>
  );
};
