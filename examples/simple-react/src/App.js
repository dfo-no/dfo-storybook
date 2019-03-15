import React from 'react';
import { Header, Footer, Button } from '@dfo/components';

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ margin: '3rem 2rem' }}>
        <h1>Yo <span role="img" aria-label="Hånd som vinker">👋</span></h1>
        <Button>Heisann</Button>
      </main>
      <Footer />
    </div>
  );
}
