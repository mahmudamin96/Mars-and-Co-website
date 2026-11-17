"use client";

import { useState } from "react";
import { budgets, sectors, site } from "@/lib/content";
import { Reveal } from "../motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className="contact-form contact-thanks">
        <p className="display display-md">Message received!</p>
        <p>Thanks for reaching out. We&apos;ll get back to you within one working day.</p>
      </div>
    );

  return (
    <Reveal delay={0.4} className="contact-form-wrap">
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true); // TODO: send to email / CRM endpoint
        }}
      >
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" className="input" placeholder="Type your name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">
            Email <span className="req">*</span>
          </label>
          <input id="c-email" className="input" type="email" placeholder="Type your email" autoComplete="email" required />
        </div>
        <div className="contact-two">
          <div className="field">
            <label htmlFor="c-sector">Interested Sector</label>
            <div className="select-wrap">
              <select id="c-sector" className="input" defaultValue="">
                <option value="" disabled>
                  Select industry
                </option>
                {sectors.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-budget">Budget</label>
            <div className="select-wrap">
              <select id="c-budget" className="input" defaultValue="">
                <option value="" disabled>
                  Select budget
                </option>
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="c-msg">Message</label>
          <textarea id="c-msg" className="input" placeholder="Type your message" />
        </div>
        <div className="field">
          <label htmlFor="c-pizza">Why do round pizzas come in square boxes?</label>
          <input id="c-pizza" className="input" placeholder="Write your Answer..." />
        </div>
        <div className="contact-submit">
          <div>
            <p className="contact-hate">Hate contact forms?</p>
            <a href={`mailto:${site.email}`} className="u-link contact-mail">
              {site.email}
            </a>
          </div>
          <button type="submit" className="btn btn--red btn--plain">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </Reveal>
  );
}
