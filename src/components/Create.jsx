import { useState } from 'react';
import { supabase } from '../client'
import { useNavigate } from "react-router-dom";
import './pageCSS/Create.css';


const Create = () => {
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
            <h1>
                Create your Egoist...
            </h1>
            <img className="ego-photo" src="/images/ego.jpg" alt="photo of ego jinpachi" />
            <form>
                <div className="name-number-row">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' onChange={handleChange} />
            <label htmlFor="number">Number</label>
            <input type="text" id='number' name='number' onChange={handleChange} />
                </div>
            <div className="char-team-info">
                <label htmlFor="position">Position</label>
                <input type="text" id='position' name='position' onChange={handleChange} />
                <label htmlFor="team">Team</label>
                <input type="text" id='team' name='team' onChange={handleChange} />
            </div>
            <input type="submit" value="Submit" onClick={submitCharacter} />

            </form>
        </div>
    )
}

export default Create;