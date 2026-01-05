import React from "react";
import { MessageCircle, X } from "lucide-react";

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
      isOpen
        ? "bg-primary"
        : "bg-gradient-to-br from-accent to-amber-600 hover:scale-105 hover:shadow-accent/20"
    }`}
    aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
  >
    {isOpen ? (
      <X className="w-5 h-5 text-white" />
    ) : (
      <MessageCircle className="w-5 h-5 text-white" />
    )}
  </button>
);
