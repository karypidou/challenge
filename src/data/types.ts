export interface Offer {
  id: string,
  carGroupInfo: {
    modelExample: {
      imageUrl: string,
      name: string,
    }
  }
  prices: {
    dayPrice: {
      amount: {
        value: number,
        currency: string,
        display: string,
      }
    }
  }
}