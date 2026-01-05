import React from "react";
import { Send } from "lucide-react";
import type { BookingStep } from "../../data/chatbotConfig";

interface ChatInputProps {
  inputValue: string;
  bookingStep: BookingStep;
  isLoading: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  bookingStep,
  isLoading,
  inputRef,
  onInputChange,
  onSend,
  onKeyPress,
}) => {
  const isBooking = bookingStep !== "idle" && bookingStep !== "done";

  const getStepNumber = () => {
    const steps = [
      "firstName",
      "lastName",
      "email",
      "company",
      "message",
      "date",
      "time",
      "confirm",
    ];
    return steps.indexOf(bookingStep) + 1;
  };

  return (
    <div className="p-4 border-t border-gray-100 bg-white">
      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder={
            isBooking ? "Ihre Antwort..." : "Schreiben Sie Ihre Nachricht..."
          }
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400"
          disabled={isLoading}
        />
        <button
          onClick={onSend}
          disabled={!inputValue.trim() || isLoading}
          className="w-12 h-12 bg-gradient-to-br from-accent to-amber-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
          aria-label="Nachricht senden"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[10px] text-gray-400 mt-2 text-center">
        {isBooking
          ? `Schritt ${getStepNumber()} von 8`
          : "KI-Assistent • Terminbuchung möglich"}
      </p>
    </div>
  );
};
