import { Offer } from "../../data/types"
import React, { FC, useState } from "react"
import styled from "styled-components"
import fallbackImg from '../../fallbackImage.png'

interface OfferCardProps {
    offer: Offer
}

const StyledImage = styled.img`
max-width: 300px;

@media(min-width: 516px) {
  max-width: 250px;
}
@media(min-width: 992px) {
  max-width: 250px;
}
`

export const OfferCard: FC<OfferCardProps> = ({offer}) => {
    const [image, setImage] = useState(offer.carGroupInfo.modelExample.imageUrl)

    const handleImageLoadingError = () => {
        setImage(fallbackImg)
    }

    return (<div >
        <div>
            <h3>
                {offer.carGroupInfo.modelExample.name}
            </h3>
            <StyledImage src={image} onError={handleImageLoadingError} />
            <div>
                {offer.prices.dayPrice.amount.display} {offer.prices.dayPrice.amount.currency} | Tag
            </div>
        </div>
    </div>)
}