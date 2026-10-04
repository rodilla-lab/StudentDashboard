import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StatCard from '../../components/StatCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.headerSection}>
          <Text style={styles.greeting}>ACADEMIC OVERVIEW</Text>

          <Text style={styles.header}>Student Dashboard</Text>

          <Text style={styles.subtitle}>
            Keep track of your academic progress and daily tasks.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Statistics</Text>

          <Text style={styles.sectionSubtitle}>CURRENT OVERVIEW</Text>
        </View>

        <View style={styles.cards}>
          <StatCard
            title="Total Students"
            value="1,240"
            bgColor="#151515"
            emoji="👨‍🎓"
          />

          <StatCard
            title="Attendance"
            value="94%"
            bgColor="#1C1C1C"
            emoji="📅"
          />

          <StatCard
            title="Assignments"
            value="18"
            bgColor="#222222"
            emoji="📚"
          />

          <StatCard
            title="Pending Tasks"
            value="5"
            bgColor="#111111"
            emoji="⏳"
          />
        </View>

        <View style={styles.footerCard}>
          <View style={styles.footerIcon}>
            <Text style={styles.footerIconText}>✓</Text>
          </View>

          <View style={styles.footerTextContainer}>
            <Text style={styles.footerTitle}>Stay on track</Text>

            <Text style={styles.footerText}>
              Keep checking your tasks and attendance regularly.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 35,
  },

  headerSection: {
    marginBottom: 28,
  },

  greeting: {
    fontSize: 11,
    fontWeight: '800',
    color: '#C5A96A',
    letterSpacing: 2,
    marginBottom: 8,
  },

  header: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#9A9A9A',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#F5F5F5',
  },

  sectionSubtitle: {
    fontSize: 10,
    color: '#777777',
    fontWeight: '700',
    letterSpacing: 1,
  },

  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 17,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#303030',
  },

  footerIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#242019',
    borderWidth: 1,
    borderColor: '#6D5B36',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  footerIconText: {
    color: '#C5A96A',
    fontSize: 21,
    fontWeight: '900',
  },

  footerTextContainer: {
    flex: 1,
  },

  footerTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#F5F5F5',
    marginBottom: 3,
  },

  footerText: {
    fontSize: 11,
    lineHeight: 17,
    color: '#858585',
  },
});