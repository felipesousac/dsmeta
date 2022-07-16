import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="http://linkedin.com/in/felipesousac"> @felipesousac</a>
        </p>
      </div>
    </header>
  )
}

export default Header
