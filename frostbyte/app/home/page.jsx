'use client';

import React from 'react';

const Homepage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Frostbyte</h1>
      <p style={styles.description}>AI-powered frostbite risk assessment</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: '3rem',
    color: '#3a3a3a',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.5rem',
    color: '#777',
  }
};

export default Homepage;