import React from 'react'
import eggPainted from './egg-painted.svg'

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

const EggPainted = (props) => {
    return(
        <div
        style={styles.divContainer}
        >
<h1>
    Wesołych Świąt
</h1>
<img
style={styles.img}
src = {eggPainted}
alt = {'Painted easter egg'}
/>

        </div>
    )
}

export default EggPainted