import React, { useState, useEffect } from 'react';
import '../styles/secret.css'

const SecretCodeListener: React.FC = () => {
    const [inputSequence, setInputSequence] = useState('');
    const secretCode = 'echo'; // Define your secret code here

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setInputSequence((prev) => {
                const newSequence = prev + event.key;
                if (newSequence.endsWith(secretCode)) {
                    alert('You found the secret!');
                    return ''; // Reset the sequence after the code is entered
                }
                return newSequence;
            });
        };
        
        console.log(inputSequence);

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        document.body.classList.add('darkness');
        // Clean up the page
        return() => {
            document.body.classList.remove('darkness')
        }
    }, []);

    return (
        <div className='darkness'>
            <img src='../public/Burntout.png'></img>
        </div>
    );
};

export default SecretCodeListener;
