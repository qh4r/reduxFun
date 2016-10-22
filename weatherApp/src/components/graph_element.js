import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default function ({data, color, unit}) {
    return (
        <td>
            <Sparklines height={120} width={200} data={data}>
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div style={{textAlign: 'center'}}>{`${average(data)} ${unit}`}</div>
        </td>
    )
}

function average(data) {
    if (data && data.length) {
        return _.round(_.sum(data) / data.length);
    }
}