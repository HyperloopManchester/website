import React from "react";

import Layout from "../components/Layout.jsx";

import { getAllEvents } from "../lib/events.js";

export async function getStaticProps() {
  return {
    props: {
      events: getAllEvents(),
    },
  };
}

export default function Events({ events }) {
  return (
    <Layout title="Events">
      <div className="text-center">
        <h1>
          Under Construction
        </h1>
        <p>
          Please check back again later!
        </p>
        {events.map((item, idx) => (
          <div key={idx}>
            <details>
              <summary></summary>
              <div>
              </div>
            </details>
          </div>
        ))}
      </div>
    </Layout>
  );
}
