export default function Loading() {
  return (
    <img
      width={50}
      height={50}
      src={`${process.env.PUBLIC_URL}/assets/loader.gif`}
      alt="loading"
    />
  );
}
