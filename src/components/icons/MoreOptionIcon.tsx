export interface IMoreOptionsIconProps {}

const MoreOptionsIcon: React.FC<IMoreOptionsIconProps> = props => {
  return (
    <div>
      <svg
        aria-label="More options"
        fill="#262626"
        height="16"
        role="img"
        viewBox="0 0 48 48"
        width="16"
      >
        <circle
          clip-rule="evenodd"
          cx="8"
          cy="24"
          fill-rule="evenodd"
          r="4.5"
        ></circle>
        <circle
          clip-rule="evenodd"
          cx="24"
          cy="24"
          fill-rule="evenodd"
          r="4.5"
        ></circle>
        <circle
          clip-rule="evenodd"
          cx="40"
          cy="24"
          fill-rule="evenodd"
          r="4.5"
        ></circle>
      </svg>
    </div>
  );
};

export default MoreOptionsIcon;
