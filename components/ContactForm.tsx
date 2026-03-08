"use client";

import { CONTACT } from "@/lib/constants";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const body = formData.get("body") as string;
    const subject = `PAMMX Inquiry from ${name}`;
    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${body}`;
    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-white/10 bg-pammx-dark px-4 py-2 text-white placeholder-gray-500 focus:border-pammx-blue focus:outline-none focus:ring-1 focus:ring-pammx-blue"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-white/10 bg-pammx-dark px-4 py-2 text-white placeholder-gray-500 focus:border-pammx-blue focus:outline-none focus:ring-1 focus:ring-pammx-blue"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="body"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-white/10 bg-pammx-dark px-4 py-2 text-white placeholder-gray-500 focus:border-pammx-blue focus:outline-none focus:ring-1 focus:ring-pammx-blue"
          placeholder="Your message..."
        />
      </div>
      {submitted ? (
        <p className="text-sm text-pammx-green">
          Your email client should open. If not, email us directly at{" "}
          <a href={`mailto:${CONTACT.email}`} className="underline">
            {CONTACT.email}
          </a>
        </p>
      ) : (
        <button
          type="submit"
          className="w-full rounded-lg bg-pammx-green px-4 py-3 font-semibold text-white transition hover:bg-emerald-500"
        >
          Send Message
        </button>
      )}
    </form>
  );
}
