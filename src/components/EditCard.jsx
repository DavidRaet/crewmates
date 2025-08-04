import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './pageCSS/EditCard.css';
const EditCard = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({ name: "", number: "", position: "", team: "" });
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/dashboard');
    }


    useEffect(() => {
        const fetchCharacter = async () => {
            const data = await supabase
                .from('blueLock-players')
                .select('*')
                .eq('id', id)
                .single();
            if (data) {
                setCharacter(data);
            }
        }
        fetchCharacter();
    }, [id])


    const handleChange = (event) => {
        const { name, value } = event.target;

        return setCharacter((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const updatePost = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('blueLock-players')
            .update({
                name: character.name,
                number: character.number,
                position: character.position,
                team: character.team
            })
            .eq('id', id);

        if (!error) {
            navigateToDashboard();
        }
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('blueLock-players')
            .delete()
            .eq('id', id);
        navigateToDashboard();
    }

    return (
        <div className="edit-card">
            <form className='form-container'>
                <img className='isagi' src="/images/edit-image2.jpg" alt="" />
                <h1>Edit your egoist...</h1>
                <div className="name-number-row">
                    <label className='name-label' htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' value={character.name} onChange={handleChange} />
                    <label className='number-label' htmlFor="number">Number</label>
                    <input type="text" id='number' name='number' value={character.number} onChange={handleChange} />
                </div>
                <div className="char-team-info">
                    <label htmlFor="position">Position</label>
                    <select name="position" id="position" onChange={handleChange} required>
                        <option value="">Select a position...</option>
                        <option value="Striker">Striker</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Center Back">Center Back</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                        <option value="Attacking Midfielder">Attacking Midfielder</option>
                        <option value="Defensive Midfielder">Defensive Midfielder</option>
                        <option value="Winger">Winger</option>
                    </select>
                    <label htmlFor="team">Team</label>
                    <select name="team" id="team" onChange={handleChange} required>
                        <option value="">Select a team...</option>
                        <option value="Bastard Munchen">Bastard Munchen</option>
                        <option value="PxG">PxG</option>
                        <option value="FC Barcha">FC Barcha</option>
                        <option value="Ubers">Ubers</option>
                        <option value="Manshine City">Manshine City</option>
                    </select>
                </div>
                <input className='submit-btn' type="submit" value="Submit" onClick={updatePost} />
                <button className='delete-btn' onClick={deletePost}>Delete</button>

            </form>
        </div>
    )
}


export default EditCard;