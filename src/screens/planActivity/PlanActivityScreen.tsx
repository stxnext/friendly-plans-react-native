import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { i18n } from 'locale';
import { Plan } from 'models';
import { FullScreenTemplate } from '../../components';
import PlanForm from './PlanForm';

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  render() {
    return (
      <FullScreenTemplate darkBackground>
        <PlanForm />
      </FullScreenTemplate>
    );
  }
}
