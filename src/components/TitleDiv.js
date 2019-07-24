// import React from "react";

// export default function TitleDiv({title}) {
//   return (
//     <div className="Title">
//       <h1>{title}</h1>
//     </div>
//   );
// }

import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const TitleDiv = ({title}) => (
  <Segment clearing>
    <Header as='h1' floated='right'>
      {title}
    </Header>
  </Segment>
)

export default TitleDiv