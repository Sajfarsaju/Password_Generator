import { useState } from "react"

const PasswordStrengthIndicator = ({password = ""}) => {

    const [textColor, setTextColor] = useState('')

    const getColorForStrength = (strength) => {
        switch (strength) {
          case "Very Weak":
            return "Red";
          case "Poor":
            return "Orange";
          case "Medium":
            return "Yellow";
          case "Strong":
            return "Green";
          case "Very Strong":
            return "Green";
          default:
            return "White";
        }
      };

    const getPasswordStrength = () => {
        const passwordLength = password.length
        
        if (passwordLength < 1) {
            return ""
        } else if (passwordLength < 4) {
            return "Very Weak"
        } else if (passwordLength < 8) {
            return "Poor"
        } else if (passwordLength < 12) {
            return "Medium"
        } else if (passwordLength < 16) {
            return "Strong"
        } else {
            return "Very Strong"
        }
    }

    const passwordStrength = getPasswordStrength()
    const strengthColor = getColorForStrength(passwordStrength);

    if (!passwordStrength) return <></>

    return (
        <div className="password-strength">
            Strength: <span style={{ fontWeight: "bold" , color: strengthColor }}>{passwordStrength}</span>
        </div>
    )
}

export default PasswordStrengthIndicator