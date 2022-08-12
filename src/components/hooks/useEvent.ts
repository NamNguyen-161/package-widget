import { useContext } from "react";
import { EventContext } from "../../contexts/event";

const useEvent = () => useContext(EventContext);

export default useEvent;
