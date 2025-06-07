import { Rings } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Rings
      visible={true}
      height="80"
      width="80"
      color="rgb(52, 52, 63)"
      ariaLabel="rings-loading"
      wrapperStyle={{
        display: "block",
        marginLeft: "auto",
      }}
      wrapperClass=""
    />
  );
};
