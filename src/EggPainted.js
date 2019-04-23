import React from 'react'
import eggPainted from './egg-painted.svg'

const EggPainted = (props) => {
    return(
        <div>
<h1>
    Wesołych Świąt
</h1>
<img
src = {eggPainted}
alt = {'Painted easter egg'}
/>

        </div>
    )
}

export default EggPainted