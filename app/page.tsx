export default function HomePage() {
  const floatingDecor = ["🎂", "🌸", "🎉", "💖", "✨", "🌷", "🎈", "🕯️"]

  return (
    <div className="relative isolate flex min-h-[100dvh] items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-600 via-pink-500 to-rose-500 px-6">
      <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 animate-pulse rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-16 h-80 w-80 animate-pulse rounded-full bg-yellow-200/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0">
        {floatingDecor.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`absolute text-2xl sm:text-3xl ${index % 2 === 0 ? "animate-bounce" : "animate-pulse"}`}
            style={{
              left: `${8 + (index % 4) * 23}%`,
              top: `${12 + Math.floor(index / 4) * 58}%`,
              animationDelay: `${index * 0.25}s`,
              animationDuration: `${3 + (index % 3)}s`,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="relative rounded-3xl border border-white/30 bg-white/10 px-8 py-10 shadow-2xl backdrop-blur-md sm:px-14 sm:py-14">
        <p className="mb-3 text-center text-3xl animate-bounce">🎂</p>
        <h1 className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] sm:text-6xl md:text-7xl">
          Happy Birthday Noor
        </h1>
        <p className="mt-4 text-center text-white/90">🌸 🎉 💖 🎉 🌸</p>
      </div>
    </div>
  )
}