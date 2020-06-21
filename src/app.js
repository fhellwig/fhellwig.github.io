import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const base = 'https://raw.githubusercontent.com/fhellwig/fhellwig.github.io/master/content';

async function readText(path) {
  if (path.endsWith('/')) {
    path += 'index.md';
  }
  const resp = await axios.get(base + path);
  console.log('resp', resp);
  if (resp.status !== 200) {
    throw new Error('Not found: ' + path);
  }
  return resp.data;
}

export function App() {
  console.log(window.location.pathname);

  useEffect(() => {
    const fn = async () => {
      const text = await readText(window.location.pathname);
      console.log(text);
    };
    fn();
  }, [window.location.pathname]);
  return (
    <>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Frank's Dev Blog</h1>
            <h2 className="subtitle">Thoughts about software and sofware development</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <p>Under construction</p>
          </div>
        </div>
      </section>
    </>
  );
}
