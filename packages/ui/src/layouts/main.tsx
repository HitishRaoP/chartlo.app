'use client';

import { Header } from '../components/header';
import { Playground } from './playground';

export const Main = () => {
  return (
    <div className="space-y-4">
      <Header />
      <Playground />
    </div>
  );
};
