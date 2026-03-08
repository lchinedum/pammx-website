import { CONTACT } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | PAMMX",
  description:
    "Get in touch with PAMMX. Email support@pammx.com or call Lucky or Matt.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          Get in touch with the PAMMX team for inquiries about the strategy or
          investor onboarding.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-white">Contact Details</h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <span className="text-sm text-gray-500">Email</span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block text-pammx-blue hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <span className="text-sm text-gray-500">
                    {CONTACT.lucky.name}
                  </span>
                  <a
                    href={`tel:${CONTACT.lucky.raw}`}
                    className="mt-1 block text-pammx-blue hover:underline"
                  >
                    {CONTACT.lucky.phone}
                  </a>
                </li>
                <li>
                  <span className="text-sm text-gray-500">
                    {CONTACT.matt.name}
                  </span>
                  <a
                    href={`tel:${CONTACT.matt.raw}`}
                    className="mt-1 block text-pammx-blue hover:underline"
                  >
                    {CONTACT.matt.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-pammx-dark-800/50 p-6">
              <h2 className="text-xl font-bold text-white">Send a Message</h2>
              <p className="mt-2 text-sm text-gray-400">
                We will respond as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
