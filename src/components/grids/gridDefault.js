import Grid from '@material-ui/core/Grid'

export default function GridCustom({ children: performers, Card }) {
    if (performers.length === 0) return <p>no data found</p>
    return (
        <Grid container spacing={2}>
            {performers.map((el) => (
                <Grid xs={6} md={4} lg={3} item key={el.id}>
                    <Card data={el}></Card>
                </Grid>
            ))}
        </Grid>
    )
}
