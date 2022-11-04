import { Spacing } from 'app/constants';
import { Flex } from 'atomic/atm.flex';
import { Shimmer } from 'atomic/atm.shimmer';
import { Space } from 'atomic/atm.space';
import { WordBoxShimmer } from 'atomic/mol.word-box/word-box.shimmer';
import React from 'react';

export const WordInfosShimmer = () => {
  return (
    <Flex flex={1} flexDirection='column' position='relative'>
      <WordBoxShimmer />

      <Space size={Spacing.Size3X} />

      <Flex alignItems='center' gap={Spacing.Size4X}>
        <Shimmer width={Spacing.Size10X} height={Spacing.Size10X} />

        <Shimmer flex height={Spacing.Size3X} />
      </Flex>

      <Space size={Spacing.Size3X} />

      <Flex gap={Spacing.Size2X}>
        <Shimmer flex height={Spacing.Size10X} />
        <Shimmer flex height={Spacing.Size10X} />
      </Flex>

      <Space size={Spacing.Size2X} />

      <Shimmer width='60%' height={Spacing.Size7X} />

      <Space size={Spacing.Size2X} />

      <Flex.Item gap={Spacing.Size4X} flexDirection='column'>
        <Flex gap={Spacing.Size1X} flexDirection='column'>
          <Shimmer width='40%' height={Spacing.Size5X} />
          <Shimmer height={Spacing.Size4X} />
          <Shimmer height={Spacing.Size4X} />
        </Flex>

        <Flex gap={Spacing.Size1X} flexDirection='column'>
          <Shimmer width='40%' height={Spacing.Size5X} />
          <Shimmer height={Spacing.Size4X} />
          <Shimmer height={Spacing.Size4X} />
        </Flex>
      </Flex.Item>
    </Flex>
  );
};
