'use client'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Lottie() {
  return (
    <div className="w-full max-w-[500px]">
      <DotLottieReact
        src="Lottie.lottie"
        autoplay
        loop
      />
    </div>
  );
};
