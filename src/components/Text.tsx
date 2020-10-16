export default function Text({ children, className }: any) {
  return (
    <p className={`w-full font-sans leading-loose text-black ${className}`}>
      {children}
    </p>
  );
}
