import { ComponentOne, ComponentTwo, ComponentThree } from '@/components/ComponentOneTwoThree';

const Home = () => {
  return (
    <div className="p-10">
      <ComponentOne />
      <ComponentOne />
      <ComponentTwo />
      <ComponentTwo />
      <ComponentThree />
    </div>
  );
};

export default Home;