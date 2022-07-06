/** @jsx h */
import {h} from 'preact';
import {useEffect, useState} from 'preact/hooks';

const timeFmt = new Intl.RelativeTimeFormat('fr-FR');

export default function Countdown(props: { target: string }) {
    const target = new Date(props.target);
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setNow((now) => {
                if (now.getTime() >= target.getTime()) {
                    clearInterval(timer)
                }

                return new Date();
            });
        })
    }, [props.target]);
    if (now.getTime() >= target.getTime()) {
        return <span>🎉</span>
    }

    const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);
    return (
        <span>{timeFmt.format(secondsLeft, 'seconds')}</span>
    )
}
