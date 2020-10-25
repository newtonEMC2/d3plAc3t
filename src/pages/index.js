import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'

import Pagination from '@material-ui/lab/Pagination'

import { fetchPerformers } from '../redux/actions/performers'
import { MainHeader } from '../components/headers'
import { GridDefault } from '../components/grids'
import { PerformerCard } from '../components/cards'
import { Filter } from '../components/filter'
import { MainWrapper } from '../components/wrappers'
import { Spinner } from '../components/loaders'

import { useAsyncState } from '../hooks'

export default function Home({ page, status, name }) {
    const dispatch = useDispatch()
    const [statusBtn, setStatusBtn] = useAsyncState(!!status)
    const [query, setQuery] = useAsyncState({ status, name, page })

    useEffect(() => {
        dispatch(fetchPerformers(page, status, name))
        updateQuery(query)
    }, [])

    const { info = {}, performers } = useSelector((state) => state.performers)

    const updateQuery = async ({ status, name, page }) => {
        const obj = {}
        if (status) obj.status = encodeURI(status)
        if (name) obj.name = encodeURI(name)
        if (page) obj.page = encodeURI(page)
        Router.push({
            pathname: '/',
            query: obj
        })
    }

    const handleStatusBtn = async () => {
        setStatusBtn(!statusBtn).then((value) => {
            if (value) setQuery({ ...query, status: 'alive' }).then((value) => updateQuery(value))
            else setQuery({ ...query, status: false }).then((value) => updateQuery(value))
        })
    }

    const handleNameField = (e) => {
        const { value } = e.target
        if (value) setQuery({ ...query, name: e.target.value }).then((value) => updateQuery(value))
        else setQuery({ ...query, name: '' }).then((value) => updateQuery(value))
    }

    const handlePageField = (e, page) => {
        setQuery({ ...query, page })
            .then((value) => updateQuery(value))
            .then(() => reloadFromServer())
    }

    const reloadFromServer = () => {
        window.location.href = window.location
    }

    return (
        <main id="itemsContent">
            <MainHeader></MainHeader>

            <Filter
                handleNameField={handleNameField}
                statusBtn={statusBtn}
                handleStatusBtn={handleStatusBtn}
                reloadFromServer={reloadFromServer}
                query={query}></Filter>
            {performers ? (
                <>
                    <MainWrapper>
                        <Pagination
                            onChange={handlePageField}
                            count={info.pages}
                            defaultPage={parseInt(page)}
                            color="primary"
                        />
                        <GridDefault id="itemsContent" Card={PerformerCard}>
                            {performers}
                        </GridDefault>
                    </MainWrapper>
                </>
            ) : (
                <Spinner></Spinner>
            )}
        </main>
    )
}

export async function getServerSideProps({ query }) {
    return {
        props: {
            page: query.page || 1,
            status: query.status || false,
            name: query.name || ''
        }
    }
}
