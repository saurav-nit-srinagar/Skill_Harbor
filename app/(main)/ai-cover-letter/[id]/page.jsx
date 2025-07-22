import React from 'react'

const CoverLetter = async({ params }) => {
    const { id } = await params.id; // Extracting id from params
    // Fetch data or perform actions based on the id
  return (
    <div>
       CoverLetter: {id}
    </div>
  )
}

export default CoverLetter;
