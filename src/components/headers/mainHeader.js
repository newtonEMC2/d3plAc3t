import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { MainWrapper } from '../wrappers'

// import Modal from '@/components/modal/login'

const useStyles = makeStyles((theme) => ({
    menuToggler: {
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}))

export default function Header() {
    const css = useStyles()

    return (
        <AppBar position="static">
            <MainWrapper>
                <Toolbar disableGutters>
                    <Typography variant="h6">Searcher!!</Typography>
                    <IconButton
                        className={css.menuToggler}
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </MainWrapper>
        </AppBar>
    )
}
