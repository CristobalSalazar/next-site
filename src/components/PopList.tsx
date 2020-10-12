interface PopListProps {
  items: string[];
  showAnimation?: boolean;
}
export default function PopList({ items, showAnimation = true }: PopListProps) {
  return (
    <ul className="w-full mx-auto rounded-lg overflow-hidden sm:m-0 shadow-lg border border-primary">
      {items.map((item, index) => (
        <li
          className={`p-6 text-left ${
            index % 2 === 0
              ? "bg-light text-dark hover:bg-secondary"
              : "bg-dark text-light hover:bg-gray-700"
          } md:rounded transition-colors duration-300`}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
