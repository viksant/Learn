import React, { useState } from 'react';
import quotesJson from './quotesFile.json';
import { AuroraBackground } from './components/ui/aurora-background';
import { motion } from 'framer-motion';

function AuroraBackgroundDemo({ children }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}

function ChangeButton({ handleChange }) {
  return (
    <button className="newQuoteButton" onClick={handleChange}>
      Generate New Quote
    </button>
  );
}

function App() {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesJson.quotesJson.length);
    return quotesJson.quotesJson[randomIndex];
  };

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  const refreshQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <AuroraBackgroundDemo>
      <motion.div
        key={currentQuote}  // Clave única para que React identifique el cambio de cita
        initial={{ opacity: 0, y: -20 }}  // Estado inicial de la animación
        animate={{ opacity: 1, y: 0 }}  // Estado final de la animación
        exit={{ opacity: 0, y: 20 }}  // Estado al salir de la animación
        transition={{ duration: 0.5 }}  // Duración de la animación
        className="text-white text-5xl font-bold text-center"
      >
        {currentQuote}
      </motion.div>
      <ChangeButton handleChange={refreshQuote} />
    </AuroraBackgroundDemo>
  );
}

export default App;
