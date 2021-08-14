interface IDetailsItemProps {
  label: string;
  value: string;
}

const DetailsItem: React.FC<IDetailsItemProps> = ({ label, value }) => (
  <div className="flex flex-col bg-white p-5">
    <span className="italic text-gray-600">{label}</span>
    <span className="text-2xl font-bold text-gray-800">{value}</span>
  </div>
);

export default DetailsItem;
