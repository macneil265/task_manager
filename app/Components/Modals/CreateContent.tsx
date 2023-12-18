"use client"

import React, {useState} from 'react'

function CreateContent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  return (
    <div>CreateContent</div>
  )
}

export default CreateContent