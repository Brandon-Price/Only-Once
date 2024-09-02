import React, { useState, useEffect } from 'react';

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

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>

        </div>
    );
};

export default SecretCodeListener;
