import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tiket = () => {
    const navigation = useNavigation();
    const [tiket, setTiket] = useState({
        nama: '',
        harga: '',
        jumlah: 1,
        total: 0
    });

    const daftarPaketInternet = [
        { id: 1, nama: 'Paket Internet 1GB', harga: 25000, promo: true },
        { id: 2, nama: 'Paket Internet 2GB', harga: 35000, promo: false },
        { id: 3, nama: 'Paket Internet 5GB', harga: 50000, promo: true },
        { id: 4, nama: 'Paket Internet Unlimited', harga: 75000, promo: true },
        { id: 5, nama: 'Paket Internet Super', harga: 100000, promo: false },
    ];

    useEffect(() => {
        if (daftarPaketInternet.length > 0) {
            const paketPertama = daftarPaketInternet[0];
            setTiket({ ...tiket, nama: paketPertama.nama, harga: paketPertama.harga.toString() });
        }
    }, []);

    const hitungTotal = () => {
        const total = tiket.harga * tiket.jumlah;
        setTiket({ ...tiket, total: total });
    };

    const pesanSekarang = () => {
        const { nama, jumlah, total } = tiket;
        if (nama && jumlah > 0 && total > 0) {
            alert(`Pembelian ${nama} (${jumlah} paket) Anda Berhasil di Pesan!\nTotal Harga: Rp ${total}`);
        } else {
            alert("Silakan lengkapi pesanan Anda terlebih dahulu.");
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.paketItem}
            onPress={() => setTiket({ ...tiket, nama: item.nama, harga: item.harga.toString() })}
        >
            <Text style={styles.paketText}>{item.nama}</Text>
            <Text style={styles.paketText}>Rp {item.harga}</Text>
            {item.promo && <Text style={styles.promoText}>Promo!</Text>}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pemesanan Paket Internet</Text>
            <FlatList
                data={daftarPaketInternet}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                style={styles.list}
            />
            {tiket.nama ? (
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Harga Paket:</Text>
                    <TextInput
                        style={styles.input}
                        value={tiket.harga}
                        keyboardType="numeric"
                        onChangeText={(text) => setTiket({ ...tiket, harga: text })}
                        editable={false}
                    />
                    <Text style={styles.label}>Jumlah Paket:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Masukkan jumlah paket"
                        keyboardType="numeric"
                        onChangeText={(text) => setTiket({ ...tiket, jumlah: parseInt(text) })}
                    />
                </View>
            ) : null}
            <TouchableOpacity
                style={styles.button}
                onPress={hitungTotal}>
                <Text style={styles.buttonText}>Hitung Total</Text>
            </TouchableOpacity>
            <Text style={styles.total}>Total Harga: Rp {tiket.total}</Text>
            <TouchableOpacity
                style={styles.pesanButton}
                onPress={pesanSekarang}>
                <Text style={styles.pesanButtonText}>Pesan Sekarang</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.berandaButton}
                onPress={() => navigation.navigate('home')}>
                <Text style={styles.berandaButtonText}>Kembali ke home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Tiket;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
    list: {
        marginBottom: 20,
        width: '100%',
    },
    flatListContent: {
        alignItems: 'flex-start',
        paddingVertical: 10,
    },
    paketItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    paketText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    promoText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
    },
    infoContainer: {
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: 'blue',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black', 
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff', 
        color: '#333' 
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
    total: {
        marginTop: 20,
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
    },
    pesanButton: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        elevation: 3,
    },
    pesanButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    berandaButton: {
        backgroundColor: 'red',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        elevation: 3,
    },
    berandaButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
