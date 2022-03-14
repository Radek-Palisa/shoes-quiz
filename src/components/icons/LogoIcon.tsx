type Props = {
  width?: number;
  height?: number;
};

export default function LogoIcon({ width = 60, height = width }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.75 -0.98 496 497"
      width={width}
      height={height}
    >
      <path d="M331.56 116.08c-.457.458-.917 1.031-1.374 1.489l-19.023 19.023c-.229.229-.344.344-.46.458-.457.573-.457 1.146.116 1.948 4.813 8.136 7.792 16.845 8.825 26.128 2.062 19.022-2.753 36.097-14.669 51.109-10.199 12.834-23.492 20.856-39.422 24.409-7.334 1.605-14.782 1.718-22.231.917-12.262-1.262-23.264-5.73-33.119-13.064-14.21-10.542-23.034-24.523-26.701-41.942-1.375-6.418-1.604-12.949-1.031-19.366 1.375-15.012 7.105-28.306 17.304-39.65 9.741-10.887 21.659-17.992 35.754-21.2 6.991-1.605 13.98-2.178 21.201-1.491 10.313.917 19.939 3.897 28.877 9.053 1.146.688 1.604.229 2.293-.458l18.908-18.909c.458-.458.917-1.032 1.489-1.719 7.78 7.788 15.45 15.468 23.25 23.258m-42.98 58.44c.573-22.117-16.846-38.16-36.442-38.733-22.116-.574-38.618 17.762-38.618 37.587 0 20.283 17.075 37.817 37.586 37.473 20.17.23 37.01-16.39 37.47-36.33m29.017 153.11c.114 18.564 0 37.242 0 55.808v2.521h-33.232v-2.291c0-19.482.114-38.964 0-58.444 0-10.199-3.553-19.138-11.001-26.243-4.928-4.698-10.887-7.448-17.762-8.365-8.939-1.261-17.076.917-24.294 6.303-7.22 5.501-11.46 12.95-12.835 21.772-.687 4.241-.802 8.597-.802 12.95-.114 17.305 0 34.493 0 51.797v2.406h-33.003v-2.176c0-20.973-.23-42.058.114-63.029.229-11.114 3.782-21.658 9.626-31.284 9.74-16.043 23.606-26.356 41.827-30.597a68.947 68.947 0 0117.533-1.604c18.221.802 33.805 8.021 46.182 21.658 8.824 9.854 14.439 21.313 16.387 34.493.79 4.8 1.25 9.61 1.25 14.31"></path>
    </svg>
  );
}