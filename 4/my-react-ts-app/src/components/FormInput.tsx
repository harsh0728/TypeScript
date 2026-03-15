import { ChangeEvent, FocusEvent } from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  disabled = false
}: FormInputProps) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label 
        htmlFor={name}
        style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          color: '#374151'
        }}
      >
        {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
      </label>
      
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '0.625rem 0.875rem',
          fontSize: '0.875rem',
          border: error ? '2px solid #ef4444' : '1px solid #d1d5db',
          borderRadius: '0.375rem',
          outline: 'none',
          transition: 'all 0.2s',
          backgroundColor: disabled ? '#f3f4f6' : 'white'
        }}
        onFocus={(e) => {
          if (!error) {
            e.target.style.borderColor = '#3b82f6';
            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
          }
        }}
        onBlurCapture={(e) => {
          e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
          e.target.style.boxShadow = 'none';
        }}
      />
      
      {error && (
        <p style={{
          marginTop: '0.375rem',
          fontSize: '0.75rem',
          color: '#ef4444'
        }}>
          {error}
        </p>
      )}
    </div>
  );
}