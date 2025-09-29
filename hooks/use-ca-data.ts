'use client'

import { useState, useEffect, useCallback } from 'react'

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

  const fetchCaData = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Add cache busting to ensure fresh data
      const cacheBuster = new Date().getTime()
      const response = await fetch(`/api/fetch-ca?t=${cacheBuster}`)
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
  }, [])

  const refetch = useCallback(() => {
    fetchCaData()
  }, [fetchCaData])

  useEffect(() => {
    // Initial fetch
    fetchCaData()
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      fetchCaData()
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [fetchCaData])

  return {
    caData,
    isLoading,
    error,
    refetch
  }
}