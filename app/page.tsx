"use client"; // Force the entire page to be a client component for testing

import SeatMap from "../components/SeatMap";

export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Cinema App</h1>
      <SeatMap />
    </div>
  );
}