import Layout from './components/Layout/Layout'
import React from 'react'
import Shapping from './containers/Shapping/Shapping'
class App extends React.Component{

  render(){
    return(
      <div>
        <Layout>
          <Shapping/>
        </Layout>
      </div>
    )
  }
  
}

export default App