
"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Phone, Send } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xljbrlgd", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cover bg-center py-20 sm:py-24"
      style={{ backgroundImage: "url('/mountain-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#031426]/90" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-[#40a7ff]">
            LET'S CONNECT
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/75">
            Have a project in mind or need support with your business
            development operations? Tell me about it. I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* DIRECT CONTACT DETAILS */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Get in touch
              </h3>
              <p className="mt-3 leading-7 text-white/70">
                Whether you need B2B lead generation, CRM support, marketing
                operations or paid advertising, let's discuss how I can help.
              </p>
            </div>

            <a
              href="mailto:nkemstrong223@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#40a7ff]/60 hover:bg-white/10"
            >
              <span className="rounded-lg bg-[#087fe5]/20 p-3 text-[#40a7ff]">
                <Mail size={22} />
              </span>
              <span>
                <span className="block text-sm text-white/60">Email me</span>
                <span className="mt-1 block break-all font-medium text-white">
                  nkemstrong223@gmail.com
                </span>
              </span>
            </a>

            <a
              href="https://wa.me/2348168301300"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#40a7ff]/60 hover:bg-white/10"
            >
              <span className="rounded-lg bg-[#087fe5]/20 p-3 text-[#40a7ff]">
                <Phone size={22} />
              </span>
              <span>
                <span className="block text-sm text-white/60">
                  WhatsApp
                </span>
                <span className="mt-1 block font-medium text-white">
                  +234 816 830 1300
                </span>
              </span>
            </a>

            <div className="rounded-xl border border-[#40a7ff]/20 bg-[#087fe5]/10 p-5">
              <p className="font-semibold text-white">
                Open to opportunities
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Available for remote opportunities, freelance projects and
                collaborations with businesses worldwide.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-2xl border border-white/10 bg-[#071c32]/90 p-6 shadow-2xl sm:p-8">
            <h3 className="text-2xl font-bold text-white">
              Send me a message
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Fill out the form and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-white/15 bg-[#031426] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#40a7ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-white/15 bg-[#031426] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#40a7ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-lg border border-white/15 bg-[#031426] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#40a7ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or enquiry..."
                  required
                  className="w-full resize-y rounded-lg border border-white/15 bg-[#031426] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#40a7ff]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#087fe5] px-6 py-4 font-bold text-white transition hover:bg-[#168cf5] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending message..."
                  : "Send Message"}
                {status !== "sending" && <Send size={17} />}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-300">
                    Thank you! Your message has been sent successfully. I'll
                    get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    Sorry, your message couldn't be sent. Please try again or
                    contact me directly by email.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
