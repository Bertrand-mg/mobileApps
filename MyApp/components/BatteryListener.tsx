import React, { useEffect, useState } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-toast-message';

const BatteryListener: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  const [isCharging, setIsCharging] = useState<boolean>(false);

  useEffect(() => {
    const checkBatteryStatus = async () => {
      const level = await DeviceInfo.getBatteryLevel();
      const charging = await DeviceInfo.isBatteryCharging();
      setBatteryLevel(level * 100); // Convert to percentage
      setIsCharging(charging);
    };

    const batteryLevelListener = DeviceInfo.getBatteryLevel().then(level => {
      setBatteryLevel(level * 100); // Convert to percentage
    });

    const chargingListener = DeviceInfo.isBatteryCharging().then(charging => {
      setIsCharging(charging);
    });

    const interval = setInterval(checkBatteryStatus, 5000); // Check every 5 seconds

    if (batteryLevel >= 90 && isCharging) {
      Toast.show({
        type: 'success',
        text1: 'Battery Status',
        text2: 'Battery is over 90% and still charging.',
      });
    }

    return () => clearInterval(interval);
  }, [batteryLevel, isCharging]);

  return null; // This component doesn't render anything
};

export default BatteryListener;
