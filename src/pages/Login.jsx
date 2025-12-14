import { useNavigate } from 'react-router-dom'
import { BookOpen, Mail, Lock, ShieldCheck, UserRound, ArrowRight } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/catalog')
  }

  const handleGuest = () => {
    navigate('/catalog')
  }

  return (
    <section className="login">
      <div className="login__card">
        <div className="login__aside">
          <div className="login__brand">
            <BookOpen size={28} />
            <div>
              <p className="login__logo-label">Relatos de papel</p>
              <p className="login__logo-subtitle">Historias que inspiran</p>
            </div>
          </div>
          <div className="login__benefits">
            <div className="login__benefit">
              <ShieldCheck size={20} />
              <div>
                <h4 className="login__benefit-title">Pagos seguros</h4>
                <p className="login__benefit-text">Proteccion en cada compra con nuestros partners.</p>
              </div>
            </div>
            <div className="login__benefit">
              <UserRound size={20} />
              <div>
                <h4 className="login__benefit-title">Listas personalizadas</h4>
                <p className="login__benefit-text">Recibe sugerencias hechas a tu medida.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="login__form">
          <div className="login__form-header">
            <h2>Inicia sesion</h2>
            <p>Accede a tus pedidos y continua explorando nuestro catalogo.</p>
          </div>

          <form className="login__fields" onSubmit={handleSubmit}>
            <label className="login__field">
              <span className="login__label">Correo electronico</span>
              <div className="login__input">
                <Mail size={18} />
                <input type="email" name="email" placeholder="tu@email.com" required />
              </div>
            </label>

            <label className="login__field">
              <span className="login__label">Contrasena</span>
              <div className="login__input">
                <Lock size={18} />
                <input type="password" name="password" placeholder="********" required />
              </div>
            </label>

            <div className="login__options">
              <label className="login__remember">
                <input type="checkbox" name="remember" />
                Recordarme
              </label>
              <a className="login__link" href="#">
                ¿Olvidaste tu contrasena?
              </a>
            </div>

            <button type="submit" className="login__submit">
              Continuar <ArrowRight size={18} />
            </button>
          </form>

          <button type="button" className="login__guest" onClick={handleGuest}>
            Continuar sin cuenta
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login
