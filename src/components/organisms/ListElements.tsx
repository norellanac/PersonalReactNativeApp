import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';

export type ListItem = {
  id: string | number;
  title: string;
  subtitle: string;
  urlImage?: string;
  urlElement?: string;
};

export type ListElementsProps = {
  elements: ListItem[];
};

export const ListElements = (props: ListElementsProps) => {
  const renderItem = ({ item }: { item: ListItem }) => {
    return (
      <View style={styles.row}>
        <Image
          source={{
            uri:
              item.urlImage ||
              'https://cdn-icons-png.flaticon.com/128/2268/2268182.png',
          }}
          style={styles.pic}
        />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.title}</Text>
          </View>
          <View style={styles.end}>
            <Image
              style={[
                styles.icon,
                { marginLeft: 15, marginRight: 5, width: 14, height: 14 },
              ]}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/10460/10460991.png',
              }}
            />
            <Text style={styles.time}>{item.subtitle}</Text>
          </View>
        </View>
        <Pressable onPress={() => console.log('Pressed event')}>
          <Image
            style={[styles.icon, { marginRight: 50 }]}
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/128/10101/10101096.png' ||
                item.urlElement,
            }}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.elements}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 255,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#807a70',
    fontSize: 15,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
});
