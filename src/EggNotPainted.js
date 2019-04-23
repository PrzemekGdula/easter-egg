import React from 'react'
import egg from './egg.svg'



const styles = {
    divContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    img: {
        width: '200px'
    }
}

const EggNotPainted = (props) => {
    return (
        <div
        style={styles.divContainer}
        >
            <h1>
                Kliknij aby pomalować jajko!
			</h1>
            <img
            style={styles.img}
                src={egg}
                alt={'Not painted easter egg'}
                onClick={() => props.paintEgg(true)}
            />
        </div>
    )
}

export default EggNotPainted