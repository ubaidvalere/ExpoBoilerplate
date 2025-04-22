import { View } from 'react-native'
import React from 'react'

type Props = {
  height?: number;
  width?: number;
}

const Spacer = (props: Props) => {
  return (
    <View style={{ height: props.height, width: props.width }} />
  )
}

export default Spacer

