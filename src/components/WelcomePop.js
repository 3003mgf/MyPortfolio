import React from 'react';

export const PopUp = ({popOpen, setPopOpen}) =>{

  return (
    <div className={`pop-up ${popOpen ? "active" : ""}`} onClick={()=> setPopOpen(false)}>
      <div>
        <img src="/images/welcome-bot.svg" alt="abc" width={80} height={80} />
      </div>
      <div>
        <h3>Welcome!</h3>
        <p>If you would like to have a quick tour our N-Bot can help you! She is probably sleeping, just press our logo and wake her up...</p>
        <span onClick={async(e)=> {e.stopPropagation() ; await localStorage.setItem("disable-pop", "true") ; await setPopOpen(false)}}>Don't show me this again</span>
      </div>
    </div>
  )
}
