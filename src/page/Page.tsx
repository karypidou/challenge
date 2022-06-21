import React, { FC } from "react"
import { Header } from "./Header"
import { OfferList } from "./OfferList"

export const Page: FC = () => {
  return <div>
    <Header/>
    <OfferList/>
  </div>
}