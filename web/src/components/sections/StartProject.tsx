"use client";

import { useState } from "react";
import { sectors } from "@/lib/content";
import { Reveal } from "../motion";
import { ArrowIcon } from "../ui";

/** Dark rounded "Start your project" card with the quick form (incl. the pizza question). */
export default function StartProject() {
  const [sent, setSent] = useState(false);
  return (
    <section className="start wrap">
      <Reveal className="start-card">
        <div className="start-copy">
          <h2 className="display display-lg">
            Start your
            <br />
            project
          </h2>
          <p className="lead">Partner with Mars &amp; Co to bring your vision to life through strategy, design, and creativity that drive real results.</p>
        </div>
        {sent ? (
          <div className="start-thanks">
            <p className="display display-md">Thank you!</p>
            <p>We&apos;ll be in touch within one working day. (And yes, we have a theory about the pizza boxes.)</p>
          </div>
        ) : (
          <form
            className="start-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true); // TODO: connect to email / CRM endpoint
            }}
          >
            <div className="field">
              <label htmlFor="sp-email">Email</label>
              <input id="sp-email" className="input" type="email" placeholder="Write your email" required />
            </div>
            <div className="field">
              <label htmlFor="sp-sector">Interested Sector</label>
              <div className="select-wrap">
                <select id="sp-sector" className="input" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  {sectors.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="sp-pizza">Why do round pizzas come in square boxes?</label>
              <input id="sp-pizza" className="input" placeholder="Write your Answer..." />
            </div>
            <button className="btn btn--red" type="submit">
              <span>Start a Project</span>
              <span className="btn-arrow">
                <ArrowIcon />
              </span>
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
