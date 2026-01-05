import React from "react";
import { Bot, User, Loader2 } from "lucide-react";
import type { Message } from "../../data/chatbotConfig";
import {
  CalendarSelector,
  TimeSelector,
  BookingSummary,
  QuickReplies,
} from "./BookingComponents";

interface ChatMessageProps {
  message: Message;
  onBookingStep: (input: string) => void;
  onQuickReply: (option: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onBookingStep,
  onQuickReply,
}) => {
  const handleConfirm = () => onBookingStep("Termin bestätigen");
  const handleEdit = () => onBookingStep("Ändern");

  return (
    <div
      className={`flex gap-3 ${
        message.role === "user" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
          message.role === "user"
            ? "bg-accent text-white"
            : "bg-primary/10 text-primary"
        }`}
      >
        {message.role === "user" ? (
          <User className="w-4 h-4" />
        ) : (
          <Bot className="w-4 h-4" />
        )}
      </div>

      <div
        className={`max-w-[85%] ${message.role === "user" ? "text-right" : ""}`}
      >
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            message.role === "user"
              ? "bg-accent text-white rounded-br-md"
              : "bg-white border border-gray-100 text-gray-700 rounded-bl-md shadow-sm"
          }`}
          dangerouslySetInnerHTML={{
            __html: message.content
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/\n/g, "<br/>"),
          }}
        />

        {/* Render special content types */}
        {message.type === "calendar" && (
          <CalendarSelector onSelectDate={onBookingStep} />
        )}
        {message.type === "time" && (
          <TimeSelector onSelectTime={onBookingStep} />
        )}
        {message.type === "summary" && message.formData && (
          <BookingSummary
            data={message.formData}
            onConfirm={handleConfirm}
            onEdit={handleEdit}
          />
        )}
        {message.type === "quick-reply" && message.options && (
          <QuickReplies options={message.options} onSelect={onQuickReply} />
        )}
      </div>
    </div>
  );
};

type LoadingMessageProps = Record<string, never>;

export const LoadingMessage: React.FC<LoadingMessageProps> = () => (
  <div className="flex gap-3">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
      <Bot className="w-4 h-4 text-primary" />
    </div>
    <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
      <div className="flex items-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin text-accent" />
        <span className="text-sm text-gray-500">Ich denke nach...</span>
      </div>
    </div>
  </div>
);
