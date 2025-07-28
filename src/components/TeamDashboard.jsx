import { supabase } from '../client';
import { useEffect, useState } from 'react';
import Card from './Card';
const TeamDashboard = ({props}) => {
    const [characters, setCharacters] = useState([]);
      const TEAMS = {
    'Bastard Munchen': {
    colors: ['maroon', 'gold'],
    theme: 'ruthless'
    },
    'PxG': {
      colors: ['blue', 'white'],
      theme: 'aggressive'
    },
    'FC Barcha': {
      colors: ['red', 'black'],
      theme: 'creativity'
    },
    'Ubers': {
      colors: ['black', 'white'],
      theme: 'meticulousness'      
    },
    'Manshine City': {
      colors: ['sky blue', 'white'],
      theme: 'athleticism'          
    }
  }
    useEffect(() => {
        const fetchCharacter = async () => {
            const {data} = await supabase
                                .from('blueLock-players')
                                .select()
                                .order('created_at', {ascending: true});
            setCharacters(data);
        }
        fetchCharacter();
    }, [props])

    return (
        <div className="team-dashboard">
            <h1>
                Team Dashboard
            </h1>
            <div className="teams">
             {/* So when we read the users input, we need to make sure whatever team they chose (PxG, Barcha, or Manshine) 
                they will see their characters card on that team's list
                */}
            {Object.keys(TEAMS).map((teamName) => (
                <div key={teamName}>
                    <h2>{teamName}</h2>
                    {characters && characters.length > 0 ? characters.filter((character) => character.team === teamName).map(character => (
                        <Card 
                        name={character.name}
                        number={character.number}
                        position={character.position}
                        team={character.team} 
                        />
                    )) :    
                        <div className="placeholder">
                            <h3>No egoists yet...</h3>
                        </div>
                    }
                </div>
            ))}
            </div>
        </div>
    )
}

export default TeamDashboard;