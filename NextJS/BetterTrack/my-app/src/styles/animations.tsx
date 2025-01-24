"use client"

export function ShakeAnimation() {
  return (
    <style jsx global>{`
      @keyframes subtle-shake {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(1px, 1px) rotate(0.5deg); }
        50% { transform: translate(0, -1px) rotate(-0.5deg); }
        75% { transform: translate(-1px, 0) rotate(0.5deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
      .shake-animation {
        animation: subtle-shake 0.5s infinite;
      }
    `}</style>
  )
}
