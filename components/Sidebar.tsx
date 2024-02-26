import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import '../global.css';
import HeaderLogo from './HeaderLogo';
import { default as Navlink } from './Navlink';
import SidebarTabItem from './SidebarTabItem';
import TodoIcon from '../assets/icons/checkbox-outlined.svg';
import NotesIcon from '../assets/icons/notes-outlined.svg';
import SettingsIcon from '../assets/icons/setting-outlined.svg';
import XIcon from '../assets/icons/x.svg';

// const LINKS = ['todos', 'notes', 'settings'];

const LINKS = [
  {
    id: 1,
    label: 'TODOs',
    route: '/todos',
    Icon: TodoIcon,
  },
  {
    id: 2,
    label: 'Notes',
    route: '/notes',
    Icon: NotesIcon,
  },
  {
    id: 3,
    label: 'Settings',
    route: '/settings',
    Icon: SettingsIcon,
  },
];

export default function Sidebar() {
  return (
    <View className="w-20 xl:w-[244px]">
      <View className="xl:w-[244px] fixed h-full items-stretch flex border-r bg-black border-r-[#30363d] min-w-20 pt-2 px-3 pb-5 xl:items-start">
        <View className="z-[3] flex flex-1 flex-col h-full justify-between items-center xl:items-stretch">
          <HeaderLogo />
          <View className="gap-3 flex flex-1 flex-col">
            {LINKS.map((e) => (
              <SidebarTabItem id={e.id} label={e.label} Icon={e.Icon} route={e.route} />
            ))}
          </View>
          <View>
            <SidebarTabItem
              id={4}
              label="Follow"
              Icon={XIcon}
              route="https://x.com/bettercallgopal"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
