
export default function AboutDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Stars */}
      <span className="absolute w-20 h-20 bg-primary/40 rotate-45 animate-float-fast left-10 top-20  blur-xs  " />
      <span className="absolute w-150 h-150 bg-primary/40 rotate-100 animate-float-slow left-1/2 top-1/2 blur-xs" />
      <span className="absolute w-2 h-2 bg-primary/90 rotate-75 animate-float-slow left-1/2 top-5 " />
      <span className="absolute w-20 h-20 bg-primary/30 rotate-45 animate-float-slow right-20 top-40  blur-xs  " />
      <span className="absolute w-20 h-20 bg-primary/20 rotate-45 animate-float-fast left-1/3 bottom-20  blur-xs  " />

      {/* Circles */}
      <span className="absolute w-20 h-20 bg-primary/30 rounded-full animate-float-slow left-1/2 top-10 blur-xs  " />
      <span className="absolute w-3 h-3 bg-primary/90 rounded-full animate-float-fast left-1/3 top-1/2 " />
      <span className="absolute w-3 h-3 bg-primary/90 rounded-full animate-float-slow right-1/3 bottom-1/2 " />
      <span className="absolute w-32 h-32 bg-primary/30 rounded-full animate-float-fast right-1/3 bottom-10  blur-xs  " />
    </div>
  );
}
