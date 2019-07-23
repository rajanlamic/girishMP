import React from 'react'
import SampleTableItem from './SampleTableItem'

const SampleTable = ({ sampleData }) => {
    let allEnvs = sampleData.find(item => item.allEnvs.length).allEnvs || []
    return <>
        {
            allEnvs.length && allEnvs.map((item, idx) => {
                return <SampleTableItem key={idx} env={item} sampleData={sampleData} />
            })
        }
    </>
};

export default SampleTable
