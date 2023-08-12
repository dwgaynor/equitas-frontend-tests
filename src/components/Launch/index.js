import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({props}) => {

    var yt = "hide";
    if (props.links.webcast !== null){
        yt = styles.youtube;
    }

    return (
        <div className={styles.tile} title={props.id+" | "+props.flight_number}>
            <div className={styles.launchTitle}>{props.name}</div>
            <div className={styles.launchDate}>
                <h4>Launch Date</h4>
                <p>{moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <a className={yt} href={props.links.webcast} target="_blank">
                <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" />
            </a>
        </div>
    )

}

export default Launch