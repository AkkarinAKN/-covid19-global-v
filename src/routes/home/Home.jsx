import React from 'react';
import { Cards, CountryPicker, Chart } from '../../components';
import { fetchData } from '../../api/index';
import styles from '../../App.module.css';

class Home extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default Home;