import {useEffect, useState} from 'react'

function GroupList() {
    const [groups, setGroups] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        const getData = async() => {
            await fetch('http://127.0.0.1:8000/api/groups/')
            .then(resp => resp.json())
            .then(data => {
                setGroups(data);
            }).catch(e=>{
                setError(true);
                setLoading(false)
            })
        }
        getData();
        setLoading(false);
    }, [])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>
    return(
        <div>
            {groups && groups.map(group => {
                return <p>{group.name}</p>
            })}
        </div>
    );
}

export default GroupList;