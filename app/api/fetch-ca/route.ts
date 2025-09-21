import { NextResponse } from 'next/server'

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz0AbKMm5T6WKp4UrOjvLyU25DT2VWtf4yX1ewFkDOiX6nffS1fv0jSHzdgM2pq4SSS/exec'

export async function GET() {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache headers to prevent excessive requests
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`)
    }

    const data = await response.text()
    
    return NextResponse.json({ 
      success: true, 
      data: data.trim() || 'Coming Soon....' 
    })
  } catch (error) {
    console.error('Error fetching CA data:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch CA data',
        data: 'Coming Soon....' // Fallback data
      },
      { status: 500 }
    )
  }
}