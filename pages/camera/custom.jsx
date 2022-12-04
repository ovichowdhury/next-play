import Camera from '@components/camera/Camera'
import React from 'react'

export default function Custom() {
  return (
    <div className='m-4'>
        <Camera onConfirm={(d) => console.log(d)}/>
    </div>
  )
}
