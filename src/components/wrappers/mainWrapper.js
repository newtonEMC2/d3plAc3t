import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            width: '98%',
            margin: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
            margin: 'auto',
            maxWidth: '1100px'
        }
    }
}))

export default function MainWrapper({ children }) {
    const css = useStyles()

    return (
        <div id="mainWrapper" className={css.root}>
            {children}
        </div>
    )
}
