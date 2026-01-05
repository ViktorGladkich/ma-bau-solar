import React from "react";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import type { BookingFormData } from "../../data/chatbotConfig";
import { getAvailableDates, TIME_SLOTS } from "../../data/chatbotConfig";

interface CalendarSelectorProps {
  onSelectDate: (date: string) => void;
}

export const CalendarSelector: React.FC<CalendarSelectorProps> = ({
  onSelectDate,
}) => {
  const dates = getAvailableDates();
  return (
    <div className="grid grid-cols-2 gap-2 mt-3">
      {dates.map((d) => (
        <button
          key={d.date}
          onClick={() => onSelectDate(d.display)}
          className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-accent hover:text-white rounded-lg text-sm transition-all border border-gray-200 hover:border-accent"
        >
          <Calendar className="w-4 h-4" />
          {d.display}
        </button>
      ))}
    </div>
  );
};

interface TimeSelectorProps {
  onSelectTime: (time: string) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({ onSelectTime }) => (
  <div className="grid grid-cols-3 gap-2 mt-3">
    {TIME_SLOTS.map((time) => (
      <button
        key={time}
        onClick={() => onSelectTime(time)}
        className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-50 hover:bg-accent hover:text-white rounded-lg text-sm transition-all border border-gray-200 hover:border-accent"
      >
        <Clock className="w-3 h-3" />
        {time}
      </button>
    ))}
  </div>
);

interface BookingSummaryProps {
  data: BookingFormData;
  onConfirm: () => void;
  onEdit: () => void;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  data,
  onConfirm,
  onEdit,
}) => (
  <div className="mt-3 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-accent/20">
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-500">Name:</span>
        <span className="font-medium">
          {data.firstName} {data.lastName}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">E-Mail:</span>
        <span className="font-medium">{data.email}</span>
      </div>
      {data.company && (
        <div className="flex justify-between">
          <span className="text-gray-500">Unternehmen:</span>
          <span className="font-medium">{data.company}</span>
        </div>
      )}
      {data.message && (
        <div className="flex justify-between">
          <span className="text-gray-500">Nachricht:</span>
          <span className="font-medium text-right max-w-[60%]">
            {data.message}
          </span>
        </div>
      )}
      <div className="flex justify-between">
        <span className="text-gray-500">Termin:</span>
        <span className="font-medium text-accent">
          {data.date} um {data.time}
        </span>
      </div>
    </div>
    <div className="flex gap-2 mt-4">
      <button
        onClick={onConfirm}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-all"
      >
        <CheckCircle className="w-4 h-4" />
        Bestätigen
      </button>
      <button
        onClick={onEdit}
        className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-all"
      >
        Ändern
      </button>
    </div>
  </div>
);

interface QuickRepliesProps {
  options: string[];
  onSelect: (option: string) => void;
}

export const QuickReplies: React.FC<QuickRepliesProps> = ({
  options,
  onSelect,
}) => (
  <div className="flex flex-wrap gap-2 mt-3">
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onSelect(option)}
        className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs hover:bg-accent hover:text-white hover:border-accent transition-all flex items-center gap-1"
      >
        {option}
        <ArrowRight className="w-3 h-3" />
      </button>
    ))}
  </div>
);
