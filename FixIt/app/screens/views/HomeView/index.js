import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {calcScale} from '../../utils/dimension';
import FBSearchBar from './searchBar';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <FBSearchBar navigation={this.props.navigation} />
        <Text>Home View</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({});
