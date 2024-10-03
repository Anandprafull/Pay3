import { useState } from 'react';

const RegisterUser = ({ setStatus }: { setStatus: (status: string) => void }) => {
  const [upiId, setUpiId] = useState('');

  const registerUser = async () => {
    try {
    // CODE HERE TO REGISTER THROUGH POSTGRESQL BY TAKING UPI ID 
    } catch (error) {
      console.error('Registration error:', error);
      setStatus('Registration failed.');
    }
  };


  return (
    <div>
      <h2>Register with UPI ID</h2>
      <input
        type="text"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        placeholder="Enter your UPI ID"
      />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default RegisterUser;
