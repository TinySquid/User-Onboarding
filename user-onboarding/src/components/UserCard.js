import React from 'react'

const UserCard = props => {
  return (
    <div className="user">
      <h2>USER INFO</h2>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>
      <p>Role: {props.role}</p>
    </div>
  )
}

export default UserCard
