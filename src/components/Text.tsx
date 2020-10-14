export default function Text({ children, className }: any) {
  return (
    <p className={`w-full font-sans leading-loose text-dark ${className}`}>
      {children}
    </p>
  );
}
