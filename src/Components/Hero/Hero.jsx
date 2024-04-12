import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>

      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />

      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'} onClick={() => setHeroCount(0)}></li>
          <li className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'} onClick={() => setHeroCount(1)}></li>
          <li className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'} onClick={() => setHeroCount(2)}></li>
          <li className={heroCount === 3 ? 'hero-dot orange' : 'hero-dot'} onClick={() => setHeroCount(3)}></li>
        </ul>
        
        <div className="hero-play">
          <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>

    </div>
  )
}

export default Hero;