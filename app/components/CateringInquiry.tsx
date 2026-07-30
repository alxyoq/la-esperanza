"use client";

import { CalendarDays, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { site } from "@/app/site";

export default function CateringInquiry() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const eventDate = String(data.get("event-date") ?? "");
    const guests = String(data.get("guests") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Catering inquiry from ${name || "La Esperanza website guest"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Event date: ${eventDate || "Not provided"}`,
      `Estimated guests: ${guests || "Not provided"}`,
      "",
      message,
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:${site.cateringEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Estimated guests</span>
          <input name="guests" type="number" min="1" inputMode="numeric" />
        </label>
        <label className="date-label">
          <span>Event date</span>
          <span className="date-input-wrap">
            <CalendarDays size={18} aria-hidden="true" />
            <input name="event-date" type="date" />
          </span>
        </label>
        <label className="full-field">
          <span>Tell us about your event *</span>
          <textarea name="message" rows={6} required />
        </label>
      </div>
      <button type="submit" className="button button-primary form-submit">
        <Send size={18} aria-hidden="true" />
        Start Your Catering Request
      </button>
      <p className="form-note" aria-live="polite">
        {submitted
          ? "Your email app should open with the details filled in. Send the message to complete your request."
          : `This opens a prepared email to ${site.cateringEmail}. Prefer to talk? Call ${site.phoneDisplay}.`}
      </p>
    </form>
  );
}
