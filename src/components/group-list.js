import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { getGroups } from '../services/group-services'
function GroupList() {
    const [groups, setGroups] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        const getData = async() => {
            await getGroups()
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
                return <Link key={group.id} to={`/details/${group.id}`}>
                    <p>{group.name}</p>
                </Link>
            })}
        </div>
    );
}

export default GroupList;