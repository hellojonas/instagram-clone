export interface ISearchIconProps {
  className?: string;
  default?: boolean;
}

const SearchIcon: React.FC<ISearchIconProps> = props => {
  return (
    // <div className={props.className}>
    <svg
      aria-label="Search &amp; Explore"
      fill={!props.default ? '#262626' : ''}
      height={!props.default ? '24' : '12'}
      role="img"
      viewBox="0 0 48 48"
      width={!props.default ? '24' : '12'}
      className={props.className}
    >
      <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z"></path>
      <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
    </svg>
    // </div>
  );
};

export default SearchIcon;