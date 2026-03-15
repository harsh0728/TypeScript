import { FC, ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
  bordered?: boolean;
  width?: string | number;
}

const Card: FC<CardProps> = ({
  title,
  children,
  footer,
  onClick,
  hoverable = false,
  bordered = true,
  width = '100%'
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: width,
        backgroundColor: 'white',
        border: bordered ? '1px solid #e5e7eb' : 'none',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        ...(hoverable && {
          ':hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }
        })
      }}
      onMouseEnter={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      {title && (
        <div style={{
          padding: '1rem 1.5rem',
          borderBottom: '1px solid #e5e7eb',
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#111827'
        }}>
          {title}
        </div>
      )}
      
      <div style={{ padding: '1.5rem' }}>
        {children}
      </div>
      
      {footer && (
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb'
        }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;