import './objective1.css'

export const Obejctive1 = () => {
  return (
    <div className="objective1-container">
      <h1>How does StockPe work?</h1>
      <div className="objective1-container-p2">
        <div className="inner-container">
          <img src="https://stockpe.in/img/Tournament.png" alt="" />
          <h3>Enter into tournament</h3>
          <p>Tournament will help you learn the basics of stock market</p>
        </div>
        <div className="inner-container">
          <img src="https://stockpe.in/img/implement.png" alt="" />
          <h3>Learn and implement</h3>
          <p>
            Get simplified market insights and test out your hypothesis in real
            time
          </p>
        </div>
        <div className="inner-container">
          <img src="https://stockpe.in/img/Rewards.png" alt="" />
          <h3>Unbelievable returns</h3>
          <p>win 10x or 20x prize and ace the leaderboard</p>
        </div>
        <div className="inner-container">
          <img src="https://stockpe.in/img/with.png" alt="" />
          <h3>Easy withdraw</h3>
          <p>You can withdraw anytime or stay and learn more</p>
        </div>
      </div>
    </div>
  );
};
