import React, { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const ConnectivityListener: React.FC = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const message = state.isConnected
        ? 'You are online'
        : 'You are offline';
      Toast.show({
        type: state.isConnected ? 'success' : 'error',
        text1: 'Network Status',
        text2: message,
      });
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  return null; // This component doesn't render anything
};

export default ConnectivityListener;
