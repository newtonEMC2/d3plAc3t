import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { MainWrapper } from '../wrappers'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        background: '#F1F8F8',
        '& > *': {
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '2rem'
        }
    },
    spliter: {
        marginLeft: '1.2rem',
        marginRight: '1.2rem'
    },
    label: { marginRight: 0 }
}))

export default function Filter({
    handleNameField,
    statusBtn,
    handleStatusBtn,
    reloadFromServer,
    query
}) {
    const css = useStyles()

    return (
        <div id="filter" className={css.root}>
            <MainWrapper>
                <TextField
                    onChange={handleNameField}
                    id="nameFilter"
                    label="name"
                    type="search"
                    variant="outlined"
                    value={query.name}
                    size="small"
                />
                <span className={css.spliter}>|</span>
                <FormControlLabel
                    control={
                        <Switch
                            checked={statusBtn}
                            onChange={handleStatusBtn}
                            name="isAlive"
                            color="primary"
                        />
                    }
                    className={css.label}
                    label="is alive"
                />
                <span className={css.spliter}>|</span>
                <Button
                    onClick={reloadFromServer}
                    variant="contained"
                    color="primary"
                    disableElevation>
                    FETCH
                </Button>
            </MainWrapper>
        </div>
    )
}
