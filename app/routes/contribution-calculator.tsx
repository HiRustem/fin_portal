import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Contribution Calculator' },
    { name: 'description', content: 'Contribution Calculator' },
  ];
};

export default function ContributionCalculator() {
  return <></>;
}
