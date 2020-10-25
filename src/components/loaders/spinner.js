import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
}))

export default function Spinner() {
    const css = useStyles()

    return (
        <div id="spiner" className={css.root}>
            <CircularProgress />
        </div>
    )
}
