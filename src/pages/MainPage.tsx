import { useGetData } from "../components/mocup";

const stylesDiv = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Mainpage = () => {
  const { mutation } = useGetData();

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div style={stylesDiv}>
      <button className="bg-stone-950" onClick={handleClick}>
        {mutation.isPending
          ? "loading"
          : mutation.data !== undefined
          ? "succes"
          : "start"}
      </button>
    </div>
  );
};
