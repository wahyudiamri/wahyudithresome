import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Profile = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.navigate('Beranda');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profil Kami</Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Visi:</Text>{'\n'}
        Menjadi platform pemesanan paket internet terdepan yang memberikan pengalaman terbaik bagi para pengguna.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Misi:</Text>{'\n'}
        1. Memberikan layanan pemesanan paket internet yang mudah, cepat, dan andal.{'\n'}
        2. Menyediakan berbagai pilihan paket dengan promo yang menarik bagi para pengguna.{'\n'}
        3. Memastikan kepuasan pelanggan dengan layanan yang berkualitas tinggi.
      </Text>
      <Text style={[styles.text, styles.history]}>
        <Text style={styles.boldText}>Riwayat:</Text>{'\n'}
        Didirikan pada tahun 2008, kami telah melayani ribuan pelanggan dan terus berkembang menjadi salah satu platform pemesanan paket internet terkemuka di Indonesia.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Kembali ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  history: {
    fontStyle: 'italic',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
