import { ScrollView, StyleSheet, Text, View } from "react-native"

export const Card = () => {
    return (
        <View style={styles.card}>

            <View>
                <Text style={styles.titulo}>CEP: </Text>
                <Text style={styles.valor}>Dado 1:</Text>
            </View>

            <View>
                <Text style={styles.titulo}>Logradouro: </Text>
                <Text style={styles.valor}>Dado 2:</Text>
            </View>

            <View>
                <Text style={styles.titulo}>Bairro: </Text>
                <Text style={styles.valor}>Dado 3:</Text>
            </View>

            <View>
                <Text style={styles.titulo}>UF: </Text>
                <Text style={styles.valor}>Dado 4:</Text>
            </View>

            <View>
                <Text style={styles.titulo}>Estado: </Text>
                <Text style={styles.valor}>Dado 5:</Text>
            </View>

            <View>
                <Text style={styles.titulo}>Região: </Text>
                <Text style={styles.valor}>Dado 6:</Text>
            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        // backgroundColor: "#eeeeeeff",
        width: '70%',
        padding: 20,
        minHeight: '40%',
        // shadowColor: "rgba(0, 0, 0, 0.6)",
        // shadowOffset: {width: 0, height: 2},
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: 7,
        gap: 20,
        marginBottom: 120       
    },

    titulo: {
        fontWeight: 600
    },

    valor: {

    }
})