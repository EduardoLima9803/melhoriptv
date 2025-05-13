import React from 'react';

export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Melhor IPTV</h1>
      <p>Planos disponíveis:</p>
      <ul style={{ listStyle: 'none' }}>
        <li>Mensal: R$ 35,00</li>
        <li>Trimestral: R$ 95,00</li>
        <li>Semestral: R$ 180,00</li>
        <li>Anual: R$ 350,00</li>
      </ul>
      <a href="https://wa.me/5541995764429" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Fale no WhatsApp</button>
      </a>
    </div>
  );
}