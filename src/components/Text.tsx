export default function Text({ children, className }: any) {
  return (
    <p className={`w-full leading-loose text-gray-700 ${className}`}>
      {children}
    </p>
  );
}
