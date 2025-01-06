import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { BiCodeBlock } from 'react-icons/bi';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Java Introduction',
    path: '/introduction',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnav: [
      {
        title: 'What is Java',
        path: '/introduction/what-is-java',
      },
      {
        title: 'History',
        path: '/introduction/history',
      }
    ]
  },
  {
    title: 'Java Flow Control',
    path: '/java-flow-control',
    icon: <BiCodeBlock />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subnav: [
      {
        title: 'If Statement',
        path: '/java-flow-control/if-statement',
      },
      {
        title: 'If-Else',
        path: '/java-flow-control/if-else',
      },
      {
        title: 'If-Else-If Ladder',
        path: '/java-flow-control/if-else-if',
      },
      {
        title: 'For Loop',
        path: '/java-flow-control/for-loop',
      },
      {
        title: 'While Loop',
        path: '/java-flow-control/while-loop',
      },
      {
        title: 'Do-While Loop',
        path: '/java-flow-control/do-while',
      },
      {
        title: 'Break Statement',
        path: '/java-flow-control/break',
      },
      {
        title: 'Continue Statement',
        path: '/java-flow-control/continue',
      },
      {
        title: 'Return Keyword',
        path: '/java-flow-control/return',
      }
    ]
  }
  // Add any other existing sidebar items here
]; 