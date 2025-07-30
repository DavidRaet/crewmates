import './pageCSS/About.css';

const About = () => {

        const TEAMS_INFO = {
        'Bastard Munchen': {
            colors: ['maroon', 'gold'],
            philosophy: 'Ruthless Domination',
            description: 'A team built on raw power and unrelenting aggression. Players here learn to crush opponents through sheer will and dominant physicality.',
            manager: 'Noel Noa',
            managerImage: '/images/managers/noel.jpg',
            managerDesc: "Noa's world is cold, hard data and ruthlessly rational choices. The best become immortal. The rest are statistics. With him, youre judged on numbers, not emotion. Sparring with a genius who treats soccer as pure science is thrilling—especially if you're destined to be a rival of giants like Kaiser or Isagi. But connection? Forget it. Noa is unmoved by tears or bravado; if you cant impress in cold, clinical drills and matches, youll never matter to his vision. It's the ultimate test of individuality: either be the exception or vanish into mediocrity.",
            badge: '/images/badges/bastard-munchen-badge.jpg'
        },
        'PxG': {
            colors: ['blue', 'white'],
            philosophy: 'Aggressive Excellence',
            description: 'Where arrogance meets skill. PxG cultivates players who believe they are destined for greatness and aren\'t afraid to prove it.',
            manager: 'Julien Loki',
            managerImage: '/images/managers/loki.jpg',
            managerDesc: "Loki's field is a chessboard—only the shrewdest survive. He's the boy genius, harmonizing chaos and talent into a single, surging melody. You'll find camaraderie here, a sense of team, but don't expect him to raise your game for your sake unless you're his chosen project. If you want to gamble on sharp tactics and a manager who knows every move before you make it—but who might only use you as a pawn—Loki's team is your crucible. He'll make history with you, or you'll watch as he shapes someone else into legend right before your eyes.",
            badge: '/images/badges/pxg-badge.jpg'
        },
        'FC Barcha': {
            colors: ['red', 'black'],
            philosophy: 'Creative Artistry',
            description: 'Football as art. Barcha players express themselves through beautiful, creative play that mesmerizes opponents and spectators alike.',
            manager: 'Lavinho',
            managerImage: '/images/managers/lavinho.jpg',
            managerDesc: "Lavinho is wild freedom, the gospel of self-expression. Forget set drills and tactical rigidity; here, chaos reigns and every player becomes an artist. Want to dazzle the world by carving your own legend, inventing outrageous moves, and shocking even your teammates? Lavinho offers the blank canvas. But be warned: there’s little guidance, little safety net, and every mistake is yours alone. It’s glorious—if you can withstand the loneliness of self-driven evolution and the risk of fading out when brilliance alone isn’t enough.",
            badge: '/images/badges/barcha-badge.jpg'
        },
        'Ubers': {
            colors: ['black', 'white'],
            philosophy: 'Structured Tactics',
            description: 'Perfection through preparation. Every move calculated, every strategy refined. Ubers players are methodical machines of efficiency.',
            manager: 'Snuffy',
            managerImage: '/images/managers/snuffy.jpg',
            managerDesc: "Snuffy's domain is one of iron discipline and tactical genius. His team is a fortress where every brick is laid by his own unwavering hand. If you crave structure, mastery, and the chance to win at all costs—even if it means shredding your individuality for the collective dream—Snuffy is your king. But make no mistake: his gaze is unflinching, his expectations absolute. Here, a single missed assignment could end your dreams. He'll turn you into a weapon... or leave you in the shadows if you can't execute with perfect precision.",
            badge: '/images/badges/ubers-badge.jpg'
        },
        'Manshine City': {
            colors: ['sky blue', 'white'],
            philosophy: 'Athletic Supremacy',
            description: 'Pure athleticism unleashed. Speed, strength, and stamina pushed to superhuman limits. Natural born athletes thrive here.',
            manager: 'Chris Prince',
            managerImage: '/images/managers/chris.jpg',
            managerDesc: "With Chris, every day is a test of your drive to evolve. His style is that of the relentless optimist, the motivator who'll push you to uncover powers within you that even you've forgotten. Training is brutal, physical, personal—a spotlight on your flaws, with endless reps to turn them into strengths. Chris's trust can lift you through defeat, but when the whistle blows, his tactics might not always save the day. In his world, you survive and thrive by reinventing yourself again and again, even if sometimes you're handed less direction when things get desperate.",
            badge: '/images/badges/manshine-badge.jpg'
        }
    };

    return (
        <div className="about-page">
            <div className="about-header">
            <h1>
                About
            </h1>
            <p className='about-desc'>
                Here you will find the details regarding each teams 
                philosophy, team manager, or teammates. 
                These descriptions should adequately suit how you would want to customize
                your own character according to whichever team's philosophy matches yours. 
            </p>
            </div>
            <div className="teams-section">
                <h2>Teams</h2>
                <div className="teams-grid">
                    {Object.entries(TEAMS_INFO).map(([teamName, teamInfo]) => (
                        <div key={teamName} className={`team-card ${teamName.toLowerCase().replace(/\s+/g, '-')}`} >
                            <div className="team-header">
                                <h3>{teamName}</h3>
                                <img className='team-badge' src={teamInfo.badge} alt={`badge of ${teamName}`} />
                                <p className="team-philosophy">{teamInfo.philosophy}</p>
                            </div>

                            <div className="team-description">
                                <p>{teamInfo.description}</p>
                            </div>

                            <div className="manager-section">
                                <h4>Manager: {teamInfo.manager}</h4>
                                <img className='manager-photo' src={teamInfo.managerImage} alt={`Image of ${teamInfo.manager} for ${teamName}`} />
                                <p>{teamInfo.managerDesc}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default About;