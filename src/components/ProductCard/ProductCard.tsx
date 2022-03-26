import { ReactNode } from 'react';
import Box from '../Box/Box';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import styles from './ProductCard.module.css';

type Props = {
  image: ReactNode;
  description: string;
  price: string;
  productColor: string;
  title?: string;
};

export default function ProductCard({
  image,
  description,
  title,
  price,
  productColor,
}: Props) {
  return (
    <Box
      padding={{ inline: 'spaceLg', block: 'spaceLg' }}
      background="lightGray"
    >
      <div className={styles['image-container']}>{image}</div>
      {title && (
        <Heading type="h2" as="h3">
          {title}
        </Heading>
      )}
      <Text color="secondary">{description}</Text>
      <Text>
        {price} | {productColor}
      </Text>
    </Box>
  );
}
