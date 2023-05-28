import Item from './Item'

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Samsung" ano_lancamento={1988}/>
                <Item marca="Motorola" ano_lancamento={1973}/>
                <Item marca="Apple" />
                <Item marca="LG" ano_lancamento={2011} />
                <Item  />

            </ul>
        </>
    )
}

export default List