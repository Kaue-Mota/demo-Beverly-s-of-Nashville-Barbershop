interface BarberPoleProps {
  small?: boolean
}

export default function BarberPole({ small = false }: BarberPoleProps) {
  const width   = small ? 44  : 64
  const height  = small ? 150 : 220
  const baseW   = small ? 56  : 80
  const capH    = small ? 16  : 20

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Top cap */}
      <div
        style={{
          width: width,
          height: capH,
          background: 'linear-gradient(to bottom, #d0d0d0 0%, #888 50%, #d0d0d0 100%)',
          border: '2px solid #aaa',
          boxShadow: '0 -4px 10px rgba(0,0,0,0.4)',
          borderRadius: '6px 6px 0 0',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{
          position: 'absolute',
          top: -7,
          left: '50%',
          transform: 'translateX(-50%)',
          width: small ? 10 : 14,
          height: small ? 8  : 10,
          background: '#bbb',
          border: '2px solid #aaa',
          borderRadius: '50% 50% 0 0',
        }} />
      </div>

      {/* Cylinder */}
      <div style={{
        width: width,
        height: height,
        borderRadius: '6px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow:
          'inset -8px 0 16px rgba(0,0,0,0.35), inset 6px 0 12px rgba(255,255,255,0.18), 0 0 30px rgba(204,0,0,0.35), 0 8px 32px rgba(0,0,0,0.5)',
      }}>
        <div className="pole-stripes" />
        {/* Cylinder highlight */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 25%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.18) 80%, rgba(0,0,0,0.3) 100%)',
          borderRadius: '6px',
          pointerEvents: 'none',
          zIndex: 2,
        }} />
      </div>

      {/* Bottom cap */}
      <div style={{
        width: width,
        height: capH,
        background: 'linear-gradient(to bottom, #888 0%, #d0d0d0 50%, #888 100%)',
        border: '2px solid #aaa',
        boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
        borderRadius: '0 0 6px 6px',
        position: 'relative',
        zIndex: 2,
      }} />

      {/* Base */}
      <div style={{
        width: baseW,
        height: small ? 10 : 14,
        background: 'linear-gradient(to bottom, #888 0%, #555 100%)',
        borderRadius: '0 0 8px 8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      }} />
    </div>
  )
}
