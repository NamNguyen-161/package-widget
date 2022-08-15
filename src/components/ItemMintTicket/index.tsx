import React, { memo, useCallback } from "react";
import useEvent from "../hooks/useEvent";
import { ITicket } from "../types";
import {
  CustomSelect,
  Icon,
  MintTicketComponent,
  NameMintTicket,
  PositionDropdown,
} from "./styles";

export type IIconSvg = {
  fill: string;
  stroke: string;
};
const IconTrash = ({ fill, stroke }: IIconSvg) => {
  return (
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        d="M10.666 3.66667L10.0878 11.7617C10.038 12.4594 9.45738 13 8.75786 13H3.24084C2.54132 13 1.96073 12.4594 1.9109 11.7617L1.33268 3.66667M4.66602 6.33333V10.3333M7.33268 6.33333V10.3333M7.99935 3.66667V1.66667C7.99935 1.29848 7.70087 1 7.33268 1H4.66602C4.29783 1 3.99935 1.29848 3.99935 1.66667V3.66667M0.666016 3.66667H11.3327"
        fill={fill}
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconDropdown = ({ fill }: Omit<IIconSvg, "stroke">) => {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L4 2.58579L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L4.70711 4.70711C4.31658 5.09763 3.68342 5.09763 3.29289 4.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
        fill={fill}
      />
    </svg>
  );
};

export interface IItemMintTicketProps {
  ticket: ITicket;
  onChangeMintTicket: (id: number, count: number) => void;
}

const ItemMintTicket = (props: IItemMintTicketProps) => {
  const { event } = useEvent();
  const { ticket, onChangeMintTicket } = props;
  const arrayCount = useCallback(() => {
    return Array.from(Array(ticket.maxCount).keys());
  }, [ticket]);
  return (
    <MintTicketComponent>
      <div style={{ position: "relative" }}>
        <CustomSelect
          color={event.tertiaryColor}
          background={event.primaryColor}
          onChange={(e) => onChangeMintTicket(ticket.id, +e.target.value)}
          defaultValue={ticket.maxCount}
        >
          {arrayCount().map((value, index) => (
            <option value={value + 1} key={index}>
              {value + 1}
            </option>
          ))}
        </CustomSelect>
        <PositionDropdown>
          <IconDropdown fill={event.tertiaryColor} />
        </PositionDropdown>
      </div>
      <NameMintTicket>{ticket.name}</NameMintTicket>
      <Icon onClick={() => onChangeMintTicket(ticket.id, 0)}>
        <IconTrash stroke={event.tertiaryColor} fill={event.secondColor} />
      </Icon>
    </MintTicketComponent>
  );
};

export default memo(ItemMintTicket);
