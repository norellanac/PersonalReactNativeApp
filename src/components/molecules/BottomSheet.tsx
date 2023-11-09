import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const BottomSheet = ({ children, onDismiss }) => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const [isVisibleModal, setIsVisibleModal] = useState(true);

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const handleDismiss = () => (
    closeAnim.start(onDismiss), setIsVisibleModal(false)
  );

  useEffect(() => {
    resetPositionAnim.start();
  }, [resetPositionAnim]);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        }
        return resetPositionAnim.start();
      },
    }),
  ).current;

  return (
    <Modal
      animated
      animationType="fade"
      visible={isVisibleModal}
      transparent
      onRequestClose={handleDismiss}>
      <View style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.container,
            transform: [{ translateY: translateY }],
          }}
          {...panResponders.panHandlers}>
          <View style={styles.sliderIndicatorRow}>
            <View style={styles.sliderIndicator} />
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

BottomSheet.propTypes = {
  onDismiss: PropTypes.func,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#b3b1af',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    minHeight: 200,
  },
  sliderIndicatorRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIndicator: {
    backgroundColor: '#CECECE',
    height: 4,
    width: 45,
  },
});
export default BottomSheet;
