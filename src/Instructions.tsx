import React, { useEffect, useState } from 'react'
import './styles.css'

const imageUrls: { [key: string]: string } = {
	Barbarian: 'https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg',
	Bard: 'https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg',
	Cleric: 'https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg',
	Druid: 'https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg',
	Fighter: 'https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg',
	Monk: 'https://www.dndbeyond.com/avatars/10/5/636336417372349522.jpeg',
	Paladin: 'https://www.dndbeyond.com/avatars/10/6/636336417477714942.jpeg',
	Ranger: 'https://www.dndbeyond.com/avatars/10/7/636336417569697438.jpeg',
	Rogue: 'https://www.dndbeyond.com/avatars/10/8/636336417681318097.jpeg',
	Sorcerer: 'https://www.dndbeyond.com/avatars/10/9/636336417773983369.jpeg',
	Warlock: 'https://www.dndbeyond.com/avatars/10/12/636336422983071263.jpeg',
	Wizard: 'https://www.dndbeyond.com/avatars/10/11/636336418370446635.jpeg'
}

export default function Instructions({ finalValues }) {
	const [img, setImg] = useState()
	const [characterData, setCharacterData] = useState({
		increment: '',
		stat: ''
	})

	const fetchImage = async () => {
		const res = await fetch(imageUrls[finalValues.class])
		const imageBlob = await res.blob()
		const imageObjectURL = URL.createObjectURL(imageBlob)
		setImg(imageObjectURL)
	}

	useEffect(() => {
		fetchImage()
	}, [Instructions])
	return (
		<div>
			<div>
				For the race {finalValues.race} (with subrace {finalValues.subrace})
				when selecting the race in dnd beyond you should select {}.
			</div>
			<div>
				For the class, follow the icon:{' '}
				<img src={img} alt={`${finalValues.class} icon`} />
			</div>
		</div>
	)
}
