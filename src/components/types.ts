export interface ColorStyle {
  background: string;
  color: string;
}

export enum EEnableBtn {
  CHECKOUT = "CHECKOUT",
  MINT_TICKETS = "MINT_TICKETS",
}

export interface IObject {
  [key: string]: string | number | boolean;
}

export interface IEventResponse extends ICustomStyle {
  avatar: string;
  background: string;
  description: string;
  endTime: string;
  name: string;
  startTime: string;
  url: string;
  subTitle: string;
  address: string;
}

export interface ICustomStyle {
  avatarColor: string;
  backgroundColor: string;
  backgroundTitle: string;
  backgroundTitleColor: string;
  css: string;
  primaryColor: string;
  secondColor: string;
  subTitleFont: string;
  tertiaryColor: string;
  titleFont: string;
}

export interface ITicket extends IObject {
  amount: number;
  content: string;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  unlockContent: boolean;
  count: number;
  maxCount: number;
}
