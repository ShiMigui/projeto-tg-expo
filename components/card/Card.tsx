import type { ReactNode } from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type CardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  scroll?: boolean;
};

export default function Card({ children, style, scroll = false }: CardProps) {
  if (scroll) {
    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={[styles.card, styles.scrollContent, style]}
      >
        {children}
      </ScrollView>
    );
  }

  return <View style={[styles.card, styles.fill, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  fill: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
