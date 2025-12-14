import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, ArrowRight } from 'lucide-react'

const Landing = () => {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/login')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  const handleGoLogin = () => {
    navigate('/login')
  }

  return (
    <section className="landing">
      <div className="landing__inner">
        <div className="landing__logo">
          <BookOpen size={54} />
        </div>
        <h1 className="landing__title">Relatos de papel</h1>
        <p className="landing__tagline">Donde cada pagina cuenta una historia</p>

        <div className="landing__card">
          <div className="landing__countdown">
            Seras redirigido a la pantalla de acceso en
            <span className="landing__countdown-number">{timeLeft}</span>
          </div>
          <button type="button" className="landing__button" onClick={handleGoLogin}>
            Ir a iniciar sesion ahora <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing
