import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Dilshan Travelscape - Premium Vehicle Rentals & Tours in Sri Lanka'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #232249 0%, #5b1d1b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              marginBottom: '20px',
              background: 'linear-gradient(45deg, #fbbf24, #ffffff)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Dilshan Travelscape
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#fbbf24',
              marginBottom: '10px',
            }}
          >
            Premium Vehicle Rentals & Tours
          </div>
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            Explore Sri Lanka In Style & Comfort
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '30px',
              fontSize: '20px',
              color: '#fbbf24',
            }}
          >
            ⭐⭐⭐⭐⭐ 4.9/5 Rating • 15+ Years Experience
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}