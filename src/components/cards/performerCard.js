import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}))

export default function PerformerCard({ data }) {
    const css = useStyles()

    return (
        <Card key={data.id}>
            <CardActionArea>
                <CardContent className={css.cardContent}>
                    <Avatar className={css.large} alt="Remy Sharp" src={data.image} />
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
