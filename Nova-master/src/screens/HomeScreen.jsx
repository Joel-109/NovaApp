// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Header from '../components/Header';


const screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  const expenseData = [
    { name: 'Arriendo', population: 35, color: '#FF6B8A', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Salidas', population: 30, color: '#FFD66B', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Alimentación', population: 20, color: '#6BDBDB', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Servicios', population: 15, color: '#6B9BFF', legendFontColor: '#333', legendFontSize: 12 },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
  };

  const postgraduateProgress = 60;

  const renderDots = (count) =>
    Array(count)
      .fill(0)
      .map((_, index) => <View key={index} style={styles.dot} />);

  return (
    <View style={styles.container}>

      {/* -------------------------- */}
      {/* HEADER FIJO */}
      {/* -------------------------- */}
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} type="home" userName="Camilo Otalora" />

        <View style={styles.logoSection}>

          {/* PUNTOS */}
          <View style={styles.dotsContainer}>
            <View style={styles.dotsGrid}>
              {renderDots(850)}
            </View>
          </View>

          {/* TRIÁNGULOS */}
          <View style={styles.triangleLeft} />
          <View style={styles.triangleRight} />

          {/* LOGO */}
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* -------------------------- */}
      {/* CONTENIDO SCROLL */}
      {/* -------------------------- */}
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* CARD GASTOS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumen De Gastos</Text>
          <View style={styles.chartContainer}>
            <PieChart
              data={expenseData}
              width={screenWidth - 80}
              height={200}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              center={[10, 0]}
              absolute
            />
          </View>
        </View>

        {/* CARD POSGRADO */}
        <View style={styles.postgraduateCard}>
          <View style={styles.postgraduateHeader}>
            <View style={styles.piggyBankIcon}>
              <Text style={styles.piggyBankEmoji}>🐷</Text>
            </View>

            <View style={styles.postgraduateTextContainer}>
              <Text style={styles.postgraduateTitle}>Financiación de posgrado</Text>
            </View>

            <Text style={styles.postgraduatePercentage}>{postgraduateProgress}%</Text>
          </View>

          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${postgraduateProgress}%` }]} />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },

  // -------------------------------------
  // HEADER FIJO
  // -------------------------------------
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 100,
    backgroundColor: '#4338CA',
  },

  // Hace que el contenido empiece debajo del header fijo
  scrollContent: {
    paddingTop: 350,
    paddingBottom: 120,
  },

  logoSection: {
    height: 250,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10,
  },

  // Fondo de puntos
  dotsContainer: {
    position: 'absolute',
    width: '150%',
    height: '150%',
    top: 0,
    left: 0,
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dotsGrid: {
    width: '120%',
    height: '120%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
  },

  dot: {
    width: 5,
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.28)',
    borderRadius: 10,
    margin: 3,
  },

  // Triángulos
  triangleLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    borderBottomWidth: 250,
    borderRightWidth: 230,
    borderBottomColor: '#A855F7',
    borderRightColor: 'transparent',
    zIndex: 2,
  },

  triangleRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 0,
    height: 10,
    borderBottomWidth: 250,
    borderLeftWidth: 230,
    borderBottomColor: '#EC4899',
    borderLeftColor: 'transparent',
    zIndex: 2,
  },

  // Logo
  logo: {
    position: 'absolute',
    top: 65,
    alignSelf: 'center',
    width: 130,
    height: 130,
    zIndex: 20,
  },

  // -------------------------------------
  // CONTENIDO
  // -------------------------------------
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    top : -5,
    marginBottom: 20,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },

  chartContainer: {
    alignItems: 'center',
  },

  postgraduateCard: {
    backgroundColor: '#9B7EF5',
    borderRadius: 24,
    top: -10,
    padding: 10,
    marginBottom: 0,
    elevation: 20,
  },

  postgraduateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },

  piggyBankIcon: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  piggyBankEmoji: {
    fontSize: 32,
  },

  postgraduateTextContainer: {
    flex: 1,
  },

  postgraduateTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'italic',
  },

  postgraduatePercentage: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  progressBarContainer: {
    height: 32,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 16,
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    backgroundColor: '#6923dbff',
    borderRadius: 16,
  },
});
