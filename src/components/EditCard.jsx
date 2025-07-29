import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCard = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({name: "", number: "", position: "", team: ""});
    const [isLoading, setIsLoading] = useState(true);
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
                setIsLoading(false);
            }
            fetchCharacter();
        }, [id])


        const handleChange = (event) => {
        const {name, value} = event.target; 

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
                    position:  character.position,
                    team:  character.team
                  })
                  .eq('id', id);

            if(!error) {
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
            <form>
            <div className="name-number-row">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name'  value={character.name} onChange={handleChange} />
            <label htmlFor="number">Number</label>
            <input type="text" id='number' name='number' value={character.number} onChange={handleChange} />
                </div>
            <div className="char-team-info">
                <label htmlFor="position">Position</label>
                <input type="text" id='position' name='position' value={character.position} onChange={handleChange} />
                <label htmlFor="team">Team</label>
                <input type="text" id='team' name='team' value={character.team} onChange={handleChange} />
            </div>
            <input type="submit" value="Submit" onClick={updatePost} />
            <button className='delete-btn' onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}


export default EditCard;