import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled Application Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px', color: '#f58220' }}>
            Laxmi Credit Console
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '480px', marginBottom: '24px', lineHeight: 1.6 }}>
            A temporary initialization issue occurred while loading this view. Click below to reconnect.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => {
                localStorage.removeItem('laxmi_admin_user');
                window.location.reload();
              }}
              style={{
                padding: '10px 22px',
                borderRadius: '8px',
                background: '#f58220',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Reset Session & Reload
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '10px 22px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.08)',
                color: '#cbd5e1',
                border: '1px solid rgba(255,255,255,0.15)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
