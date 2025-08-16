"use client";

import { useEffect, useState } from "react";

const GTMDebug = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dataLayer, setDataLayer] = useState<any[]>([]);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const updateDataLayer = () => {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        setDataLayer([...(window as any).dataLayer]);
      }
    };

    // Update dataLayer display when it changes
    const interval = setInterval(updateDataLayer, 1000);
    
    // Initial update
    updateDataLayer();

    return () => clearInterval(interval);
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          background: '#007cba',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
      >
        {isVisible ? 'Hide' : 'Show'} GTM Debug
      </button>
      
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '400px',
            maxHeight: '500px',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '15px',
            zIndex: 9999,
            overflow: 'auto',
            fontSize: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>GTM DataLayer</h3>
          <div style={{ marginBottom: '10px' }}>
            <strong>Total Events:</strong> {dataLayer.length}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>GTM Container:</strong> GTM-KNSHDN66
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>DataLayer Available:</strong> {typeof window !== "undefined" && (window as any).dataLayer ? 'Yes' : 'No'}
          </div>
          <hr style={{ margin: '10px 0' }} />
          <div>
            <strong>Recent Events:</strong>
            <div style={{ maxHeight: '300px', overflow: 'auto' }}>
              {dataLayer.slice(-10).map((event, index) => (
                <div
                  key={index}
                  style={{
                    margin: '5px 0',
                    padding: '5px',
                    background: '#f5f5f5',
                    borderRadius: '3px',
                    fontSize: '11px',
                  }}
                >
                  <div><strong>Event:</strong> {event.event}</div>
                  {event.page_path && <div><strong>Page:</strong> {event.page_path}</div>}
                  {event.button_name && <div><strong>Button:</strong> {event.button_name}</div>}
                  {event.form_name && <div><strong>Form:</strong> {event.form_name}</div>}
                  {event.timestamp && <div><strong>Time:</strong> {new Date(event.timestamp).toLocaleTimeString()}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GTMDebug;
