import { View, StyleSheet, SafeAreaView, FlatList, Text, Image, RefreshControl} from "react-native";
import { useState } from "react";

interface Props {
  title: string;
  text: string;
  logo: string;
}

function RenderCard ({ title, text, logo }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}><Text style={{ fontWeight: "bold" }}>Опыт изучения: </Text>{text}</Text>
      <Image style={styles.logo} source={{ uri: logo}}/>
    </View>
  );
};

const DATA = [
  {
    id: '1',
    title: 'JavaScript',
    text: '3 года изучения.',
    logo: 'https://img.icons8.com/?size=50&id=108784&format=png',
  },
  {
    id: '2',
    title: 'Java',
    text: '2 года изучения.',
    logo: 'https://img.icons8.com/?size=50&id=13679&format=png',
  },
  {
    id: '3',
    title: 'Kotlin',
    text: '1 год изучения.',
    logo: 'https://img.icons8.com/?size=50&id=pW9tHQnl55j4&format=png',
  },
  {
    id: '4',
    title: 'C++',
    text: 'В планах на изучение.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png',
  },
  {
    id: '5',
    title: 'Clojure',
    text: 'В планах на изучение.',
    logo: 'https://clojure.org/images/clojure-logo-120b.png',
  },
]

export default function Index() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <RenderCard title={item.title} text={item.text} logo={item.logo}/>}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderColor: "blue",
  },

  title: {
    fontSize: 28,
  },

  text: {
    fontSize: 15,
  },

  logo: {
    width: 75,
    height: 75,
  }
});
