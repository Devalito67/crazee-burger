import { useState } from "react";

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bonjour ${inputValue}`);
        setInputValue("");
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
  return (
    <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} type="text" placeholder="Entre votre prénom..." onChange={handleChange} required />
            <button type="submit">Accèdez à votre espace</button>
        </form>
  )
}
