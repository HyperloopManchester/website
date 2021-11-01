import React from "react";

import Layout from "../components/Layout.jsx";

import { getAllNews } from "../lib/news.js";

export async function getStaticProps() {
  return {
    props: {
      news: getAllNews(),
    },
  };
}

export default function News({ news }) {
  return (
    <Layout title="News">
      <div className="container">
        <h1>News</h1>
        {news.map(({ title, datetime, description, content }, idx) => (
          <div key={idx}>
            <details>
              <summary>{title}: {description} ({new Date(datetime).toLocaleDateString()})</summary>
              <div className="text-break" dangerouslySetInnerHTML={{ __html: content }} />
            </details>
          </div>
        ))}
      </div>
    </Layout>
  );
}
