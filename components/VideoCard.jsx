import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
import { WebView } from 'react-native-webview';

const VideoCard = ({ post :{title, thumbnail,video,users: {username , avatar}}}) => {
    const [play, setPlay] = useState(false);

    
  return (
    <View className='flex-col items-center px-4 mb-14'>
      <View className='flex-row gap-3 items-start'>
        <View className='justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg justify-center items-center p-0.5'>
            <Image 
              source={{ uri: avatar }}
              className='w-full h-full rounded-lg'
              resizeMode='cover'
            />
          </View>
          <View className='justify-center flex-1 ml-3 gap-y-1'>
            <Text className='text-white font-psemibold text-sm' numberOfLines={1}>{title}</Text>
            <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>{username}</Text>
          </View>
        </View>
        <View className='pt-2'>
          <Image 
            source={icons.menu}
            className='w-5 h-5'
            resizeMode='contain'
          />
        </View>
      </View>

      {play ? (
        <WebView 
          source={{ uri: video }}
          style={{ width: 350, height: 240, borderRadius: 12, marginTop: 12, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          allowsInlineMediaPlayback
        />
      ) : (
        <TouchableOpacity className='w-full h-60 rounded-xl relative justify-center items-center mt-3' activeOpacity={0.7} onPress={() => setPlay(true)}>
          <Image 
            source={{ uri: thumbnail }}
            className='w-full h-full rounded-xl mt-3'
            resizeMode='cover'
          />
          <Image 
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}

    </View>
  );
}

export default VideoCard;
