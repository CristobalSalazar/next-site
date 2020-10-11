interface PopListProps {
  items: string[];
}
export default function PopList({ items }: PopListProps) {
  return (
    <ul className="w-full mx-auto bg-white border rounded shadow-lg sm:m-0 text-dark">
      {items.map((item, index) => (
        <li
          className="z-0 p-6 text-left transition-colors duration-300 hover:bg-primary"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
