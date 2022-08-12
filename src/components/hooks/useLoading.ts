import { useContext } from "react";
import { LoadingContext } from "../../contexts/loading";

const useLoading = () => useContext(LoadingContext);

export default useLoading;
