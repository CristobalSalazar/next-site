interface PopListProps {
  items: string[];
  showAnimation?: boolean;
}
export default function PopList({ items, showAnimation = true }: PopListProps) {
  return (
    <ul className="w-full mx-auto overflow-hidden border rounded-lg shadow-lg sm:m-0">
      {items.map((item, index) => (
        <li
          className={`p-6 text-left ${
            index % 2 === 0
              ? "bg-secondary text-dark hover:bg-primary"
              : "bg-dark text-secondary hover:bg-gray-600"
          } md:rounded transition-colors duration-300`}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
