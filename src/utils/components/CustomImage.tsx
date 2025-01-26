import {
  Image,
  ImageProps,
  Pressable,
  StyleSheet,
  View,
  Modal,
  Text,
} from 'react-native';
import React, {useState} from 'react';

interface ImagePropsCustom extends ImageProps {
  showFull?: boolean;
}
const CustomImage: React.FC<ImagePropsCustom> = ({
  source,
  width = 100,
  height = 100,
  borderRadius = 8,
  style = {},
  resizeMode = 'cover',
  alt = '',
  showFull = true,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <View>
      <Pressable onPress={openModal}>
        <Image
          source={source}
          style={[styles.image, {width, height, borderRadius}, style]}
          resizeMode={resizeMode}
          accessibilityLabel={alt}
        />
      </Pressable>
      <Modal visible={isModalVisible && showFull} transparent={true}>
        <View style={styles.modalContainer}>
          <Pressable onPress={closeModal} style={styles.closeArea} />
          <Pressable onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </Pressable>
          <View style={styles.fullScreenContainer}>
            <Image source={source} resizeMode="contain" style={styles.fullScreen} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#e0e0e0',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeArea: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  fullScreenContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullScreen: {
    width: '100%',
    height: '100%',
  },
});