import { useState } from 'react';
import { supabase } from '../client'
import { useNavigate } from "react-router-dom";
import './pageCSS/CreateCard.css';


const CreateCard = () => {
    const [character, setCharacter] = useState({name: "", number: "", position: "", team: ""});
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/dashboard');
    }
    const submitCharacter = async (event) => {
        event.preventDefault();
        
        if((!character.name) || (!character.number) || 
           (!character.position) || (!character.team)) {
            alert("Please type in valid character info");
            return;
           }
        
        console.log("Character data being sent:", character);
        
        try {
            const { data, error } = await supabase
                .from('blueLock-players')
                .insert({
                    name: character.name, 
                    number: character.number, 
                    position: character.position, 
                    team: character.team
                })
                .select();
            
            if (error) {
                console.error("Supabase error:", error);
                alert(`Error creating character: ${error.message}`);
                return;
            }
            
            console.log("Success! Data inserted:", data);
            navigateToDashboard();
            
        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred");
        }
    }


    const handleChange = (event) => {
        const {name, value} = event.target; 

        return setCharacter((prev) => {
            return {
                ...prev, 
                [name]: value 
            }
        })
    }
    
    return (
        <div className="create-page">
            <div className="form">
            <img className="ego-photo" src="/images/ego.jpg" alt="photo of ego jinpachi" />
            <h1>
                Create your Egoist...
            </h1>
            <form>
                <div className="name-number-row">
            <label className='name-label' htmlFor="name">Name</label>
            <input type="text" id='name' name='name' onChange={handleChange} />
            <label className='number-label' htmlFor="number">Number</label>
            <input type="text" id='number' name='number' onChange={handleChange} />
                </div>
            <div className="char-team-info">
                <label className='position-label' htmlFor="position">Position</label>
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
                <label className='team-label' htmlFor="team">Team</label>
                <select name="team" id="team" onChange={handleChange} required>
                    <option value="">Select a team...</option>
                    <option value="Bastard Munchen">Bastard Munchen</option>
                    <option value="PxG">PxG</option>
                    <option value="FC Barcha">FC Barcha</option>
                    <option value="Ubers">Ubers</option>
                    <option value="Manshine City">Manshine City</option>
                </select>
            </div>
            <input type="submit" value="Submit" onClick={submitCharacter} />
            </form>
            </div>
            <p className="team-hint">
                📖 Refer to the About section to understand each team's philosophy and find your fit
            </p>
        </div>
    )
}

export default CreateCard;