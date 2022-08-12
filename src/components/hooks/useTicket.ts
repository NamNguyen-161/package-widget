import { useContext } from "react";
import { TicketContext } from "../../contexts/ticket";

const useTicket = () => useContext(TicketContext);

export default useTicket;
