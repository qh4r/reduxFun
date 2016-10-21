import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default function({data, color}) {
    return (
        <td>
            <Sparklines height={120} width={200} data={data}>
                <SparklinesLine color={color}/>
            </Sparklines>
        </td>
    )
}