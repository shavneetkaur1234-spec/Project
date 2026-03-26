import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    { img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHdvbWFufGVufDB8fDB8fHww',
      intro:'',
      tag:'Satisfied'
    },
    { img:'https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      intro:'',
      tag:'UnderServed'
    },
    { img:'https://images.unsplash.com/photo-1616769364512-1e50e8266907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
      intro:'',
      tag:'UnderBanked'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHdvbWFufGVufDB8fDB8fHww',
      intro:'',
      tag:'Employed'
    }
    
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
