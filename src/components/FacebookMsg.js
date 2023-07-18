'use client'

import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMsg(){
 return(
    <FacebookProvider appId="1033004211022124" chatSupport>
       <CustomChat pageId="108479388986594" minimized={true}/>
      </FacebookProvider>   
 )
}

export default FacebookMsg