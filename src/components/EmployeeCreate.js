import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { connect } from 'react-redux';

class EmployeeCreate extends Component {

    onButtonPress(){
        const { name, phone, shift} = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Sunday' });
    }
    
    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Name" placeholder="John Doe" value={this.props.name} onChangeText={ value =>   this.props.employeeUpdate({prop: 'name', value })  }/>
                </CardSection>

                <CardSection>
                    <Input label="Phone" placeholder="555-555-5555" value={this.props.phone} onChangeText={ value =>  this.props.employeeUpdate({prop: 'phone', value })  }/>
                </CardSection>

                <CardSection >
                <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker style={styles.pickerStyle}
                    selectedValue={this.props.shift} 
                    onValueChange={ value => this.props.employeeUpdate({ prop: 'shift', value }) } >
                        <Picker.Item label="Sunday"     value="Sunday" />
                        <Picker.Item label="Monday"     value="Monday" />
                        <Picker.Item label="Tuesday"    value="Tuesday" />
                        <Picker.Item label="Wednesday"  value="Wednesday" />
                        <Picker.Item label="Thursday"   value="Thursday" />
                        <Picker.Item label="Friday"     value="Friday" />
                        <Picker.Item label="Saturday"   value="Saturday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Employee</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerStyle: {
        flex: 2
    },
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        paddingTop: 10
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);