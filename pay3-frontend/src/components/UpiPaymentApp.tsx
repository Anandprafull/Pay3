import { useState } from 'react';
import RegisterUser from './RegisterUser';
import PayUser from './PayUser';

const UpiPaymentApp = () => {
  const [status, setStatus] = useState('');

  return (
    <div>
      <h1>UPI Payment System</h1>

      <RegisterUser setStatus={setStatus} />
      <PayUser setStatus={setStatus} />

    </div>
  );
};

export default UpiPaymentApp;
