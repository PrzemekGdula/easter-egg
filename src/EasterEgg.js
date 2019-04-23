import React from 'react'
import { connect } from 'react-redux'
import { paintActionCreator } from './state/easterEgg'

import EggPainted from './EggPainted'
import EggNotPainted from './EggNotPainted'


const EasterEgg = (props) => {
    return (
        <div>
            {
                props._isPainted ?
                    <EggPainted
                        paintEgg={props._paintEgg}
                    />
                    :
                    <EggNotPainted
                        paintEgg={props._paintEgg}
                    />
            }

        </div>
    )
}
const mapStateToProps = state => ({
    _isPainted: state.easterEgg.isPainted
})

const mapDispatchToProps = dispatch => ({
    _paintEgg: (value) => dispatch(paintActionCreator(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EasterEgg)