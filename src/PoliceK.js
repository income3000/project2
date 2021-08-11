import React from 'react'
import information from './information.json'
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn} from '@progress/kendo-react-grid'
import { process} from '@progress/kendo-data-query'
import { useState } from 'react'
export default function PoliceK() {

const [dataState, setDateState] = useState({
    skip:0,
    take:15,
})
const [result, setResult] = useState(process(information, dataState))
const onDataStateChange = (event) => {
    setDateState(event.dataState);
    setResult(process(information, event.dataState))
}
const onFilterChange =(event)=> {
    setDateState(event.dataState);
    setResult(process(information, event.dataState))
}
    return (
        <div>
            <Grid 
            data={result}
            pageable={true}
            groupable={true}
            filterable={true}
            total={information.length}
            onDataStateChange={onDataStateChange}
            {...dataState}
            onFilterChange={onFilterChange}
            >
                <GridColumn field="Victim's name" title='Victim' filterable={true}/>
                <GridColumn field="Victim's age" title='Age' filterable={true}/>
                <GridColumn field="Victim's gender" title='Gender' filterable={true}/>
                <GridColumn field="City" title='City' filterable={true}/>
                <GridColumn field="State" title='State' filterable={true}/>
                {/* <GridColumn field="Date of Incident " title='Date' />
                <GridColumn field="A brief desciption of the circumstances surrounding death" title='Description' /> */}
            </Grid>
        </div>
    )
}
