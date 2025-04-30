"use client"

import { useEffect } from "react"

interface ConvertKitFormProps {
  onSuccess?: () => void
}

export default function ConvertKitForm({ onSuccess }: ConvertKitFormProps) {
  useEffect(() => {
    const loadForm = () => {
      // Remove any existing scripts and forms to avoid duplicates
      const existingScripts = document.querySelectorAll('script[data-uid="6cb19e15e7"]')
      const existingForms = document.querySelectorAll('.formkit-form[data-uid="6cb19e15e7"]')
      
      existingScripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
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

      // Add success handler
      script.onload = () => {
        // Listen for form submission success
        document.addEventListener('formkit:submit', () => {
          onSuccess?.()
        })
      }

      // Add custom styling
      const style = document.createElement("style")
      style.textContent = `
        .formkit-form[data-uid="6cb19e15e7"] {
          max-width: 100% !important;
          margin: 0 !important;
          padding: 24px !important;
          border: none !important;
          border-radius: 8px !important;
          background-color: #ffffff !important;
        }
        
        .formkit-form[data-uid="6cb19e15e7"] .formkit-input {
          width: 100% !important;
          padding: 0.75rem 1rem !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 6px !important;
          color: #000000 !important;
          background-color: #ffffff !important;
        }
        
        .formkit-form[data-uid="6cb19e15e7"] .formkit-submit {
          width: 100% !important;
          margin-top: 1rem !important;
        }
        
        .formkit-form[data-uid="6cb19e15e7"] .formkit-submit > span {
          padding: 0.75rem 1.5rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          color: white !important;
          background-color: #2563EB !important;
          border-radius: 6px !important;
        }
      `

      // Append elements to the container
      const container = document.getElementById("convertkit-form-container")
      if (container) {
        container.appendChild(script)
        document.head.appendChild(style)
      }
    }

    // Load the form
    loadForm()

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[data-uid="6cb19e15e7"]')
      const forms = document.querySelectorAll('.formkit-form[data-uid="6cb19e15e7"]')
      const styles = document.querySelectorAll("style")
      
      scripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
      
      forms.forEach((form) => {
        if (form.parentNode) {
          form.parentNode.removeChild(form)
        }
      })
      
      styles.forEach((style) => {
        if (style.textContent?.includes("6cb19e15e7") && document.head.contains(style)) {
          document.head.removeChild(style)
        }
      })
    }
  }, [onSuccess])

  return (
    <div id="convertkit-form-container" className="w-full">
      <div className="formkit-form" data-uid="6cb19e15e7"></div>
    </div>
  )
}
