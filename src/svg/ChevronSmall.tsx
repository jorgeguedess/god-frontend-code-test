const ChevronSmall = ({ size }: { size: number }) => {
  return (
    <svg
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M2 1.5l4 4-4 4"
        fill="none"
        stroke="#1c6bba"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default ChevronSmall;
