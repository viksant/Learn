import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section class="App">
            <h1 class="tw-who-follow">A quién seguir</h1>
            <TwitterFollowCard 
                initialIsFollowing={true}
                userName="Victor" 
                name="Victor Lopez" 
            />
            <TwitterFollowCard 
                initialIsFollowing={false} 
                userName="Jesus" 
                name="Jesus Tron" 
            />
            <TwitterFollowCard 
                initialIsFollowing={true}
                userName="pheralb" 
                name="Pabo González" 
            />

            <TwitterFollowCard 
                initialIsFollowing={true}
                userName="Admin" 
                name="Lucas Real" 
            />
        </section>
    )
}
