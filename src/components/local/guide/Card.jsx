export default function Card({ title = "Card Title", value = "123" }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
