import { useState } from 'react'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import screenfull from 'screenfull'
import './index.less'

function FullScreen() {
	const [fullScreen, setFullScreen] = useState(false)

	const fullScreenFun = () => {
		if (!fullScreen && screenfull.isEnabled) {
			setFullScreen(true)
			screenfull.request()
		} else {
			setFullScreen(false)
			screenfull.exit()
		}
	}

	return (
		<div
			onClick={() => {
				fullScreenFun()
			}}
			className="fullScrren"
		>
			{fullScreen ? (
				<FullscreenExitOutlined
					style={{
						fontSize: '19px'
					}}
				/>
			) : (
				<FullscreenOutlined
					style={{
						fontSize: '19px'
					}}
				/>
			)}
		</div>
	)
}

export default FullScreen
