import React from 'react';

import { FlatButton } from 'components';
import { i18n } from 'locale';
import { Plan, Student } from 'models';
import { StyleSheet } from 'react-native';
import { palette } from 'styles';

interface Props {
  student: Student;
}

export class CreatePlanButton extends React.PureComponent<Props> {
  createPlanForStudent = () => Plan.create(this.props.student);

  render() {
    return (
      <FlatButton
        title={i18n.t('planList:createPlan')}
        icon={{
          name: 'database-plus',
          type: 'material-community',
          color: palette.textWhite,
        }}
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={this.createPlanForStudent}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.primaryDark,
    borderRadius: 15,
  },
  title: {
    color: palette.textWhite,
  },
});
