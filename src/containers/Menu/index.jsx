import React from 'react'

function Menu({children}) {
  return (
      <section style={{backgroundColor: '#3EB489'}} className="w-full grid divide-y sm:grid-cols-2 lg:grid-cols-3 lg:h-screen">
          {children}
      </section>
  )
}

export default Menu