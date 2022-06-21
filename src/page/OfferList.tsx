import React, { FC } from "react"
import styled from "styled-components"
import { useGetRentOffers } from "../data/useGetRentOffers"
import { OfferCard } from "../components/OfferCard/OfferCard"
import { Spinner } from "../components/Spinner/Spinner"

const StyledOffersRow = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-gap: 1rem;

> div {
  padding: 1rem;
  display: grid;
  place-items: center;
  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
    grid-area: 1 / 1 / 2 / 2;
  }
  div {
    width: 100%;
    grid-area: 1 / 1 / 2 / 2;
  }
}

`

const StyledErrorMessage = styled.h4`
  color: #FF5F00;
`

export const OfferList: FC = () => {
  const { loading, error, offers } = useGetRentOffers()

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <StyledErrorMessage>Ups! Something went wrong. Please try reloading the page.</StyledErrorMessage>
  }

  return  <StyledOffersRow>
      {offers && offers.map(offer => (
        <OfferCard key={`offer-${offer.id}`} offer={offer}/>
      ))
      }
      </StyledOffersRow>
}