import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          viewBox="0 0 400 200"
          style={{
            width: '100%',
            height: '100%',
            transform: 'scale(2.5) translateY(-20%)', // Adjust scale to focus on the "DAD" portion
          }}
        >
          {/* Three Overlapping Circles */}
          <circle cx="100" cy="100" r="80" fill="#2C3E50" />
          <circle cx="200" cy="100" r="80" fill="#2C3E50" opacity="0.9" />
          <circle cx="300" cy="100" r="80" fill="#2C3E50" opacity="0.8" />
          
          {/* Stylized 'D' */}
          <path
            d="M 84 40 A 60 60 0 0 1 84 160 L 84 40"
            fill="none"
            stroke="#ECF0F1"
            strokeWidth="12"
          />
          
          {/* Abstract 'A' */}
          <path
            d="M 160 160 L 200 40 L 240 160"
            fill="none"
            stroke="#ECF0F1"
            strokeWidth="12"
          />
          <line
            x1="175"
            y1="120"
            x2="225"
            y2="120"
            stroke="#ECF0F1"
            strokeWidth="12"
          />
          
          {/* Second 'D' */}
          <path
            d="M 270 40 A 60 60 0 0 1 270 160 L 270 40"
            fill="none"
            stroke="#ECF0F1"
            strokeWidth="12"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}

