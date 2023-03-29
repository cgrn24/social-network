import React, { ChangeEvent, useEffect, useState } from 'react'

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState('')

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      )}
    </div>
  )
}
