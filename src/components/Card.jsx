const Card = ({name, number, position, team}) => {
    const teamClassMap = (teamName) => {
        const getTeamName = {
            'PxG': 'pxg-theme',
            'Bastard Munchen': 'bm-theme',
            'FC Barcha': 'barcha-theme',
            'Ubers': 'ubers-theme',
            'Manshine City': 'manshine-theme'
        }
        return getTeamName[teamName] || 'default-theme'
    }

    return (
        <div className={`${teamClassMap(team)}`}>
            <h1>{name}</h1>
            <p>{number}</p>
            <p>{position}</p>
            <p>{team}</p>
        </div>
    )
}

export default Card;