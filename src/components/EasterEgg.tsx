import { useEffect, useState } from 'react'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    console.log(
      '%cLooking for something?',
      'color: font-size: 16px; font-weight: bold;'
    )
    console.log(
      '%cTry the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A',
      'color: #6f8a7f; font-size: 12px;'
    )

    let position = 0

    function handleKeyDown(e: KeyboardEvent) {
      const pressedKey = e.key.length === 1 ? e.key.toLowerCase() : e.key

      if (pressedKey === KONAMI_CODE[position]) {
        position += 1
        if (position === KONAMI_CODE.length) {
          setUnlocked(true)
          position = 0
        }
      } else {
        position = pressedKey === KONAMI_CODE[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!unlocked) return
    const timer = setTimeout(() => setUnlocked(false), 4000)
    return () => clearTimeout(timer)
  }, [unlocked])

  if (!unlocked) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-green/90 backdrop-blur-sm">
      <div className="text-center px-8">
    
        <p className="font-body text-cream/70 tracking-wide">
          Congrats, you found the secret! Ready to work together?
        </p>
      </div>
    </div>
  )
}

export default EasterEgg