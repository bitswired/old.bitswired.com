import { Story } from '@storybook/react';
import React from 'react';

import { Skeleton, SkeletonProps } from '.';

export default {
  title: 'Skeleton',
  component: Skeleton
  // argTypes: {
  //   size: {
  //     control: {
  //       type: 'radio',
  //       options: ['sm', 'md', 'lg']
  //     }
  //   }
  // }
};

const Template: Story<SkeletonProps> = (arguments_) => <Skeleton {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  height: '400px'
};

export const LoadAfter2Seconds = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <Skeleton isLoaded={isLoaded} height="200px">
      Text
    </Skeleton>
  );
};
