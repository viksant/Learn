import { useState } from 'react'

export function TwitterFollowCard ({ userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
        
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-follow-card-button is-following' 
    : 'tw-follow-card-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img 
                    alt="Avatar" 
                    className="tw-follow-card-avatar" 
                    src={`https://unavatar.io/${userName}`} 
                />
            <div className="tw-follow-card-info">
                <strong >{name}</strong>
                <span className="tw-follow-card-username">@{userName}</span>
            </div>
            </header>

            <aside> 
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>    
                </button>
            </aside>
        </article>
    )
}