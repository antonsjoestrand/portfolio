import QuoteIcon from "../Icons/QuoteIcon";

export default function SectionTitle({ title }) {
  return (
    <div className='title'>
      <QuoteIcon />
      <h3>{title}</h3>
    </div>
  );
}
