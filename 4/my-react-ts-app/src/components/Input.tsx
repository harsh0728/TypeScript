import { FC, ChangeEvent, FocusEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  error?: string;
  disabled?: boolean;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  label,
  error,
  disabled = false,
  onBlur,
  onFocus,
  required = false
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem',
          fontWeight: '600',
          color: '#374151'
        }}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          border: error ? '2px solid #ef4444' : '1px solid #d1d5db',
          borderRadius: '0.375rem',
          fontSize: '1rem',
          outline: 'none',
          transition: 'border-color 0.2s',
          backgroundColor: disabled ? '#f3f4f6' : 'white',
          cursor: disabled ? 'not-allowed' : 'text'
        }}
      />
      
      {error && (
        <p style={{ 
          color: '#ef4444', 
          fontSize: '0.875rem', 
          marginTop: '0.25rem' 
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;