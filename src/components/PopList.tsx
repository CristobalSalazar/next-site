interface PopListProps {
  items: string[];
}
export default function PopList({ items }: PopListProps) {
  return (
    <ul className="pop-list">
      {items.map((i) => (
        <li>{i}</li>
      ))}
    </ul>
  );
}
