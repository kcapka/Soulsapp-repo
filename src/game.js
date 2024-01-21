import React, {useState} from 'react';
import NavBar from "./navbar";
import enemy1 from "./imgs/skeleton-enemy.webp";
import "./game.css";
import Popup from "./defeated";


export default function Game() {

    const [coinCount, setCoinCount] = useState(0);
    const [enemyHealth, setEnemyHealth] = useState(500);
    const [trigger, setTrigger] = useState(false);

    let skeletor = {src: enemy1, health: enemyHealth};
    
    function handleDamage() {
        setEnemyHealth(prevEnemyHealth => prevEnemyHealth - 62);
    }

    function handleResetEnemy() {
        setTrigger(false);
    }

    const showReset = trigger ? "Reset Enemy" : '';
    

    const healthSection = 
        !trigger ? `Health: ${skeletor.health}/500` : '';

    


    if (enemyHealth <= 0) {
        setCoinCount(prevCoinCount => prevCoinCount + 112);
        setEnemyHealth(500);
        setTrigger(true);
    }
    

    return (
        <>
            <NavBar coin={coinCount} />
            <h1>Welcome to Fell Beast! choose your weapon and use it to defeat the enemy and gain coins.</h1>
            <div className="enemies">
                <p>Skeletal Mouthbreather</p>
                <img src={skeletor.src} onClick={handleDamage} />
                <p>{healthSection}</p>
            </div>
            <Popup trigger={trigger} />
            <div className="reset-container">
                <button onClick={handleResetEnemy} className="reset">{showReset}</button>
            </div>
        
        </>
    )
}