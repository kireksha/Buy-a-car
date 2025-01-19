type IIconHeartProps = {
  className?: string;
};

export const IconHeart = ({ className }: IIconHeartProps) => {
  return (
    <>
      <svg
        className={className}
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.25 12C7.112 12 6.97398 11.9618 6.85248 11.886C6.59298 11.724 0.5 7.86825 0.5 3.75C0.5 1.68225 2.18225 0 4.25 0C5.4455 0 6.55325 0.627717 7.25 1.55997C7.94675 0.627717 9.0545 0 10.25 0C12.3177 0 14 1.68225 14 3.75C14 7.86825 7.90702 11.724 7.64752 11.886C7.52602 11.9618 7.388 12 7.25 12Z"
          fill="#240C86"
        />
      </svg>
    </>
  );
};
