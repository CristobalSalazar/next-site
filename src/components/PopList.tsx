interface PopListProps {
  items: string[];
}
export default function PopList({ items }: PopListProps) {
  return (
    <ul className="pop-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
