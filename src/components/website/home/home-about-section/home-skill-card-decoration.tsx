export default function HomeSkillCardDecoration() {
  return (
    <>
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-transparent group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <span className="absolute w-0.5 h-0.5 bg-blue-400/70 rotate-45 animate-float-fast left-6 top-8 group-hover:bg-blue-300" />
        <span className="absolute w-0.75 h-0.75 bg-purple-400/50 rotate-45 animate-float-slow right-8 top-12 group-hover:bg-purple-300" />
        <span className="absolute w-px h-px bg-pink-400/30 rotate-45 animate-float-slowest left-1/2 bottom-8 group-hover:bg-pink-300" />

        {/* Circles */}
        <span className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-float-slower left-12 bottom-6 group-hover:scale-150 group-hover:bg-blue-200" />
        <span className="absolute w-1 h-1 bg-purple-300/30 rounded-full animate-float-fast right-12 bottom-10 group-hover:scale-150 group-hover:bg-purple-200" />
        <span className="absolute w-3 h-3 bg-pink-300/20 rounded-full animate-float-medium left-8 top-1/3 group-hover:scale-150 group-hover:bg-pink-200" />

        {/* New: Moving orbs */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-r from-blue-500/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-linear-to-r from-purple-500/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000 delay-300" />
      </div>
    </>
  );
}
