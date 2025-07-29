import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({name, number, position, team, id}) => {
    const navigate = useNavigate();
    
    const handleEdit = () => {
        navigate(`/edit/${id}`);
    }

    const teamClassMap = (teamName) => {
        const getTeamName = {
            'PxG': 'pxg-theme',
            'Bastard Munchen': 'bastard-munchen-theme',
            'FC Barcha': 'barcha-theme',
            'Ubers': 'ubers-theme',
            'Manshine City': 'manshine-theme'
        }
        return getTeamName[teamName] || 'default-theme'
    }

    return (
        <div className={`card ${teamClassMap(team)}`}>
            <div className="card-content">
                <div className="card-header">
                    <h1 title={name}>{name}</h1> {/* Title shows full name on hover */}
                </div>
                
                <div className="card-info">
                    <p><strong>#{number}</strong></p>
                    <p>{position}</p>
                    <p>{team}</p>
                </div>
                
                <div className="card-actions">
                    <button onClick={handleEdit} className="edit-btn">
                        ✏️ Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;