import React from 'react'

const SampleTableItem = ({ sampleData, env }) => {
    let envData = sampleData.find(item => item.env === env).data || []
    return <table>
        <caption>{env}</caption>
        {
            envData.length && envData.map((item, idx) => {
                return <tr>
                    <td>{item.name}</td>
                    <td>{item.version}</td>
                </tr>
            })
        }
    </table>
};

export default SampleTableItem
