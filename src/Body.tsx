import React, { useState } from 'react'
import Instructions from './Instructions'
import './styles.css'

const races = ['Human', 'Yordle', 'Golem', 'Troll', 'Vastaya']
const subraces: { [key: string]: string[] } = {
	Human: [
		'Bilgwater Human',
		'Demacian Human',
		'Freljordian Human',
		'Ionian Human',
		'Ixtali Human',
		'Noxian Human',
		'Piltovan Human',
		'Zaunite Human',
		'Shuriman Human',
		'Targonian Human',
		'Void-Altered Human'
	],
	Troll: ['Frost-troll', 'Sand-troll'],
	Golem: ['Inorganic golem', 'Organic Golem'],
	Vastaya: ['Landwalker Tribes', 'Tribes of the Sea', 'Tribes of the Sky']
}
const classes = [
	'Barbarian',
	'Bard',
	'Cleric',
	'Druid',
	'Fighter',
	'Monk',
	'Paladin',
	'Ranger',
	'Rogue',
	'Sorcerer',
	'Warlock',
	'Wizard'
]

const ButtonComponent = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>
}

const ClassForm = ({ setIsOptions, setFinalValues }) => {
	const [checkedOption, changeCheckedOption] = useState('')

	const handleCheckOption = (e: React.ChangeEvent<HTMLInputElement>) => {
		changeCheckedOption(e.target.value)
		setFinalValues((prevState: any) => ({
			...prevState,
			subrace: e.target.value
		}))
	}

	const handleClick = () => {
		setIsOptions(false)
	}
	return (
		<div>
			{classes.map((item, index) => (
				<div key={index}>
					<label>
						<input
							className="classSelector"
							type="checkbox"
							value={item}
							checked={checkedOption === item}
							onChange={handleCheckOption}
						/>
						{item}
					</label>
				</div>
			))}
			<p> SelectedClass: {checkedOption} </p>

			{!!checkedOption ? (
				<div>
					<div className="divider" />
					<div className="extraSpace" />
					<ButtonComponent
						handleClick={handleClick}
						text={'Submit information'}
					/>
				</div>
			) : (
				<div />
			)}
		</div>
	)
}

const SubclassForm = ({ subrace, setIsOptions, setFinalValues }) => {
	const [checkedOption, changeCheckedOption] = useState('')

	const handleCheckOption = (e: React.ChangeEvent<HTMLInputElement>) => {
		changeCheckedOption(e.target.value)
		setFinalValues((prevState: any) => ({
			...prevState,
			subrace: e.target.value
		}))
	}

	return (
		<div>
			{(subrace as string[]).map((item, index) => (
				<div key={index}>
					<label>
						<input
							className="subraceSelector"
							type="checkbox"
							value={item}
							checked={checkedOption === item}
							onChange={handleCheckOption}
						/>
						{item}
					</label>
				</div>
			))}
			<p> Selected subrace: {checkedOption} </p>
			{!!checkedOption ? (
				<div>
					<div className="divider" />
					<div>Available Classes: </div>
					<div className="divider" />
					<ClassForm
						setIsOptions={setIsOptions}
						setFinalValues={setFinalValues}
					/>
				</div>
			) : (
				<div />
			)}
		</div>
	)
}

const CharacterForm = ({ setIsOptions, setFinalValues }) => {
	const [checkedOption, changeCheckedOption] = useState('')

	const handleCheckOption = (e: React.ChangeEvent<HTMLInputElement>) => {
		changeCheckedOption(e.target.value)
		setFinalValues((prevState) => ({
			...prevState,
			race: e.target.value
		}))
	}

	return (
		<form>
			<div className="divider" />
			Available races:
			<div className="divider" />
			{races.map((item, index) => (
				<div key={index}>
					<label>
						<input
							className="raceSelector"
							type="checkbox"
							value={item}
							checked={checkedOption === item}
							onChange={handleCheckOption}
						/>
						{item}
					</label>
				</div>
			))}
			<p>Selected race: {checkedOption} </p>
			{Object.keys(subraces).indexOf(checkedOption) !== -1 &&
			!!checkedOption ? (
				<div>
					<div className="divider" />
					<div>Available subraces: </div>
					<div className="divider" />
					<SubclassForm
						subrace={subraces[checkedOption]}
						setIsOptions={setIsOptions}
						setFinalValues={setFinalValues}
					/>
				</div>
			) : (
				<div />
			)}
			{checkedOption === races[1] ? (
				<div>
					<div className="divider" />{' '}
					<ClassForm
						setIsOptions={setIsOptions}
						setFinalValues={setFinalValues}
					/>
				</div>
			) : (
				<div />
			)}
		</form>
	)
}

export default function Body({ setIsOptions, setFinalValues }) {
	const [isComponentVisible, setComponentVisible] = useState(false)

	const handleClick = () => {
		setComponentVisible(!isComponentVisible)
	}

	return (
		<div>
			{isComponentVisible ? (
				<CharacterForm
					setIsOptions={setIsOptions}
					setFinalValues={setFinalValues}
				/>
			) : (
				<ButtonComponent
					handleClick={handleClick}
					text={'Click here to start!'}
				/>
			)}
		</div>
	)
}
