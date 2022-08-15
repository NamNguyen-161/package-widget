# Package-widget

A library dedicated to the Chi Coin ecosystem.
It helps users buy tickets in each event through a url link

```bash
    npm i @namnguyenvan2k/package-widget
```

## Usage

```react
import React from "react";
import ChiWidget from "@namnguyenvan2k/package-widget";

function App() {
  return (
    <ChiWidget
      url="https://tickets-test.chinetwork.io/newversion/Av8" // url of event
      address="0xea8D9595DfE88eBf1576cd1148398640D76d0951" // Recipient address
      open={true}
    />
  );
}
```

## API Reference

| Parameter | Type      | Description                                 |
| :-------- | :-------- | :------------------------------------------ |
| `url`     | `string`  | **Required**. Url of the event              |
| `address` | `string`  | **Required**. Recipient address on metamask |
| `open`    | `boolean` | **Required**. Status of widget              |

## Authors

- [@NamNguyenVan2k](https://www.github.com/namnguyenvan2k)

![Logo](https://cdn.chinetwork.io/website/images/new_icon-chi-highlight.svg)
