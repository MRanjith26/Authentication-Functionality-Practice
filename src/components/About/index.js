// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  ///
  <>
    <Header />
    <div className="About-container">
      <h1 className="About-text">About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
