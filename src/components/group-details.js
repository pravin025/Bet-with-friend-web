import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {useFetchGroup} from "../hooks/fetch-group"
import {DateTime} from "luxon"
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import TimerIcon from '@mui/icons-material/Timer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    DateTime :{
        fontSize: '18px',
        marginRight: '2px',
        marginTop : '2px',
        paddingTop:'20px',
        color: '#fecc01'
    }
})

function GroupDetails() {
    const { id } = useParams();
    const [data, loading, error] = useFetchGroup(id);
    const [group, setGroup] = useState(null)
    const classes = useStyles();

    useEffect(() => {
        setGroup(data);
    }, [data])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>
    return(
        <div>
            <Link to={'/'}>back</Link>
            { group &&
            <React.Fragment>
                <h1>{group.name} {group.location}</h1>
                <h1>{group.description}</h1>
                <h3>Events:</h3>
                {group.events && group.events.map(event => {
                    const format = "yyyy-MM-dd'T'HH:mm:ss'Z'"
                    const evtTime = DateTime.fromFormat(event.time, format)
                    return <div key={event.id}>
                        <p>{event.team1} Vs {event.team2}</p>
                        <p>{event.time}</p>
                        <p><EventAvailableTwoToneIcon className={classes.DateTime} /> {evtTime.toFormat('yyyy-MM-dd')} <TimerIcon className={classes.DateTime} />{evtTime.toFormat('HH:mm')}</p>
                    </div>

                })}
            </React.Fragment>
            }
        </div>
    );
}

export default GroupDetails;