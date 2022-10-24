import { parseISO, formatDistanceToNow } from 'date-fns';

export const TimeAgo = (props: any) => {
    let timeAgo = '';
    if (props.timestamp) {
        const date = parseISO(props.timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={props.timestamp} >
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
