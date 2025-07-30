  import { supabase } from '../client';
  import { useEffect, useState } from 'react';
  import Card from './Card';
  import './pageCSS/TeamDashboard.css';
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
        const teamClassMap = (teamName) => {
        const getTeamName = {
            'PxG': 'pxg',
            'Bastard Munchen': 'bastard-munchen',
            'FC Barcha': 'barcha',
            'Ubers': 'ubers',
            'Manshine City': 'manshine'
        }
        return getTeamName[teamName] || 'default-theme'
    }


      useEffect(() => {
          const fetchCharacter = async () => {
              const {data} = await supabase
                                  .from('blueLock-players')
                                  .select()
                                  .order('created_at', {ascending: false});
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
              {Object.keys(TEAMS).map((teamName) => (
                  <div className={`team ${teamClassMap(teamName)}`} key={teamName}>
                      <h2 className='header'>{teamName}</h2>
                      {characters && characters.length > 0 ? characters.filter((character) => character.team === teamName).map(character => (
                          <Card 
                          key={character.id}
                          id={character.id}
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