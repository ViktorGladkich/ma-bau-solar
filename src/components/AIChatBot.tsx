import React, { useState, useRef, useEffect } from "react";
import type {
  Message,
  BookingFormData,
  BookingStep,
} from "../data/chatbotConfig";
import {
  GEMINI_API_KEY,
  GEMINI_API_URL,
  SYSTEM_PROMPT,
  BOOKING_TRIGGER_PHRASES,
  getWelcomeMessage,
} from "../data/chatbotConfig";
import {
  ChatToggleButton,
  ChatHeader,
  ChatInput,
  ChatMessage,
  LoadingMessage,
} from "./chat";

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([getWelcomeMessage()]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState<BookingStep>("idle");
  const [formData, setFormData] = useState<BookingFormData>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addMessage = (message: Omit<Message, "id" | "timestamp">) => {
    const newMessage: Message = {
      ...message,
      id: `${message.role}-${Date.now()}`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };

  const startBookingFlow = () => {
    setBookingStep("firstName");
    setFormData({});
    addMessage({
      role: "assistant",
      content:
        "Toll! Ich helfe Ihnen gerne bei der Buchung eines Beratungstermins. ☀️\n\nLassen Sie uns mit ein paar kurzen Fragen beginnen.\n\n**Wie ist Ihr Vorname?**",
    });
  };

  const handleBookingStep = (input: string) => {
    switch (bookingStep) {
      case "firstName":
        setFormData((prev) => ({ ...prev, firstName: input }));
        setBookingStep("lastName");
        addMessage({ role: "user", content: input });
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content: `Freut mich, ${input}! ☀️\n\n**Wie ist Ihr Nachname?**`,
          });
        }, 500);
        break;

      case "lastName":
        setFormData((prev) => ({ ...prev, lastName: input }));
        setBookingStep("email");
        addMessage({ role: "user", content: input });
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content: `**Wie lautet Ihre E-Mail-Adresse?**`,
          });
        }, 500);
        break;

      case "email":
        if (!input.includes("@")) {
          addMessage({ role: "user", content: input });
          setTimeout(() => {
            addMessage({
              role: "assistant",
              content:
                "Hmm, das sieht nicht wie eine gültige E-Mail aus. Bitte geben Sie eine korrekte E-Mail-Adresse ein.",
            });
          }, 500);
          return;
        }
        setFormData((prev) => ({ ...prev, email: input }));
        setBookingStep("company");
        addMessage({ role: "user", content: input });
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content:
              "Perfekt! ✉️\n\n**Für welches Unternehmen arbeiten Sie?** (optional)",
            type: "quick-reply",
            options: ["Überspringen"],
          });
        }, 500);
        break;

      case "company":
        setFormData((prev) => ({
          ...prev,
          company: input === "Überspringen" ? "" : input,
        }));
        setBookingStep("message");
        addMessage({ role: "user", content: input });
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content:
              "Super! 🏢\n\n**Erzählen Sie kurz von Ihrem Projekt:** Freifläche oder Dach? Welche Größe? Was stellen Sie sich vor?",
            type: "quick-reply",
            options: ["Später besprechen"],
          });
        }, 500);
        break;

      case "message":
        setFormData((prev) => ({
          ...prev,
          message: input === "Später besprechen" ? "" : input,
        }));
        setBookingStep("date");
        addMessage({ role: "user", content: input });
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content:
              "Perfekt! 📝 Jetzt wählen Sie bitte einen **Termin** für Ihr Beratungsgespräch:",
            type: "calendar",
          });
        }, 500);
        break;

      case "date":
        setFormData((prev) => ({ ...prev, date: input }));
        setBookingStep("time");
        addMessage({ role: "user", content: input });
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content: "**Welche Uhrzeit passt Ihnen?**",
            type: "time",
          });
        }, 500);
        break;

      case "time":
        const updatedFormData = { ...formData, time: input };
        setFormData(updatedFormData);
        setBookingStep("confirm");
        addMessage({ role: "user", content: input });
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content: `Fantastisch! Hier ist Ihre **Terminübersicht**:`,
            type: "summary",
            formData: updatedFormData,
          });
        }, 500);
        break;

      case "confirm":
        if (input === "Termin bestätigen") {
          setBookingStep("done");
          addMessage({ role: "user", content: "✅ Termin bestätigen" });
          setTimeout(() => {
            addMessage({
              role: "assistant",
              content: `🎉 **Ihr Termin ist gebucht!**\n\nSie erhalten in Kürze eine Bestätigungs-E-Mail an **${formData.email}**.\n\nWir freuen uns auf das Gespräch mit Ihnen!\n\n*— Ihr MA Bau Team*`,
            });
            console.log("Booking confirmed:", formData);
          }, 500);
        } else if (input === "Ändern") {
          setBookingStep("firstName");
          setFormData({});
          addMessage({ role: "user", content: "Ändern" });
          setTimeout(() => {
            addMessage({
              role: "assistant",
              content:
                "Kein Problem! Lassen Sie uns von vorne beginnen.\n\n**Wie ist Ihr Vorname?**",
            });
          }, 500);
        }
        break;
    }
  };

  const sendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text || isLoading) return;

    setInputValue("");

    // Check if we're in booking mode
    if (bookingStep !== "idle" && bookingStep !== "done") {
      handleBookingStep(text);
      return;
    }

    // Check for booking trigger phrases
    if (
      BOOKING_TRIGGER_PHRASES.some((phrase) =>
        text.toLowerCase().includes(phrase)
      )
    ) {
      addMessage({ role: "user", content: text });
      setTimeout(() => startBookingFlow(), 500);
      return;
    }

    // Regular AI chat
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const conversationHistory = messages
        .filter(
          (m) =>
            m.id !== "welcome" &&
            m.type !== "calendar" &&
            m.type !== "time" &&
            m.type !== "summary"
        )
        .slice(-10)
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        }));

      conversationHistory.push({
        role: "user",
        parts: [{ text: userMessage.content }],
      });

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: conversationHistory,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 256,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      let assistantContent =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Entschuldigung, ich konnte keine Antwort generieren.";

      // Check if AI wants to trigger booking mode
      if (assistantContent.includes("[BOOKING_MODE]")) {
        assistantContent = assistantContent
          .replace("[BOOKING_MODE]", "")
          .trim();
        addMessage({
          role: "assistant",
          content:
            assistantContent ||
            "Natürlich helfe ich Ihnen gerne bei der Terminbuchung!",
        });
        setTimeout(() => startBookingFlow(), 1000);
      } else {
        addMessage({ role: "assistant", content: assistantContent });
      }
    } catch (error) {
      console.error("Chat error:", error);
      addMessage({
        role: "assistant",
        content:
          "Entschuldigung, es gab ein technisches Problem. Möchten Sie stattdessen einen Beratungstermin buchen?",
        type: "quick-reply",
        options: ["Ja, Termin buchen", "Später"],
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (option: string) => {
    if (option === "Beratungstermin buchen" || option === "Ja, Termin buchen") {
      addMessage({ role: "user", content: option });
      setTimeout(() => startBookingFlow(), 500);
    } else if (option === "Freiflächen-Anlagen") {
      addMessage({ role: "user", content: option });
      setTimeout(() => {
        addMessage({
          role: "assistant",
          content:
            "Unsere **Freiflächen-Anlagen** eignen sich perfekt für große Grundstücke! ☀️\n\nWir übernehmen den kompletten Prozess: von der Standortanalyse über die Planung bis zur schlüsselfertigen Installation.\n\nMöchten Sie einen Beratungstermin vereinbaren?",
          type: "quick-reply",
          options: ["Ja, Termin buchen", "Mehr erfahren"],
        });
      }, 500);
    } else if (option === "Dach-Anlagen") {
      addMessage({ role: "user", content: option });
      setTimeout(() => {
        addMessage({
          role: "assistant",
          content:
            "Unsere **Dach-Anlagen** sind ideal für Industrie- und Gewerbeflächen! 🏢\n\nOb Neubau oder Bestand – wir installieren leistungsstarke PV-Systeme auf Hallen- und Flachdächern.\n\nInteressiert an einer unverbindlichen Beratung?",
          type: "quick-reply",
          options: ["Ja, Termin buchen", "Mehr erfahren"],
        });
      }, 500);
    } else if (option === "Mehr erfahren") {
      addMessage({ role: "user", content: option });
      setTimeout(() => {
        addMessage({
          role: "assistant",
          content:
            "Gerne beantworte ich Ihre Fragen! 💡\n\nUnser Prozess:\n1. **Beratung** – Analyse Ihrer Anforderungen\n2. **Planung** – Maßgeschneiderte Lösung\n3. **Montage** – Professionelle Installation\n4. **Inbetriebnahme** – Sofort einsatzbereit\n\nWas möchten Sie wissen?",
        });
      }, 500);
    } else if (option === "Später") {
      addMessage({ role: "user", content: option });
      addMessage({
        role: "assistant",
        content:
          "Kein Problem! Ich bin jederzeit für Sie da. Was kann ich sonst für Sie tun?",
      });
    } else if (bookingStep !== "idle") {
      handleBookingStep(option);
    } else {
      sendMessage(option);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <ChatToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 right-6 z-50 w-[90vw] max-w-[420px] transition-all duration-500 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
          style={{ height: "min(650px, 75vh)" }}
        >
          <ChatHeader bookingStep={bookingStep} />

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onBookingStep={handleBookingStep}
                onQuickReply={handleQuickReply}
              />
            ))}

            {isLoading && <LoadingMessage />}

            <div ref={messagesEndRef} />
          </div>

          <ChatInput
            inputValue={inputValue}
            bookingStep={bookingStep}
            isLoading={isLoading}
            inputRef={inputRef as React.RefObject<HTMLInputElement>}
            onInputChange={setInputValue}
            onSend={() => sendMessage()}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
};
