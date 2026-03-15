// import { useState } from 'react';
// import Button from './components/Button';
// import Input from './components/Input';
// import Card from './components/Card';

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [count, setCount] = useState(0);

//   const handleButtonClick = () => {
//     alert(`Button clicked! Current count: ${count}`);
//   };

//   const handleEmailBlur = () => {
//     if (email && !email.includes('@')) {
//       setEmailError('Please enter a valid email');
//     } else {
//       setEmailError('');
//     }
//   };

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
//       <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
//         TypeScript + React Components
//       </h1>

//       {/* Card Examples */}
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//         gap: '1.5rem',
//         marginBottom: '2rem'
//       }}>
//         <Card title="Basic Card" bordered hoverable>
//           <p>This is a simple card with a title and content.</p>
//           <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>
//             It has hover effects enabled!
//           </p>
//         </Card>

//         <Card title="Card with Footer" footer={
//           <Button label="Action" onClick={handleButtonClick} size="small" />
//         }>
//           <p>This card has a footer section with a button.</p>
//         </Card>

//         <Card title="Interactive Card" onClick={() => alert('Card clicked!')} hoverable>
//           <p>Click anywhere on this card!</p>
//           <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
//             The entire card is clickable.
//           </p>
//         </Card>
//       </div>

//       {/* Input Examples */}
//       <Card title="Input Components" style={{ marginBottom: '2rem' }}>
//         <Input
//           label="Name"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter your name"
//           required
//         />

//         <Input
//           label="Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           onBlur={handleEmailBlur}
//           placeholder="Enter your email"
//           error={emailError}
//           required
//         />

//         <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem' }}>
//           <p><strong>Name:</strong> {inputValue || 'Not entered'}</p>
//           <p><strong>Email:</strong> {email || 'Not entered'}</p>
//         </div>
//       </Card>

//       {/* Button Examples */}
//       <Card title="Button Components">
//         <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
//           <Button label="Primary" onClick={incrementCount} variant="primary" />
//           <Button label="Secondary" onClick={incrementCount} variant="secondary" />
//           <Button label="Danger" onClick={incrementCount} variant="danger" />
//           <Button label="Disabled" onClick={incrementCount} disabled />
//         </div>

//         <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
//           <Button label="Small" onClick={incrementCount} size="small" />
//           <Button label="Medium" onClick={incrementCount} size="medium" />
//           <Button label="Large" onClick={incrementCount} size="large" />
//         </div>

//         <div style={{ 
//           marginTop: '1rem', 
//           padding: '1rem', 
//           backgroundColor: '#dbeafe', 
//           borderRadius: '0.375rem',
//           textAlign: 'center'
//         }}>
//           <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>
//             Button clicked: {count} times
//           </p>
//         </div>
//       </Card>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
//import { LoginFormData, RegisterFormData } from './types/form.types';

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type ViewType = 'login' | 'register' | 'success';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('login');
  const [userData, setUserData] = useState<LoginFormData | RegisterFormData | null>(null);

  const handleLogin = (data: LoginFormData) => {
    console.log('Login data:', data);
    setUserData(data);
    setCurrentView('success');
  };

  const handleRegister = (data: RegisterFormData) => {
    console.log('Register data:', data);
    setUserData(data);
    setCurrentView('success');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {currentView === 'login' && (
        <LoginForm
          onSubmit={handleLogin}
          onSwitchToRegister={() => setCurrentView('register')}
        />
      )}

      {currentView === 'register' && (
        <RegisterForm
          onSubmit={handleRegister}
          onSwitchToLogin={() => setCurrentView('login')}
        />
      )}

      {currentView === 'success' && (
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 1rem',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white'
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Success!
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
            You have successfully {userData && 'email' in userData ? 'logged in' : 'registered'}
          </p>
          <button
            onClick={() => setCurrentView('login')}
            style={{
              padding: '0.625rem 1.25rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Back to Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;


//## **Complete File Structure**
// src/
// ├── components/
// │   ├── FormInput.tsx
// │   ├── FormButton.tsx
// │   ├── LoginForm.tsx
// │   └── RegisterForm.tsx
// ├── types/
// │   └── form.types.ts
// ├── utils/
// │   └── validation.ts
// ├── App.tsx
// └── main.tsx