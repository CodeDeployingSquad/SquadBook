import {
  NavigationHelpers,
  NavigationHelpersContext,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/core';
import { LinkingContext } from '@react-navigation/native';
import * as React from 'react';

type NavigationObject = NavigationHelpers<ParamListBase> | NavigationProp<ParamListBase>;

type MinimalState = {
  index: number;
  routes: { name: string; params?: object; state?: MinimalState }[];
};

const getRootStateForNavigate = (
  navigation: NavigationObject,
  state: MinimalState
): MinimalState => {
  const parent = navigation.getParent();

  if (parent) {
    const parentState = parent.getState();

    return getRootStateForNavigate(parent, {
      index: 0,
      routes: [
        {
          ...parentState.routes[parentState.index],
          state,
        },
      ],
    });
  }

  return state;
};

/**
 * Build destination link for a navigate action.
 * Useful for showing anchor tags on the web for buttons that perform navigation.
 */
export function useLinkBuilder() {
  const navigation = React.useContext(NavigationHelpersContext);
  const linking = React.useContext(LinkingContext);

  const buildLink = React.useCallback(
    (name: string, params?: object) => {
      const state = navigation
        ? getRootStateForNavigate(navigation, {
            index: 0,
            routes: [{ name, params }],
          })
        : // If we couldn't find a navigation object in context, we're at root
          // So we'll construct a basic state object to use
          {
            index: 0,
            routes: [{ name, params }],
          };

      const out = linking.options!.getPathFromState(state, linking.options!.config);

      return out;
    },
    [linking, navigation]
  );

  return buildLink;
}
