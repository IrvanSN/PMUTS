import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {PrimaryButton} from "../../components";

class Home extends Component {
  render() {
    return (
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={{uri: 'https://ypt.or.id/wp-content/uploads/2019/01/Logo-Primer-Utama-ITTelkom-Surabaya-White-300x300.png'}} />
          </View>
          <View style={styles.biography}>
            <Image style={styles.biographyAvatar} source={{uri: 'https://avatars.githubusercontent.com/u/30742772?v=4'}} />
            <View style={styles.biographyTextWrapper}>
              <Text style={styles.biographyText}>Irvan Surya Nugraha</Text>
              <Text style={styles.biographyText}>1203210007</Text>
              <Text style={styles.biographyText}>INFORMATIKA</Text>
              <Text style={styles.biographyText}>Fakultas Teknologi Informasi dan Bisnis</Text>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton text="Lihat Berita Terbaru" onPress={() => this.props.navigation.navigate('NewsLists')} />
          </View>
        </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center'
  },
  logoImage: {
    width: 200,
    height: 200
  },
  biography: {
    borderBottomWidth: 1,
    paddingVertical: 50,
    width: '100%',
    alignItems: 'center'
  },
  biographyAvatar: {
    width: 130,
    height: 130,
    borderRadius: 65
  },
  biographyTextWrapper: {
    marginTop: 15,
    alignItems: 'center'
  },
  biographyText: {
    fontSize: 20,
    fontFamily: 'Roboto'
  },
  buttonWrapper: {
    paddingVertical: 50,
    width: '100%',
    alignItems: 'center'
  },
})
