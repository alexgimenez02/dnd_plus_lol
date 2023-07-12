import { useState } from 'react'
import Body from './Body'
import Header from './Header'
import Instructions from './Instructions'
import './styles.css'

export default function App() {
	const [isOptions, changeIsOptions] = useState(true)
	const [finalValues, setFinalValues] = useState({
		race: '',
		subrace: '',
		class: ''
	})

	return (
		<div className="App">
			<Header />
			{isOptions ? (
				<Body setIsOptions={changeIsOptions} setFinalValues={setFinalValues} />
			) : (
				<Instructions finalValues={finalValues} />
			)}
		</div>
	)
}
