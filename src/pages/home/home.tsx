import { Cards } from '@/shared/ui/cards';

const paths = [
  { name: 'css', isAble: true },
  { name: 'js', isAble: true },
  { name: '404', isAble: false },
];

export const Home = () => {
  return <Cards paths={paths} />;
};
