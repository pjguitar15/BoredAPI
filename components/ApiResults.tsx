import React from 'react'
import ApiResultItem from './ApiResultItem'

const ApiResults = ({ apiResults }: { apiResults: any }) => {
  return (
    <div>
      <ApiResultItem keyItem='Activity' valueItem={apiResults.activity} />
      <ApiResultItem keyItem='Type' valueItem={apiResults.type} />
      <ApiResultItem
        keyItem='Participants'
        valueItem={apiResults.participants}
      />
      <ApiResultItem keyItem='Price' valueItem={apiResults.price} />
      <ApiResultItem keyItem='Link' valueItem={apiResults.link} />
      <ApiResultItem keyItem='Key' valueItem={apiResults.key} />
      <ApiResultItem
        keyItem='Accessibility'
        valueItem={apiResults.accessibility}
      />
    </div>
  )
}

export default ApiResults
