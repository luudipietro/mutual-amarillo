import React from 'react'
import './MemberOrganigram.css'
const MemberOrganigram = ({position, name}) => {
  return (
    <div className="member-card">
      <p className="member-card-position">{position}:</p>
      <p className="member-card-name">{name}</p>
    </div>
  )
}

export default MemberOrganigram