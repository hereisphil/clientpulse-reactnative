import { Text } from "react-native";
import styles from "../../styles/appstyles";

type ParagraphProps = {
  children: string;
  color?: string;
};

export default function ParagraphText({ children, color }: ParagraphProps) {
  return (
    <Text style={[styles.paragraphText, color && { color: `${color}` }]}>
      {children}
    </Text>
  );
}
