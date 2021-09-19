import tournamentImage from '../../resources/Tournament design.png';
import './auxMain.css'

export const AuxMain = () => {
    return(
        <div className="auxMain-container">
            <div className="auxMain-container-p1">
            <img src={tournamentImage} alt="" />    
            </div>
            <div className="auxMain-container-p2">
                <h2>Can you predict the market?</h2>
                <p>Join in our tournament and compete with your friendsto learn the market basics and win exciting prizes</p>
            </div>
            <div className="auxMain-container-p3">
                <h1>Expired</h1>
                <button className="btn-large btn-primary ">Let's Go!</button>
            </div>
        </div>
    )
}