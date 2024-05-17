const Sub = ({ text, num }: { text: string; num: string }) => {
  return (
    <span>
      {`${num} `}
      <sub className="font-semibold text-base">{text}</sub>
    </span>
  );
};
export default Sub;
