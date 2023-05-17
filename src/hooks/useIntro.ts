import { useEffect } from 'react'

const useIntro = () => {
	const storage = window.localStorage
	const currentTimestamp = Date.now()
	const timestamp = JSON.parse(storage.getItem('timestamp') || '1000')

	const timeLimit = 3 * 60 * 60 * 1000 // 3 hours.

	const hasTimePassed = currentTimestamp - timestamp > timeLimit

	useEffect(() => {
		if (hasTimePassed) {
			return storage.setItem('timestamp', currentTimestamp.toString())
		}

		return storage.setItem('timestamp', timestamp.toString())
	}, [])

	return hasTimePassed
}

export default useIntro
