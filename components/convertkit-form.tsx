"use client"

import { useEffect } from "react"

export default function ConvertKitForm() {
  useEffect(() => {
    // Wait for DOM to be fully loaded
    const loadForm = () => {
      // Remove any existing scripts and forms to avoid duplicates
      const existingScripts = document.querySelectorAll('script[data-uid="6cb19e15e7"]')
      const existingForms = document.querySelectorAll('.formkit-form[data-uid="6cb19e15e7"]')
      
      existingScripts.forEach((script) => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      })
      
      existingForms.forEach((form) => {
        if (form.parentNode) {
          form.parentNode.removeChild(form)
        }
      })

      // Create script element
      const script = document.createElement("script")
      script.async = true
      script.src = "https://carstarz.kit.com/6cb19e15e7/index.js"
      script.dataset.uid = "6cb19e15e7"

      // Add custom styling with higher specificity and !important rules
      const style = document.createElement("style")
      style.textContent = `
        /* Form container - black background */
        .formkit-form[data-uid="6cb19e15e7"] {
          max-width: 100% !important; /* Changed to 100% to fit container */
          margin: 0 !important; /* Removed auto margins */
          padding: 24px !important;
          border: none !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3) !important;
          background-color: #000000 !important; /* Black background */
        }
        
        /* Form header - light text for dark background */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-header,
        .formkit-form[data-uid="6cb19e15e7"] .formkit-header h1 {
          color: #ffffff !important; /* White text */
          font-weight: 600 !important;
          font-size: 1.5rem !important;
          line-height: 1.2 !important;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif !important;
          margin-bottom: 1rem !important;
        }
        
        /* Form subheader - light gray text for better readability */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-subheader,
        .formkit-form[data-uid="6cb19e15e7"] .formkit-subheader p {
          color: #d1d5db !important; /* Light gray text */
          font-size: 1rem !important;
          line-height: 1.5 !important;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif !important;
          margin-bottom: 1.5rem !important;
        }
        
        /* Input fields - dark mode styling */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-input {
          width: 100% !important;
          padding: 0.75rem 1rem !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          border: 1px solid #333333 !important; /* Dark gray border */
          border-radius: 6px !important;
          color: #ffffff !important; /* White text */
          background-color: #111111 !important; /* Very dark gray background */
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
        }
        
        .formkit-form[data-uid="6cb19e15e7"] .formkit-input:focus {
          border-color: #3b82f6 !important; /* Blue border on focus */
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
        }
        
        /* Submit button - bright blue for contrast */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-submit {
          width: 100% !important;
          margin-top: 1rem !important;
        }
        
        .formkit-form[data-uid="6cb19e15e7"] .formkit-submit > span {
          padding: 0.75rem 1.5rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          color: white !important;
          background-color: #2563EB !important; /* Blue button */
          border-radius: 6px !important;
          transition: background-color 0.15s ease-in-out, transform 0.1s ease !important;
          display: inline-block !important;
          width: 100% !important;
        }
        
        .formkit-form[data-uid="6cb19e15e7"] .formkit-submit:hover > span {
          background-color: #1D4ED8 !important;
          transform: translateY(-1px) !important;
        }
        
        .formkit-form[data-uid="6cb19e15e7"] .formkit-submit:active > span {
          transform: translateY(0) !important;
        }
        
        /* Form fields container */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-fields {
          display: flex !important;
          flex-direction: column !important;
          gap: 1rem !important;
        }
        
        /* Labels - light gray for dark background */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-label {
          color: #d1d5db !important; /* Light gray text */
        }
        
        /* Success message */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-alert-success {
          background-color: #064e3b !important; /* Dark green background */
          border: 1px solid #10b981 !important; /* Green border */
          border-radius: 6px !important;
          padding: 1rem !important;
          margin-top: 1rem !important;
          color: #d1fae5 !important; /* Light green text */
        }
        
        /* Error message */
        .formkit-form[data-uid="6cb19e15e7"] .formkit-alert-error {
          background-color: #7f1d1d !important; /* Dark red background */
          border: 1px solid #ef4444 !important; /* Red border */
          border-radius: 6px !important;
          padding: 1rem !important;
          margin-top: 1rem !important;
          color: #fecaca !important; /* Light red text */
        }
        
        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .formkit-form[data-uid="6cb19e15e7"] {
            padding: 16px !important;
          }
          
          .formkit-form[data-uid="6cb19e15e7"] .formkit-header,
          .formkit-form[data-uid="6cb19e15e7"] .formkit-header h1 {
            font-size: 1.25rem !important;
          }
          
          .formkit-form[data-uid="6cb19e15e7"] .formkit-subheader,
          .formkit-form[data-uid="6cb19e15e7"] .formkit-subheader p {
            font-size: 0.875rem !important;
          }
          
          .formkit-form[data-uid="6cb19e15e7"] .formkit-input {
            padding: 0.625rem 0.875rem !important;
            font-size: 0.875rem !important;
          }
          
          .formkit-form[data-uid="6cb19e15e7"] .formkit-submit > span {
            padding: 0.625rem 1.25rem !important;
            font-size: 0.875rem !important;
          }
        }
      `

      document.head.appendChild(style)
      document.body.appendChild(script)
    }

    // Load the form after a short delay to ensure DOM is ready
    setTimeout(loadForm, 100)

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[data-uid="6cb19e15e7"]')
      const forms = document.querySelectorAll('.formkit-form[data-uid="6cb19e15e7"]')
      
      scripts.forEach((script) => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      })
      
      forms.forEach((form) => {
        if (form.parentNode) {
          form.parentNode.removeChild(form)
        }
      })

      const styles = document.querySelectorAll("style")
      styles.forEach((style) => {
        if (style.textContent?.includes("6cb19e15e7") && document.head.contains(style)) {
          document.head.removeChild(style)
        }
      })
    }
  }, [])

  return <div id="convertkit-form-container"></div>
}
