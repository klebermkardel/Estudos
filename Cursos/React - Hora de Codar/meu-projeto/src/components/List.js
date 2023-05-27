import Item from './Item'

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Samsung" />
                <Item marca="Motorola"/>
            </ul>
        </>
    )
}

export default List