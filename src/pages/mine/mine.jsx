import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './mine.scss'
import avatar from '../../images/avatar.png'

export default function Mine() {
  return (
    <View className="mine">
      <View>
        <Image src={avatar} className="mine-avatar" />
        <View className="mine-nickName">杰西</View>
        <View className="mine-username">jesse</View>
      </View>
      <View className="mine-footer">Build with 💙</View>
    </View>
  )
}

Mine.config = {
  navigationBarTitleText: '我的',
}
