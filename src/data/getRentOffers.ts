export const getRentOffers = async () => {
    const response = await fetch('http://cdn.sixt.io/codingtask/offers.json')
    const data = await response.json()

    return data.offers
}