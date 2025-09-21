'use client'

import { useState, useEffect } from 'react'

interface CAData {
  data: string
  success: boolean
  error?: string
}

interface UseCaDataReturn {
  caData: string
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useCaData(): UseCaDataReturn {
  const [caData, setCaData] = useState<string>('Coming Soon....')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCaData = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch('/api/fetch-ca')
      const result: CAData = await response.json()
      
      if (result.success) {
        setCaData(result.data)
      } else {
        setError(result.error || 'Failed to fetch CA data')
        setCaData('Coming Soon....') // Fallback
      }
    } catch (err) {
      setError('Network error occurred')
      setCaData('Coming Soon....') // Fallback
    } finally {
      setIsLoading(false)
    }
  }

  const refetch = () => {
    fetchCaData()
  }

  useEffect(() => {
    fetchCaData()
  }, [])

  return {
    caData,
    isLoading,
    error,
    refetch
  }
}