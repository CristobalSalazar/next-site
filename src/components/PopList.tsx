interface PopListProps {
  items: string[];
  showAnimation?: boolean;
}
export default function PopList({ items, showAnimation = true }: PopListProps) {
  return (
    <ul className="w-full mx-auto rounded sm:m-0 text-dark">
      {items.map((item, index) => (
        <li
          className="z-0 p-6 text-left bg-white transition-colors duration-300 hover:bg-primary shadow-md border-b"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
