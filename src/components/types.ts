export interface ColorStyle {
  background: string;
  color: string;
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
