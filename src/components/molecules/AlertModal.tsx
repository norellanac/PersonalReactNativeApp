import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

interface AlertModalProps {
  visible: boolean;
  title: string;
  body: string;
  positiveButtonText: string | null;
  negativeButtonText: string | null;
  onPositiveAction: () => void | undefined;
  onNegativeAction: () => void | undefined;
}

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  title,
  body,
  positiveButtonText,
  negativeButtonText,
  onPositiveAction,
  onNegativeAction,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
          <View style={styles.buttonContainer}>
            {onPositiveAction && (
              <TouchableOpacity
                style={styles.positiveButton}
                onPress={() => {
                  onPositiveAction();
                }}>
                <Text style={styles.buttonText}>{positiveButtonText}</Text>
              </TouchableOpacity>
            )}
            {onNegativeAction && (
              <TouchableOpacity
                style={styles.negativeButton}
                onPress={() => {
                  onNegativeAction();
                }}>
                <Text style={styles.buttonText}>{negativeButtonText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#21201e',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  positiveButton: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  negativeButton: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AlertModal;
