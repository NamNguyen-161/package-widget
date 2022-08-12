import { ethers } from "ethers";
import React, { createContext, FC, useEffect, useState } from "react";
import useLoading from "../components/hooks/useLoading";
import { IEventResponse, ITicket } from "../components/types";
import ChiNetworkEvent from "../abi/ChiNetworkEvent.json";
import useEvent from "../components/hooks/useEvent";
import { useWeb3React } from "@web3-react/core";

export const KeyTicket = [
  "amount",
  "content",
  "description",
  "id",
  "image",
  "name",
  "price",
  "unlockContent",
];

export const KeyOfValueBigNumber = ["amount", "id", "price"];

const chiNetworkEvent = ChiNetworkEvent.abi;

export interface ITickContext {
  tickets: Array<ITicket>;
}

export const TicketContext = createContext<ITickContext>({
  tickets: [],
});

const TicketProvider: FC<React.ReactNode> = ({ children }) => {
  const { event } = useEvent();
  const { library } = useWeb3React();
  const { hideLoading, showLoading } = useLoading();
  const [tickets, setTickets] = useState<Array<ITicket>>([]);

  let provider: any;
  let signer: any;

  useEffect(() => {
    if (library && event) {
      provider = library;
      signer = provider.getSigner();
      fetchTicket();
    }
  }, [library, event]);

  const fetchTicket = async () => {
    await onGetTicketEvent();
  };

  const onGetTicketEventByAddress = async (address: string) => {
    try {
      showLoading();
      const contractChiNetWorkEvent = new ethers.Contract(
        address,
        chiNetworkEvent,
        signer
      );
      const data = await contractChiNetWorkEvent.getTickets();
      await handleConvertTicket(data, address);
      hideLoading();
    } catch (error) {
      hideLoading();
      console.log(error);
    }
  };

  const onGetTicketEvent = async () => {
    await onGetTicketEventByAddress(event.address);
  };

  const handleConvertTicket = async (data: Array<any>, address: string) => {
    let arrayTicket: Array<ITicket> = [];
    for (const item of data) {
      let objectTicket = {} as ITicket;
      const contractChiNetWorkEvent = new ethers.Contract(
        address,
        chiNetworkEvent,
        signer
      );
      const totalSoldTicket = await contractChiNetWorkEvent.totalSoldTicket(
        parseInt(item.id, 10)
      );

      for (let i = 0; i < KeyTicket.length; i++) {
        if (KeyOfValueBigNumber.includes(KeyTicket[i])) {
          objectTicket[KeyTicket[i]] =
            KeyTicket[i] === "amount"
              ? parseInt(item[KeyTicket[i]], 10) - parseInt(totalSoldTicket, 10)
              : parseInt(item[KeyTicket[i]], 10);
        } else {
          objectTicket[KeyTicket[i]] = item[KeyTicket[i]];
        }
      }
      arrayTicket.push({ ...objectTicket, count: 0, maxCount: 0 });
    }
    setTickets(arrayTicket);
  };

  const contextValue = {
    tickets,
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
};

export default React.memo(TicketProvider);
