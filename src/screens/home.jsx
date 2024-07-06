import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions, Linking } from 'react-native';

const Tiket = () => {
    const [tiket, setTiket] = useState({
        nama: '',
        harga: 0, // Initialize harga as a number
        jumlah: 1,
        total: 0
    });

    const daftarPaketInternet = [
        { id: 1, nama: 'Paket Internet 1GB', harga: 25000 },
        { id: 2, nama: 'Paket Internet 2GB', harga: 35000 },
        { id: 3, nama: 'Paket Internet 5GB', harga: 50000 },
        { id: 4, nama: 'Paket Internet Unlimited', harga: 75000 },
        { id: 5, nama: 'Paket Internet Super', harga: 100000 },
    ];

    useEffect(() => {
        if (daftarPaketInternet.length > 0) {
            const paketPertama = daftarPaketInternet[0];
            setTiket({ ...tiket, nama: paketPertama.nama, harga: paketPertama.harga });
        }
    }, []);

    const hitungTotal = () => {
        const total = tiket.harga * tiket.jumlah;
        setTiket({ ...tiket, total: total });
    };

    const pesanSekarang = () => {
        const { nama, jumlah, total } = tiket;
        if (nama && jumlah > 0 && total > 0) {
            // Format the message for WhatsApp
            const message = `Pembelian ${nama} (${jumlah} paket) berhasil!\nTotal Harga: Rp ${total}`;

            // Call function to open WhatsApp with specified number and message
            hubungiWhatsApp('6287871493950', message);
        } else {
            alert("Silakan lengkapi pesanan Anda terlebih dahulu.");
        }
    };

    const hubungiWhatsApp = (phoneNumber, message) => {
        const messageText = encodeURIComponent(message);
        const whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${messageText}`;

        Linking.openURL(whatsappURL)
            .then(() => console.log("WhatsApp opened"))
            .catch(err => console.error("Error opening WhatsApp: ", err));
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.itemContainer, tiket.nama === item.nama && styles.selectedItem]}
            onPress={() => setTiket({ ...tiket, nama: item.nama, harga: item.harga })}
        >
            <Text style={styles.itemText}>{item.nama}</Text>
            <Text style={styles.itemText}>Rp {item.harga}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Pembelian Kartu Internet</Text>
            <View style={styles.flatListContainer}>
                {daftarPaketInternet.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        style={[styles.itemContainer, tiket.nama === item.nama && styles.selectedItem]}
                        onPress={() => setTiket({ ...tiket, nama: item.nama, harga: item.harga })}
                    >
                        <Text style={styles.itemText}>{item.nama}</Text>
                        <Text style={styles.itemText}>Rp {item.harga}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Harga Paket:</Text>
                <TextInput
                    style={[styles.input, { color: 'black' }]}
                    value={`Rp ${tiket.harga}`} // Display harga with currency symbol
                    keyboardType="numeric"
                    editable={false} // Price should not be editable
                />
                <Text style={styles.label}>Jumlah Paket:</Text>
                <TextInput
                    style={[styles.input, { color: 'black' }]}
                    placeholder="Masukkan jumlah paket"
                    keyboardType="numeric"
                    onChangeText={(text) => setTiket({ ...tiket, jumlah: parseInt(text) })}
                />
            </View>
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
        </ScrollView>
    );
}

export default Tiket;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    flatListContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 5,
        width: Dimensions.get('window').width / 2.5, // Adjusted for smaller screens
    },
    itemText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectedItem: {
        backgroundColor: 'blue',
    },
    infoContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: 'blue',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
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
});
