import { useState } from 'react'
import './styles.css'

const ButtonComponent = ({ handleClick }) => {
	return <button onClick={handleClick}>Click here to start!</button>
}

const CharacterForm = () => {
	const [selectedRace, setSelectedRace] = useState('Human')

	const handleRaceSelection = (selRace: string) => {
		setSelectedRace(selRace)
	}

	return (
		<div>
			<form>
				<label>Select race:</label>
				<div className="squared-box">
					Selecciona una de las opciones
					<div className="arrowed-box"> v </div>
				</div>
			</form>
		</div>
	)
}

export default function Body() {
	const [isComponentVisible, setComponentVisible] = useState(false)

	const handleClick = () => {
		setComponentVisible(true)
	}

	return (
		<div>
			{isComponentVisible ? (
				<CharacterForm />
			) : (
				<ButtonComponent handleClick={handleClick} />
			)}
		</div>
	)
}
