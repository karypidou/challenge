import { Offer } from "./types"
import { useState, useCallback, useEffect } from "react"
import { getRentOffers } from "./getRentOffers"


export interface UseGetOffers {
    loading?: boolean
    error?: Error
    offers?: Offer[]
  }
  
export  const useGetRentOffers = (): UseGetOffers  => {
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<Error>()
    const [offers, setOffers] = useState<Offer[]>()
  
  
    const getRentOffersFromApi =  useCallback(async() => {
      setLoading(true)
  
      try {
        const response = await getRentOffers()
        setOffers(response)
      } catch(e) {
        setError(e as Error)
      }
      setLoading(false)
    }, [])
  
    useEffect(() => {
      getRentOffersFromApi()
    }, [getRentOffersFromApi])
  
    return {loading, error, offers}
  
  }