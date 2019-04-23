import React from 'react'
import egg from './egg.svg'



const EggNotPainted = (props) => {
    return (
        <div
        >
            <h1
            >
                Kliknij aby pomalować jajko!
			</h1>
            <img
                src={egg}
                alt={'Not painted easter egg'}
                onClick={() => props.paintEgg(true)}
            />
        </div>
    )
}

export default EggNotPainted