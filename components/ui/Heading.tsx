import { Text } from "react-native";
import styles from "../../styles/appstyles";

type HeadingProps = {
  children: string;
  level?: 1 | 2 | 3;
  color?: string;
};

export default function Heading({ children, level, color }: HeadingProps) {
  return (
    <Text
      accessibilityRole="header"
      style={[
        styles.heading,
        level === 1 && { fontSize: 40 },
        level === 2 && { fontSize: 36 },
        level === 3 && { fontSize: 32 },
        color && { color: `${color}` },
      ]}
    >
      {children}
    </Text>
  );
}
