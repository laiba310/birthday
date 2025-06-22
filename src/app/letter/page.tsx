'use client';

import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';

export default function Letter() {
  const [blown, setBlown] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleBlow = () => {
    setBlown(true);
    confetti({ particleCount: 250, spread: 100, origin: { y: 0.6 } });
    audioRef.current?.play();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-pink-200 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <audio ref={audioRef} src="/birthday.mp3" preload="auto" />

      {!blown && (
        <>
          <h1 className="text-4xl font-pacifico text-pink-600 mb-8 animate-bounce">🎂 Blow the Candles!</h1>

          {/* 🎂 Cake SVG */}
          <div className="w-full max-w-sm relative z-10 scale-100 hover:scale-105 transition-transform duration-500">
            <svg viewBox="0 0 200 200" className="w-full h-auto mx-auto">
              {/* Plate */}
              <ellipse cx="100" cy="180" rx="80" ry="10" fill="#fcd5ce" />
              {/* Cake Layers */}
              <rect x="40" y="110" width="120" height="40" rx="10" fill="#f7c59f" />
              <path d="M40 110 Q100 140 160 110 L160 130 Q100 160 40 130 Z" fill="#8e5a4b" />
              <rect x="60" y="70" width="80" height="40" rx="10" fill="#f7c59f" />
              <path d="M60 70 Q100 90 140 70 L140 90 Q100 110 60 90 Z" fill="#8e5a4b" />
              {/* Candles */}
              {[80, 100, 120].map((cx, i) => (
                <g key={i}>
                  <rect x={cx - 2} y="50" width="4" height="20" fill="#add8e6" />
                  <circle cx={cx} cy="48" r="4" fill="#ffa500">
                    <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </svg>
          </div>

          {/* Blow Button */}
          <button
            onClick={handleBlow}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Blow the Candles 🕯️
          </button>
        </>
      )}

      {/* 💌 Letter */}
      {blown && (
        <div className="mt-12 max-w-xl text-lg text-gray-700 bg-white p-6 rounded-3xl shadow-xl animate-fade-in z-10 border-4 border-pink-200">
          <p className="mb-4 italic text-left font-semibold text-pink-600">Dear fizzuuu 💖</p>
          <p>
            Hehehee I hope tumhe yeh pasand aayi 🥺💗 Not so creative, but I tried my best... ✨<br />
            Happy Birthday jaanuuu 🎂🎉 Hamesha khush raho, saath raho, and ily soooo muchhh 🥹🌈 <br /><br />
            Soo januuu, I’m very lucky that you’re my best friend 🌸 Tumne hamesha har jagah meri madad ki 💫<br />
            Jab bhi low ho jaati hoon ya jab kuch samajh nahi aata hota — you’re always the only one there for me 💕<br /><br />
            Thank you soooo muchhhhh for everything 😭💖
          </p>
          <p className="mt-4 font-semibold">Happy Birthday! 🎉</p>
          <p className="mt-2 text-right text-pink-600">— With love, always 💌</p>
        </div>
      )}

      {/* ✨ Sparkle Background */}
      <div className="absolute inset-0 bg-[url('/sparkle.svg')] bg-repeat opacity-10 pointer-events-none z-0" />
    </div>
  );
}
