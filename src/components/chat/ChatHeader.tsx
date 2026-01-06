import React from "react";
import { Bot, X } from "lucide-react";
import type { BookingStep } from "../../data/chatbotConfig";

const BOOKING_STEPS: BookingStep[] = [
  "firstName",
  "lastName",
  "email",
  "company",
  "message",
  "date",
  "time",
  "confirm",
];

interface ChatHeaderProps {
  bookingStep: BookingStep;
  onClose?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  bookingStep,
  onClose,
}) => {
  const isBooking = bookingStep !== "idle" && bookingStep !== "done";
  const currentStepIndex = BOOKING_STEPS.indexOf(bookingStep);

  return (
    <div className="bg-gradient-to-r from-primary via-primary to-[#2a2a2a] px-6 py-5 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          aria-label="Chat schließen"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      )}

      <div className="relative flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
          <Bot className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-medium">MA Bau Assistent</h3>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>{isBooking ? "Terminbuchung..." : "Verfügbar"}</span>
          </div>
        </div>
      </div>

      {/* Progress bar for booking */}
      {isBooking && (
        <div className="mt-4 flex gap-1">
          {BOOKING_STEPS.map((step, i) => (
            <div
              key={step}
              className={`h-1 flex-1 rounded-full transition-all ${
                currentStepIndex >= i ? "bg-accent" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
