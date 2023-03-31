import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
import styles from "./welcome.style";

const JOB_TYPES = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ seatchTerm, setSearchTerm, handleClick }) => {
  const [activeJobType, setActiveJobType] = useState(JOB_TYPES[0]);
  const router = useRouter();

  const onSelectJobType = (item) => {
    setActiveJobType(item);
    router.push(`/search/${item}`);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Evgeniy!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={seatchTerm}
            onChangeText={(t) => setSearchTerm(t)}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JOB_TYPES}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => onSelectJobType(item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
