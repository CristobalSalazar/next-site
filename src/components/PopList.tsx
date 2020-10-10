interface PopListProps {
  items: string[];
}
export default function PopList({ items }: PopListProps) {
  return (
    <ul className="w-full mx-auto bg-white border rounded shadow-lg text-dark sm:w-5/6">
      {items.map((item, index) => (
        <li
          className="z-0 p-6 overflow-x-hidden text-left transition-colors duration-200 sm:p-4 sm:text hover:bg-primary"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
