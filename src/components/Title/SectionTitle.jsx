import QuoteIcon from "../Icons/QuoteIcon";

export default function SectionTitle({ title, color }) {
  return (
    <div className='title'>
      <QuoteIcon color={color} />
      <h3>{title}</h3>
    </div>
  );
}
